let level2 = (function(){
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
  let arrVerbEng = "ask answer give(gave) take(took) help hope speak(spoke) travel".split(' ');
  let arrVerbRus = "спрашивать спрашиваю спрашиваешь спрашиваем спрашивают спрашивает спрашивает спрашивал спрашивали спрашивала отвечать отвечаю отвечаешь отвечаем отвечают отвечает отвечает отвечал отвечали отвечала давать даю даёшь даём дают даёт даёт давал давали давала брать беру берёшь берём берут берёт берёт брал брали брала помогать помогаю помогаешь помогаем помогают помогает помогает помогал помогали помагала надеятся надеюсь надеешься надеемся надеются надеется надеется надеялся надеялись надеялась разговаривать разговариваю разговариваешь разговариваем разговаривают разговаривает разговариваает разговаривал разговаривали разговаривала путешествовать путешествую путешествуешь путешествуем путешествуют путешествует путешествует путешествовал путешествовали путешествовала".split(' ');
  let arrPastSimple = separateIrregularVerbs(arrVerbEng); // вторая форма нерпавильных глаголав
  let stringQestion = "";
  let stringAnswer = "";

  let curPronEng2 = ""; /* lvl2 */
  let curPronRus2 = ""; /* lvl2 */
  let arrCompatPron2 = [1, 2, 2, 1, 2, 0, 0, 0]; /* lvl2 */   // (compatibility) совместимость глагола и второго местоимения
  let listPron2 = []; /* lvl2 */    // для вторых местоимений, на основании выбранных слов
  let arrPronEng2 = ["me", "you", "us", "them", "him", "her"]; /* lvl2 */
  let arrPronRus2 = ["меня", "тебя", "нас", "их", "его", "её", "мне", "тебе", "нам", "им", "ему", "ей" ]; /* lvl2 */
  let curQuestionEng = ""; /* lvl2 */
  let curQuestionRus = ""; /* lvl2 */
  let listQuestionEng = []; /* lvl2 */
  let listQuestionRus = []; /* lvl2 */
  let listCompatQuestion = []; /* lvl2 */
  let arrCompatQuestion = ["000001110", "100101111", "100111111", "100111111", "100101111", "000000110", "000101111", "000101111"]; /* lvl2 */   // совместимость вопросительных слов
  let pronounCompatibility = ["011101", "101111", "011101", "111111", "111111", "111111"];              /* lvl2 */    // совместимость местоимений
  let questionWordsRus = ["Что",  "Какой", "Кто", "Где",   "Куда",  "Когда", "Зачем", "Почему", "Как"]; /* lvl2 */
  let questionWordsEng = ["What", "What",  "Who", "Where", "Where", "When",  "Why",   "Why",    "How"]; /* lvl2 */

  
/*** Проверка уровня урока ***/
if (levelCheck() == "lvl2") generateListWord();

function generateListWord(){
  // Выводим все глаголы в виде списка в боковой панели
  createListOfAllWords(wordsBlockList, arrVerbEng);

  // Отмечаются выбранные слова (сохранённые в localStorage)
  binaryVerbs = selectedWordsInList(arrVerbEng);
  
  listOfSelectedWords();

  // вешает события при котором будет пересобираться массив;
  wordsBlockList.addEventListener("click", listOfSelectedWords, false);
  wordsBlockListSelect.addEventListener("click", listOfSelectedWords, false);

  // вешает событие которое выбирает или снимает выбор у всех глаголов;
  eventSelectAllWords( checkListVerbs );

  // Составление списков глаголов на основании выбранных слов.
  function listOfSelectedWords(){
    listVerbEng = [];
    listVerbRus = [];
    listPastSimple = [];
    listPron2 = []; /* lvl 2 */

    for (let i = 0; i < binaryVerbs.length; i++){
      if (checkListVerbs[i].checked == true){
        binaryVerbs.splice(i, 1, 1);
      } else {
        binaryVerbs.splice(i, 1, 0);
      }
    }

    for (let i = 0; i < binaryVerbs.length; i++){
      if (binaryVerbs[i] == 1){
        listVerbEng.push(arrVerbEng[i]);
        listPastSimple.push(arrPastSimple[i]);
        listPron2.push(arrCompatPron2[i]); /* lvl 2 */
        
        for (let j = (i * 10); j <= (i * 10) + 9; j++) {
          listVerbRus.push( arrVerbRus.slice(j, j + 1).toString() );        
        }
      }
    }
    // Сохранение выбранных слов
    saveWords( 'words_lvl2', binaryVerbs );
  }
}

  /* ****************************************************** */
  function pronounCompatibilityCheck(rndVal){
    for ( ; ; ){
      if (pronounCompatibility[rndVal.pron1][rndVal.pron2] == 0) {
        rndVal.pron2 = Math.floor(Math.random() * 6);
      } else break;
    }
  }

  function questionWordsCompatibility(valVerb, valCell){
    if (valCell == 0 || valCell == 3 || valCell == 6){
      listCompatQuestion = [];
      listQuestionEng = [];
      listQuestionRus = [];
      for(let i = 0; i < binaryVerbs.length; i++){
        if (binaryVerbs[i] == 1) listCompatQuestion.push(arrCompatQuestion[i]);
      }

      listCompatQuestion = listCompatQuestion[valVerb].split('');

      for(let i = 0; i < listCompatQuestion.length; i++){
        if (listCompatQuestion[i] == 1){
          listQuestionEng.push(questionWordsEng[i]);
          listQuestionRus.push(questionWordsRus[i]);
        }
      }

      let X = Math.floor(Math.random() * listQuestionEng.length);
      curQuestionEng = listQuestionEng[X];
      curQuestionRus = listQuestionRus[X];
    } else {
      curQuestionEng = "";
      curQuestionRus = "";
    }
  }
  
  function wordPreparation(rndVal){
    curVerbEng = listVerbEng[rndVal.verb];
    curVerbRus = listVerbRus[getVerbRus(rndVal.cell, rndVal.pron1, rndVal.verb)];
    curPronEng = arrPronEng[rndVal.pron1];
    curPronRus = arrPronRus[rndVal.pron1];
    curPronEng2 = arrPronEng2[rndVal.pron2]; /* lvl2 */
    if(listPron2[rndVal.verb] == 2) rndVal.pron2 += 6; /* lvl2 */
    curPronRus2 = arrPronRus2[rndVal.pron2]; /* lvl2 */
    if(listPron2[rndVal.verb] == 0) { curPronRus2 = ""; curPronEng2 = ""; }; /* lvl2 */

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
  }
  
  function getVerbRus(valCell, valPron, valVerb) {
    let rndVerbRus = null;
    if (valCell >= 0 && valCell <= 2) {
      rndVerbRus = 10 * valVerb;
    } else if (valCell >= 3 && valCell <= 5) {
      rndVerbRus = (valPron + 1) + (10 * valVerb);
    } else if (valCell >= 6 && valCell <= 8) {
      if (valPron == 0 || valPron == 1 || valPron == 4) {
        rndVerbRus = 7 + (10 * valVerb);      
      } else if (valPron == 2 || valPron == 3) {
        rndVerbRus = 8 + (10 * valVerb);      
      } else if (valPron == 5) {
        rndVerbRus = 9 + (10 * valVerb);      
      }
    }
    return rndVerbRus;
  }

  function generateString(){
    if ( plus(binaryVerbs) ) {
      let rndVal = blessRNG( {verbList: listVerbEng.length, pronCnt: 2} );
      /*lvl2*/ pronounCompatibilityCheck(rndVal); // Проверка местоимений на совместимость
      /*lvl2*/ questionWordsCompatibility(rndVal.verb, rndVal.cell); // Подбираем подходящие вопросительные слова
      wordPreparation(rndVal);
      // Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания
      // Eng  1)вставка 2)местоимение 3)вставка 4)глагол 5)окончание 6)знак препинания
      if (rndVal.order == "eng-rus" || (rndVal.order == "mix" && rndVal.mix == 0)) {
        stringQestion = `${curQuestionEng} ${curToDo1} ${curPronEng} ${curToDo2} ${curVerbEng} ${curPronEng2}`;
        stringAnswer = `${curQuestionRus} ${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus} ${curPronRus2}`;
      } else if (rndVal.order == "rus-eng" || (rndVal.order == "mix" && rndVal.mix == 1)) {
        stringQestion = `${curQuestionRus} ${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus} ${curPronRus2}`;
        stringAnswer = `${curQuestionEng} ${curToDo1} ${curPronEng} ${curToDo2} ${curVerbEng} ${curPronEng2}`;
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