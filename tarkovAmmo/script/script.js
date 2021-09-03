document.addEventListener('DOMContentLoaded', () => {

  let positionCaliber = 0;
  let positionAmmoType = 0;
  let positionDamage = 0;
  let positionPenetration = 0;
  let positionArmorDamage = 0;
  let positionSpeed = 0;
  let positionAccuracy = 0;
  let positionRecoil = 0;

  const totalHealthPMC = 440;
  const totalHealthRaiders = 720;



  let thead = document.querySelector('#table thead');
  let tbody = document.querySelector('#table tbody');
  let tCaliber = 0;
  let tAmmo = 1;
  let tDamage = 2;
  let tPenetration = 3;
  let tDamageArmor = 4;
  let tSpeed = 5;
  let tShells = 6;
  let tAccuracy = 7;
  let tRecoil = 8;
  let tFragChance = 9;
  let tCaliberShow = true;
  let tAmmoShow = true;
  let tDamageShow = true;
  let tPenetrationShow = true;
  let tDamageArmorShow = true;
  let tSpeedShow = true;
  let tShellsShow = false;
  let tAccuracyShow = false;
  let tRecoilShow = false;
  let tFragChanceShow = false;

  let tMaxBullets = 10;    // должно определятся автоматически.
  let tMaxBulletsShow = false;

  let matrix = [['Калибр', 'Патрон', 'Урон', 'Пробитие', 'Урон броне', 'скорость м/с', 'Снаряды', 'Точность%', 'Отдача%', 'шанс фрагм.'], ['12x70mm', '5.25mm Buckshot', '37', '1', '15', '330', '8', '—', '—', '0%'], ['12x70mm', '8.5mm "Magnum" Buckshot', '50', '2', '26', '385', '8', '-15', '115', '0%'], ['12x70mm', '6.5mm "Express" Buckshot', '35', '3', '26', '430', '9', '15', '—', '0%'], ['12x70mm', '7mm Buckshot', '39', '3', '26', '415', '8', '—', '—', '0%'], ['12x70mm', 'Flechette', '25', '31', '26', '320', '8', '-10', '—', '0%'], ['12x70mm', 'RIP', '265', '2', '11', '410', '1', '80', '35', '100%'], ['12x70mm', 'SuperFormance HP Slug', '220', '5', '12', '594', '1', '170', '-15', '39%'], ['12x70mm', 'Grizzly 40 Slug', '190', '12', '48', '390', '1', '80', '20', '12%'], ['12x70mm', 'Copper Sabot Premier HP Slug', '206', '14', '46', '442', '1', '150', '10', '38%'], ['12x70mm', 'Lead Slug', '167', '15', '55', '370', '1', '120', '—', '20%'], ['12x70mm', 'Dual Sabot Slug', '85', '17', '65', '415', '2', '100', '15', '10%'], ['12x70mm', '"Poleva-3" Slug', '140', '17', '40', '410', '1', '110', '-15', '20%'], ['12x70mm', 'FTX Custom Lite Slug', '183', '20', '50', '480', '1', '135', '—', '10%'], ['12x70mm', '"Poleva-6u" Slug', '150', '20', '50', '430', '1', '115', '-10', '15%'], ['12x70mm', 'Shell With .50 BMG bullet', '197', '26', '57', '410', '1', '90', '25', '5%'], ['12x70mm', 'AP-20 Slug', '164', '37', '65', '510', '1', '125', '50', '3%'], ['20x70mm', '5.6mm Buckshot', '26', '1', '12', '340', '8', '-10', '10', '0%'], ['20x70mm', '6.2mm Buckshot', '22', '2', '13', '410', '8', '—', '—', '0%'], ['20x70mm', '7.5mm Buckshot', '25', '3', '14', '430', '8', '—', '—', '0%'], ['20x70mm', '7.3mm Buckshot', '23', '3', '13', '475', '9', '—', '15', '0%'], ['20x70mm', 'Devastator Slug', '198', '5', '13', '405', '1', '125', '30', '100%'], ['20x70mm', '"Poleva-3" Slug ', '120', '14', '35', '425', '1', '110', '-15', '20%'], ['20x70mm', 'Star Slug', '154', '16', '42', '415', '1', '130', '5', '10%'], ['20x70mm', '"Poleva-6u" slug ', '135', '17', '40', '445', '1', '110', '-10', '15%'], ['23x75mm', '"Zvezda" flashbang round', '0', '0', '0', '0', '1', '—', '20', '20%'], ['23x75mm', 'Shrapnel-25 Buckshot', '78', '10', '20', '375', '8', '20', '10', '0%'], ['23x75mm', 'Shrapnel-10 Buckshot', '87', '11', '20', '270', '8', '—', '—', '0%'], ['23x75mm', '"Barricada" Slug', '192', '39', '75', '420', '1', '-5', '25', '20%'], ['9x18mm Makarov', 'SP8 gzh', '67', '1', '2', '250', '1', '—', '—', '60%'], ['9x18mm Makarov', 'SP7 gzh', '77', '2', '5', '420', '1', '—', '—', '2%'], ['9x18mm Makarov', 'PSV', '69', '3', '5', '280', '1', '—', '—', '40%'], ['9x18mm Makarov', 'P gzh', '50', '5', '16', '302', '1', '—', '—', '25%'], ['9x18mm Makarov', 'PSO gzh', '54', '5', '13', '315', '1', '10', '—', '35%'], ['9x18mm Makarov', 'PS gs PPO', '55', '6', '16', '330', '1', '—', '—', '25%'], ['9x18mm Makarov', 'PRS gs', '58', '6', '16', '302', '1', '—', '—', '30%'], ['9x18mm Makarov', 'PPe gzh', '61', '7', '15', '297', '1', '—', '—', '35%'], ['9x18mm Makarov', 'PPT gzh', '59', '8', '22', '301', '1', '-5', '-7', '17%'], ['9x18mm Makarov', 'Pst gzh', '50', '12', '26', '298', '1', '—', '—', '20%'], ['9x18mm Makarov', 'RG028 gzh', '65', '13', '26', '330', '1', '—', '—', '2%'], ['9x18mm Makarov', 'BZhT gzh', '53', '18', '28', '325', '1', '—', '—', '17%'], ['9x18mm Makarov', 'PMM PstM gzh', '58', '24', '33', '420', '1', '—', '5', '17%'], ['9x18mm Makarov', 'PBM', '40', '28', '30', '519', '1', '—', '4', '16%'], ['7.62x25mm Tokarev', 'LRNPC', '66', '7', '27', '385', '1', '10', '-10', '35%'], ['7.62x25mm Tokarev', 'LRN', '64', '8', '28', '375', '1', '5', '-5', '35%'], ['7.62x25mm Tokarev', 'FMJ43', '60', '11', '29', '427', '1', '—', '—', '25%'], ['7.62x25mm Tokarev', 'AKBS', '58', '12', '32', '425', '1', '15', '-15', '25%'], ['7.62x25mm Tokarev', 'P gl', '58', '14', '32', '430', '1', '—', '—', '25%'], ['7.62x25mm Tokarev', 'PT gzh (Tracer)', '55', '18', '34', '415', '1', '-10', '—', '17%'], ['7.62x25mm Tokarev', 'Pst gzh', '50', '25', '36', '430', '1', '—', '—', '20%'], ['9x19mm Parabellum', 'RIP', '102', '2', '11', '381', '1', '—', '20', '100%'], ['9x19mm Parabellum', 'QuakeMaker', '85', '8', '22', '290', '1', '10', '10', '10%'], ['9x19mm Parabellum', 'PSO gzh', '59', '10', '32', '340', '1', '—', '—', '25%'], ['9x19mm Parabellum', 'Luger CCI', '70', '10', '38', '420', '1', '—', '—', '25%'], ['9x19mm Parabellum', 'T gzh', '58', '14', '33', '365', '1', '-5', '-6', '15%'], ['9x19mm Parabellum', 'Pst gzh', '54', '20', '33', '457', '1', '—', '—', '15%'], ['9x19mm Parabellum', 'AP 6.3', '52', '30', '48', '392', '1', '—', '—', '5%'], ['9x19mm Parabellum', 'PBP gzh', '52', '39', '53', '560', '1', '5', '15', '5%'], ['.45 ACP', 'RIP', '127', '3', '12', '293', '1', '—', '—', '100%'], ['.45 ACP', 'Hydra-Shok', '95', '13', '30', '274', '1', '—', '—', '50%'], ['.45 ACP', 'Lasermatch FMJ (Tracer)', '74', '19', '37', '290', '1', '5', '—', '1%'], ['.45 ACP', 'Match FMJ', '69', '23', '36', '285', '1', '—', '—', '1%'], ['.45 ACP', 'AP', '70', '36', '43', '299', '1', '-5', '7', '1%'], ['9x21mm Gyurza', 'PE gzh', '80', '15', '63', '415', '1', '—', '—', '35%'], ['9x21mm Gyurza', 'P gzh', '65', '18', '44', '413', '1', '—', '—', '30%'], ['9x21mm Gyurza', 'PS gzh', '49', '35', '46', '410', '1', '—', '—', '20%'], ['9x21mm Gyurza', 'BT gzh', '63', '39', '47', '397', '1', '-4', '-4', '20%'], ['5.7x28mm FN', 'R37.F', '98', '8', '7', '729', '1', '—', '—', '100%'], ['5.7x28mm FN', 'SS198LF', '74', '10', '15', '792', '1', '—', '—', '80%'], ['5.7x28mm FN', 'R37.X', '81', '11', '14', '724', '1', '—', '—', '70%'], ['5.7x28mm FN', 'SS197SR', '62', '20', '22', '594', '1', '—', '—', '50%'], ['5.7x28mm FN', 'L191 (Tracer)', '58', '33', '41', '716', '1', '-4', '—', '20%'], ['5.7x28mm FN', 'SB193', '54', '35', '37', '305', '1', '—', '-20', '20%'], ['5.7x28mm FN', 'SS190', '49', '37', '43', '716', '1', '—', '—', '20%'], ['4.6x30mm HK', 'Action SX', '65', '18', '39', '690', '1', '—', '—', '50%'], ['4.6x30mm HK', 'Subsonic SX', '45', '36', '46', '290', '1', '10', '-22', '20%'], ['4.6x30mm HK', 'FMJ SX', '43', '40', '41', '620', '1', '—', '—', '20%'], ['4.6x30mm HK', 'AP SX', '35', '53', '46', '680', '1', '—', '10', '10%'], ['9x39mm', 'SP5 gs', '68', '38', '52', '290', '1', '—', '—', '20%'], ['9x39mm', 'SP6 gs', '58', '46', '60', '305', '1', '—', '10', '10%'], ['9x39mm', 'SPP gs', '64', '50', '56', '310', '1', '10', '20', '20%'], ['9x39mm', 'BP gs', '60', '55', '68', '295', '1', '10', '22', '10%'], ['.366 TKM', 'Geksa', '110', '14', '38', '550', '1', '—', '—', '45%'], ['.366 TKM', 'FMJ', '98', '23', '48', '580', '1', '—', '10', '25%'], ['.366 TKM', 'Eko', '73', '30', '40', '770', '1', '-10', '-15', '20%'], ['.366 TKM', 'AP-M', '90', '42', '60', '602', '1', '-28', '35', '1%'], ['5.45x39mm', 'SP', '68', '11', '34', '873', '1', '10', '-15', '45%'], ['5.45x39mm', 'HP', '74', '11', '20', '884', '1', '—', '5', '35%'], ['5.45x39mm', 'PRS gs', '60', '14', '28', '890', '1', '—', '-5', '30%'], ['5.45x39mm', 'US gs', '65', '15', '34', '303', '1', '—', '-25', '10%'], ['5.45x39mm', 'FMJ', '54', '20', '30', '884', '1', '—', '—', '25%'], ['5.45x39mm', 'T gs (Tracer)', '57', '20', '38', '883', '1', '-5', '-5', '16%'], ['5.45x39mm', 'PS gs', '50', '25', '35', '890', '1', '—', '—', '40%'], ['5.45x39mm', 'PP gs', '46', '30', '32', '890', '1', '—', '—', '17%'], ['5.45x39mm', 'BP gs', '48', '32', '41', '890', '1', '—', '—', '16%'], ['5.45x39mm', 'BT gs (Tracer)', '44', '37', '49', '880', '1', '-2', '3', '16%'], ['5.45x39mm', 'BS gs', '40', '51', '57', '830', '1', '-3', '10', '17%'], ['5.45x39mm', 'PPBS gs "Igolnik"', '37', '62', '60', '905', '1', '—', '15', '2%'], ['5.56x45mm NATO', 'Warmageddon', '85', '3', '14', '910', '1', '10', '10', '90%'], ['5.56x45mm NATO', 'HP', '75', '9', '22', '947', '1', '—', '—', '70%'], ['5.56x45mm NATO', 'MK 255 Mod 0 (RRLP)', '60', '17', '32', '936', '1', '—', '—', '3%'], ['5.56x45mm NATO', 'MK 318 Mod 0 (SOST)', '67', '20', '35', '902', '1', '5', '—', '15%'], ['5.56x45mm NATO', 'M856 (Tracer)', '55', '23', '34', '874', '1', '-5', '-2', '33%'], ['5.56x45mm NATO', 'FMJ', '52', '24', '33', '957', '1', '10', '-5', '50%'], ['5.56x45mm NATO', 'M855', '50', '28', '37', '922', '1', '-5', '—', '40%'], ['5.56x45mm NATO', 'M856A1 (Tracer)', '51', '37', '52', '940', '1', '-2', '4', '33%'], ['5.56x45mm NATO', 'M855A1', '46', '45', '52', '945', '1', '-10', '—', '34%'], ['5.56x45mm NATO', 'M995', '40', '53', '58', '1013', '1', '—', '8', '32%'], ['5.56x45mm NATO', 'SSA AP', '36', '56', '64', '1050', '1', '-6', '6', '20%'], ['7.62x39mm', 'HP', '87', '15', '35', '754', '1', '-5', '—', '26%'], ['7.62x39mm', 'US gzh', '56', '29', '42', '300', '1', '5', '-30', '8%'], ['7.62x39mm', 'T-45M1 gzh', '62', '30', '46', '720', '1', '-4', '-6', '12%'], ['7.62x39mm', 'PS gzh', '57', '32', '52', '700', '1', '—', '—', '25%'], ['7.62x39mm', 'BP gzh', '58', '47', '63', '730', '1', '-3', '5', '12%'], ['7.62x39mm', 'MAI AP', '47', '58', '76', '875', '1', '-5', '10', '5%'], ['7.62x51mm NATO', 'Ultra Nosler', '107', '15', '20', '822', '1', '10', '-5', '70%'], ['7.62x51mm NATO', 'BCP FMJ', '88', '31', '33', '840', '1', '—', '-3', '25%'], ['7.62x51mm NATO', 'TCW SP', '60', '36', '40', '808', '1', '-8', '-5', '20%'], ['7.62x51mm NATO', 'M80', '80', '41', '66', '833', '1', '—', '—', '17%'], ['7.62x51mm NATO', 'M62 (Tracer)', '79', '44', '75', '816', '1', '-6', '-5', '14%'], ['7.62x51mm NATO', 'M61', '70', '64', '83', '849', '1', '3', '10', '13%'], ['7.62x51mm NATO', 'M993', '67', '70', '85', '910', '1', '5', '8', '13%'], ['7.62x54mmR', 'T-46M (Tracer)', '82', '41', '83', '800', '1', '-1', '-5', '18%'], ['7.62x54mmR', 'LPS gzh', '81', '42', '78', '865', '1', '—', '—', '18%'], ['7.62x54mmR', 'PS', '86', '45', '84', '875', '1', '10', '8', '8%'], ['7.62x54mmR', 'BT gzh', '78', '59', '87', '820', '1', '-2', '-4', '8%'], ['7.62x54mmR', 'SNB', '75', '62', '87', '875', '1', '—', '10', '8%'], ['7.62x54mmR', 'BS', '72', '70', '88', '785', '1', '—', '—', '8%'], ['.300 Blackout', 'AAC Blackout BCP FMJ', '60', '28', '36', '605', '1', '—', '—', '30%'], ['.300 Blackout', 'AAC Blackout AP', '55', '44', '60', '720', '1', '5', '5', '30%'], ['.338 Lapua Magnum', 'TAC-X', '196', '18', '55', '880', '1', '10', '-5', '50%'], ['.338 Lapua Magnum', 'UPZ', '142', '32', '70', '849', '1', '-5', '—', '60%'], ['.338 Lapua Magnum', 'FMJ', '122', '47', '83', '900', '1', '—', '—', '20%'], ['.338 Lapua Magnum', 'AP', '115', '79', '89', '849', '1', '—', '10', '13%'], ['12.7x55mm STs-130', 'PS12A', '165', '10', '22', '290', '1', '-15', '-12', '70%'], ['12.7x55mm STs-130', 'PS12', '115', '28', '60', '285', '1', '10', '—', '30%'], ['12.7x55mm STs-130', 'PS12B', '102', '46', '57', '300', '1', '—', '15', '30%']];


  function generateTable(){
    for (let i = 0; i < matrix.length; i++) {
      let matrixStr = matrix[i];
      let newTr = document.createElement('tr');
      if ( i == 0 ) {
        newTr.classList = "ammo__table-header";
      }

      for (let j = 0; j < matrixStr.length; j++) {
        let newTd = document.createElement('td');
        if ( i == 0 ) { newTd = document.createElement('th'); }

        if (j == tCaliber && tCaliberShow) {
          newTd.innerText = matrixStr[j];
          newTr.append(newTd);
          continue;
        } else if (j == tAmmo && tAmmoShow) {
          newTd.innerText = matrixStr[j];
          newTr.append(newTd);
          continue;
        } else if (j == tDamage && tDamageShow) {
          newTd.innerText = matrixStr[j];
          newTr.append(newTd);
          continue;
        } 
        // else if ( j == tShells ) {
        //   if (tShellsShow) {
        //     newTd.innerText = matrixStr[j];
        //     newTr.append(newTd);
        //   }
        //   continue;
        // } 
        else {
          newTd.innerText = matrixStr[j];
          newTr.append(newTd);
        }
      }

      if ( i == 0 ) {
        thead.append(newTr);
      } else {
        tbody.append(newTr);
      }
      
    }
  }
  generateTable();


  ///     CATEGORY      ///
  let checkAccuracy = document.querySelector("#checkAccuracy");
  checkAccuracy.addEventListener("click", () => {
    if (checkAccuracy.checked) {
      tAccuracyShow = true;
    } else {
      tAccuracyShow = false;
    }
    tableGeneration();
  });
  let checkRecoil = document.querySelector("#checkRecoil");
  checkRecoil.addEventListener("click", () => {
    if (checkRecoil.checked) {
      tRecoilShow = true;
    } else {
      tRecoilShow = false;
    }
    tableGeneration();
  });
  let checkFragChance = document.querySelector("#checkFragChance");
  checkFragChance.addEventListener("click", () => {
    if (checkFragChance.checked) {
      tFragChanceShow = true;
    } else {
      tFragChanceShow = false;
    }
    tableGeneration();
  });
  let checkMaxBullets = document.querySelector("#checkMaxBullets");
  checkMaxBullets.addEventListener("click", () => {
    if (checkMaxBullets.checked) {
      tMaxBulletsShow = true;
    } else {
      tMaxBulletsShow = false;
    }
    tableGeneration();
  });



  checkMaxBullets


  let sidebarClbr = document.getElementById ("caliber");
  // let table = document.getElementById("ammo-table");
  let table = document.getElementById("table");
  // let tableTr = document.querySelectorAll('#ammo-table tr');
  let tableTr = document.querySelectorAll('#table tr');
  let armor = document.querySelector('.armor');
  let armorClassValue = checkArmorClass();
  let calibers_value = [];
  
  // Добавление для каждой строки дата атрибута с указание калибра (i = 1 убирает из проверки первую строку).
  for (let i = 1; i < tableTr.length; i++) {
    calibers_value[i] = tableTr[i].getElementsByTagName("td")[0].innerHTML;
    table.getElementsByTagName("tr")[i].setAttribute('data-caliber', calibers_value[i].replace(/\s+/g, '')); // из значения калибра убираем пробелы
  };

          tableTr.forEach(tr => {
            let a = +tr.children[2].innerText;
            // console.log( !isNaN(a) );
            if ( !isNaN(a) && a > 0) {
              let newTd = document.createElement('td');
              newTd.innerText = Math.ceil( totalHealthPMC / a );
              tr.append(newTd);
            } else if (tr.classList.contains('ammo__table-header')) {
              let newTd = document.createElement('th');
              newTd.innerText = 'Макс';
              tr.append(newTd);
            } else {
              let newTd = document.createElement('td');
              newTd.innerText = 'не убъёт';
              tr.append(newTd);
            }
          });

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
      if (tShellsShow == false) {
        el.children[tShells].style.display = "none";  // Отображать колличество поражающих элементов.
      }
      if (tAccuracyShow == false) {
        el.children[tAccuracy].style.display = "none";  // Отображать точность.
      } else {
        el.children[tAccuracy].style.display = "table-cell";
      }
      if (tRecoilShow == false) {
        el.children[tRecoil].style.display = "none";  // Отображать Отдача.
      } else {
        el.children[tRecoil].style.display = "table-cell";
      }
      if (tFragChanceShow == false) {
        el.children[tFragChance].style.display = "none";  // Отображать шанс фрагментации.
      } else {
        el.children[tFragChance].style.display = "table-cell";
      }
      if (tMaxBulletsShow == false) {
        el.children[tMaxBullets].style.display = "none";  // Отображать шанс фрагментации.
      } else {
        el.children[tMaxBullets].style.display = "table-cell";
      }

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