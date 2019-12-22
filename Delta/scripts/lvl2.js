let level2 = (function(){
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
  var arrPastSimple = []; // вторая форма нерпавильных глаголав
  let arrPronEng = ["I", "you", "we", "they", "he", "she"];   // pronouns English
  let arrPronRus = ["я", "ты", "мы", "они", "он", "она"];     // pronouns Russian
  let arrToDo = ["", "will", "do", "does", "did", "will not", "don't", "doesn't", "didn't"]; // вспомогательные слова перед/после местоимения
  let arrToDoRus = ["буду","будешь","будем","будут","будет","будет"];
  let arrEnding = ["", "s", "es", "d", "ed"];
  let arrVerbEng = "ask answer give(gave) take(took) help hope speak(spoke) travel".split(' ');
  let arrVerbRus = "спрашивать спрашиваю спрашиваешь спрашиваем спрашивают спрашивает спрашивает спрашивал спрашивали спрашивала отвечать отвечаю отвечаешь отвечаем отвечают отвечает отвечает отвечал отвечали отвечала давать даю даёшь даём дают даёт даёт давал давали давала брать беру берёшь берём берут берёт берёт брал брали брала помогать помогаю помогаешь помогаем помогают помогает помогает помогал помогали помагала надеятся надеюсь надеешься надеемся надеются надеется надеется надеялся надеялись надеялась разговаривать разговариваю разговариваешь разговариваем разговаривают разговаривает разговариваает разговаривал разговаривали разговаривала путешествовать путешествую путешествуешь путешествуем путешествуют путешествует путешествует путешествовал путешествовали путешествовала".split(' ');
  let data =  JSON.parse( localStorage.polyglot || '{}');
  let stringQestion = "";
  let stringAnswer = "";
  let order = "";
  let rndMixValue = null;
  let modalOrderBtns = document.getElementsByClassName("modal-order-btn");

  let curPronEng2 = ""; /* lvl2 */
  let curPronRus2 = ""; /* lvl2 */
  let arrCompatPron2 = [1, 2, 2, 1, 2, 0, 0, 0]; /* lvl2 */   // (compatibility) совместимость второго местоимения
  let listPron2 = []; /* lvl2 */    // для вторых местоимений, на основании выбранных слов
  let arrPronEng2 = ["me", "you", "him", "her", "us", "them"]; /* lvl2 */
  let arrPronRus2 = ["меня", "тебя", "его", "её", "нас", "их", "мне", "тебе", "ему", "ей", "нам", "им" ]; /* lvl2 */
  let curQuestionEng = ""; /* lvl2 */
  let curQuestionRus = ""; /* lvl2 */
  let listQuestionEng = []; /* lvl2 */
  let listQuestionRus = []; /* lvl2 */
  let listCompatQuestion = []; /* lvl2 */
  let arrCompatQuestion = ["000001110", "100101111", "100111111", "100111111", "100101111", "000000110", "000101111", "000101111"]; /* lvl2 */   // совместимость вопросительных слов
  let questionWordsRus = ["Что",  "Какой", "Кто", "Где",   "Куда",  "Когда", "Зачем", "Почему", "Как"]; /* lvl2 */
  let questionWordsEng = ["What", "What",  "Who", "Where", "Where", "When",  "Why",   "Why",    "How"]; /* lvl2 */

  // Формируем массив для второй формы нерпавильных глаголав (обычный глагол - пустая строка)
  arrVerbEng.forEach(function callback(curValue, index, array) {
    if ( curValue.includes('(') ){
      arrPastSimple.push(curValue.substring( curValue.indexOf('(') + 1, curValue.length - 1) );
      array[index] = curValue.substring( 0, curValue.indexOf('(') );
    } else {
      arrPastSimple.push("");
    }
  });

  // Выводим все глаголы в виде списка в боковой панели.
  for(let i = 0; i < arrVerbEng.length; i++){
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
  if (data.words_lvl2.length == arrVerbEng.length) {
    binaryVerbs = data.words_lvl2;
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

  // вешает события при котором будет пересобираться массив;
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

  // Составление списков глаголов на основании выбранных слов.
  function writeSV(){
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
    saveWords();
  }

  /* ****************************************************** */
  function blessRNG(){
    let rndX = Math.floor(Math.random() * 9);
    let rndPron = Math.floor(Math.random() * 6);
    let rndPron2 = Math.floor(Math.random() * 6); /* lvl2 */
    let rndVerbs = Math.floor(Math.random() * (listVerbEng.length));

    pronounCompatibility(rndPron, rndPron2); // Проверка местоимений на совместимость /* lvl2 */
    questionWordsCompatibility(rndVerbs, rndX); // Подбираем подходящие вопросительные слова /* lvl2 */
    step1();                                      // преверяет какой порядок выбран в данный момент.
    step2(rndX, rndPron, rndPron2, rndVerbs);
  }

  function pronounCompatibility(rndPron, rndPron2){
    for ( ; ; ){
      console.log(rndPron, rndPron2);
      if ( rndPron == rndPron2 || rndPron == 0 && rndPron2 == 4 || rndPron == 2 && rndPron2 == 4 || rndPron == 2  && rndPron2 == 0) { 
        rndPron2 = Math.floor(Math.random() * 6);
      } else break;
    }
  }

  function questionWordsCompatibility(rndVerbs, rndX){
    if (rndX == 0 || rndX == 3 || rndX == 6){
      listCompatQuestion = [];
      listQuestionEng = [];
      listQuestionRus = [];
      for(let i = 0; i < binaryVerbs.length; i++){
        if (binaryVerbs[i] == 1) listCompatQuestion.push(arrCompatQuestion[i]);
      }

      listCompatQuestion = listCompatQuestion[rndVerbs].split('');

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

  function step1(){
    for (let i = 0; i < modalOrderBtns.length; i++) {
      if ( modalOrderBtns[i].classList.contains('btn-primary') ) order = modalOrderBtns[i].id;
    }
    console.log(order);
  }
  
  function step2(rndX, rndPron, rndPron2, rndVerbs){
    curVerbEng = listVerbEng[rndVerbs];
    curVerbRus = listVerbRus[getVerbRus(rndX, rndPron, rndVerbs)];
    curPronEng = arrPronEng[rndPron];
    curPronRus = arrPronRus[rndPron];
    curPronEng2 = arrPronEng2[rndPron2]; /* lvl2 */
    if(listPron2[rndVerbs] == 2) rndPron2 += 6; /* lvl2 */
    curPronRus2 = arrPronRus2[rndPron2]; /* lvl2 */
    if(listPron2[rndVerbs] == 0) { curPronRus2 = ""; curPronEng2 = ""; }; /* lvl2 */

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
    if (rndX == 4 && rndPron >= 4){
      if (curVerbEng == "finish" || curVerbEng == "go"){
        curEnding = arrEnding[2];
      } else {
        curEnding = arrEnding[1];      
      }
    // выбирает между окончаниями    d || ed
    } else if (rndX == 7){
      if(curVerbEng.charAt(curVerbEng.length-1) == 'e'){
        curEnding = arrEnding[3];
      } else {
        curEnding = arrEnding[4];
      }
    // замена на неправильный глагол
      if(listPastSimple[rndVerbs] != ""){
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

  // Сохранение выбранных слов
  function saveWords(){
    data.words_lvl2 = binaryVerbs;
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
        stringQestion = `${curQuestionEng} ${curToDo1} ${curPronEng} ${curToDo2} ${curVerbEng}${curEnding} ${curPronEng2}${curSign}`;
        stringAnswer = `${curQuestionRus} ${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus} ${curPronRus2}${curSign}`;
        console.log(stringQestion,"ss", order)
      } else if (order == "rus-eng" || (order == "mix" && rndMixValue == 1)) {
        stringQestion = `${curQuestionRus} ${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus} ${curPronRus2}${curSign}`;
        stringAnswer = `${curQuestionEng} ${curToDo1} ${curPronEng} ${curToDo2} ${curVerbEng}${curEnding} ${curPronEng2}${curSign}`;
        console.log(stringQestion,"ss", order)
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