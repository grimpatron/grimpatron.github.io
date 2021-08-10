/* Добавляет разноцветные круги*/
var sss = document.getElementsByClassName("accordion_trigger");
var tog = document.getElementsByClassName("accordion_toggle");
for(var i = 0; i<sss.length; i++){
  var x = document.createElement("span");
  x.style.display = "inline-block";
  x.style.marginRight = "10px";
  switch(tog[i].id.slice(3, 5)){
    case "7S": x.style.backgroundColor = "wheat"; break;
    case "70":
    case "71":
    case "72":
    case "80":
    case "81": x.style.backgroundColor = "yellow"; break;
    case "A0":
    case "01":
    case "02":
    case "12":
    case "30":
    case "32":
    case "40":
    case "50": console.log("\tЕвро"); x.style.backgroundColor = "green"; break;
    case "16":
    case "17":
    case "25": console.log("\tСерийные"); x.style.backgroundColor = "blue"; break;
    case "09":
    case "34": console.log("\tДругие"); x.style.backgroundColor = "red"; break;
    // case /^438121$/: console.log("..."); break;
  }					
  x.style.width = "24px";
  x.style.height = "24px";
  x.style.borderRadius = "50%";
  sss[i].insertBefore(x, sss[i].firstChild);
}
/*
  wheat - автобусы
  yellow - быки
*/

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