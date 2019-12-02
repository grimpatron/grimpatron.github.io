let level3 = (function (){
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
  /**/ let arrPronEng228 = ["I", "you", "we", "they", "he", "she", "it"];   // pronouns English 228
  /**/ let arrToBe = ["", "will", "be", "will be", "will not be", "am", "is", "are", "am not", "is not", "are not", "was", "were", "was not", "were not"]; // глагол быть
  /**/ let curToBe1 = "";
  /**/ let curToBe2 = "";
  let arrToDoRus = ["буду","будешь","будем","будут","будет","будет"];
  // let arrEnding = ["", "s", "es", "d", "ed"];
  let arrVerbEng = "here there in_Minsk".split(' ');
  let arrVerbRus = "здесь там в_Минске".split(' ');
  binaryVerbs = new Array(arrVerbEng.length);

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
  // select words from localStorage
  if ( data.words_lvl3.length == arrVerbEng.length ) {
    binaryVerbs = data.words_lvl3;
    for (let i = 0; i <= binaryVerbs.length; i++) {
      if (binaryVerbs[i] == 1) {
        checkListVerbs[i].checked = "checked";
      }
    }
  } else {
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

  // showSchema.addEventListener('click', function() {
  //   if (showSchemaOn == 0) {
  //     schemaImage.style.opacity = "1";
  //     showSchema.innerHTML = "Скрыть схему";
  //     showSchemaOn = 1;
  //   } else {
  //     schemaImage.style.opacity = "0";
  //     showSchema.innerHTML = "Показать схему";
  //     showSchemaOn = 0;
  //   }
  // });

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

    for (let i = 0/*, aStart = null, aFinish = null*/; i < binaryVerbs.length; i++) {
      if (binaryVerbs[i] == 1) {
        listVerbEng.push(arrVerbEng[i]);
        /**/listVerbRus.push(arrVerbRus[i]);
        listPastSimple.push(arrPastSimple[i]);

        // aStart = i * 10;
        // aFinish = aStart + 9;
        
        // for (let j = aStart; j <= aFinish ; j++) {
        //   listVerbRus.push( arrVerbRus.slice(j, j + 1).toString() );        
        // }
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
    curVerbRus = listVerbRus[rndVerbs];
    curPronEng = arrPronEng[rndPron];
    curPronRus = arrPronRus[rndPron];

    switch (rndX) {
      case 0: curToBe1 = arrToBe[1]; 
              curToBe2 = arrToBe[2]; break;
      case 1: curToBe1 = arrToBe[0];
              curToBe2 = arrToBe[3]; break;
      case 2: curToBe1 = arrToBe[0];
              curToBe2 = arrToBe[4]; break;
      case 3: (rndPron == 0) ? curToBe1 = arrToBe[5] : rndPron >= 4 ? curToBe1 = arrToBe[6] : curToBe1 = arrToBe[7];
              curToBe2 = arrToBe[0]; break;
      case 4: (rndPron == 0) ? curToBe2 = arrToBe[5] : rndPron >= 4 ? curToBe2 = arrToBe[6] : curToBe2 = arrToBe[7];
              curToBe1 = arrToBe[0]; break;
      case 5: (rndPron == 0) ? curToBe2 = arrToBe[8] : rndPron >= 4 ? curToBe2 = arrToBe[9] : curToBe2 = arrToBe[10];
              curToBe1 = arrToBe[0]; break;
      case 6: (rndPron == 0 || rndPron >= 4) ? curToBe1 = arrToBe[11] : curToBe1 = arrToBe[12];
              curToBe2 = arrToBe[0]; break;
      case 7: (rndPron == 0 || rndPron >= 4) ? curToBe2 = arrToBe[11] : curToBe2 = arrToBe[12];
              curToBe1 = arrToBe[0]; break;
      case 8: (rndPron == 0 || rndPron >= 4) ? curToBe2 = arrToBe[13] : curToBe2 = arrToBe[14];
              curToBe1 = arrToBe[0]; break;
    }

    // // выбирает между окончаниями    s || es
    // if (rndX == 4 && rndPron >= 4) {
    //   if (curVerbEng == "finish" || curVerbEng == "go") {
    //     curEnding = arrEnding[2];
    //   } else {
    //     curEnding = arrEnding[1];      
    //   }
    // // выбирает между окончаниями    d || ed
    // } else if (rndX == 7) {
    //   if (curVerbEng.charAt(curVerbEng.length-1) == 'e') {
    //     curEnding = arrEnding[3];
    //   } else {
    //     curEnding = arrEnding[4];
    //   }

    //   if (listPastSimple[rndVerbs] != "") {
    //     curVerbEng = listPastSimple[rndVerbs];
    //     curEnding = "";
    //   }
    // } else {
    //   curEnding = "";
    // }

    /**/(rndX == 0 || rndX == 1 || rndX == 2) ? curToDoRusQ = arrToDoRus[rndPron] : (rndX == 6 || rndX == 7 || rndX == 8) ? curToDoRusQ = "был" : curToDoRusQ = "";
    (rndX == 2 || rndX == 5 || rndX == 8 || rndX == 11) ? curToDoRusN = "не" : curToDoRusN = "";
    (rndX == 0 || rndX == 3 || rndX == 6 || rndX == 9) ? curSign = "?" : curSign = "";
  }

  // function getVerbRus(rndX, rndPron, rndVerbs) {
  //   let rndVerbRus = null;
  //   if (rndX >= 0 && rndX <= 2) {
  //     rndVerbRus = 10 * rndVerbs;
  //   } else if (rndX >= 3 && rndX <= 5) {
  //     rndVerbRus = (rndPron + 1) + (10 * rndVerbs);
  //   } else if (rndX >= 6 && rndX <= 8) {
  //     if (rndPron == 0 || rndPron == 1 || rndPron == 4) {
  //       rndVerbRus = 7 + (10 * rndVerbs);      
  //     } else if (rndPron == 2 || rndPron == 3) {
  //       rndVerbRus = 8 + (10 * rndVerbs);      
  //     } else if (rndPron == 5) {
  //       rndVerbRus = 9 + (10 * rndVerbs);      
  //     }
  //   }
  //   return rndVerbRus;
  // }

  // next.onclick = function() {
  //   if ( plus() ) {
  //     blessRNG();
  //     // Rus  1)местоимение 2)отрицание 2)вставка 3)глагол 4)знак препинания
  //     outputRus.innerHTML = `${curPronRus} ${curToDoRusN} ${curToDoRusQ} ${curVerbRus}${curSign}`;
  //     outputEng.innerHTML = '';
  //   } else {
  //     alert("Выберите хотя бы один глагол чтобы продолжить"); // Если ни один глагол не выбран
  //   }
  // }

  function plus() {
    let pRes = 0;
    for (let i = 0; i < binaryVerbs.length; i++) {
      pRes += binaryVerbs[i];
    }
    return pRes;
  }

  // answer.onclick = function() {
  //   // Eng  1)вставка 2)местоимение 3)вставка 4)глагол 5)окончание 6)знак препинания
  //   outputEng.innerHTML = `${curToBe1} ${curPronEng} ${curToBe2} ${curVerbEng}${curSign}`;
  // }

  function saveWords(){
    // localStorage.setItem('select_words_lvl3', binaryVerbs);
    data.words_lvl3 = binaryVerbs;
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
      outputEng.innerHTML = `${curToBe1} ${curPronEng} ${curToBe2} ${curVerbEng}${curSign}`;
    }
  };

})();