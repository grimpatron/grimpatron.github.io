'use strict'
/*** Получаем элементы со страницы ***/
let menuBtn = document.querySelector("#menu-button");
let menuWindow = document.querySelector('.modal__menu');
let menuWindowClose = document.querySelector('.modal__menu-btn--close');
let lessonBlockList = document.querySelector('.lesson-block__list');
let showAsidePanel = document.querySelector('#show-aside-panel');

let asideLeft = document.getElementsByClassName("aside-left")[0];
let asideRight = document.getElementsByClassName("aside-right")[0];

let fotorama = document.getElementsByClassName("fotorama")[0];
let schemaBtn = document.getElementsByClassName("schema-button")[0];

let menuOrderBtn = document.getElementById("orderBtn");
let modalOrderBtns = document.getElementsByClassName("modal__order-btn");
let modalOrder = document.getElementsByClassName("modal__order")[0];
let orderBtnClose = document.getElementsByClassName("modal__order-btn--close")[0];

let grayFilter = document.getElementsByClassName("shadow-gray-filter")[0];

let lessonBlock = document.querySelector("#lesson-block");
let checkLesson = document.getElementsByClassName("check-lesson");
let buttonNext = document.querySelector("#next");
let buttonAnswer = document.querySelector("#answer");

/*** Переменные ***/
let xNum;
let mio;            // Menu Is Open - открыто меню или нет.
let displaySchema;  /* попробовать обойтись без этой переменоой напрямую */
let asidePanelDisplay;
const lessonObj = {
  name: ["Первый", "Первый +", "Второй", "Второй +", "Третий"],
  lvl: ["lvl1", "lvl1p", "lvl2", "lvl2p", "lvl3"],
  length: function(){
    return this.name.length;
  }
}

/*** create Object for localStorage ( создание объекта для хранилища ) ***/
if ( !!localStorage.polyglot == false ) {
  localStorage.polyglot = JSON.stringify({
    lesson: 0,            // текущий урок
    order: "",            // порядок слов
    asidePanelStatus: "", // состояние боковых панелей
    stateSchema: "",      // состояние схемы
    menuIsOpen: false,    // было ли открыто меню
    words_lvl1: [],
    words_lvl1p: [],
    words_lvl2: [],
    words_lvl2p: [],
    words_lvl3: []
  });
}

// loading from localStorage ( загрузка параметров их хранилища )
let lsData = JSON.parse( localStorage.polyglot );
( lsData.lesson ) ? xNum = lsData.lesson : xNum = 0;

if ( lsData.order ) {
  modalOrderBtns[lsData.order].classList.add('btn-primary');
} else {
  modalOrderBtns[0].classList.add('btn-primary');
}

if ( lsData.stateSchema ) {
  displaySchema = lsData.stateSchema;
  fotorama.style.opacity = displaySchema;
} else {
  displaySchema = "0";
}

if ( lsData.menuIsOpen ) {
  openMenu();
}


console.log(lsData.asidePanelStatus);
if ( lsData.asidePanelStatus == "block" ) {
  showAsidePanel.checked = "checked";
} else if ( lsData.asidePanelStatus == "none" ){
  showAsidePanel.checked = "";
}

function checkedAsidePanel() {
  console.log(showAsidePanel.checked);
  if ( showAsidePanel.checked ) {
    asideRight.setAttribute('data-display', "block");
    asideLeft.setAttribute('data-display', "block");
  } else {
    asideRight.setAttribute('data-display', "none");
    asideLeft.setAttribute('data-display', "none");
    asidePanelDisplay = "none";
  }
}
checkedAsidePanel();

showAsidePanel.addEventListener('click', () => {
  checkedAsidePanel();
  saveState();
});


// Проверяет какая страница открыта, и перенаправляет на нужную. // Когда останется только одна страница, этот код потеряет смысл.
// let href = ["index.html", "index_lvl1p.html", "index_lvl2.html", "index_lvl3.html"];
// checkPage();
// function checkPage(){
//   var path = window.location.pathname;
//   var page = path.split("/").pop();
//   console.log("Имя страницы - ", page );

//   if ( page != href[xNum] ) {
//     document.location.href = href[xNum];
//   }
// }


/* Идиотские функции выбора порядка */
function ruEn() {
  for ( let i = 0; i < modalOrderBtns.length ; i++ ) {
    modalOrderBtns[i].classList.remove('btn-primary');    
  }
    modalOrderBtns[0].classList.add('btn-primary'); 
}
function enRu() {
  for ( let i = 0; i < modalOrderBtns.length ; i++ ) {
    modalOrderBtns[i].classList.remove('btn-primary');    
  }
    modalOrderBtns[1].classList.add('btn-primary'); 
}
function mixer() {
  for ( let i = 0; i < modalOrderBtns.length ; i++ ) {
    modalOrderBtns[i].classList.remove('btn-primary');    
  }
    modalOrderBtns[2].classList.add('btn-primary'); 
}


// create lesson list ( создание списка уроков )
for (let i = 0; i < lessonObj.length(); i++) {
  let eLabel = document.createElement("label");
  let eInput = document.createElement("input");
  let nText = document.createTextNode (lessonObj.name[i]);
  eInput.className = "check-lesson";
  eInput.setAttribute("type", "radio");
  eInput.setAttribute("name", "lesson");
  eInput.setAttribute("id", lessonObj.lvl[i]);
  eInput.setAttribute("onclick", lessonObj.lvl[i]+".generate()");
  if (i == 0) eInput.setAttribute("checked", "checked");
  eLabel.className = "label-lesson";
  eLabel.appendChild(eInput);
  eLabel.appendChild(nText);
  lessonBlockList.appendChild(eLabel);
}


lessonBlockList.addEventListener("click", writeSV, false);
function writeSV() {
  if (event.target.className === "label-lesson") {
    event.target.childNodes[0].checked = true;
    mio = true;
    saveLesson();
  }
}
checkLesson[xNum].checked = true;



createOnclick();
function createOnclick(){
  let load = "";
  switch ( xNum ) {
    case 0: load = "level1"; break;
    case 1: load = "level1p"; break;
    case 2: load = "level2"; break;
    case 3: load = "level2p"; break;
    case 4: load = "level3"; break;
  }
  buttonNext.setAttribute("onclick", load+".next()");
  buttonNext.setAttribute("data-next", load);
  buttonAnswer.setAttribute("onclick", load+".answer()");
  buttonNext.setAttribute("data-answer", load);
}


// модальное окно
menuOrderBtn.onclick = function(){
  modalOrder.style.display = "block";
  grayFilter.style.display = "block";
  saveState();
}
orderBtnClose.onclick = function(){
  modalOrder.style.display = "none";
  grayFilter.style.display = "none";
  saveState();
}


// Клики мышкой ( события )
schemaBtn.onclick = function(){
  if (fotorama.style.opacity == "0") {
    fotorama.style.opacity = "1";
  } else {
    fotorama.style.opacity = "0";
  }
  saveState();
}

menuBtn.onclick = function(){
  if (menuWindow.style.display == "block") {
    menuWindow.style.display = "none";
    grayFilter.style.display = "none";
  } else {
    menuWindow.style.display = "block";
    grayFilter.style.display = "block";
  }
}

grayFilter.addEventListener('click', closeMenu);

menuWindowClose.addEventListener('click', closeMenu);

function closeMenu() {
  menuWindow.style.display = "none";
  modalOrder.style.display = "none";
  grayFilter.style.display = "none";
  mio = false;
  saveState();
}

function openMenu() {
  menuWindow.style.display = "block";
  grayFilter.style.display = "block";
  mio = false;
}

function saveState() {
  let zaraza =  JSON.parse( localStorage.polyglot );
  
  for ( let i = 0; i < modalOrderBtns.length ; i++ ){
    if ( modalOrderBtns[i].classList.contains('btn-primary') ) {
      zaraza.order = i;      
    }
  }

  displaySchema = fotorama.style.opacity;
  zaraza.stateSchema = displaySchema;

  asidePanelDisplay = asideLeft.getAttribute('data-display');
  zaraza.asidePanelStatus = asidePanelDisplay;
  
  zaraza.menuIsOpen = mio;

  localStorage.polyglot = JSON.stringify( zaraza );
}

// save Lesson number ( сохранения номера урока )
function saveLesson(){
  for (let i = 0; i < lessonObj.length(); i++) {
    if (checkLesson[i].checked == true) xNum = i;
    // if (checkLesson[i].checked == true) xNum = checkLesson[i].id;  // вместо цифры сохраняет строку
  }
  let data =  JSON.parse( localStorage.polyglot );
  data.menuIsOpen = true;
  data.lesson = xNum;
  data.menuIsOpen = mio;
  localStorage.polyglot = JSON.stringify( data );

  location.reload();                          ////////// довести до ума
  // document.location.href = href[xNum];     // перезагружает страницу
}


/*** *** Функции для уроков *** ***/

/*** Проверка уровня урока ***/
function levelCheck() {
  let checkLesson = document.getElementsByClassName("check-lesson");  // нужна ли эта строка вообще???
  for (let i = 0; i < lessonObj.length(); i++) {
    if (checkLesson[i].checked == true) {
       return checkLesson[i].id;
    }
  }
}

/*** Формируем массив второй формы нерпавильных глаголав (обычный глагол - пустая строка) ***/
function separateIrregularVerbs(arrVerbEng) {
  let arrPastSimple = [];
  arrVerbEng.forEach(function callback(curValue, index, array) {
    if ( curValue.includes('(') ) {
      arrPastSimple.push( curValue.substring( curValue.indexOf('(') + 1, curValue.length - 1) );
      array[index] = curValue.substring( 0, curValue.indexOf('(') );
    } else {
      arrPastSimple.push("");
    }
  });
  return arrPastSimple;
}

/*** Выводим все слова из упражнения в виде списка ***/
function createListOfAllWords(parentNode, arrWord) {
  for (let i = 0; i < arrWord.length; i++) {
    let eLabel = document.createElement("label");
    let eInput = document.createElement("input");
    eInput.className = "check-icon";
    eInput.setAttribute("type", "checkbox");
    eLabel.className = "words-block__list-select";
    eLabel.appendChild(eInput);
    eLabel.appendChild(document.createTextNode(arrWord[i]));
    parentNode.appendChild(eLabel);
  }
}

/*** Отмечаются выбранные слова (сохранённые в localStorage) ***/
function selectedWordsInList(arrVerbEng){
  let checkListVerbs = document.getElementsByClassName("check-icon");
  let dat =  JSON.parse( localStorage.polyglot );
  let lvlWords = "words_";
  let binaryVerbs;
  switch ( dat.lesson ) {
    case 0: lvlWords += "lvl1"; break;
    case 1: lvlWords += "lvl1p"; break;
    case 2: lvlWords += "lvl2"; break;
    case 3: lvlWords += "lvl2p"; break;
    case 4: lvlWords += "lvl3"; break;
  } // Сделать что-то с этим: сохранять урок не как цифру а как строку! 
  console.log( lvlWords, dat[lvlWords], dat[lvlWords].length);
  if (dat[lvlWords].length == arrVerbEng.length) {
    binaryVerbs = dat[lvlWords];
    for (let i = 0; i <= binaryVerbs.length; i++) {
      if (binaryVerbs[i] == 1) {
        checkListVerbs[i].checked = "checked";
      }
    }
  } else {
    binaryVerbs = new Array(arrVerbEng.length);
    checkListVerbs[0].setAttribute("checked", "checked"); // выбор первого слова, если нет сохранённых
  }
  return binaryVerbs;
}

/*** вешает событие которое выбирает или снимает выбор у всех глаголов ***/
function eventSelectAllWords( checkListVerbs ){
  let selectAllWords = document.getElementById("select-all-verbs");
  selectAllWords.addEventListener('click', function() {
    if (selectAllWords.checked) {
      for (let i = 0; i < checkListVerbs.length; i++) {
        checkListVerbs[i].checked = "checked";
      }
    } else if (selectAllWords.checked != "checked") {
      for (let i = 0; i < checkListVerbs.length; i++) {
        checkListVerbs[i].checked = "";
      }
    }
  });
}

/*** преверяет порядок языка выбраный в данный момент ***/
function checkLanguageOrder(){
  let order;

  for (let i = 0; i < modalOrderBtns.length; i++) {
    if ( modalOrderBtns[i].classList.contains('btn-primary') ) order = modalOrderBtns[i].id;
  }

  return order;
}

/*** Проверка на наличие выбранного глагола ***/
function plus(binaryVerbs) {
  for (let i = 0; i < binaryVerbs.length; i++) {
    if (binaryVerbs[i] == 1) return true;
  }
  return false
}

/*** Сохранение выбранных слов ***/
function saveWords(lvlStr, binaryVerbs) {
  let data = JSON.parse( localStorage.polyglot || '{}');
  data[lvlStr] = binaryVerbs;
  localStorage.polyglot = JSON.stringify( data );
}

/*** Оформляет строку в предложение ***/
function conversionToSentence( gnrStr, rndX ){      // gnrStr - generated string

  for ( ; ; ) {
    if (gnrStr.includes('_')) {
      gnrStr = gnrStr.replace("_", " ");    // убирает все нижние подчёркивания в строке.
    } else if (gnrStr[0] == ' ') {
      gnrStr = gnrStr.slice(1);             // если первый символ пуская строка, убирает его!
    } else if (gnrStr.slice(-1) == ' ') {
      gnrStr = gnrStr.slice(0, -1);         // если последний символ пуская строка, убирает его!
    } else break;
  }

  gnrStr = gnrStr[0].toUpperCase() + gnrStr.slice(1);

  if (rndX == 0 || rndX == 3 || rndX == 6 || rndX == 9) {
    gnrStr += "?";
  } else {
    gnrStr += ".";
  }

  return gnrStr;
}

// 258 строк, нужно оптимизировать!!!     // блин, уже 394 строки!!!

// фунционал:
// 1) показывать текущий урок и выбранные слова (только на десктоп).
// 1 реализация) хранить в js сгенерированный код, который выводить и в мени и на боковую панель. При закрытии меню код меню попадает в боковые панели.
// 2) если закрывать меню и не выбрано ни одного слова предупредить, что в меню нужно выбрать хотя бы одно слово.

// пересобрать localStorage с коментариями!

// из старой версии вырезать функционал который запоминал текущую страницу и при открытие перенаправлял на нужную страницу.




function blessRNG(params) {
  // в качестве параметров принимает объект!
  // в 3 уровне заменить глаголы на существетильные!

  let rndVal = {}                                                 // random values - объект случайных значений

  rndVal['cell'] = Math.floor(Math.random() * 9);                 // time and form - выбор времени и формы.
  rndVal['verb'] = Math.floor(Math.random() * params.verbList);   // verb - выбор глагола.
  rndVal['order'] = checkLanguageOrder();                         // устанавливает порядок языка.
  rndVal['mix'] = Math.floor(Math.random() * 2);                  // mix - случайный порядок языка.

  if (params.to) {
    rndVal['to'] = Math.floor(Math.random() * 2);
  }
  if (params.adverb) {
    rndVal['adverb'] = Math.floor(Math.random() * 2);             // adverb - наречие "с" или "без"
  }
  if (params.verb2) {
    rndVal['verb2'] = Math.floor(Math.random() * params.verb2.length);
  }

  for (let i = 1; i <= params.pronCnt; i++) {
    rndVal['pron' + i] = Math.floor(Math.random() * 6);     // pronouns - местоимение.
  }
  
  return rndVal;
}


/***  Изменение глагола (зависит от времени и местоимения) ***/
function changeVerb(curVerbEng, listPastSimple, rndVal) {
  // окончаниями    s || es || ies
  if (rndVal.cell == 4 && rndVal.pron1 >= 4) {
    if (  /o$/.test(curVerbEng)   ||
          /s$/.test(curVerbEng)   ||
          /sh$/.test(curVerbEng)  ||
          /ss$/.test(curVerbEng)  ||
          /tch$/.test(curVerbEng) ||
          /z$/.test(curVerbEng)   ||
          /ch$/.test(curVerbEng)
    ) {
      curVerbEng = curVerbEng+'es';
    } else if ( /[aeiouy]y$/.test(curVerbEng) ) {
      curVerbEng = curVerbEng+'ys';
    } else if (/[^aeiouy]y$/.test(curVerbEng)) {
      curVerbEng = curVerbEng.substring(0, curVerbEng.length - 1)+'ies';
    } else {
      curVerbEng = curVerbEng+'s';
    }
  // окончаниями    d || ed
  } else if (rndVal.cell == 7) {
    if (/e$/.test(curVerbEng)) {
      curVerbEng = curVerbEng+'d';
    } else {
      curVerbEng = curVerbEng+'ed';
    }

    // замена на неправильный глагол
    if (listPastSimple[rndVal.verb] != "") {
      curVerbEng = listPastSimple[rndVal.verb];
    }
  }
  return curVerbEng;
}
