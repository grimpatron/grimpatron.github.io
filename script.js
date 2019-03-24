var easyWordsStr = "1 be[bi] (быть) were been 2 have[həv] (иметь) had had 3 do[du] (делать) did done 4 say[seɪ] (говорить) said said 5 go[ɡoʊ] (идти) went gone 6 get (получать) got got/gotten 7 make (делать) made made 8 know (знать) knew known 9 think (думать) thought thought 10 take (брать) took taken 13 want (хотеть) wanted wanted 16 give (давать) gave given 32 help (помогать) helped helped 36 run (бежать) ran run 54 understand (понимать) understood understood 75 build (строить) built built 78 cut (резать) cut cut 80 kill (убивать) killed killed 85 return (возвращаться) returned returned 100 choose (выбирать) chose chosen 11 see (видеть) saw seen 14 use (использовать) used used 18 work (работать) worked worked 23 feel (чувствовать) felt felt 30 begin (начинать) began begun 33 show (показывать) showed shown 35 play (играть) played played 37 move (двигаться) moved moved 38 live (жить) lived lived 39 believe (верить) believed believed 49 continue (продолжать) continued continued 52 change (менять) changed changed 56 follow (следовать) followed followed 58 create (создавать) created created 63 open (открывать) opened opened 66 teach (учить) taught taught 68 remember (помнить) remembered remembered 87 hope (надеяться) hoped hoped 90 break (ломать) broke broken 96 eat (есть) ate eaten 12 come (приходить) came come 21 ask (просить;спрашивать) asked asked 22 need (нуждаться) needed needed 41 happen (случаться) happened happened 42 write (писать) wrote written 45 lose (терять) lost lost 46 pay (платить) paid paid 48 include (включать) included included 51 learn (учить) learnt/learned learnt/learned 60 read (читать) read read 71 buy (покупать) bought bought 73 die (умирать) died died 77 fall (падать) fell fallen 83 sell (продавать) sold sold 98 catch (ловить) caught caught 101 hold держать held held 114 shake трясти shook shaken 117 shoot стрелять shot shot 118 drink пить drank drunk 120 fly летать flew flown 19 call (звать;звонить) called called 20 try (пытаться) tried tried 24 become (становиться) became become 28 keep (хранить) kept kept 43 sit (сидеть) sat sat 55 watch (смотреть) watched watched 62 grow (расти) grew grown 64 walk (идти) walked walked 65 win (побеждать;выигрывать) won won 72 serve (служить) served served 79 reach (достигать) reached reached 82 pass (миновать) passed passed 84 decide (решать) decided decided 92 agree (соглашаться) agreed agreed 93 support (поддерживать) supported supported 97 cover (покрывать) covered covered 104 drive вести_машину drove driven 109 forget забывать forgot forgotten 111 sing петь sang sung 122 sleep спать slept slept 17 tell (сказать;рассказывать) told told 26 put (класть;ставить) put put 29 let (позволять) let let 47 meet (встречать) met met 50 set (устанавливать;ставить) set set 53 lead (вести) led led 59 speak (говорить) spoke spoken 86 explain (объяснять) explained explained 88 develop (разрабатывать,развивать) developed developed 89 carry (везти;нести) carried carried 99 draw (рисовать) drew drawn 105 wear носить(одежду) wore worn 107 throw бросать threw thrown 108 deal иметь_дело dealt dealt 112 strike ударять;бить struck struck 115 ride ездить;ездить(верхом) rode ridden 128 hide прятаться hid hidden 129 blow дуть blew blown 132 wake просыпаться,будить woke woken 137 steal красть stole stolen";
var mediumWordsStr = "15 find (находить) found found 25 leave (оставлять) left left 27 mean (значить;означать) meant meant 31 seem (казаться) seemed seemed 34 hear (слышать) heard heard 40 bring (приносить) brought brought 44 stand (стоять) stood stood 57 stop (останавливать) stopped stopped 61 spend (тратить) spent spent 67 offer (предлагать) offered offered 69 consider (считать) considered considered 70 appear (появляться) appeared appeared 74 send (посылать;отправлять) sent sent 76 stay (оставаться) stayed stayed 81 raise (поднимать;повысить) raised raised 91 receive (получать) received received 94 hit (ударять) hit hit 95 produce (производить) produced produced 102 lie лежать lay lain 103 rise подниматься rose risen 106 seek искать sought sought 110 fight драться,бороться fought fought 113 hang вешать hung hung 116 feed кормить fed fed 119 arise возникать arose arisen 121 spread распространяться spread spread 123 cost стоить cost cost 124 beat бить beat beaten 125 light освещать,зажигать lit lit 126 bind вязать,связывать bound bound 127 cast брать,кидать cast cast 120 swim плавать swam swum 131 bend сгибать bent bent 133 stick придерживаться,держаться stuck stuck 134 sweep подметать swept swept 135 undertake проводить,осуществлять undertook undertaken 136 shut закрывать shut shut 138 tear рвать tore torn 139 hurt повредить,ранить hurt hurt 140 ring звонить rang rung 141 lay положить,класть laid laid 142 bear нести,выносить bore born 143 swing заскочить,заехать,качаться swung swung 144 lend одалживать lent lent 145 sink тонуть,потопить sank sunk 146 overcome преодолеть,побороть overcame overcome 147 freeze замерзать froze frozen 148 shine светить,сиять shone shone 149 withdraw снять,вывести withdrew withdrawn 150 confirm подтверждать,утверждать confirmed confirmed";
var hardWordsStr = "";

var easyWordsArr = easyWordsStr.split(' '),
    easyWordsArrEng = [],
    easyWordsArrRus = [],
    easyWordsLength = easyWordsArr.length / 5;
var mediumWordsArr = mediumWordsStr.split(' '),
    mediumWordsArrEng = [],
    mediumWordsArrRus = [],
    mediumWordsLength = mediumWordsArr.length / 5;

for (var i = 1; i < easyWordsArr.length; i = i+5) {
  easyWordsArrEng.push(easyWordsArr[i]);
  easyWordsArrRus.push(easyWordsArr[i+1]);
};
for (var i = 1; i < mediumWordsArr.length; i = i+5) {
  mediumWordsArrEng.push(mediumWordsArr[i]);
  mediumWordsArrRus.push(mediumWordsArr[i+1]);
};

console.log(easyWordsLength, mediumWordsLength, easyWordsArr, easyWordsArrEng, mediumWordsArrRus);

var mode = "",
    currentLength = null,
    rng = null,
    order = null,
// orderOnOff = null; // Сделать возможность выбрать рус-енг  енг-рус
    correctAnswer = "";
    engEasy = [],
    ruEasy = [];

var askWord = document.getElementById("ask");
var answerWord = document.getElementById("answer");
var next = document.getElementById("buttonNext");
var check = document.getElementById("buttonCheck");
var info = document.getElementById("info");


/*main-menu*/
var screenMainMenu = document.getElementById("main-menu"),
    screenProgram = document.getElementById("program"),
    btnEasy = document.getElementById("btn-easy"),
    btnMedium = document.getElementById("btn-medium");

/*select mode*/
btnEasy.onclick = function(){
  mode = "easy-mode";
  currentLength = easyWordsLength;
  displayTransition();
}
btnMedium.onclick = function(){
  mode = "medium-mode";
  currentLength = mediumWordsLength;
  displayTransition();
}
function displayTransition(){
  screenMainMenu.style.display = "none";
  screenProgram.style.display = "block";
  go();
}


function go(){
  blesRng();
  if (mode == "easy-mode"){
    askWord.innerHTML = easyWordsArrEng[rng];
    correctAnswer = easyWordsArrRus[rng];
  } else if (mode == "medium-mode"){
    askWord.innerHTML = mediumWordsArrEng[rng];
    correctAnswer = mediumWordsArrRus[rng]
  }
  info.innerHTML = rng;
}

function blesRng(){
  rng = Math.floor(Math.random() * currentLength);
  order = Math.floor(Math.random() * 2);
  // if(order == 1){
  //   askWord.innerHTML = easyWordsArrEng[rng];
  // } else {
  //   askWord.innerHTML = easyWordsArrRus[rng];
  // }
}

next.onclick = function nextWord(){
  answerWord.innerHTML = "";
  go();
}
check.onclick = function checkWord(){
  answerWord.innerHTML = correctAnswer;
  // if(order == 1){
  //   answerWord.innerHTML = easyWordsArrRus[rng];
  // } else {
  //   answerWord.innerHTML = easyWordsArrEng[rng];
  // }
}












/*
Первая реализация добавления пробела перед запятой (создаём новый массив)

var aaa = ["повредить", "вместе,ранить", "вместе,ранить", "ранить", "вместе,повредить"];
var aaa2 = [];
aaa.forEach(space);
function space(x){
  if (x.includes(",") == true) {
    aaa2.push(x.split(',').join(", "));
  } else {
    aaa2.push(x);
  }
}
console.log(aaa2);
*/

/*
Вторая реализация добавления пробела перед запятой (перезаписываем текущий массив)

var aaa = ["повредить", "вместе,ранить", "вместе,ранить", "ранить", "вместе,повредить"];
aaa.forEach(space2);
function space2(currentValue, index, array){
  if (currentValue.includes(",") == true) {
    array[index] = currentValue.split(',').join(", ");
  } else {
    array[index] = currentValue;
  }
}
console.log(aaa);
*/