/* Добавляет красные круги (в будущем убрать)*/
var sss = document.getElementsByClassName("accordion_trigger");
for(var i = 0; i<sss.length; i++){
  var x = document.createElement("span");
  x.style.display = "inline-block";
  x.style.marginRight = "10px";
  x.style.backgroundColor = "red";
  x.style.width = "25px";
  x.style.height = "25px";
  x.style.borderRadius = "50%";
  x.style.verticalAlign = "top";
  sss[i].insertBefore(x, sss[i].firstChild);
}

/* Опеределяет что является операцией и добавляет стили */
let carCollectionn = document.querySelectorAll('.accordion_item');	// коллекция из всех машин
for (let w = 0; w<carCollectionn.length; w++){
  let ul = carCollectionn[w].childNodes[4];	          //выбор машины
  let li = ul.querySelectorAll('li');						                    //выбор всех строк
  
  for (let v = 0; v<li.length; v++){

    if (li[v].firstChild.nodeType == 1){
      // let r = li[v].firstChild;
      li[v].className += 'operation-wrap';

      // if (r.innerHTML.length == 1) {
      //   r.className += 'operation-name';
      // } else if (r.innerHTML.length == 2) {
      //   r.className += 'operation-detail';
      // }
    }
  }
}