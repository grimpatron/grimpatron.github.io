let level3 = (function (){
  let outputQuestion = document.getElementById("output-question");
  let outputAnswer = document.getElementById("output-answer");
  let selectBlock = document.querySelector("#select-block");
  let selectAllVerbs = document.getElementById("select-all-verbs");
  let checkListVerbs = document.getElementsByClassName("check-icon");
  let binaryVerbs = [];
  let curVerbEng = "";
  let curVerbRus = "";
  let curPronEng = "";
  let curPronRus = "";
  let curToDoRusQ = "";
  let curToDoRusN = "";
  let curSign = "";
  let listVerbEng = [];
  let listVerbRus = [];
  let listPastSimple = [];
  let arrPastSimple = []; // вторая форма нерпавильных глаголав
  let arrPronEng = ["I", "you", "we", "they", "he", "she"];   // pronouns English
  let arrPronRus = ["я", "ты", "мы", "они", "он", "она"];     // pronouns Russian
  let arrToDoRus = ["буду","будешь","будем","будут","будет","будет"];
  let arrVerbEng = "here there in_Minsk with_me".split(' ');
  let arrVerbRus = "здесь там в_Минске со_мной".split(' ');
  let data = JSON.parse( localStorage.polyglot || '{}');
  let stringQestion = "";
  let stringAnswer = "";
  let order = "";
  let rndMixValue = null;
  let modalOrderBtns = document.getElementsByClassName("modal-order-btn");

  let arrToBe = ["", "will", "be", "will be", "will not be", "am", "is", "are", "am not", "is not", "are not", "was", "were", "was not", "were not"]; /* lvl3 */         // глагол быть
  let curToBe1 = ""; /* lvl3 */
  let curToBe2 = ""; /* lvl3 */

  arrVerbEng.forEach(function callback(curValue, index, array) {
    if ( curValue.includes('(') ) {
      arrPastSimple.push( curValue.substring( curValue.indexOf('(') + 1, curValue.length - 1) );
      array[index] = curValue.substring( 0, curValue.indexOf('(') );
    } else {
      arrPastSimple.push("");
    }
  });

  // Выводим все глаголы в виде списка в боковой панели.
  for (let i = 0; i < arrVerbEng.length; i++) {
    let eLabel = document.createElement("label");
    let eInput = document.createElement("input");
    let nText = document.createTextNode (arrVerbEng[i]);
    eInput.className = "check-icon";
    eInput.setAttribute("type", "checkbox");
    eLabel.className = "label-word";
    eLabel.appendChild(eInput);
    eLabel.appendChild(nText);
    selectBlock.appendChild(eLabel);
  }

  // Отмечаются выбранные слова (сохранённые в localStorage)
  if ( data.words_lvl3.length == arrVerbEng.length ) {
    binaryVerbs = data.words_lvl3;
    for (let i = 0; i <= binaryVerbs.length; i++) {
      if (binaryVerbs[i] == 1) {
        checkListVerbs[i].checked = "checked";
      }
    }
  } else {
    binaryVerbs = new Array(arrVerbEng.length);
    checkListVerbs[0].setAttribute("checked", "checked"); // выбор первого слова, если нет сохранённых
  }
  writeSV();

  // вешает события при котором будет пересобираться массив
  selectBlock.addEventListener("click", writeSV, false);

  // вешает событие которое выбирает или снимает выбор у всех глаголов;
  selectAllVerbs.addEventListener('click', function() {
    if (selectAllVerbs.checked) {
      for (let i = 0; i < checkListVerbs.length; i++) {
        checkListVerbs[i].checked = "checked";
      }
    } else if (selectAllVerbs.checked != "checked") {
      for (let i = 0; i < checkListVerbs.length; i++) {
        checkListVerbs[i].checked = "";
      }
    }
  });

  // Составление списков на основании выбранных глаголов.
  function writeSV() {
    listVerbEng = [];
    listVerbRus = [];
    listPastSimple = [];

    for (let i = 0; i < binaryVerbs.length; i++) {
      if (checkListVerbs[i].checked == true) {
        binaryVerbs.splice(i, 1, 1);
      } else {
        binaryVerbs.splice(i, 1, 0);
      }
    }

    for (let i = 0; i < binaryVerbs.length; i++) {
      if (binaryVerbs[i] == 1) {
        listVerbEng.push(arrVerbEng[i]);
        listVerbRus.push(arrVerbRus[i]); /* lvl3 */
        listPastSimple.push(arrPastSimple[i]);
      }
    }
    saveWords();
  }

  /* ****************************************************** */
  function blessRNG() {
    let rndX = Math.floor(Math.random() * 9); //order time and form
    let rndPron = Math.floor(Math.random() * 6); // random pronouns
    let rndVerbs = Math.floor(Math.random() * listVerbEng.length);
    step1();                                      // преверяет какой порядок выбран в данный момент.
    step2(rndX, rndPron, rndVerbs);
    console.log("Форма-"+rndX, "Местоимение-"+rndPron, "Глагол-"+rndVerbs);
  }

  function step1(){
    for (let i = 0; i < modalOrderBtns.length; i++) {
      if ( modalOrderBtns[i].classList.contains('btn-primary') ) order = modalOrderBtns[i].id;
    }
    console.log(order);
  }
  
  function step2(rndX, rndPron, rndVerbs) {
    curVerbEng = listVerbEng[rndVerbs];
    curVerbRus = listVerbRus[rndVerbs];
    curPronEng = arrPronEng[rndPron];
    curPronRus = arrPronRus[rndPron];

    switch (rndX) {
      case 0: curToBe1 = arrToBe[1]; 
              curToBe2 = arrToBe[2]; break;
      case 1: curToBe1 = arrToBe[0];
              curToBe2 = arrToBe[3]; break;
      case 2: curToBe1 = arrToBe[0];
              curToBe2 = arrToBe[4]; break;
      case 3: (rndPron == 0) ? curToBe1 = arrToBe[5] : rndPron >= 4 ? curToBe1 = arrToBe[6] : curToBe1 = arrToBe[7];
              curToBe2 = arrToBe[0]; break;
      case 4: (rndPron == 0) ? curToBe2 = arrToBe[5] : rndPron >= 4 ? curToBe2 = arrToBe[6] : curToBe2 = arrToBe[7];
              curToBe1 = arrToBe[0]; break;
      case 5: (rndPron == 0) ? curToBe2 = arrToBe[8] : rndPron >= 4 ? curToBe2 = arrToBe[9] : curToBe2 = arrToBe[10];
              curToBe1 = arrToBe[0]; break;
      case 6: (rndPron == 0 || rndPron >= 4) ? curToBe1 = arrToBe[11] : curToBe1 = arrToBe[12];
              curToBe2 = arrToBe[0]; break;
      case 7: (rndPron == 0 || rndPron >= 4) ? curToBe2 = arrToBe[11] : curToBe2 = arrToBe[12];
              curToBe1 = arrToBe[0]; break;
      case 8: (rndPron == 0 || rndPron >= 4) ? curToBe2 = arrToBe[13] : curToBe2 = arrToBe[14];
              curToBe1 = arrToBe[0]; break;
    }

    /* lvl3 */
    if (rndX == 0 || rndX == 1 || rndX == 2) {
      curToDoRusQ = arrToDoRus[rndPron];
    } else if ( rndPron == 5 && (rndX == 6 || rndX == 7 || rndX == 8) ) {
      curToDoRusQ = "была";
    } else if ( (rndPron == 0 || rndPron == 1 || rndPron == 4 ) && (rndX == 6 || rndX == 7 || rndX == 8) ) {
      curToDoRusQ = "был";
    } else if ( (rndPron == 2 || rndPron == 3) && (rndX == 6 || rndX == 7 || rndX == 8) ) {
      curToDoRusQ = "были";
    } else {
      curToDoRusQ = "";
    }

    // (rndX == 0 || rndX == 1 || rndX == 2) ? curToDoRusQ = arrToDoRus[rndPron] : (rndX == 6 || rndX == 7 || rndX == 8) ? curToDoRusQ = "был" : curToDoRusQ = ""; /* lvl3 */
    (rndX == 2 || rndX == 5 || rndX == 8 || rndX == 11) ? curToDoRusN = "не" : curToDoRusN = "";
    (rndX == 0 || rndX == 3 || rndX == 6 || rndX == 9) ? curSign = "?" : curSign = "";
  }

  // Сохранение выбранных слов
  function saveWords(){
    data.words_lvl3 = binaryVerbs;
    let jsn = JSON.stringify( data );
    localStorage.polyglot = jsn;
  }

  // next.onclick = function() {
  //   if ( plus() ) {
  //     blessRNG();
  //     // Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания
  //     outputRus.innerHTML = `${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus}${curSign}`;
  //     outputEng.innerHTML = '';
  //   } else {
  //     alert("Выберите хотя бы один глагол чтобы продолжить"); // Если ни один глагол не выбран
  //   }
  // }

  function generateString(){
    /* Проверка на наличие выбранного глагола */
    function plus() {
      for (let i = 0; i < binaryVerbs.length; i++) {
        if (binaryVerbs[i] == 1) return true;
      }
      return false
    }

    if ( plus() ) {
      blessRNG();
      // Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания
      // Eng  1)вставка 2)местоимение 3)вставка 4)глагол 5)окончание 6)знак препинания
      if (order == "eng-rus" || (order == "mix" && rndMixValue == 0)) {
        stringQestion = `${curToBe1} ${curPronEng} ${curToBe2} ${curVerbEng}${curSign}`;
        stringAnswer = `${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus}${curSign}`;
      } else if (order == "rus-eng" || (order == "mix" && rndMixValue == 1)) {
        stringQestion = `${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus}${curSign}`;
        stringAnswer = `${curToBe1} ${curPronEng} ${curToBe2} ${curVerbEng}${curSign}`;
      }       
    } else {
      alert("Выберите хотя бы один глагол чтобы продолжить"); // Если ни один глагол не выбран
    }
  }

  return {
    next: function() {
      generateString();
      outputAnswer.innerHTML = '';
      outputQuestion.innerHTML = stringQestion;
    },
    answer: function() {
      outputAnswer.innerHTML = stringAnswer;
    }
  };

})();

// она БЫЛ со мной (сделать по красоте)
// добавить код который парсит строку и заменяет все символы нижнего подчёркивания на пробел. или просто добавить больше вариантов (со мной, с тобой, с ней)