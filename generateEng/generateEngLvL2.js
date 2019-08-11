let outputEng = document.getElementById("eng");
let outputRus = document.getElementById("rus");
let next = document.getElementById("next");
let answer = document.getElementById("answer");
let selectBlock = document.querySelector("#select-block");
let selectAllVerbs = document.getElementById("select-all-verbs");
let checkListVerbs = document.getElementsByClassName("check-icon");
let schemaImage = document.getElementById("schema-image");
let showSchema = document.getElementById("show-schema");
let showSchemaOn = 0;
let binaryVerbs = [];
let curVerbEng = "";
let curVerbRus = "";
let curPronEng1 = "",
/**/    curPronEng2 = "";
let curPronRus1 = "",
/**/    curPronRus2 = "";
let curToDo1 = "";
let curToDo2 = "";
let curToDoRusQ = "";
let curToDoRusN = "";
let curEnding = "";
let curSign = "";
let listVerbEng = [];
let listVerbRus = [];
let listPastSimple = [];
let arrPastSimple = []; // для фторой формы нерпавильных глаголав (обычный глагол - пустая строка)
let arrPronEng = ["I", "you", "we", "they", "he", "she"]; // pronouns English
let arrPronRus = ["я", "ты", "мы", "они", "он", "она"];   // pronouns Russian
let arrToDoEng = ["", "will", "do", "does", "did", "will not", "don't", "doesn't", "didn't"]; // вспомогательное слово перед местоимением
let arrToDoRus = ["буду","будешь","будем","будут","будет","будет"];
let arrEnding = ["", "s", "es", "d", "ed"];
let arrVerbEng = "ask answer give(gave) take(took) help hope speak(spoke) travel".split(' ');
let arrVerbRus = "спрашивать спрашиваю спрашиваешь спрашиваем спрашивают спрашивает спрашивает спрашивал спрашивали спрашивала отвечать отвечаю отвечаешь отвечаем отвечают отвечает отвечает отвечал отвечали отвечала давать даю даёшь даём дают даёт даёт давал давали давала брать беру берёшь берём берут берёт берёт брал брали брала помогать помогаю помогаешь помогаем помогают помогает помогает помогал помогали помагала надеятся надеюсь надеешься надеемся надеются надеется надеется надеялся надеялись надеялась разговаривать разговариваю разговариваешь разговариваем разговаривают разговаривает разговариваает разговаривал разговаривали разговаривала путешествовать путешествую путешествуешь путешествуем путешествуют путешествует путешествует путешествовал путешествовали путешествовала".split(' ');
binaryVerbs = new Array(arrVerbEng.length);

/**/let arrCompatPron2 = [1, 2, 2, 1, 2, 0, 0, 0];       // (compatibility) совместимость второго местоимения
/**/let listPron2 = [];                                  // для вторых местоимений, на основании выбранных слов
/**/let arrPronEng2 = ["me", "you", "him", "her", "us", "them"];
/**/let arrPronRus2 = ["меня", "тебя", "его", "её", "нас", "их", "мне", "тебе", "ему", "ей", "нам", "им" ];
/**/let curQuestionEng = "";
/**/let curQuestionRus = "";
/**/let listQuestionEng = [];
/**/let listQuestionRus = [];
/**/let listCompatQuestion = [];
/**/let arrCompatQuestion = ["000001110", "100101111", "100111111", "100111111", "100101111", "000000110", "000101111", "000101111"]; // совместимость вопросительных слов
/**/let questionWordsRus = ["Что",  "Какой", "Кто", "Где",   "Куда",  "Когда", "Зачем", "Почему", "Как"];
/**/let questionWordsEng = ["What", "What",  "Who", "Where", "Where", "When",  "Why",   "Why",    "How"];

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
  if (i == 0) eInput.setAttribute("checked", "checked");
  eLabel.className = "check-word";
  eLabel.appendChild(eInput);
  eLabel.appendChild(nText);
  selectBlock.appendChild(eLabel);
}
writeSV();

// События при котором будет пересобираться массив;
selectBlock.addEventListener("click", writeSV, false);

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

showSchema.addEventListener('click', function() {
  if (showSchemaOn == 0) {
    schemaImage.style.opacity = "1";
    showSchema.innerHTML = "Скрыть схему";
    showSchemaOn = 1;
  } else {
    schemaImage.style.opacity = "0";
    showSchema.innerHTML = "Показать схему";
    showSchemaOn = 0;
  }
});

// Составление списков на основании выбранных глаголов.
function writeSV() {
  listVerbEng = [];
  listVerbRus = [];
  listPastSimple = [];
  /**/listPron2 = [];

  for (let i = 0; i < binaryVerbs.length; i++) {
    if (checkListVerbs[i].checked == true) {
      binaryVerbs.splice(i, 1, 1);
    } else {
      binaryVerbs.splice(i, 1, 0);
    }
  }

  for (let i = 0, aStart = null, aFinish = null; i < binaryVerbs.length; i++) {
    if (binaryVerbs[i] == 1) {
      listVerbEng.push(arrVerbEng[i]);
      listPastSimple.push(arrPastSimple[i]);
      /**/listPron2.push(arrCompatPron2[i]);
      aStart = i * 10;
      aFinish = aStart + 9;
      
      for (let j = aStart; j <= aFinish ; j++) {
        listVerbRus.push( arrVerbRus.slice(j, j + 1).toString() );        
      }
    }
  }
  console.log(binaryVerbs);
}

/* ****************************************************** */
function blessRNG() {
  let rndX = Math.floor(Math.random() * 9); //order time and form
  let rndPron1 = Math.floor(Math.random() * 6); // random pronouns
  let rndPron2 = Math.floor(Math.random() * 6);
  /**/for ( ; ; ){
  /**/  console.log(rndPron1, rndPron2);  // Эпическая проверка местоимений на совместимость
  /**/  if ( rndPron1 == rndPron2 || rndPron1 == 0 && rndPron2 == 4 || rndPron1 == 2 && rndPron2 == 4 || rndPron1 == 2  && rndPron2 == 0) { 
  /**/    rndPron2 = Math.floor(Math.random() * 6);
  /**/  } else break;
  /**/}
  let rndVerbs = Math.floor(Math.random() * listVerbEng.length);
  step2(rndX, rndPron1, rndPron2, rndVerbs);
  console.log("Форма-"+rndX, "Местоимение-"+rndPron1, "Глагол-"+rndVerbs);
}

function step2(rndX, rndPron1, rndPron2, rndVerbs) {
  curVerbEng = listVerbEng[rndVerbs];
  curVerbRus = listVerbRus[getVerbRus(rndX, rndPron1, rndVerbs)];
  curPronEng1 = arrPronEng[rndPron1];
  curPronRus1 = arrPronRus[rndPron1];
  /**/curPronEng2 = arrPronEng2[rndPron2];
  /**/if(listPron2[rndVerbs] == 2) rndPron2 += 6; // Как вывести в сравнение 1 || 0 (формировать новый массив на манер паст симпл) ещё одна переменная.
  /**/curPronRus2 = arrPronRus2[rndPron2];
  /**/if(listPron2[rndVerbs] == 0) { curPronRus2 = ""; curPronEng2 = ""; }; // Убрать второе местоимение в последних трёх словах.

  switch (rndX) {
    case 0: curtoDo1 = arrToDoEng[1]; 
      curToDo2 = arrToDoEng[0]; break;
    case 1: curToDo2 = arrToDoEng[1];
      curtoDo1 = arrToDoEng[0]; break;
    case 2: curToDo2 = arrToDoEng[5];
      curtoDo1 = arrToDoEng[0]; break;
    case 3: (rndPron1 < 4) ? curtoDo1 = arrToDoEng[2] : curtoDo1 = arrToDoEng[3];
      curToDo2 = arrToDoEng[0]; break;
    case 5: (rndPron1 < 4) ? curToDo2 = arrToDoEng[6] : curToDo2 = arrToDoEng[7];
      curtoDo1 = arrToDoEng[0]; break;
    case 6: curtoDo1 = arrToDoEng[4];
      curToDo2 = arrToDoEng[0]; break;
    case 8: curToDo2 = arrToDoEng[8];
      curtoDo1 = arrToDoEng[0]; break;
    default:
      curtoDo1 = arrToDoEng[0];
      curToDo2 = arrToDoEng[0];
  }

  // выбирает между окончаниями    s || es
  if (rndX == 4 && rndPron1 >= 4) {
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

    if (listPastSimple[rndVerbs] != "") {
      curVerbEng = listPastSimple[rndVerbs];
      curEnding = "";
    }
  } else {
    curEnding = "";
  }

  (rndX == 0 || rndX == 1 || rndX == 2) ? curToDoRusQ = arrToDoRus[rndPron1] : curToDoRusQ = "";
  (rndX == 2 || rndX == 5 || rndX == 8 || rndX == 11) ? curToDoRusN = "не" : curToDoRusN = "";
  (rndX == 0 || rndX == 3 || rndX == 6 || rndX == 9) ? curSign = "?" : curSign = "";
  
  /**/if (rndX == 0 || rndX == 3 || rndX == 6){
  /**/  rndQuestion(rndVerbs);
  /**/} else {
  /**/  curQuestionEng = "";
  /**/  curQuestionRus = "";
  /**/}
}

function getVerbRus(rndX, rndPron1, rndVerbs) {
  let rndVerbRus = null;
  if (rndX >= 0 && rndX <= 2) {
    rndVerbRus = 10 * rndVerbs;
  } else if (rndX >= 3 && rndX <= 5) {
    rndVerbRus = (rndPron1 + 1) + (10 * rndVerbs);
  } else if (rndX >= 6 && rndX <= 8) {
    if (rndPron1 == 0 || rndPron1 == 1 || rndPron1 == 4) {
      rndVerbRus = 7 + (10 * rndVerbs);      
    } else if (rndPron1 == 2 || rndPron1 == 3) {
      rndVerbRus = 8 + (10 * rndVerbs);      
    } else if (rndPron1 == 5) {
      rndVerbRus = 9 + (10 * rndVerbs);      
    }
  }
  return rndVerbRus;
}

/* выбирает для текущего слова подходящие вопросы */
function rndQuestion(rndVerbs){
  let X = null;
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

  X = Math.floor(Math.random() * listQuestionEng.length);
  curQuestionEng = listQuestionEng[X];
  curQuestionRus = listQuestionRus[X];
}

/* Вывод */
next.onclick = function() {
  if ( plus() ) {
    blessRNG();
    // Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания
    outputRus.innerHTML = `${curQuestionRus} ${curPronRus1} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus} ${curPronRus2}${curSign}`;
    outputEng.innerHTML = '';
    outputRus.innerHTML.length > 26 ? rus.style.fontSize = "20px" : rus.style.fontSize = "24px";  // если строка слишком длинная - уменьшать шрифт.
  } else {
    alert("Выберите хотя бы один глагол чтобы продолжить"); // Если ни один глагол не выбран
  }
}

answer.onclick = function() {
  // Eng  1)вставка 2)местоимение 3)вставка 4)глагол 5)окончание 6)знак препинания
  outputEng.innerHTML = `${curQuestionEng} ${curtoDo1} ${curPronEng1} ${curToDo2} ${curVerbEng}${curEnding} ${curPronEng2}${curSign}`;
}

function plus() {
  let pRes = 0;
  for (let i = 0; i < binaryVerbs.length; i++) {
    pRes += binaryVerbs[i];
  }
  return pRes;
}
// 3 уровень: Объединение в один файл; Замена чекбоксов на картинки; Первое слово должно начинаться с большой буквы.   220 строк!