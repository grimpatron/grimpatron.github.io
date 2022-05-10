let eng = ["	Do you have any suggestions? We could go to the theatre. 	"	, "	Are you free after work? How about going to the exhibition?	"	, "	Shall we go to the theatre in the evening?	"	, "	There is an exhibition of drawings and paintings. Do you want to take a look?	"	, "	What would you like to do this afternoon? How about going to a café?	"	, "	I'm busy all week. Can we meet next week?	"	, "	Have you ever had to take time off for health reasons?﻿	"	, "	This would probably be a good time to take a break.	"	, "	They're getting married next year, and hope to start a family straight away.	"	, "	Their dream became true. They've just moved into their new home.	"	, "	Our plans were spoiled by bad weather.	"	, "	It's windy outside. It looks like it's going to rain.	"	, "	The rain ruins everything. It is cold outside, put on your coat.	"	, "	It was drizzling, so I took an umbrella.	"	, "	It's cold outside, 8 degrees below zero. It is snowing.	"	, "	It's hot today. The temperature tomorrow will be 23 degrees.	"	, "	It's 7 am and already 32 degrees. It's going to be really hot today.	"	, "	Illness compelled him to stay in bed.	"	, "	Have you something for a headache? How much per day should I take it?	"	, "	Take me to the hospital, please.	"	, "	I have a pain here. I tripped on the stairs.	"	, "	How are you feeling? Are you dizzy?	"	, "	I have a cold. I am coughing and sneezing.	"	, "	I don't feel very well. I have got a stomachache.	"	, "	His side hurts. He fell from a tree and broke a rib.	"	, "	Have you got enough money? I want you to buy a gift.	"	, "	She hasn't got enough money to buy a new blouse.	"	, "	Don't buy that coat. It's nice, but it isn't long enough.	"	, "	Is there enough milk in your coffee? Drink up your coffee.	"	, "	She isn't tall enough to be a ballerina.	"	, "	My friend want a coffee, but she doesn't have enough money to buy one.	"	, "	She had been waiting at the station for an hour, but he didn’t come.	"	, "	I hurt my back when I was working in the garden.	"	, "	Do this exercise every day. You'll feel better, that's sure.	"	, "	I bought a jacket and a shirt. The jacket was cheap, but the shirt was expensive.	"	, "	Try on these shoes. Take off one of your shoes and put on this one.	"	, "	There was a strange man among the guest. He overheard our conversation.	"	, "	I’ll never forget playing snowballs with the kids from my neighbourhood.	"	,];
let ru = ["	У вас есть какие-либо предложения? Мы могли бы пойти в театр.	"	, "	Ты свободна после работы? Как насчет похода на выставку?	"	, "	Не пойти ли нам вечером в театр?	"	, "	Есть выставка рисунков и картин. Хочешь посмотреть?	"	, "	Чем бы ты хотел заняться сегодня днём? Как насчет того, чтобы пойти в кафе?	"	, "	Я занят всю неделю. Мы можем встретиться на следующей неделе?	"	, "	Приходилось ли вам когда-нибудь брать отпуск по состоянию здоровья?	"	, "	Наверное, это хорошее время, чтобы сделать перерыв.	"	, "	Они поженятся в следующем году и надеются сразу же создать семью.	"	, "	Их мечта сбылась. Они только что переехали в свой новый дом.	"	, "	Наши планы были испорчены плохой погодой.	"	, "	На улице ветрено. Кажется, сейчас пойдет дождь.	"	, "	Дождь все портит. На улице холодно, надень пальто.	"	, "	Моросил дождь, поэтому я взял зонтик.	"	, "	На улице холодно, 8 градусов ниже нуля. Идет снег.	"	, "	Сегодня жарко. Температура завтра будет 23 градусов.	"	, "	Сейчас 7 утра, и уже 32 градуса, сегодня будет действительно жаркий день.	"	, "	Болезнь вынуждала его оставаться в постели.	"	, "	У вас есть что-нибудь от головной боли? Сколько раз в день это принимать?	"	, "	Отвезите меня в больницу, пожалуйста.	"	, "	У меня болит здесь. Я споткнулся на лестнице.	"	, "	Как вы себя чувствуете? У вас головокружение?	"	, "	У меня простуда. Я кашляю и чихаю. 	"	, "	Я не очень хорошо себя чувствую. У меня болит живот.	"	, "	У него болит бок. Он упал с дерева и сломал ребро.	"	, "	У тебя достаточно денег? Я хочу, чтобы ты купил подарок.	"	, "	У неё недостаточно денег, чтобы купить новую блузку.	"	, "	Не покупай то пальто. Оно красивоe, но недостаточно длинное.	"	, "	Достаточно ли молока в вашем кофе? Допивай своё кофе. 	"	, "	Она недостаточно высока, чтобы быть балериной.	"	, "	Моя подруга хочет кофе, но у нее недостаточно денег, чтобы купить его.	"	, "	Она ждала на вокзале целый час, но он не пришел.	"	, "	Я повредил спину, когда работал в саду.	"	, "	Делайте это упражнение каждый день. Вы почувствуете себя лучше, это точно.	"	, "	Я купил пиджак и рубашку. Пиджак был дешевый, но рубашка была дорогой.	"	, "	Примерь эти туфли. Сними одну из своих туфель, и одень эту.	"	, "	Среди гостей был странный человек. Он подслушал наш разговор.	"	, "	Я никогда не забуду, как играл в снежки с ребятами из моего района.	"	,];

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