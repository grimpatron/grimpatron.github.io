
let menuBtn = document.getElementsByClassName("menu-button-lesson")[0];

let left = document.getElementsByClassName("section-left-pos")[0];
let leftBtn = document.getElementsByClassName("menu-button-left")[0];
let leftBtnClose = document.getElementsByClassName("section-left-button")[0];

let right = document.getElementsByClassName("section-right-pos")[0];
let rightBtn = document.getElementsByClassName("menu-button-right")[0];
let rightBtnClose = document.getElementsByClassName("section-right-button")[0];

let fotorama = document.getElementsByClassName("fotorama")[0];
let schemaBtn = document.getElementsByClassName("schema-button")[0];

let menuOrderBtn = document.getElementById("orderBtn");
let modalOrderBtns = document.getElementsByClassName("modal-order-btn");
let modalOrder = document.getElementsByClassName("modal-order")[0];
let orderBtnClose = document.getElementsByClassName("modal-order-btn__close")[0];

let grayFilter = document.getElementsByClassName("shadow-gray-filter")[0];


//* **************** *//
let lessonList = ["Первый", "Первый (дополненный)", "Второй", "Третий"];
let href = ["index.html", "index_lvl1p.html", "index_lvl2.html", "index_lvl3.html"];
let zaza = ["level1.next()", "level1p.next()", "level2.next()", "level3.next()"]  ////////// довести до ума
let lessonBlock = document.querySelector("#lesson-block");
let checkLesson = document.getElementsByClassName("check-lesson");
let buttonNext = document.querySelector("#next");
let buttonAnswer = document.querySelector("#answer");

let xNum;
let curOrder;
let displaySchema;
let displayPanelRight;
let displayPanelLeft;

// create Object for localStorage ( создание объекта для хранилища )
if ( !!localStorage.polyglot == false ) {
  localStorage.polyglot = JSON.stringify({
    lesson: "",
    order: "",
    stateSchema: "",
    statePanelRight: "",
    statePanelLeft: "",
    words_lvl1: [],
    words_lvl1p: [],
    words_lvl2: [],
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

if ( lsData.statePanelLeft ) {
  displayPanelLeft = lsData.statePanelLeft
  left.style.display = displayPanelLeft;
} else {
  displayPanelLeft = "block";
}

if ( lsData.statePanelRight ) {
  displayPanelRight = lsData.statePanelRight;
  right.style.display = displayPanelRight;
} else {
  displayPanelRight = "block";
}

if( displayPanelLeft == "block" || displayPanelRight == "block") {
  grayFilter.style.display = "block";
}


// Проверяет какая страница открыта, и перенаправляет на нужную. // Когда останется только одна страница, этот код потеряет смысл.
checkPage();
function checkPage(){
  var path = window.location.pathname;
  var page = path.split("/").pop();
  console.log("Имя страницы - ", page );

  if ( page != href[xNum] ) {
    document.location.href = href[xNum];
  }
}


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
for (let i = 0; i < lessonList.length; i++) {
  let eLabel = document.createElement("label");
  let eInput = document.createElement("input");
  let nText = document.createTextNode (lessonList[i]);
  eInput.className = "check-lesson";
  eInput.setAttribute("type", "radio");
  eInput.setAttribute("name", "lesson");
  if (i == 0) eInput.setAttribute("checked", "checked");
  eLabel.className = "label-lesson";
  eLabel.appendChild(eInput);
  eLabel.appendChild(nText);
  lessonBlock.appendChild(eLabel);
}
lessonBlock.addEventListener("click", writeSV, false);
function writeSV() {
  console.log(123123123);
  if (event.target.className === "label-lesson") {
    event.target.childNodes[0].checked = true;
    saveLesson();
  }
}
checkLesson[xNum].checked = true;



// 62 string


createOnclick();
function createOnclick(){
  let load = "";
  switch ( xNum ) {
    case 0: load = "level1"; break;
    case 1: load = "level1p"; break;
    case 2: load = "level2"; break; 
    case 3: load = "level3"; break;
  }
  buttonNext.setAttribute("onclick", load+".next()");
  buttonAnswer.setAttribute("onclick", load+".answer()");
}


// модальное окно
menuOrderBtn.onclick = function(){
  modalOrder.style.display = "block";
  saveState();
}
orderBtnClose.onclick = function(){
  modalOrder.style.display = "none";
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
  if (displayPanelRight == "block") {
    left.style.display = "none";
    right.style.display = "none";
    grayFilter.style.display = "none";
  } else {
    left.style.display = "block";
    right.style.display = "block";
    grayFilter.style.display = "block";
  }    
  saveState();
}

// rightBtn.onclick = function(){
//   if (displayPanelRight == "block") {
//     right.style.display = "none";
//     grayFilter.style.display = "none";
//   } else {
//     right.style.display = "block";
//     grayFilter.style.display = "block";
//   }    
//   saveState();
// }

// leftBtn.onclick = function(){
//   if (displayPanelLeft == "block") {
//     left.style.display = "none";
//     grayFilter.style.display = "none";
//   } else {
//     left.style.display = "block";
//     grayFilter.style.display = "block";
//   }
//   saveState();
// }

leftBtnClose.onclick = function(){
  closePanel();
}
rightBtnClose.onclick = function(){
  closePanel();
}
grayFilter.onclick = function(){
  closePanel();
}


function saveState() {
  
  let zaraza =  JSON.parse( localStorage.polyglot );
  
  for ( let i = 0; i < modalOrderBtns.length ; i++ ){
    if ( modalOrderBtns[i].classList.contains('btn-primary') ) {
      curOrder = i;      
    }
  }
  zaraza.order = curOrder;

  displaySchema = fotorama.style.opacity;
  zaraza.stateSchema = displaySchema;

  displayPanelLeft = left.style.display;
  zaraza.statePanelLeft = displayPanelLeft;

  displayPanelRight = right.style.display;
  zaraza.statePanelRight = displayPanelRight;

  localStorage.polyglot = JSON.stringify( zaraza );
}

function closePanel() {
  right.style.display = "none";
  left.style.display = "none";
  grayFilter.style.display = "none";
  saveState();
}


// save Lesson number ( сохранения номера урока )
function saveLesson(){
  for (let i = 0; i < lessonList.length; i++) {
    if (checkLesson[i].checked == true) xNum = i;
  }
  let data =  JSON.parse( localStorage.polyglot );
  data.lesson = xNum;
  localStorage.polyglot = JSON.stringify( data );

  document.location.href = href[xNum];    // перезагружает страницу
  // buttonNext.setAttribute("onclick", zaza[xNum]);  ////////// довести до ума
  // createOnclick();
}
// поебать открыты ли боковые панели в широком формате, в узком они по умолчанию всегда закрыты
