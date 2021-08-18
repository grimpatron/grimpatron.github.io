let level1 = (function (){
  let outputQuestion = document.getElementById("output-question");
  let outputAnswer = document.getElementById("output-answer");
  let checkListVerbs = document.getElementsByClassName("check-icon");
  let wordsBlockList = document.querySelector('.words-block__list');
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
  let arrPronEng = ["I", "you", "we", "they", "he", "she"];   // pronouns English
  let arrPronRus = ["я", "ты", "мы", "они", "он", "она"];     // pronouns Russian
  let arrToDo = ["", "will", "do", "does", "did", "will not", "don't", "doesn't", "didn't"]; // вспомогательные слова перед/после местоимения
  let arrToDoRus = ["буду", "будешь", "будем", "будут", "будет", "будет"];
  let arrEnding = ["", "s", "es", "d", "ed"];
  let arrVerbEng = "love work live open close start finish see(saw) come(came) go(went) know(knew) think(thought)".split(' ');
  let arrVerbRus = "любить люблю любишь любим любят любит любит любил любили любила работать работаю работаешь работаем работают работает работает работал работали работала жить живу живёшь живём живут живёт живёт жил жили жила открывать открываю открываешь открываем открывают открывает открывает открывал открывали открывала закрывать закрываю закрываешь закрываем закрывают закрывает закрывает закрывал закрывали закрывала начинать начинаю начинаешь начинаем начинают начинает начинает начинал начинали начинала заканчивать заканчиваю заканчиваешь заканчиваем заканчивают заканчивает заканчивает заканчивал заканчивали заканчивала видеть вижу видишь видим видят видит видит видел видели видела приходить приду придёшь придём придут придёт придёт пришёл пришли пришла идти иду идёшь идём идут идёт идёт шёл шли шла знать знаю знаешь знаем знают знает знает знал знали знала думать думаю думаешь думаем думают думает думает думал думали думала".split(' ');
  let arrPastSimple = separateIrregularVerbs(arrVerbEng); // вторая форма нерпавильных глаголав
  let stringQestion = "";
  let stringAnswer = "";
  let order = "";
  let rndMixValue = null;

/*** Проверка уровня урока ***/
if (levelCheck() == "lvl1") generateListWord();

function generateListWord(){
  // Выводим все глаголы в виде списка в боковой панели
  createListOfAllWords(wordsBlockList, arrVerbEng);
  
  // Отмечаются выбранные слова (сохранённые в localStorage)
  binaryVerbs = selectedWordsInList(arrVerbEng);

  // Составление списков глаголов на основании выбранных слов.
  listOfSelectedWords();
  
  // вешает события при котором будет пересобираться массив
  wordsBlockList.addEventListener("click", listOfSelectedWords, false);

  // вешает событие которое выбирает или снимает выбор у всех глаголов;
  eventSelectAllWords( checkListVerbs );

  function listOfSelectedWords() {
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

    saveWords( 'words_lvl1', binaryVerbs );    // Сохранение выбранных слов
  }
}
  
  /*** ************************************************** ***/
  function blessRNG() {
    let rndX = Math.floor(Math.random() * 9);         // random order of time and form
    let rndPron = Math.floor(Math.random() * 6);      // random pronoun
    let rndVerbs = Math.floor(Math.random() * listVerbEng.length); // random verb
    rndMixValue = Math.floor(Math.random() * 2);      // random order of languages
    order = checkLanguageOrder();                     // преверяет порядок языка выбраный в данный момент
    step2(rndX, rndPron, rndVerbs);
    console.log("Форма-"+rndX, "Местоимение-"+rndPron, "Глагол-"+rndVerbs, "Рандом-"+rndMixValue);
  }
  
  function step2(rndX, rndPron, rndVerbs) {
    curVerbEng = listVerbEng[rndVerbs];
    curVerbRus = listVerbRus[getVerbRus(rndX, rndPron, rndVerbs)];
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
    (rndX == 0 || rndX == 3 || rndX == 6 || rndX == 9) ? curSign = "?" : curSign = "";
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
  
  function generateString(){
    if ( plus(binaryVerbs) ) {
      blessRNG();
      // Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания
      // Eng  1)вставка 2)местоимение 3)вставка 4)глагол 5)окончание 6)знак препинания
      if (order == "eng-rus" || (order == "mix" && rndMixValue == 0)) {
        stringQestion = `${curToDo1}    ${curPronEng}   ${curToDo2}     ${curVerbEng}${curEnding}${curSign}`;
        stringAnswer =  `${curPronRus}  ${curToDoRusN}  ${curToDoRusQ}  ${curVerbRus}${curSign}`;
      } else if (order == "rus-eng" || (order == "mix" && rndMixValue == 1)) {
        stringQestion = `${curPronRus}  ${curToDoRusN}  ${curToDoRusQ}  ${curVerbRus}${curSign}`;
        stringAnswer =  `${curToDo1}    ${curPronEng}   ${curToDo2}     ${curVerbEng}${curEnding}${curSign}`;
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


// при скролле вниз, шадов бокс не успевает за списком. // скролить список слов а не всю страницу
// встроить гугл говорилку =)

// по нажатию на кнопку урок, мы получим сразу два окна (выбор самого урока и выбор слов)

// Начинаем оптимизацию!!! На данный момент 265 строк кода.
