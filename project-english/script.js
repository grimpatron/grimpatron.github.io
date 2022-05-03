let eng = ["	Build a fire so you won't get cold.	"	, "	Don't stand under a tree because the lightning might hit the tree, or you.	"	, "	Don't pinch the bee-sting because the sting will get worse, that's for sure.	"	, "	Sorry to be late. I got up late and missed the bus.	"	, "	Sorry to be late. I came as quickly as I could.	"	, "	It's fine, but don't let it happen again.	"	, "	I'm afraid I didn't hear my alarm clock.	"	, "	There is a meeting tomorrow morning. It will start at 7, so don't be late.	"	, "	You need to hurry. It is almost five o’clock.	"	, "	I got on the wrong bus and I got lost. I don't know where i am.	"	, "	Usually his workday starts at 7 a.m. He is late today.	"	, "	That sounds interesting. I'd like to go.	"	, "	Do you have any suggestions? We could go to the theatre. 	"	, "	I don't feel like doing that. Let's do something differernt.	"	, "	Are you free after work? How about going to the exhibition?	"	, "	Shall we go to the theatre in the evening?	"	, "	We go to the theatre every Saturday. Why don't we go to the museum?	"	, "	What would you like to do this afternoon? How about going to a café?	"	, "	Maybe we can have lunch together? What time's good for you?	"	, "	Are you free tonight? How about meeting at half past six?	"	, "	I'm busy all week. Can we meet next week?	"	, "	As I am free today, we can meet with you.	"	, "	Are you going to James's party? We will have a great time.	"	, "	Have you ever had to take time off for health reasons?﻿	"	, "	This would probably be a good time to take a break.	"	, "	Illness compelled him to stay in bed.	"	, "	They're getting married next year, and hope to start a family straight away.	"	, "	The weather is not bad today, but yesterday it was better.	"	, "	What's the weather like today? What is the temperature?	"	, "	Do you know the weather forecast for tomorrow?	"	, "	Our plans were spoiled by bad weather.	"	, "	It's windy outside. It looks like it's going to rain.	"	, "	The rain ruins everything. It is cold outside, put on your coat.	"	, "	I'm so sick of this cold weather!	"	, "	It was drizzling, so I took an umbrella.	"	, "	It's pretty warm today, 20 degrees above zero.	"	, "	It's cold outside, 8 degrees below zero. It is snowing.	"	, "	It's hot today. The temperature tomorrow will be 23 degrees.	"	,];
let ru = ["	Разожги костер, так ты не простудишься.	"	, "	Не стойте под деревом, потому что молния может ударить в дерево или в вас.	"	, "	Не щипайте пчелиное жало, потому что укус станет хуже, это уж точно.	"	, "	Извините за опоздание. Я встал поздно и опоздал на автобус.	"	, "	Извините за опоздание. Я приехал так быстро, как только мог.	"	, "	Все в порядке, но не позволяйте этому повториться.	"	, "	К сожалению, я не услышал свой будильник.	"	, "	Завтра утром собрание. Оно будет в 7 часов, так что не опаздывай.	"	, "	Тебе нужно поторопиться. Уже почти 5 часов.	"	, "	Я сел не в тот автобус и заблудился. Я не знаю, где я.	"	, "	Обычно его рабочий день начинается в 7 утра. Сегодня он опаздывает.	"	, "	Это звучит интересно. Я бы хотел пойти.	"	, "	У вас есть какие-либо предложения? Мы могли бы пойти в театр.	"	, "	Мне не хочется этого делать. Давайте сделаем что-нибудь другое.	"	, "	Ты свободна после работы? Как насчет похода на выставку?	"	, "	Не пойти ли нам вечером в театр?	"	, "	Мы ходим в театр каждую субботу. Почему бы нам не пойти в музей?	"	, "	Чем бы ты хотел заняться сегодня днём? Как насчет того, чтобы пойти в кафе?	"	, "	Может, мы вместе пообедаем? В какое время вам удобно?	"	, "	Ты свободен сегодня вечером? Как насчет встречи в половине седьмого?	"	, "	Я занят всю неделю. Мы можем встретиться на следующей неделе?	"	, "	Так как я сегодня свободен, мы с тобой можем встретиться.	"	, "	Ты идёшь на вечеринку Джеймса? Мы отлично проведём время.	"	, "	Приходилось ли вам когда-нибудь брать отпуск по состоянию здоровья?	"	, "	Наверное, это хорошее время, чтобы сделать перерыв.	"	, "	Болезнь вынуждала его оставаться в постели.	"	, "	Они поженятся в следующем году и надеются сразу же создать семью.	"	, "	Погода неплохая сегодня, но вчера была лучше.	"	, "	Какая сегодня погода? Какая сейчас температура?	"	, "	Ты знаешь прогноз погоды на завтра?	"	, "	Наши планы были нарушены плохой погодой.	"	, "	На улице ветрено. Кажется, сейчас пойдет дождь.	"	, "	Дождь все портит. На улице холодно, надень пальто.	"	, "	Меня так достала эта холодная погода!	"	, "	Моросил дождь, поэтому я взял зонтик.	"	, "	Сегодня довольно тепло. Это 20 градусов выше нуля.	"	, "	На улице холодно, 8 градусов ниже нуля. Идет снег.	"	, "	Сегодня жарко. Температура завтра будет 23 градусов.	"	,];

let rand = document.getElementById("rand");
let answer = document.getElementById("answer");

let engText = document.getElementById("eng_text");
let ruText = document.getElementById("ru_text");

let lng = eng.length;
let rngNumber;
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