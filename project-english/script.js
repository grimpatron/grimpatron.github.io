let eng = ["	That sounds interesting. I'd like to go.	"	, "	Do you have any suggestions? We could go to the theatre. 	"	, "	I don't feel like doing that. Let's do something differernt.	"	, "	Are you free after work? How about going to the exhibition?	"	, "	Shall we go to the theatre in the evening?	"	, "	There is an exhibition of drawings and paintings. Do you want to take a look?	"	, "	We go to the theatre every Saturday. Why don't we go to the museum?	"	, "	How many times have you visited the art galleries?	"	, "	What would you like to do this afternoon? How about going to a café?	"	, "	Maybe we can have lunch together? What time's good for you?	"	, "	Are you free tonight? How about meeting at half past six?	"	, "	I'm busy all week. Can we meet next week?	"	, "	As I am free today, we can meet with you.	"	, "	Are you going to James's party? We will have a great time.	"	, "	Have you ever had to take time off for health reasons?﻿	"	, "	This would probably be a good time to take a break.	"	, "	They're getting married next year, and hope to start a family straight away.	"	, "	Their dream became true. They've just moved into their new home.	"	, "	The weather is not bad today, but yesterday it was better.	"	, "	What's the weather like today? What is the temperature?	"	, "	Do you know the weather forecast for tomorrow?	"	, "	Our plans were spoiled by bad weather.	"	, "	It's windy outside. It looks like it's going to rain.	"	, "	The rain ruins everything. It is cold outside, put on your coat.	"	, "	I'm so sick of this cold weather!	"	, "	It was drizzling, so I took an umbrella.	"	, "	It's pretty warm today, 20 degrees above zero.	"	, "	It's cold outside, 8 degrees below zero. It is snowing.	"	, "	It's hot today. The temperature tomorrow will be 23 degrees.	"	, "	Illness compelled him to stay in bed.	"	, "	Have you something for a headache? How much per day should I take it?	"	, "	Take me to the hospital, please.	"	, "	I have a pain here. I tripped on the stairs.	"	, "	How are you feeling? Are you dizzy?	"	, "	I have a cold. I am coughing and sneezing.	"	, "	Have you got enough money? I want you to buy a gift.	"	, "	She hasn't got enough money to buy a new blouse.	"	, "	Don't buy that coat. It's nice, but it isn't long enough.	"	, "	Is there enough milk in your coffee? Drink up your coffee.	"	, "	She isn't tall enough to be a ballerina.	"	, "	She had been waiting at the station for an hour, but he didn’t come.	"	,];
let ru = ["	Это звучит интересно. Я бы хотел пойти.	"	, "	У вас есть какие-либо предложения? Мы могли бы пойти в театр.	"	, "	Мне не хочется этого делать. Давайте сделаем что-нибудь другое.	"	, "	Ты свободна после работы? Как насчет похода на выставку?	"	, "	Не пойти ли нам вечером в театр?	"	, "	Есть выставка рисунков и картин. Хочешь посмотреть?	"	, "	Мы ходим в театр каждую субботу. Почему бы нам не пойти в музей?	"	, "	Сколько раз вы посещали художественные галереи?	"	, "	Чем бы ты хотел заняться сегодня днём? Как насчет того, чтобы пойти в кафе?	"	, "	Может, мы вместе пообедаем? В какое время вам удобно?	"	, "	Ты свободен сегодня вечером? Как насчет встречи в половине седьмого?	"	, "	Я занят всю неделю. Мы можем встретиться на следующей неделе?	"	, "	Так как я сегодня свободен, мы с тобой можем встретиться.	"	, "	Ты идёшь на вечеринку Джеймса? Мы отлично проведём время.	"	, "	Приходилось ли вам когда-нибудь брать отпуск по состоянию здоровья?	"	, "	Наверное, это хорошее время, чтобы сделать перерыв.	"	, "	Они поженятся в следующем году и надеются сразу же создать семью.	"	, "	Их мечта сбылась. Они только что переехали в свой новый дом.	"	, "	Погода неплохая сегодня, но вчера была лучше.	"	, "	Какая сегодня погода? Какая сейчас температура?	"	, "	Ты знаешь прогноз погоды на завтра?	"	, "	Наши планы были нарушены плохой погодой.	"	, "	На улице ветрено. Кажется, сейчас пойдет дождь.	"	, "	Дождь все портит. На улице холодно, надень пальто.	"	, "	Меня так достала эта холодная погода!	"	, "	Моросил дождь, поэтому я взял зонтик.	"	, "	Сегодня довольно тепло, 20 градусов выше нуля.	"	, "	На улице холодно, 8 градусов ниже нуля. Идет снег.	"	, "	Сегодня жарко. Температура завтра будет 23 градусов.	"	, "	Болезнь вынуждала его оставаться в постели.	"	, "	У вас есть что-нибудь от головной боли? Сколько раз в день это принимать?	"	, "	Отвезите меня в больницу, пожалуйста.	"	, "	У меня болит здесь. Я споткнулся на лестнице.	"	, "	Как вы себя чувствуете? У вас головокружение?	"	, "	У меня простуда. Я кашляю и чихаю. 	"	, "	У тебя достаточно денег? Я хочу, чтобы ты купил подарок.	"	, "	У неё недостаточно денег, чтобы купить новую блузку.	"	, "	Не покупай то пальто. Оно красивоe, но недостаточно длинное.	"	, "	Достаточно ли молока в вашем кофе? Допивай своё кофе. 	"	, "	Она недостаточно высока, чтобы быть балериной.	"	, "	Она ждала на вокзале целый час, но он не пришел.	"	,];

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