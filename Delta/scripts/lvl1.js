var level1 = (function (){
  let outputEng = document.getElementById("eng");
  let outputRus = document.getElementById("rus");
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
  let arrPastSimple = []; // для фторой формы нерпавильных глаголав (обычный глагол - пустая строка)
  let arrPronEng = ["I", "you", "we", "they", "he", "she"];   // pronouns English
  let arrPronRus = ["я", "ты", "мы", "они", "он", "она"];     // pronouns Russian
  let arrToDo = ["", "will", "do", "does", "did", "will not", "don't", "doesn't", "didn't"]; // вспомогательное слово перед местоимением
  let arrToDoRus = ["буду","будешь","будем","будут","будет","будет"];
  let arrEnding = ["", "s", "es", "d", "ed"];
  let arrVerbEng = "love work live open close start finish see(saw) come(came) go(went) know(knew) think(thought)".split(' ');
  let arrVerbRus = "любить люблю любишь любим любят любит любит любил любили любила работать работаю работаешь работаем работают работает работает работал работали работала жить живу живёшь живём живут живёт живёт жил жили жила открывать открываю открываешь открываем открывают открывает открывает открывал открывали открывала закрывать закрываю закрываешь закрываем закрывают закрывает закрывает закрывал закрывали закрывала начинать начинаю начинаешь начинаем начинают начинает начинает начинал начинали начинала заканчивать заканчиваю заканчиваешь заканчиваем заканчивают заканчивает заканчивает заканчивал заканчивали заканчивала видеть вижу видишь видим видят видит видит видел видели видела приходить приду придёшь придём придут придёт придёт пришёл пришли пришла идти иду идёшь идём идут идёт идёт шёл шли шла знать знаю знаешь знаем знают знает знает знал знали знала думать думаю думаешь думаем думают думает думает думал думали думала".split(' ');
  
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
    eLabel.className = "label-word";
    eLabel.appendChild(eInput);
    eLabel.appendChild(nText);
    selectBlock.appendChild(eLabel);
  }
  
  var data =  JSON.parse( localStorage.polyglot || '{}');
  // select words from localStorage (выбор слов из localStorage)
  if ( data.words_lvl1.length == arrVerbEng.length ) {
    binaryVerbs = data.words_lvl1;
    for (let i = 0; i <= binaryVerbs.length; i++) {
      if (binaryVerbs[i] == 1) {
        checkListVerbs[i].checked = "checked";
      } else {
        // checkListVerbs[i].removeAttribute(checked); // удаляет атрибут checked если слово не было выбрано
      }
    }
    console.log(binaryVerbs);
  } else {
    console.log("сохранений не обнаружено!");             // потом убрать
    binaryVerbs = new Array(arrVerbEng.length);
    checkListVerbs[0].setAttribute("checked", "checked"); // перенёс назначение первого слова, сперва проверяю есть ли сохранения
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
  
  // Составление списков на основании выбранных глаголов.
  function writeSV() {
    listVerbEng = [];
    listVerbRus = [];
    listPastSimple = [];
  
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
        aStart = i * 10;
        aFinish = aStart + 9;
        
        for (let j = aStart; j <= aFinish ; j++) {
          listVerbRus.push( arrVerbRus.slice(j, j + 1).toString() );        
        }
      }
    }
    console.log(binaryVerbs); saveWords();
  }
  
  /* ****************************************************** */
  function blessRNG() {
    let rndX = Math.floor(Math.random() * 9); //order time and form
    let rndPron = Math.floor(Math.random() * 6); // random pronouns
    let rndVerbs = Math.floor(Math.random() * listVerbEng.length);
    step2(rndX, rndPron, rndVerbs);
    console.log("Форма-"+rndX, "Местоимение-"+rndPron, "Глагол-"+rndVerbs);
  }
  
  function step2(rndX, rndPron, rndVerbs) {
    curVerbEng = listVerbEng[rndVerbs];
    curVerbRus = listVerbRus[getVerbRus(rndX, rndPron, rndVerbs)];
    curPronEng = arrPronEng[rndPron];
    curPronRus = arrPronRus[rndPron];
  
    switch (rndX) {
      case 0: curtoDo1 = arrToDo[1]; 
        curToDo2 = arrToDo[0]; break;
      case 1: curToDo2 = arrToDo[1];
        curtoDo1 = arrToDo[0]; break;
      case 2: curToDo2 = arrToDo[5];
        curtoDo1 = arrToDo[0]; break;
      case 3: (rndPron < 4) ? curtoDo1 = arrToDo[2] : curtoDo1 = arrToDo[3];
        curToDo2 = arrToDo[0]; break;
      case 5: (rndPron < 4) ? curToDo2 = arrToDo[6] : curToDo2 = arrToDo[7];
        curtoDo1 = arrToDo[0]; break;
      case 6: curtoDo1 = arrToDo[4];
        curToDo2 = arrToDo[0]; break;
      case 8: curToDo2 = arrToDo[8];
        curtoDo1 = arrToDo[0]; break;
      default:
        curtoDo1 = arrToDo[0];
        curToDo2 = arrToDo[0];
    }
  
    // выбирает между окончаниями    s || es
    if (rndX == 4 && rndPron >= 4) {
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
  
  /* Проверка на наличие выбранного глагола */
  function plus() {
    for (let i = 0; i < binaryVerbs.length; i++) {
      if (binaryVerbs[i] == 1) return true;
    }
    return false
  }
  
  // Сохранение выбранных слов
  function saveWords(){
    // localStorage.setItem('select_words_lvl1', binaryVerbs);
    data.words_lvl1 = binaryVerbs;
    let jsn = JSON.stringify( data );   // охуеть оно заработало
    localStorage.polyglot = jsn;
  }

  return {
    next: function() {
      if ( plus() ) {
        blessRNG();
        // Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания
        outputRus.innerHTML = `${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus}${curSign}`;
        outputEng.innerHTML = '';
      } else {
        alert("Выберите хотя бы один глагол чтобы продолжить"); // Если ни один глагол не выбран
      }
    },
    answer: function() {
      // Eng  1)вставка 2)местоимение 3)вставка 4)глагол 5)окончание 6)знак препинания
      outputEng.innerHTML = `${curtoDo1} ${curPronEng} ${curToDo2} ${curVerbEng}${curEnding}${curSign}`;
    }
  };

})();


// 220 строк
// оптимизация - если значение переменной не нужно сохранять и егоприходится обнулять, то перенести эту переменную внутрь функции.
// при скролле вниз, шадов бокс не успевает за списком.
// скролить список слов а не всю страницу