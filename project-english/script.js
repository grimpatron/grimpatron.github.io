var eng = ["How long will it take to get there?", "How long will I have to wait?", "Whose turn is it to take out the trash?", "Could you tell me the time, please? My watch is broken.", "What time is it? I’ve left my watch at home.", "The meeting will begin at two o'clock on the dot.", "My uncle works from 9 a.m. till 7 p.m.", "The shop closes at 10 minutes to 6.", "His train arrives at midnight.", "We left at 5.30 a.m. and returned around 11 p.m.", "Usually his workday starts at 7 a.m.", "How long will you be staying here?", "What time is the next bus to Denver?", "How much is a single ticket to Dallas?", "Would you like a window or an aisle seat?", "Could you tell me how to get to the train station?", "I am looking for a restaurant. Do you know how to get there?", "The rubbish is collected every Wednesday.", "The next rehearsal is on Friday evening.", "He’s starting his new job on Monday.", "Our house is on the other side of town.", "Could you tell me when we get to the university?", "Could you tell me where the restroom is?", "The movie contains a large number of violent scenes.", "I still don’t know some people in the office.", "Can we meet next week instead?", "This place is really nice. Do you come here a lot?", "I want to spend more time with you.", "I am going to visit my godfather.", "I want to visit the homeland of our ancestors.", "He has four children – two sons and two daughters.", "I sat by the ocean and watched the marvelous sunset.", "Grandfather decided to teach his grandson how to read and write.", "Only parents can teach children what is right and what is wrong.",];
var ru = ["Сколько времени займет добраться туда?", "Как долго мне придется ждать?", "Чья очередь выносить мусор?", "Скажите, пожалуйста, сколько времени? Мои часы сломаны.", "Который сейчас час? Я забыл свои часы дома.", "Собрание начнётся ровно в два часа.", "Мой дядя работает с 9 утра до 7 вечера.", "Магазин закрывается без десяти шесть.", "Его поезд прибывает в полночь.", "Мы уехали в 5:30 утра и вернулись около 11 вечера", "Обычно его рабочий день начинается в 7 утра;", "Как долго вы собираетесь здесь пробыть?", "Во сколько идет следующий автобус на Денвер?", "Сколько стоит билет в один конец до Далласа?", "Вы хотите сидеть у окна или в проходе?", "Не могли бы вы подсказать мне, как добраться до вокзала?", "Я ищу ресторан. Вы знаете, как до него добраться?", "Мусор собирают каждую среду.", "Следующая репетиция состоится в пятницу вечером.", "В понедельник он приступает к новой работе.", "Наш дом на противоположной стороне города.", "Не могли бы вы подсказать мне, когда мы доедем до университета?", "Не могли бы вы подсказать мне, где здесь туалет?", "Фильм содержит большое количество сцен насилия.", "Я все еще не знаю некоторых людей в офисе.", "Мы можем встретиться на следующей неделе?", "Это место действительно замечательное. Вы часто здесь бываете?", "Я хочу проводить больше времени с тобой.", "Я собираюсь навестить своего крестного отца.", "Я хочу посетить родину наших предков.", "У него четверо детей: два сына и две дочери.", "Я сидел рядом с океаном и наблюдал за чудесным закатом.", "Дедушка решил научить своего внука читать и писать.", "Только родители могут научить детей что хорошо и плохо.",];


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