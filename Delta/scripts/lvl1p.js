var level1p = (function (){
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
  let curToDo1 = "";
  let curToDo2 = "";
  let curToDoRusQ = "";
  let curToDoRusN = "";
  let curEnding = "";
  let curSign = "";
  let listVerbEng = [];
  let listVerbRus = [];
  let listPastSimple = [];
  let arrPastSimple = []; // вторая форма нерпавильных глаголав
  let arrPronEng = ["I", "you", "we", "they", "he", "she"];   // pronouns English
  let arrPronRus = ["я", "ты", "мы", "они", "он", "она"];     // pronouns Russian
  let arrToDo = ["", "will", "do", "does", "did", "will not", "don't", "doesn't", "didn't"]; // вспомогательное слово перед местоимением
  let arrToDoRus = ["буду","будешь","будем","будут","будет","будет"];
  let arrEnding = ["", "s", "es", "d", "ed"];
  let arrVerbEng = "love work live open close start finish see(saw) come(came) go(went) know(knew) think(thought)".split(' ');
  let arrVerbRus = "любить люблю любишь любим любят любит любит любил любили любила работать работаю работаешь работаем работают работает работает работал работали работала жить живу живёшь живём живут живёт живёт жил жили жила открывать открываю открываешь открываем открывают открывает открывает открывал открывали открывала закрывать закрываю закрываешь закрываем закрывают закрывает закрывает закрывал закрывали закрывала начинать начинаю начинаешь начинаем начинают начинает начинает начинал начинали начинала заканчивать заканчиваю заканчиваешь заканчиваем заканчивают заканчивает заканчивает заканчивал заканчивали заканчивала видеть вижу видишь видим видят видит видит видел видели видела приходить приду придёшь придём придут придёт придёт пришёл пришли пришла идти иду идёшь идём идут идёт идёт шёл шли шла знать знаю знаешь знаем знают знает знает знал знали знала думать думаю думаешь думаем думают думает думает думал думали думала".split(' ');
  let data =  JSON.parse( localStorage.polyglot || '{}');
  let stringQestion = "";
  let stringAnswer = "";
  let order = "";
  let rndMixValue = null;
  let modalOrderBtns = document.getElementsByClassName("modal-order-btn");

  /**/ let plusE = ["want", "like"];
  /**/ let plusR = [" хотеть", " хочу", " хочешь", " хотим", " хотят", " хочет", " хочет", " хотел", " хотели", " хотела", " любить", " люблю", " любишь", " любим", " любят", " любит", " любит", " любил", " любили", " любила"];
  /**/ let to = "";
  /**/ let v2E = ["dance", "speak"];
  /**/ let v2R = ["танцевать", "говорить"];
  /**/ let curV2E = "";
  /**/ let curV2R = "";

  // Формируем массив для второй формы нерпавильных глаголав (обычный глагол - пустая строка)
  arrVerbEng.forEach(function callback(curValue, index, array) {
    if ( curValue.includes('(') ) {
      arrPastSimple.push( curValue.substring( curValue.indexOf('(') + 1, curValue.length - 1) );
      array[index] = curValue.substring( 0, curValue.indexOf('(') );
    } else {
      arrPastSimple.push("");
    }
  });

  // Выводим все глаголы в виде списка, чтобы была возможность выбрать нужные.   
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
  if ( data.words_lvl1p.length == arrVerbEng.length ) {
    binaryVerbs = data.words_lvl1p;
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
        listPastSimple.push(arrPastSimple[i]);
        
        for (let j = (i * 10); j <= (i * 10) + 9; j++) {
          listVerbRus.push( arrVerbRus.slice(j, j + 1).toString() );        
        }
      }
    }
    saveWords();
  }

  /* ****************************************************** */
  function blessRNG() {
    let rndX = Math.floor(Math.random() * 9); //order time and form
    let rndPron = Math.floor(Math.random() * 6); // random pronouns
    let rndVerbs = Math.floor(Math.random() * listVerbEng.length);
    rndMixValue = Math.floor(Math.random() * 2);
    /**/let rndVerbsV2 = Math.floor(Math.random() * plusE.length);  // колличество добавленных глаголов
    /**/let rndTo = Math.floor(Math.random() * 2);
    step1();                                      // преверяет какой порядок выбран в данный момент.
    step2(rndX, rndPron, rndVerbs, rndVerbsV2, rndTo);
    console.log("Форма-"+rndX, "Местоимение-"+rndPron, "Глагол-"+rndVerbs);
  }

  function step1(){
    for (let i = 0; i < modalOrderBtns.length; i++) {
      if ( modalOrderBtns[i].classList.contains('btn-primary') ) order = modalOrderBtns[i].id;
    }
    console.log(order);
  }

  function step2(rndX, rndPron, rndVerbs, rndVerbsV2, rndTo) {
    
    // console.log("rndX",rndX);
    // console.log("rndPron",rndPron);
    // console.log("rndVerbs",rndVerbs);
    // console.log("rndVerbsV2",rndVerbsV2);
  /**/  if (rndX >= 3 && rndTo == 1){
  /**/    curVerbEng = plusE[rndVerbsV2];
  /**/    curVerbRus = plusR[getVerbRus(rndX, rndPron, rndVerbsV2)];
  /**/    curV2E = v2E[0];
  /**/    curV2R = v2R[0];
  /**/    to = "to";
  /**/  } else {  
  /**/    curVerbEng = listVerbEng[rndVerbs];
  /**/    curVerbRus = listVerbRus[getVerbRus(rndX, rndPron, rndVerbs)];
  /**/    curV2E = "";
  /**/    curV2R = "";
  /**/    to = "";
  /**/  }
    curPronEng = arrPronEng[rndPron];
    curPronRus = arrPronRus[rndPron];

    switch (rndX) {
      case 0: curToDo1 = arrToDo[1]; 
        curToDo2 = arrToDo[0]; break;
      case 1: curToDo2 = arrToDo[1];
        curToDo1 = arrToDo[0]; break;
      case 2: curToDo2 = arrToDo[5];
        curToDo1 = arrToDo[0]; break;
      case 3: (rndPron < 4) ? curToDo1 = arrToDo[2] : curToDo1 = arrToDo[3];
        curToDo2 = arrToDo[0]; break;
      case 5: (rndPron < 4) ? curToDo2 = arrToDo[6] : curToDo2 = arrToDo[7];
        curToDo1 = arrToDo[0]; break;
      case 6: curToDo1 = arrToDo[4];
        curToDo2 = arrToDo[0]; break;
      case 8: curToDo2 = arrToDo[8];
        curToDo1 = arrToDo[0]; break;
      default:
        curToDo1 = arrToDo[0];
        curToDo2 = arrToDo[0];
    }

    // выбирает между окончаниями    s || es
    if (rndX == 4 && rndPron >= 4) {
      if (curVerbEng == "finish" || curVerbEng == "go") {
        curEnding = arrEnding[2];
      } else {
        curEnding = arrEnding[1];      
      }
    // выбирает между окончаниями    d || ed
    } else if (rndX == 7) {
      if (curVerbEng.charAt(curVerbEng.length-1) == 'e') {
        curEnding = arrEnding[3];
      } else {
        curEnding = arrEnding[4];
      }
      // замена на неправильный глагол
      if (listPastSimple[rndVerbs] != "") {
        curVerbEng = listPastSimple[rndVerbs];
        curEnding = "";
      }
    } else {
      curEnding = "";
    }

    (rndX == 0 || rndX == 1 || rndX == 2) ? curToDoRusQ = arrToDoRus[rndPron] : curToDoRusQ = "";
    (rndX == 2 || rndX == 5 || rndX == 8 || rndX == 11) ? curToDoRusN = "не" : curToDoRusN = "";
    (rndX == 0 || rndX == 3 || rndX == 6 || rndX == 9) ? curSign = "?" : curSign = ".";
  }

  function getVerbRus(rndX, rndPron, rndVerbs) {
    let rndVerbRus = null;
    if (rndX >= 0 && rndX <= 2) {
      rndVerbRus = 10 * rndVerbs;
    } else if (rndX >= 3 && rndX <= 5) {
      rndVerbRus = (rndPron + 1) + (10 * rndVerbs);
    } else if (rndX >= 6 && rndX <= 8) {
      if (rndPron == 0 || rndPron == 1 || rndPron == 4) {
        rndVerbRus = 7 + (10 * rndVerbs);
      } else if (rndPron == 2 || rndPron == 3) {
        rndVerbRus = 8 + (10 * rndVerbs);
      } else if (rndPron == 5) {
        rndVerbRus = 9 + (10 * rndVerbs);
      }
    }
    return rndVerbRus;
  }

  // Сохранение выбранных слов
  function saveWords(){
    data.words_lvl1p = binaryVerbs;
    let jsn = JSON.stringify( data );
    localStorage.polyglot = jsn;
  }

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
        stringQestion = `${curToDo1} ${curPronEng} ${curToDo2} ${curVerbEng}${curEnding} ${to} ${curV2E}${curSign}`;
        stringAnswer = `${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus} ${curV2R}${curSign}`;
      } else if (order == "rus-eng" || (order == "mix" && rndMixValue == 1)) {
        stringQestion = `${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus} ${curV2R}${curSign}`;
        stringAnswer = `${curToDo1} ${curPronEng} ${curToDo2} ${curVerbEng}${curEnding} ${to} ${curV2E}${curSign}`;
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

// Ставит знак препинания в конец сформированной фразы
// function StavitZnakPrepinania(){
//   if (rndX == 0 || rndX == 3 || rndX == 6 || rndX == 9) {
//     GotovaiaStroka =+ "?";
//   } else {
//     GotovaiaStroka =+ ".";
//   }
// }