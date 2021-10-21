// var eng = ["Time after time", "It's not important", "I don't want to do this", "Next time lucky.","What is the matter?","It’s going to be all right.","So what?","Are you kidding?","Would you believe it?"];
// var ru = ["Раз за разом", "Это неважно", "Я не хочу этого делать", "Повезет в следующий раз","В чём дело?","Все будет хорошо.","Ну и что?","Ты шутишь?","Ты в это веришь?"];
var eng = ["You need to hurry. It is almost five o’clock.", "Is she looking at us?", "The car isn’t mine, it’s his", "What are you looking for?", "How long will it take to get there?", "How long will I have to wait?", "I’d like to place an order.", "I'm so sick of this cold weather!", "It is cold outside, put on your coat.", "You're the worst dancer I've ever seen.", "We're going all the way together", "Well, that explains it.", "What are you driving at? Do you think I'm stupid?", "This is Jim. He is a policeman and lives in New York.", "Each district of the city has the charm of its own.", "Whose turn is it to take out the trash?", "The cat played with its toy.", "Could you tell me the time, please? My watch is broken.", "What time is it? I’ve left my watch at home.", "The meeting will begin at two o'clock on the dot.", "My uncle works from 9 a.m. till 7 p.m.", "The shop closes at 10 minutes to 6.", "The concert finished at 20 past 11 p.m.", "His train arrives at midnight.", "We left at 5.30 a.m. and returned around 11 p.m.", "Usually his workday starts at 7 a.m.", "How long will you be staying here?", "What time is the next bus to Denver?", "I plan to be staying for two weeks.", "How much is a single ticket to Dallas?", "Would you like a window or an aisle seat?", "Excuse me, could you tell me how to get to the train station?", "Excuse me, I am looking for a restaurant. Do you know how to get there?", "The rubbish is collected every Wednesday.",];
var ru = ["Тебе нужно поторопиться. Уже почти 5 часов.", "Она на нас смотрит?", "Машина не моя, она его.", "Что вы ищете?", "Сколько времени займет добраться туда?", "Как долго мне придется ждать?", "Я хотел бы сделать заказ.", "Меня так достала эта холодная погода!", "На улице холодно, надень пальто.", "Ты худший танцор, которого я когда-либо видел.", "Мы вместе до самого конца.", "Ну это всё объясняет.", "К чему ты клонишь? Ты думаешь, что я тупой?", "Это Джим. Он полицейский и живет в Нью-Йорке.", "У каждого района города есть свое собственное очарование.", "Чья очередь выносить мусор?", "Кошка играла со своей игрушкой.", "Скажите, пожалуйста, сколько времени? Мои часы сломаны.", "Который сейчас час? Я забыл свои часы дома.", "Собрание начнётся ровно в два часа.", "Мой дядя работает с 9 утра до 7 вечера.", "Магазин закрывается без десяти шесть.", "Концерт закончился в 11 часов 20 минут вечера.", "Его поезд прибывает в полночь.", "Мы уехали в 5:30 утра и вернулись около 11 вечера", "Обычно его рабочий день начинается в 7 утра;", "Как долго вы собираетесь здесь пробыть?", "Во сколько идет следующий автобус на Денвер?", "Я собираюсь пробыть здесь две недели.", "Сколько стоит билет в один конец до Далласа?", "Вы хотите сидеть у окна или в проходе?", "Извините, не могли бы вы подсказать мне, как добраться до вокзала?", "Извините, я ищу ресторан. Вы знаете, как до него добраться?", "Мусор собирают каждую среду.",];


var rand = document.getElementById("rand");
var answer = document.getElementById("answer");

var engText = document.getElementById("eng_text");
var ruText = document.getElementById("ru_text");

var lng = eng.length;
var blessrng;

rand.onclick = function firstStep(){
    blessrng = Math.floor(Math.random() * lng);
    ruText.innerHTML = ru[blessrng];
    engText.innerHTML = "";
}

answer.onclick = function firstStep(){
    engText.innerHTML = eng[blessrng];
}