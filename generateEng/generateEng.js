let eng = document.getElementById("eng");
let rus = document.getElementById("rus");
let next = document.getElementById("next");
let answer = document.getElementById("answer");


let X = null; // orderRnd       // X = type // Y = time
let pronRnd = null;
let verbRnd = null;
let verbRusRnd = null;
let ending = null;
let toDo2 = null;
let toDo1 = null;
let rusQ = "";
let rusN = "";
let pMark = "";
let pronEng = ["I", "You", "We", "They", "He", "She"]; // pronouns English
let pronRus = ["Я", "Ты", "Мы", "Они", "Он", "Она"]; // pronouns Russian
let WillRus = ["буду","будешь","будем","будут","будет","будет"];
let toDo1Arr = ["", "Will", "Do", "Does", "Did"];                       // вспомогательное слово перед местоимением
let toDo2Arr = ["", "Will", "Will Not", "Don't", "Does't", "Did'nt"];  // вспомогательное слово после местоимения
let endingArr = ["","s","es","d","ed"];
let allVerbsEng = "love work live open close start finish see(saw) come(came) go(went) know(knew) think(thought)";
let allVerbsRus = "любить люблю любишь любим любят любит любит любил любили любила работать работаю работаешь работаем работают работает работает работал работали работала жить живу живёшь живём живут живёт живёт жил жили жила открыть открываю открываешь открываем открывают открывает открывает открывал открывали открывала закрыть закрываю закрываешь закрываем закрывают закрывает закрывает закрывал закрывали закрывала начинать начинаю начинаешь начинаем начинают начинает начинает начинал начинали начинала заканчивать заканчиваю заканчиваешь заканчиваем заканчивают заканчивает заканчивает заканчивал заканчивали заканчивала видеть видел видишь видим видят видит видит видел видели видела приходить приду придёшь придём придут придёт придёт пришёл пришли пришла идти иду идёшь идём идут идёт идёт шёл шли шла знать знаю знаешь знаем знают знает знает знал знали знала думать думаю думаешь думаем думают думает думает думал думали думала";
let verbsEngArr = [];
let verbsRusArr = [];
let currentEnglishVerb = "";
allVerbsEng = allVerbsEng.split(' ');
allVerbsRus = allVerbsRus.split(' ');

function blessRNG(){
  X = Math.floor(Math.random() * 9);
  pronRnd = Math.floor(Math.random() * 6);
  verbRnd = Math.floor(Math.random() * (verbsEngArr.length));
  step2();
}

function step2(){
  ebaka();
  currentEnglishVerb = verbsEngArr[verbRnd];
  if (X == 0 || X == 1 || X == 2) {
    verbRusRnd = 10 * verbRnd;
  } else if (X == 3 || X == 4 || X == 5){
    verbRusRnd = (pronRnd + 1) + (10 * verbRnd);
  } else if (X == 6 || X == 7 || X == 8){

    if (pronRnd == 0 || pronRnd == 1 || pronRnd == 4){
      verbRusRnd = 7 + (10 * verbRnd);
    } else if (pronRnd == 2 || pronRnd == 3){
      verbRusRnd = 8 + (10 * verbRnd);
    } else if (pronRnd == 5){
      verbRusRnd = 9 + (10 * verbRnd);
    }
  }

  if (X == 0){
    toDo1 = toDo1Arr[1];
  } else if (X == 3 && pronRnd < 4){
    toDo1 = toDo1Arr[2];
  } else if (X == 3 && pronRnd >= 4 ){
    toDo1 = toDo1Arr[3];
  } else if (X == 6 ){
    toDo1 = toDo1Arr[4];
  } else {
    toDo1 = toDo1Arr[0];
  }

  if (X == 1){
    toDo2 = toDo2Arr[1];
  } else if (X == 2){
    toDo2 = toDo2Arr[2];
  } else if (X == 5 && pronRnd < 4){
    toDo2 = toDo2Arr[3];
  } else if (X == 5 && pronRnd >= 4 ){
    toDo2 = toDo2Arr[4];
  } else if (X == 8 ){
    toDo2 = toDo2Arr[5];
  } else {
    toDo2 = toDo2Arr[0];
  }

  if (X == 4 && pronRnd >= 4){
    // выбирает между окончаниями    s || es
    if (currentEnglishVerb == "finish" || currentEnglishVerb == "go"){
      ending = endingArr[2];
    } else {
      ending = endingArr[1];      
    }
  } else if (X == 7){
    // выбирает между окончаниями    d || ed
    if(currentEnglishVerb.charAt(currentEnglishVerb.length-1) == 'e'){
      ending = endingArr[3];
    } else {
      ending = endingArr[4];
    }
    if(pastSimple[verbRnd] != ""){
      currentEnglishVerb = pastSimple;
      ending = "";
    }
  } else {
    ending = ""
  }
  (X == 0 || X == 1 || X == 2) ? rusQ = WillRus[pronRnd] : rusQ = "";
  (X == 2 || X == 5 || X == 8 || X == 11) ? rusN = "не" : rusN = "";
  (X == 0 || X == 3 || X == 6 || X == 9) ? pMark = "?" : pMark = "";
}

next.onclick = function step1(){
  if ( plus() ){
    blessRNG();
    rus.innerHTML = `${pronRus[pronRnd]} ${rusN} ${rusQ} ${verbsRusArr[verbRusRnd]}${pMark}`;
    eng.innerHTML = '';
    console.log("X-"+X, "местоимение-"+pronRnd, "глагол-"+verbRnd, 'verbRusRnd'+verbRusRnd);
  } else {
    alert("Выберите хотя бы один глагол чтобы продолжить");// Если ни одно слово не выбрано выводит модальное окно с надписью выберите глагол!!.
  }
}

function plus(){
  let resultat = 0;
  for(i = 0; i < currentVerbs.length; i++){
    resultat += currentVerbs[i];
  }
  return resultat;
}


answer.onclick = function step2(){
  eng.innerHTML = `${toDo1} ${pronEng[pronRnd]} ${toDo2} ${currentEnglishVerb}${ending}${pMark}`;
}
// Eng  1)вставка 2)местоимение 3)вставка 4)глагол 5)окончание 6)знак препинания
// Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания



let currentVerbs = new Array(allVerbsEng.length);    // Array of numbers (verbs)
let selectVerbs = document.getElementsByClassName("check-icon");
let selectBlock = document.querySelector("#select-block");

// цикл который заполнит массив 1||0 на основании того какие слова выбраны.
function writeSV(){
  for (let i = 0; i < currentVerbs.length; i++){
    if (selectVerbs[i].checked == true){
      currentVerbs.splice(i, 1, 1);
    } else {
      currentVerbs.splice(i, 1, 0);
    }
  }
  createArr();
}

// Заполнение массива только теми глаголами которые соответсвуют выбранным.
function createArr(){
  let aStart = null;
  let aFinish = null;
  verbsEngArr = [];
  verbsRusArr = [];
  for (let i = 0, aCurrent = 0; i < currentVerbs.length; i++){
    if (currentVerbs[i] == 1){
      verbsEngArr.push(allVerbsEng[i]);
      aStart = i * 10;
      aFinish = aStart + 9;
      
      for (let qq = aStart; qq <= aFinish ; qq++)
      verbsRusArr.push(allVerbsRus.slice(qq, qq+1).toString());
    }
    aCurrent = aFinish + 1;
  }
}

// События при котором будет пересобираться массив
selectBlock.addEventListener("click", function(event){
  // event.stopPropagation();
  writeSV();
  console.log(currentVerbs);
}, true);


// вывести все имеющиеся глаголы в виде списка, чтобы была возможность выбрать нужные.
function generateList(){
  for(let i = 0; i < allVerbsEng.length; i++){
    let vLabel = document.createElement("label");
    let vInput = document.createElement("input");
    let vText = document.createTextNode (allVerbsEng[i]);
    vInput.className = "check-icon";
    vInput.setAttribute("type", "checkbox");
    if( i == 0){
      vInput.setAttribute("checked", "checked");
    }
    vLabel.className = "check-word";
    vLabel.appendChild(vInput);
    vLabel.appendChild(vText);
    selectBlock.appendChild(vLabel);
  }
  writeSV();
}
generateList();

// добавить кнопку выбрать/сбросить все слова. (хотя бы одно слово всегда должно быть выбрано).
let selectAllVerbs = document.getElementById("select-all-verbs");
let verb = document.getElementsByClassName("check-icon");
selectAllVerbs.addEventListener('click', function(){
  if ( selectAllVerbs.checked){
    for( i = 0; i < verb.length; i++){
      verb[i].checked = "checked";
    }
  } else if ( selectAllVerbs.checked != "checked"){
    for( i = 0; i < verb.length; i++){
      verb[i].checked = "";
    }
  }
  writeSV();
});


// вибираем вторую форму неправильных глаголов
var pastSimpleArr = [];
var pastSimple = [];
for (i = 0; i < allVerbsEng.length ; i++){
  let x = allVerbsEng[i] + "";  // если убрать кавычки "" - тогда ругается
  if ( x.includes('(') == true ){
    pastSimpleArr[i] = x.substring(x.indexOf("(") + 1, x.length - 1);
    allVerbsEng[i] = allVerbsEng[i].replace(pastSimpleArr[i], "" ).replace("()", "" )   // пиздец какие кастыли, но пока ничего лучше не придумал.
  } else {
    pastSimpleArr[i] = "";
  }

  // console.log(allVerbsEng[i], pastSimpleArr[i]);
}

// срабатывание неправильных глаголов в прошедшем времени.
function ebaka(){
  pastSimple = [];
  for (let i = 0; i < currentVerbs.length; i++){
    
    if (currentVerbs[i] == 1){
      pastSimple.push(pastSimpleArr[i]);
    }
  }  
}


// показать схему
var schema = document.getElementById("schema");
var showSchema = document.getElementById("show-schema");
var showSchemaOn = 0;
schema.src="";
showSchema.addEventListener('click', function(){
  if(showSchemaOn == 0){
    schema.src="image/poliglot-1mini.jpg";
    showSchema.innerHTML = "Скрыть схему";
    showSchemaOn = 1;
  } else {
    schema.src="";
    showSchema.innerHTML = "Показать схему";
    showSchemaOn = 0;
  }

})

// Ну и наконец оптимизация всего кода и нейминг