var eng = ["	You need to hurry. It is almost five o’clock.	"	, "	Is she looking at us?	"	, "	How long will it take to get there?	"];
var ru = ["	Тебе нужно поторопиться. Уже почти 5 часов.	"	, "	Она на нас смотрит?	"	, "	Сколько времени займет добраться туда?	"];


var rand = document.getElementById("rand");
var answer = document.getElementById("answer");

var engText = document.getElementById("eng_text");
var ruText = document.getElementById("ru_text");

var lng = eng.length;
var rngNumber;
let currentNumber;

rand.onclick = function firstStep(){
    blessRNG();
    matchCheck();
    currentNumber = rngNumber;
    ruText.innerHTML = ru[rngNumber];
    engText.innerHTML = "";
}

answer.onclick = function firstStep(){
    engText.innerHTML = eng[rngNumber];
}

function matchCheck(){
    if (currentNumber == rngNumber) {
        blessRNG();
        matchCheck();
    }
}
function blessRNG(){
    rngNumber = Math.floor(Math.random() * lng);
}