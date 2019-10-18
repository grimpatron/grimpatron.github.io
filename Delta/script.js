let left = document.getElementsByClassName("section-left-pos")[0];
let leftBtn = document.getElementsByClassName("menu-button-left")[0];
let leftBtnClose = document.getElementsByClassName("section-left-button")[0];

let right = document.getElementsByClassName("section-right-pos")[0];
let rightBtn = document.getElementsByClassName("menu-button-right")[0];
let rightBtnClose = document.getElementsByClassName("section-right-button")[0];

let fotorama = document.getElementsByClassName("fotorama")[0];
let schemaBtn = document.getElementsByClassName("schema-button")[0];

let grayFilter = document.getElementsByClassName("shadow-gray-filter")[0];
let statePanelRight;
let statePanelLeft;
let stateSchema;

if ( !!localStorage.getItem('state_schema') == true ) {
  stateSchema = localStorage.getItem('state_schema');
  fotorama.style.opacity = stateSchema;
} else {
  stateSchema = "0";
}

if ( !!localStorage.getItem('panel_state_left') == true ) {
  statePanelLeft = localStorage.getItem('panel_state_left');
  left.style.display = statePanelLeft;
} else {
  statePanelLeft = "block";
}

if ( !!localStorage.getItem('panel_state_right') == true ) {
  statePanelRight = localStorage.getItem('panel_state_right');
  right.style.display = statePanelRight;
} else {
  statePanelRight = "block";
}

if( statePanelLeft == "block" || statePanelRight == "block") {
  grayFilter.style.display = "block";
}


schemaBtn.onclick = function(){
  if (fotorama.style.opacity == "0") {
    fotorama.style.opacity = "1";
  } else {
    fotorama.style.opacity = "0";
  }    
  saveState();
}

rightBtn.onclick = function(){
  if (statePanelRight == "block") {
    right.style.display = "none";
    grayFilter.style.display = "none";
  } else {
    right.style.display = "block";
    grayFilter.style.display = "block";
  }    
  saveState();
}

leftBtn.onclick = function(){
  if (statePanelLeft == "block") {
    left.style.display = "none";
    grayFilter.style.display = "none";
  } else {
    left.style.display = "block";
    grayFilter.style.display = "block";
  }
  saveState();
}

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
  stateSchema = fotorama.style.opacity;
  localStorage.setItem('state_schema', stateSchema);
  statePanelRight = right.style.display;
  localStorage.setItem('panel_state_right', statePanelRight);
  statePanelLeft = left.style.display;
  localStorage.setItem('panel_state_left', statePanelLeft);
}

function closePanel() {
  right.style.display = "none";
  left.style.display = "none";
  grayFilter.style.display = "none";
  saveState();
}


// поебать открыты ли боковые панели в широком формате, в узком они по умолчанию всегда закрыты
// локал сторадж должен хранить состояния боковых панелей, какой урок или какие слова выбраны.