document.addEventListener('DOMContentLoaded', () => {

  let sidebarClbr = document.getElementById ("sidebar-caliber");
  let table = document.getElementById("ammo-table");
  let tableTr = document.querySelectorAll('#ammo-table tr');
  let armor = document.querySelector('.armor');
  let armorClassValue = checkArmorClass();
  let calibers_value = [];

  // Добавление для каждой строки дата атрибута с указание калибра.
  for (let i = 1; i < tableTr.length; ++i) {
    calibers_value[i] = tableTr[i].getElementsByTagName("td")[0].innerHTML;
    table.getElementsByTagName("tr")[i].setAttribute('data-caliber', calibers_value[i].replace(/\s+/g, '')); // из значения калибра убираем пробелы
  };

  // убираем повторяющиеся названия
  function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) { result.push(str); }
    }
    return result;
  }

  // добавляем список калибров в сайдбар
  function crCheckBox() {
    calibers_value = unique(calibers_value);
    for (let i = 1; i < calibers_value.length; ++i) {
      let inp = document.createElement('input');
      let lbl = document.createElement('label');
      inp.type = 'checkbox';
      lbl.setAttribute('data-caliber', calibers_value[i].replace(/\s+/g, ''));
      lbl.appendChild(inp);
      lbl.appendChild(document.createTextNode(calibers_value[i]));
      sidebarClbr.appendChild(lbl);
    }
  }
  crCheckBox();

  // Показывает или скрывает патроны в зависимости от выбранной категории.
  function tableGeneration() {
    let labels = sidebarClbr.querySelectorAll('label');

    labels.forEach( el => {
      if (el.getElementsByTagName("input")[0].checked) {
        for (let ww = 0; ww < tableTr.length; ww++) {
          if (el.getAttribute('data-caliber') == tableTr[ww].getAttribute('data-caliber')) {
            tableTr[ww].classList.add("show");
            tableTr[ww].classList.remove("hidden");
          }
        }
      } else {
        for (dd = 0; dd < tableTr.length; dd++) {
          if (el.getAttribute('data-caliber') == tableTr[dd].getAttribute('data-caliber')) {
            tableTr[dd].classList.add("hidden");
            tableTr[dd].classList.remove("show");
          }
        }
      }
    });

    tableTr.forEach(el => {
      if ( el.children[3].innerText >= (+armorClassValue)*10 && el.classList.contains("show") || el.classList.contains("ammo__table-header")) {
        el.classList.add("show");
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
        el.classList.remove("show");
      }
    });
  }

  // Отвечает за обновление всех необходимых компонентов
  function updateTable() {
    tableGeneration();
    zebra();
  }

  sidebarClbr.addEventListener('click', updateTable);
  updateTable();

  armor.addEventListener('change', (e) => {
    armorClassValue = e.target.getAttribute('data-armor-class');
    updateTable();
  });

  /*** вешает событие которое выбирает или снимает выбор у всех пунктов ***/
  caliberAll.addEventListener('click', eventSelectAllWords);
  let сlbrInput = sidebarClbr.querySelectorAll('input');
  function eventSelectAllWords(){
    if ( caliberAll.classList.contains('btn-active') ) {
      for (let i = 0; i < сlbrInput.length; i++) {
        сlbrInput[i].checked = "";
      }
      caliberAll.classList.remove('btn-active');
    } else {
      for (let i = 0; i < сlbrInput.length; i++) {
        сlbrInput[i].checked = "checked";
      }
      caliberAll.classList.add('btn-active');
    }
  }

  function zebra() {
    let row = document.querySelectorAll('tr[data-caliber]');
    let i = 0;
    row.forEach(e => e.classList.remove("light-row"));
    row.forEach(e => {
      console.log('!!');
      if (e.classList.contains("show") && i % 2 == 0 ) {
        e.classList.add("light-row");
        i++;
      } else if (e.classList.contains("show") && i % 2 != 0 ) {
        i++;
      }
    });
  }

  /* выбор класса брони работает, осталось только интегрировать в общую систему!!! */
  function checkArmorClass() {
    let armorClass = document.getElementsByName('armor-class');
    for (let i = 0; i < armorClass.length; i++) {
      if (armorClass[i].checked) {
        return armorClass[i].getAttribute('data-armor-class');
      }
    }
  }


  /* Сортировка */
  document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
  const getSort = ({ target }) => {
    const order = (target.dataset.order = -(target.dataset.order || -1));
    const index = [...target.parentNode.cells].indexOf(target);
    const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
    const comparator = (index, order) => (a, b) => order * collator.compare(
        a.children[index].innerHTML,
        b.children[index].innerHTML
    );
    
    for(const tBody of target.closest('table').tBodies)
        tBody.append(...[...tBody.rows].sort(comparator(index, order)));

    for(const cell of target.parentNode.cells)
        cell.classList.toggle('sorted', cell === target);
    zebra();
  };
  
});