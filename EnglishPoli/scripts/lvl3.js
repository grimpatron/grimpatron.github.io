let level3 = (function (){
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
  let curToDoRusQ = "";
  let curToDoRusN = "";
  let curSign = "";
  let listVerbEng = [];
  let listVerbRus = [];
  // let listPastSimple = [];
  // let arrPastSimple = []; // вторая форма нерпавильных глаголав
  let arrPronEng = ["I", "you", "we", "they", "he", "she"];   // pronouns English
  let arrPronRus = ["я", "ты", "мы", "они", "он", "она"];     // pronouns Russian
  let arrToDoRus = ["буду","будешь","будем","будут","будет","будет"];
  let arrVerbEng = "here there in_Minsk with_me".split(' ');
  let arrVerbRus = "здесь там в_Минске со_мной".split(' ');
  let stringQestion = "";
  let stringAnswer = "";

  let arrToBe = ["", "will", "be", "will be", "will not be", "am", "is", "are", "am not", "is not", "are not", "was", "were", "was not", "were not"]; /* lvl3 */         // глагол быть
  let curToBe1 = ""; /* lvl3 */
  let curToBe2 = ""; /* lvl3 */
    
  // Формируем массив второй формы нерпавильных глаголав (обычный глагол - пустая строка)
  // arrPastSimple = separateIrregularVerbs(arrVerbEng);  // здесь нет в этом необходимости

/*** Проверка уровня урока ***/
if (levelCheck() == "lvl3") generateListWord();

function generateListWord(){
  // Выводим все глаголы в виде списка в боковой панели
  createListOfAllWords(wordsBlockList, arrVerbEng);

  // Отмечаются выбранные слова (сохранённые в localStorage)
  binaryVerbs = selectedWordsInList(arrVerbEng);
  
  listOfSelectedWords();

  // вешает события при котором будет пересобираться массив
  wordsBlockList.addEventListener("click", listOfSelectedWords, false);
  wordsBlockListSelect.addEventListener("click", listOfSelectedWords, false);

  // вешает событие которое выбирает или снимает выбор у всех глаголов;
  eventSelectAllWords( checkListVerbs );

  // Составление списков на основании выбранных глаголов.
  function listOfSelectedWords() {
    listVerbEng = [];
    listVerbRus = [];
    // listPastSimple = [];

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
        // listPastSimple.push(arrPastSimple[i]);
      }
    }
    // Сохранение выбранных слов
    saveWords( 'words_lvl3', binaryVerbs );
  }
}

  /* ****************************************************** */
  function wordPreparation(rndVal) {
    curVerbEng = listVerbEng[rndVal.verb];
    curVerbRus = listVerbRus[rndVal.verb];
    console.log(listVerbEng[rndVal.verb], '---' , rndVal.verb);
    curPronEng = arrPronEng[rndVal.pron1];
    curPronRus = arrPronRus[rndVal.pron1];

    switch (rndVal.cell) {
      case 0: curToBe1 = arrToBe[1]; 
              curToBe2 = arrToBe[2]; break;
      case 1: curToBe1 = arrToBe[0];
              curToBe2 = arrToBe[3]; break;
      case 2: curToBe1 = arrToBe[0];
              curToBe2 = arrToBe[4]; break;
      case 3: (rndVal.pron1 == 0) ? curToBe1 = arrToBe[5] : rndVal.pron1 >= 4 ? curToBe1 = arrToBe[6] : curToBe1 = arrToBe[7];
              curToBe2 = arrToBe[0]; break;
      case 4: (rndVal.pron1 == 0) ? curToBe2 = arrToBe[5] : rndVal.pron1 >= 4 ? curToBe2 = arrToBe[6] : curToBe2 = arrToBe[7];
              curToBe1 = arrToBe[0]; break;
      case 5: (rndVal.pron1 == 0) ? curToBe2 = arrToBe[8] : rndVal.pron1 >= 4 ? curToBe2 = arrToBe[9] : curToBe2 = arrToBe[10];
              curToBe1 = arrToBe[0]; break;
      case 6: (rndVal.pron1 == 0 || rndVal.pron1 >= 4) ? curToBe1 = arrToBe[11] : curToBe1 = arrToBe[12];
              curToBe2 = arrToBe[0]; break;
      case 7: (rndVal.pron1 == 0 || rndVal.pron1 >= 4) ? curToBe2 = arrToBe[11] : curToBe2 = arrToBe[12];
              curToBe1 = arrToBe[0]; break;
      case 8: (rndVal.pron1 == 0 || rndVal.pron1 >= 4) ? curToBe2 = arrToBe[13] : curToBe2 = arrToBe[14];
              curToBe1 = arrToBe[0]; break;
    }

    /* lvl3 */
    if (rndVal.cell == 0 || rndVal.cell == 1 || rndVal.cell == 2) {
      curToDoRusQ = arrToDoRus[rndVal.pron1];
    } else if ( rndVal.pron1 == 5 && (rndVal.cell == 6 || rndVal.cell == 7 || rndVal.cell == 8) ) {
      curToDoRusQ = "была";
    } else if ( (rndVal.pron1 == 0 || rndVal.pron1 == 1 || rndVal.pron1 == 4 ) && (rndVal.cell == 6 || rndVal.cell == 7 || rndVal.cell == 8) ) {
      curToDoRusQ = "был";
    } else if ( (rndVal.pron1 == 2 || rndVal.pron1 == 3) && (rndVal.cell == 6 || rndVal.cell == 7 || rndVal.cell == 8) ) {
      curToDoRusQ = "были";
    } else {
      curToDoRusQ = "";
    }

    // (rndX == 0 || rndX == 1 || rndX == 2) ? curToDoRusQ = arrToDoRus[rndPron] : (rndX == 6 || rndX == 7 || rndX == 8) ? curToDoRusQ = "был" : curToDoRusQ = ""; /* lvl3 */
    (rndVal.cell == 2 || rndVal.cell == 5 || rndVal.cell == 8 || rndVal.cell == 11) ? curToDoRusN = "не" : curToDoRusN = "";
  }

  function generateString(){
    if ( plus(binaryVerbs) ) {
      let rndVal = blessRNG( {verbList: listVerbEng.length, pronCnt: 1} );
      wordPreparation(rndVal);
      // Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания
      // Eng  1)вставка 2)местоимение 3)вставка 4)глагол 5)окончание 6)знак препинания
      if (rndVal.order == "eng-rus" || (rndVal.order == "mix" && rndVal.mix == 0)) {
        stringQestion = `${curToBe1} ${curPronEng} ${curToBe2}        ${curVerbEng}`;
        stringAnswer =  `${curPronRus} ${curToDoRusN} ${curToDoRusQ}  ${curVerbRus}`;
      } else if (rndVal.order == "rus-eng" || (rndVal.order == "mix" && rndVal.mix == 1)) {
        stringQestion = `${curPronRus} ${curToDoRusN} ${curToDoRusQ}  ${curVerbRus}`;
        stringAnswer =  `${curToBe1} ${curPronEng} ${curToBe2}        ${curVerbEng}`;
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

// 162 строки!!!
// она БЫЛ со мной (сделать по красоте),,, добавить больше вариантов (со мной, с тобой, с ней)