let level1 = (function (){
  let outputQuestion = document.getElementById("output-question");
  let outputAnswer = document.getElementById("output-answer");
  let checkListVerbs = document.getElementsByClassName("check-icon");
  let wordsBlockList = document.querySelector('.words-block__list');
  let wordsBlockListSelect = document.querySelector('.words-block__list-select');
  let binaryVerbs = [];
  let curVerbEng = "";
  let curVerbRus = "";
  let curPronEng = "";
  let curPronRus = "";
  let curToDo1 = "";
  let curToDo2 = "";
  let curToDoRusQ = "";
  let curToDoRusN = "";
  let listVerbEng = [];
  let listVerbRus = [];
  let listPastSimple = [];
  let arrPronEng = ["I", "you", "we", "they", "he", "she"];   // pronouns English
  let arrPronRus = ["я", "ты", "мы", "они", "он", "она"];     // pronouns Russian
  let arrToDo = ["", "will", "do", "does", "did", "will not", "don't", "doesn't", "didn't"]; // вспомогательные слова перед/после местоимения
  let arrToDoRus = ["буду", "будешь", "будем", "будут", "будет", "будет"];
  let arrVerbEng = "love work live open close start finish see(saw) come(came) go(went) know(knew) think(thought)".split(' ');
  let arrVerbRus = "любить люблю любишь любим любят любит любит любил любили любила работать работаю работаешь работаем работают работает работает работал работали работала жить живу живёшь живём живут живёт живёт жил жили жила открывать открываю открываешь открываем открывают открывает открывает открывал открывали открывала закрывать закрываю закрываешь закрываем закрывают закрывает закрывает закрывал закрывали закрывала начинать начинаю начинаешь начинаем начинают начинает начинает начинал начинали начинала заканчивать заканчиваю заканчиваешь заканчиваем заканчивают заканчивает заканчивает заканчивал заканчивали заканчивала видеть вижу видишь видим видят видит видит видел видели видела приходить приду придёшь придём придут придёт придёт пришёл пришли пришла идти иду идёшь идём идут идёт идёт шёл шли шла знать знаю знаешь знаем знают знает знает знал знали знала думать думаю думаешь думаем думают думает думает думал думали думала".split(' ');
  let arrPastSimple = separateIrregularVerbs(arrVerbEng); // вторая форма нерпавильных глаголав
  let stringQestion = "";
  let stringAnswer = "";

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
  wordsBlockListSelect.addEventListener("click", listOfSelectedWords, false);

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
  function wordPreparation(rndVal) {
    curVerbEng = listVerbEng[rndVal.verb];
    curVerbRus = listVerbRus[getVerbRus(rndVal)];
    curPronEng = arrPronEng[rndVal.pron1];
    curPronRus = arrPronRus[rndVal.pron1];
  
    switch (rndVal.cell) {
      case 0: curToDo1 = arrToDo[1];
        curToDo2 = arrToDo[0]; break;
      case 1: curToDo2 = arrToDo[1];
        curToDo1 = arrToDo[0]; break;
      case 2: curToDo2 = arrToDo[5];
        curToDo1 = arrToDo[0]; break;
      case 3: (rndVal.pron1 < 4) ? curToDo1 = arrToDo[2] : curToDo1 = arrToDo[3];
        curToDo2 = arrToDo[0]; break;
      case 5: (rndVal.pron1 < 4) ? curToDo2 = arrToDo[6] : curToDo2 = arrToDo[7];
        curToDo1 = arrToDo[0]; break;
      case 6: curToDo1 = arrToDo[4];
        curToDo2 = arrToDo[0]; break;
      case 8: curToDo2 = arrToDo[8];
        curToDo1 = arrToDo[0]; break;
      default:
        curToDo1 = arrToDo[0];
        curToDo2 = arrToDo[0];
    }

    curVerbEng = changeVerb(curVerbEng, listPastSimple, rndVal);
  
    (rndVal.cell == 0 || rndVal.cell == 1 || rndVal.cell == 2) ? curToDoRusQ = arrToDoRus[rndVal.pron1] : curToDoRusQ = "";
    (rndVal.cell == 2 || rndVal.cell == 5 || rndVal.cell == 8 || rndVal.cell == 11) ? curToDoRusN = "не" : curToDoRusN = "";
    // (rndVal.cell == 0 || rndVal.cell == 3 || rndVal.cell == 6 || rndVal.cell == 9) ? curSign = "?" : curSign = "";
  }
  
  function getVerbRus(rndVal) {
    let rndVerbRus = null;
    if (rndVal.cell >= 0 && rndVal.cell <= 2) {
      rndVerbRus = 10 * rndVal.verb;
    } else if (rndVal.cell >= 3 && rndVal.cell <= 5) {
      rndVerbRus = (rndVal.pron1 + 1) + (10 * rndVal.verb);
    } else if (rndVal.cell >= 6 && rndVal.cell <= 8) {
      if (rndVal.pron1 == 0 || rndVal.pron1 == 1 || rndVal.pron1 == 4) {
        rndVerbRus = 7 + (10 * rndVal.verb);      
      } else if (rndVal.pron1 == 2 || rndVal.pron1 == 3) {
        rndVerbRus = 8 + (10 * rndVal.verb);      
      } else if (rndVal.pron1 == 5) {
        rndVerbRus = 9 + (10 * rndVal.verb);      
      }
    }
    return rndVerbRus;
  }
  
  function generateString(){
    if ( plus(binaryVerbs) ) {
      let rndVal = blessRNG( {verbList: listVerbEng.length, pronCnt: 1} );
      wordPreparation(rndVal);
      // Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания
      // Eng  1)вставка 2)местоимение 3)вставка 4)глагол 5)окончание 6)знак препинания
      if (rndVal.order == "eng-rus" || (rndVal.order == "mix" && rndVal.mix == 0)) {
        stringQestion = `${curToDo1}    ${curPronEng}   ${curToDo2}     ${curVerbEng}`;
        stringAnswer =  `${curPronRus}  ${curToDoRusN}  ${curToDoRusQ}  ${curVerbRus}`;
      } else if (rndVal.order == "rus-eng" || (rndVal.order == "mix" && rndVal.mix == 1)) {
        stringQestion = `${curPronRus}  ${curToDoRusN}  ${curToDoRusQ}  ${curVerbRus}`;
        stringAnswer =  `${curToDo1}    ${curPronEng}   ${curToDo2}     ${curVerbEng}`;
      }
      stringQestion = conversionToSentence(stringQestion, rndVal.cell);
      stringAnswer = conversionToSentence(stringAnswer, rndVal.cell);
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

// при скролле вниз, шадов бокс не успевает за списком. // скролить список слова а не всю страницу
// по нажатию на кнопку урок, мы получим сразу два окна (выбор самого урока и выбор слов)
// Начинаем оптимизацию!!! Было 265 строк кода, стало 191 строка.