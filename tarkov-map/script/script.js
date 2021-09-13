const mapField = document.querySelector('#mapField');
const sniperMode = document.querySelector('#sniperMode');
const scaleMap = document.querySelector('#scaleMap');

let mapWidth = mapField.offsetWidth;
let mapHeight = mapField.offsetHeight;
// let clickX;
// let clickY;

let scaleValues = 1;
let scaleStep = 0.5;
let scaleStepWidth = mapWidth * scaleStep;
let scaleStepHeight = mapHeight * scaleStep;
let movedMap = false;  // перемещение карты.
let secretVariable = 10.1;




        const sline = document.querySelector('.sline');
        const spoint = document.querySelector('.spoint');
        const sdistance = document.querySelector('.sdistance');




function startingValues() {
  mapField.style.cssText = 'left: 0px; top: 0px';
}
startingValues();

// Устанавливает стрелка на место клика по карте.
mapField.addEventListener('mouseup', (e) => {         
  if (sniperMode.checked && movedMap == false) {
    // clickX = e.clientX;
    // clickY = e.clientY;
    shooterPosition.innerHTML = "x = " + e.clientX + "; y = " + e.clientY;
    
    deleteSniperPoint();

    // Добавляет элемент в место клика.
    // var sniperPoint = document.createElement('div');
    spoint.style.display = 'block';
    spoint.style.left = e.offsetX - 10 + 'px';
    spoint.style.top = e.offsetY - 10 + 'px';




    // sniperPoint.className = 'sniperPoint';
    // sniperPoint.id = "sniperPosition";
    // sniperPoint.style.left = e.offsetX + 'px';
    // sniperPoint.style.top = e.offsetY + 'px';
    // mapField.appendChild(sniperPoint);
    mapField.classList.add("at-gunpoint");
  }
});


function deleteSniperPoint() {
  spoint.style.display = 'none';
  sdistance.style.display = 'none';
  // if (document.querySelector('#sniperPosition')) {
  //   sniperPosition.remove();
  // }
}

sniperMode.addEventListener('click', () => {
  if (!sniperMode.checked) {
    deleteSniperPoint();
    clearSniper();
  }
});

function clearSniper() {
  sniperMode.checked = false;
  shooterPosition.innerHTML = "";
  targetPosition.innerHTML = "";
  targetDistance.innerHTML = "";


  mapField.classList.remove("at-gunpoint");
}

function determinationOfDistance(event) {
let mouse_x = mouse_y = 0;
let xxMinus = yyMinus = 0;
let distance = 0;
// trajectory = document.querySelector('.trajectory');
//     Math.round(distance / (mapWidth / 100) * secretVariable)
  if (document.attachEvent != null) {
    mouse_x = window.event.clientX;
    mouse_y = window.event.clientY;
  } else if (!document.attachEvent && document.addEventListener) {
    mouse_x = event.clientX;
    mouse_y = event.clientY;
  }
  if (shooterPosition.innerHTML) {
    
    /* новые координаты */
    let strelokX = spoint.style.left.slice(0, -2);
    let strelokY = spoint.style.top.slice(0, -2);
    var bounds = mapField.getBoundingClientRect();
    var kursorX = event.clientX - bounds.left;
    var kursorY = event.clientY - bounds.top;
    console.log(strelokX, strelokY, kursorX, kursorY);

    targetPosition.innerHTML = "x = " + mouse_x + "; y = " + mouse_y;   // Определяет местоположение курсора
    // xxMinus = (clickX > mouse_x) ? xxMinus = clickX - mouse_x : xxMinus = mouse_x - clickX;
    // yyMinus = (clickY > mouse_y) ? yyMinus = clickY - mouse_y : yyMinus = mouse_y - clickY;
    xxMinus = (strelokX > kursorX) ? xxMinus = strelokX - kursorX : xxMinus = kursorX - strelokX;
    yyMinus = (strelokY > kursorY) ? yyMinus = strelokY - kursorY : yyMinus = kursorY - strelokY;
    distance = Math.sqrt(xxMinus*xxMinus + yyMinus*yyMinus);

    targetDistance.innerHTML = Math.round(distance / (mapWidth / 100) * secretVariable) + 'м';  // Это и будет растоянием до цели





    // if (event.target != spoint && event.target != sdistance && event.target != sline && event.target != document.querySelector('.aside') ) {
    if (event.target == mapField || event.target == spoint ) {

      let pointX = spoint.offsetLeft;
      let pointY = spoint.offsetTop;
  
      let cursorBounds = event.target.getBoundingClientRect();
      let cursorX = event.clientX - cursorBounds.left;
      let cursorY = event.clientY - cursorBounds.top;
  
      let resultX = Math.abs(cursorX - pointX);
      let resultY = Math.abs(cursorY - pointY);
      let dist = Math.sqrt(Math.pow(resultX, 2) + Math.pow(resultY, 2));
  
      let pointBounds = spoint.getBoundingClientRect();
      let distX = pointBounds.left + pointBounds.width / 2;
      let distY = pointBounds.top + pointBounds.height / 2;
      let angle = Math.atan2(event.y - distY, event.x - distX);
  
      if (dist < 50 || event.target == spoint ) {
        sline.style.width = 0 + 'px';
      } else if (dist >= 50 && dist < 100) {
        sline.style.width = (dist * .7) + 'px';
      } else if (dist >= 100 && dist < 200) {
        sline.style.width = (dist * .8) + 'px';
      } else {
        sline.style.width = (dist * .9) + 'px';
      }
  
      spoint.style.transform = 'rotate(' + angle + 'rad)';
      
      if (event.target == mapField) {
        sdistance.style.display = 'block';
        sdistance.style.top = `${cursorY - 40}px`;
        sdistance.style.left = `${cursorX - 30}px`;
        sdistance.innerText = targetDistance.innerText; // повторяет вычисление снизу
      } else {
        sdistance.style.display = 'none';
      }
    }






  }
  cursorPercentageX.innerHTML =  Math.round(event.offsetX / (mapField.offsetWidth / 100)) + "%";
  cursorPercentageXXX = Math.round(event.offsetX / (mapField.offsetWidth / 100));
  cursorPercentageYYY = Math.round(event.offsetY / (mapField.offsetHeight / 100));
  cursorPercentageY.innerHTML =  Math.round(event.offsetY / (mapField.offsetHeight / 100)) + "%";
}
document.onmousemove = determinationOfDistance;



/*    Увеличение карты     */
function mapScaling(elem, handler) {
  if (elem.addEventListener) {
    elem.addEventListener("wheel", handler);
  }
}

mapScaling(mapField, function(e) {
  
  deleteSniperPoint();
  clearSniper();

  var delta = e.deltaY || e.detail || e.wheelDelta;

  let scrollingOffsetX = scaleStepWidth / 100 * cursorPercentageXXX;
  let scrollingOffsetY = scaleStepHeight / 100 * cursorPercentageYYY;
  let mapOffsetLeft = parseInt(mapField.style.left, 10);
  let mapOffsetTop = parseInt(mapField.style.top, 10);
  if (delta > 0 && scaleValues >= 0.6) {
    mapField.style.left = (mapOffsetLeft += scrollingOffsetX) + 'px';
    mapField.style.top = (mapOffsetTop += scrollingOffsetY) + 'px';
    mapWidth -= scaleStepWidth;
    mapHeight -= scaleStepHeight;
    scaleValues -= scaleStep;
  } else if ( delta < 0 && scaleValues <= 9.5) {
    mapField.style.left = (mapOffsetLeft -= scrollingOffsetX) + 'px';
    mapField.style.top = (mapOffsetTop -= scrollingOffsetY) + 'px';
    mapWidth += scaleStepWidth;
    mapHeight += scaleStepHeight;
    scaleValues += scaleStep;
  }
  mapField.style.width =  mapWidth + 'px';
  mapField.style.height =  mapHeight + 'px';
  scaleMap.innerHTML = Math.round(scaleValues * 100) / 100 ;  //- Округляет до десятых

  e.preventDefault();     // отменим прокрутку
});


/*    Перемещение карты     */
let activeElement;
let offsetX =  offsetY = 0;
let container = document.querySelector('#mapField');
let posElemX = container.left;
let posElemY = container.top;

let mDown = (e) => {
  activeElement = e.target;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
}

let mUp = (e) => {
  activeElement = null;
  movedMap = false;
}

let mMove = (e) => {
  if (activeElement){
    if (activeElement.id == 'mapField') {
      activeElement.style.left = (e.pageX - offsetX) + 'px';
      activeElement.style.top = (e.pageY - offsetY) + 'px';
      offsetMapX.innerHTML = activeElement.style.left;
      OffsetMapY.innerHTML = activeElement.style.top;
      movedMap = true;
    } else if (activeElement.id == 'sniperPosition') {
      sniperPosition.style.opacity = 0.2;   // Не смог сделать так, чтобы круг при перемещении был в цетре прицела.
      activeElement.style.left = e.offsetX - activeElement.offsetWidth + 20 + 'px';
      activeElement.style.top = e.offsetY - activeElement.offsetHeight + 'px';
    }
  }
}
container.addEventListener('mousedown', mDown);   // Нажали кнопку мыши
container.addEventListener('mouseup', mUp);       // Отпустили кнопку мыши
document.addEventListener('mousemove', mMove);    // Двигаем курсор

/* Подгружает изображение в более высоком качестве (https://habr.com/ru/post/482820/) */
(() => {
  'use strict';
  const objects = document.getElementsByClassName('asyncImage');
  Array.from(objects).map((item) => {
    const img = new Image();
    img.src = item.dataset.src;
    img.onload = () => {
      item.classList.remove('asyncImage');
      return item.nodeName === 'IMG' ? 
        item.src = item.dataset.src :        
        item.style.backgroundImage = `url(${item.dataset.src})`;
    };
  });
})();


/* рисовалка временная (потом сделать пиздато) */
var canvas = document.getElementById("myCanvas"), 
    context = canvas.getContext("2d");
    context.lineWidth = 5;  // толщина рисовалки
var mouse = { x:0, y:0};
var draw = false;
    
canvas.addEventListener("mousedown", function(e){
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  draw = true;
  context.beginPath();
  context.moveTo(mouse.x, mouse.y);
});

canvas.addEventListener("mousemove", function(e){
  if(draw==true){
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
  }
});

canvas.addEventListener("mouseup", function(e){
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  context.lineTo(mouse.x, mouse.y);
  context.stroke();
  context.closePath();
  draw = false;
});

let checkCanvas = document.querySelector('#checkCanvas')
checkCanvas.addEventListener('click', startCanvas);
function startCanvas() {
  if ( checkCanvas.checked ) {
    canvas.style.display = 'block';
  } else {
    canvas.style.display = 'none';
  }
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
/* Конец рисовалки */


// Использовать https://learn.javascript.ru/drag-and-drop для улучшения перемещения объектов на карте.
// ИСПРАВИТЬ!!!! расчёт ведётся по монитору (курсор и клик по монитору), а нужно по карте (стрелок и курсор на карте)


document.querySelector('#custom-btn').addEventListener('click', () => {
  mapField.style.backgroundImage = "url('img/CustomsMap.jpg')";
  mapField.style.width = '2048px';
  mapField.style.height = '1064px';
  mapWidth = mapField.offsetWidth;
  mapHeight = mapField.offsetHeight;
  secretVariable = 10.1;
  scaleValues = 1;
  deleteSniperPoint();
  clearSniper();
  document.querySelector('.aside__header').innerText = "Таможня";
});
document.querySelector('#shoreline-btn').addEventListener('click', () => {
  mapField.style.backgroundImage = "url('img/ShorelineMap.jpg')";
  mapField.style.width = '2048px';
  mapField.style.height = '1245px';
  mapWidth = mapField.offsetWidth;
  mapHeight = mapField.offsetHeight;
  secretVariable = 17.9;
  scaleValues = 1;
  deleteSniperPoint();
  clearSniper();
  document.querySelector('.aside__header').innerText = "Берег";
});