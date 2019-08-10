let eng = document.getElementById("eng");
let rus = document.getElementById("rus");
let next = document.getElementById("next");
let answer = document.getElementById("answer");
let selectBlock = document.querySelector("#select-block");
let selectAllVerbs = document.getElementById("select-all-verbs");
let checkListVerbs = document.getElementsByClassName("check-icon");
let schemaImage = document.getElementById("schema-image");
let showSchema = document.getElementById("show-schema");
let showSchemaOn = 0;
let binaryVerbs = [];
let rndX = null; //order time and form
let rndPron = null; // random pronouns
/*new*/let rndPron2 = null;
let rndVerbEng = null;
let rndVerbRus = null;
let curVerbEng = "";
let curVerbRus = "";
let curPronEng = "";
/*new*/let curPronEng2 = "";
let curPronRus = "";
/*new*/let curPronRus2 = "";
let curToDo1 = "";
let curToDo2 = "";
let curToDoRusQ = "";
let curToDoRusN = "";
let curEnding = "";
let curSign = "";
let listVerbEng = [];
let listVerbRus = [];
let listPastSimple = [];
/*new*/var arrPastSimple = []; // для фторой формы нерпавильных глаголав (обычный глагол - пустая строка)
let arrPronEng = ["I", "you", "we", "they", "he", "she"];   // pronouns English
let arrPronRus = ["я", "ты", "мы", "они", "он", "она"];     // pronouns Russian
let arrToDo1 = ["", "will", "do", "does", "did"];           // вспомогательное слово перед местоимением
let arrToDo2 = ["", "will", "will Not", "don't", "does'nt", "did'nt"]; // вспомогательное слово после местоимения
let arrToDoRus = ["буду","будешь","будем","будут","будет","будет"];
let arrEnding = ["", "s", "es", "d", "ed"];
// let arrVerbEng = "love work live open close start finish see(saw) come(came) go(went) know(knew) think(thought)";
// let arrVerbRus = "любить люблю любишь любим любят любит любит любил любили любила работать работаю работаешь работаем работают работает работает работал работали работала жить живу живёшь живём живут живёт живёт жил жили жила открывать открываю открываешь открываем открывают открывает открывает открывал открывали открывала закрывать закрываю закрываешь закрываем закрывают закрывает закрывает закрывал закрывали закрывала начинать начинаю начинаешь начинаем начинают начинает начинает начинал начинали начинала заканчивать заканчиваю заканчиваешь заканчиваем заканчивают заканчивает заканчивает заканчивал заканчивали заканчивала видеть видел видишь видим видят видит видит видел видели видела приходить приду придёшь придём придут придёт придёт пришёл пришли пришла идти иду идёшь идём идут идёт идёт шёл шли шла знать знаю знаешь знаем знают знает знает знал знали знала думать думаю думаешь думаем думают думает думает думал думали думала";
/*new*/let arrVerbEng = "ask answer give(gave) take(took) help hope speak(spoke) travel"; 
/*new*/let arrVerbRus = "спрашивать спрашиваю спрашиваешь спрашиваем спрашивают спрашивает спрашивает спрашивал спрашивали спрашивала отвечать отвечаю отвечаешь отвечаем отвечают отвечает отвечает отвечал отвечали отвечала давать даю даёшь даём дают даёт даёт давал давали давала брать беру берёшь берём берут берёт берёт брал брали брала помогать помогаю помогаешь помогаем помогают помогает помогает помогал помогали помагала надеятся надеюсь надеешься надеемся надеются надеется надеется надеялся надеялись надеялась разговаривать разговариваю разговариваешь разговариваем разговаривают разговаривает разговариваает разговаривал разговаривали разговаривала путешествовать путешествую путешествуешь путешествуем путешествуют путешествует путешествует путешествовал путешествовали путешествовала";
arrVerbEng = arrVerbEng.split(' ');
arrVerbRus = arrVerbRus.split(' ');
binaryVerbs = new Array(arrVerbEng.length);

/*new*/var arrCompatPron2 = [1, 2, 2, 1, 2, 0, 0, 0];       // (compatibility) совместимость второго местоимения
/*new*/var listPron2 = [];                                  // для вторых местоимений, на основании выбранных слов
/*new*/var arrPronEng2 = ["me", "you", "him", "her", "us", "them"];
/*new*/var arrPronRus2 = ["меня", "тебя", "его", "её", "нас", "их", "мне", "тебе", "ему", "ей", "нам", "им" ];
/*new*/var curQuestionEng = "";
/*new*/var curQuestionRus = "";
/*new*/var listQuestionEng = [];
/*new*/var listQuestionRus = [];
/*new*/var listCompatQuestion = [];
/*new*/var arrCompatQuestion = ["000001110", "100101111", "100111111", "100111111", "100101111", "000000110", "000101111", "000101111"]; // совместимость вопросительных слов
/*new*/let questionWordsRus = ["Что",  "Какой", "Кто", "Где",   "Куда",  "Когда", "Зачем", "Почему", "Как"];
/*new*/let questionWordsEng = ["What", "What",  "Who", "Where", "Where", "When",  "Why",   "Why",    "How"];


arrVerbEng.forEach(function callback(currentValue, index, array) {
  if ( currentValue.includes('(') ){
    arrPastSimple.push(currentValue.substring( currentValue.indexOf('(') + 1, currentValue.length - 1) );
    array[index] = currentValue.substring( 0, currentValue.indexOf('(') );
  } else {
    arrPastSimple.push("");
  }
});

// Выводим все глаголы в виде списка, чтобы была возможность выбрать нужные.     
for(let i = 0; i < arrVerbEng.length; i++){
  let eLabel = document.createElement("label");
  let eInput = document.createElement("input");
  let nText = document.createTextNode (arrVerbEng[i]);
  eInput.className = "check-icon";
  eInput.setAttribute("type", "checkbox");
  if(i == 0) eInput.setAttribute("checked", "checked");
  eLabel.className = "check-word";
  eLabel.appendChild(eInput);
  eLabel.appendChild(nText);
  selectBlock.appendChild(eLabel);
}
writeSV();

// События при котором будет пересобираться массив (разобраться со всплытием);
selectBlock.addEventListener("click", function(){
  writeSV();
}, true);

selectAllVerbs.addEventListener('click', function(){
  if ( selectAllVerbs.checked ){
    for( i = 0; i < checkListVerbs.length; i++){
      checkListVerbs[i].checked = "checked";
    }
  } else if ( selectAllVerbs.checked != "checked" ){
    for( i = 0; i < checkListVerbs.length; i++ ){
      checkListVerbs[i].checked = "";
    }
  }
  writeSV();
});

showSchema.addEventListener('click', function(){
  if(showSchemaOn == 0){
    schemaImage.style.opacity = "1";
    showSchema.innerHTML = "Скрыть схему";
    showSchemaOn = 1;
  } else {
    schemaImage.style.opacity = "0";
    showSchema.innerHTML = "Показать схему";
    showSchemaOn = 0;
  }
});

// Заполняет массив 1||0 на основании того какие слова выбраны.
function writeSV(){
  for (let i = 0; i < binaryVerbs.length; i++){
    if (checkListVerbs[i].checked == true){
      binaryVerbs.splice(i, 1, 1);
    } else {
      binaryVerbs.splice(i, 1, 0);
    }
  }
  createArr();
  // console.log(binaryVerbs);
}

// Заполнение массива выбранными глаголами.
function createArr(){
  listVerbEng = [];
  listVerbRus = [];
  listPastSimple = [];
  /*new*/listPron2 = [];
  for (let i = 0, aStart = null, aFinish = null; i < binaryVerbs.length; i++){
    if (binaryVerbs[i] == 1){
      listVerbEng.push(arrVerbEng[i]);
      listPastSimple.push(arrPastSimple[i]);
      /*new*/listPron2.push(arrCompatPron2[i]);
      aStart = i * 10;
      aFinish = aStart + 9;
      
      for (let j = aStart; j <= aFinish ; j++)
      listVerbRus.push(arrVerbRus.slice(j, j + 1).toString());
    }
  }
}

/* ****************************************************** */
function blessRNG(){
  rndX = Math.floor(Math.random() * 9);
  rndPron = Math.floor(Math.random() * 6);
  /*new*/rndPron2 = Math.floor(Math.random() * 6);
  /*new*/for ( ; ; ){
  /*new*/  console.log(rndPron, rndPron2);  // Эпическая проверка местоимений на совместимость
  /*new*/  if ( rndPron == rndPron2 || rndPron == 0 && rndPron2 == 4 || rndPron == 2 && rndPron2 == 4 || rndPron == 2  && rndPron2 == 0) { 
  /*new*/    rndPron2 = Math.floor(Math.random() * 6);
  /*new*/  } else break;
  /*new*/}
  rndVerbEng = Math.floor(Math.random() * (listVerbEng.length));
  /*new*/if (rndX == 0 || rndX == 3 || rndX == 6){
  /*new*/  lol();
  /*new*/} else {
  /*new*/  curQuestionEng = "";
  /*new*/  curQuestionRus = "";
  /*new*/}
  
  if (rndX >= 0 && rndX <= 2){
    rndVerbRus = 10 * rndVerbEng;
  } else if (rndX >= 3 && rndX <= 5){
    rndVerbRus = (rndPron + 1) + (10 * rndVerbEng);
  } else if (rndX >= 6 && rndX <= 8){
    if (rndPron == 0 || rndPron == 1 || rndPron == 4)
      rndVerbRus = 7 + (10 * rndVerbEng);
    else if (rndPron == 2 || rndPron == 3)
      rndVerbRus = 8 + (10 * rndVerbEng);
    else if (rndPron == 5)
      rndVerbRus = 9 + (10 * rndVerbEng);
  }
  step2();
}

function step2(){
  curVerbEng = listVerbEng[rndVerbEng];
  curVerbRus = listVerbRus[rndVerbRus];
  curPronEng = arrPronEng[rndPron];
  curPronRus = arrPronRus[rndPron];
  /*new*/curPronEng2 = arrPronEng2[rndPron2];
  /*new*/if(listPron2[rndVerbEng] == 2) rndPron2 += 6; // Как вывести в сравнение 1 || 0 (может формировать новый массив на манер паст симпл) ещё одна переменная.
  /*new*/curPronRus2 = arrPronRus2[rndPron2];
  /*new*/if(listPron2[rndVerbEng] == 0) { curPronRus2 = ""; curPronEng2 = ""; }; // Убрать второе местоимение в последних трёх словах.


  switch(rndX){
    case 0: curtoDo1 = arrToDo1[1]; 
      curToDo2 = arrToDo2[0]; break;
    case 1: curToDo2 = arrToDo2[1];
      curtoDo1 = arrToDo1[0]; break;
    case 2: curToDo2 = arrToDo2[2];
      curtoDo1 = arrToDo1[0]; break;
    case 3: rndPron < 4 ? curtoDo1 = arrToDo1[2] : curtoDo1 = arrToDo1[3];
      curToDo2 = arrToDo2[0]; break;
    case 5: rndPron < 4 ? curToDo2 = arrToDo2[3] : curToDo2 = arrToDo2[4];
      curtoDo1 = arrToDo1[0]; break;
    case 6: curtoDo1 = arrToDo1[4];
      curToDo2 = arrToDo2[0]; break;
    case 8: curToDo2 = arrToDo2[5];
      curtoDo1 = arrToDo1[0]; break;
    default:
      curtoDo1 = arrToDo1[0];
      curToDo2 = arrToDo2[0];
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

    if(listPastSimple[rndVerbEng] != ""){
      curVerbEng = listPastSimple[rndVerbEng];
      curEnding = "";
    }
  } else {
    curEnding = "";
  }

  (rndX == 0 || rndX == 1 || rndX == 2) ? curToDoRusQ = arrToDoRus[rndPron] : curToDoRusQ = "";
  (rndX == 2 || rndX == 5 || rndX == 8 || rndX == 11) ? curToDoRusN = "не" : curToDoRusN = "";
  (rndX == 0 || rndX == 3 || rndX == 6 || rndX == 9) ? curSign = "?" : curSign = "";
}

/* Вывод */
next.onclick = function step1337(){
  if ( plus() ){
    blessRNG();
    // Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания
    rus.innerHTML = `${curQuestionRus} ${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus} ${curPronRus2}${curSign}`;
    eng.innerHTML = '';
    console.log("Форма-"+rndX, "Местоимение-"+rndPron, "Глагол-"+rndVerbEng, 'Русский-'+rndVerbRus);
    rus.innerHTML.length > 28 ? rus.style.fontSize = "20px" : rus.style.fontSize = "24px";  // если строка слишком длинная - уменьшать шрифт.
  } else {
    alert("Выберите хотя бы один глагол чтобы продолжить"); // Если ни один глагол не выбран
  }
}
answer.onclick = function step228(){
  // Eng  1)вопрос 2)вставка 3)местоимение 4)вставка 5)глагол 6)окончание 7)местоимение 8)знак препинания
  eng.innerHTML = `${curQuestionEng} ${curtoDo1} ${curPronEng} ${curToDo2} ${curVerbEng}${curEnding} ${curPronEng2}${curSign}`;
}

function plus(){
  for(pRes = 0, i = 0; i < binaryVerbs.length; i++){
    pRes += binaryVerbs[i];
  }
  return pRes;
}




/* выбирает для текущего слова подходящие вопросы */
function lol(){
  let X = null;
  listCompatQuestion = [];
  listQuestionEng = [];
  listQuestionRus = [];
  for(let i = 0; i < binaryVerbs.length; i++){
    if (binaryVerbs[i] == 1) listCompatQuestion.push(arrCompatQuestion[i]);
  }

  listCompatQuestion = listCompatQuestion[rndVerbEng].split('');

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




// Первое слово в предложении должно начинаться с большой буквы. Оставить на 3 уровень.