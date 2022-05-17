let eng = ["	Have you ever had to take time off for health reasons?﻿	"	, "	This would probably be a good time to take a break.	"	, "	They're getting married next year, and hope to start a family straight away.	"	, "	Their dream became true. They've just moved into their new home.	"	, "	It's 7 am and already 32 degrees. It's going to be really hot today.	"	, "	Have you something for a headache? How much per day should I take it?	"	, "	I have a pain here. I tripped on the stairs.	"	, "	How are you feeling? Are you dizzy?	"	, "	I have a cold. I am coughing and sneezing.	"	, "	I don't feel very well. I have got a stomachache.	"	, "	A good diet is necessary for maintaining a healthy body.	"	, "	Take this tablets three times a day during the week.	"	, "	If you want to lose weight, you shouldn't eat late at night.	"	, "	You shouldn't take antibiotics, go to the doctor.	"	, "	His side hurts. He fell from a tree and broke a rib.	"	, "	Have you got enough money? I want you to buy a gift.	"	, "	She hasn't got enough money to buy a new blouse.	"	, "	Don't buy that coat. It's nice, but it isn't long enough.	"	, "	Is there enough milk in your coffee? Drink up your coffee.	"	, "	My friend wants coffee, but she doesn't have enough money to buy one.	"	, "	I hurt my back when I was working in the garden.	"	, "	I bought a jacket and a shirt. The jacket was cheap, but the shirt was expensive.	"	, "	Try on these shoes. Take off one of your shoes and put on this one.	"	, "	There was a strange man among the guest. He overheard our conversation.	"	, "	I’ll never forget playing snowballs with the kids from my neighbourhood.	"	, "	You should put it behind you now: what's done is done.	"	, "	You need to get out of here as soon as possible.	"	, "	You should try this drink. It's delicious.	"	, "	Kasia didn't study last night because she felt tired.	"	, "	I like roast chicken and potatoes, but they are too hard to cook.	"	, "	I didn't want to talk about this. I didn't start this the conversation - you did.	"	, "	Good to see you gain. Let's exchange numbers so we can talk again soon.	"	, "	I always forget my mobilenumber. I have to write it down.	"	, "	I'm sorry, I don’t remember  your name. I've got a terrible memory.	"	, "	Be quite. The baby's sleeping. We have to talk quietly.	"	,];
let ru = ["	Приходилось ли вам когда-нибудь брать отпуск по состоянию здоровья?	"	, "	Наверное, это хорошее время, чтобы сделать перерыв.	"	, "	Они поженятся в следующем году и надеются сразу же создать семью.	"	, "	Их мечта сбылась. Они только что переехали в свой новый дом.	"	, "	Сейчас 7 утра, и уже 32 градуса, сегодня будет действительно жаркий день.	"	, "	У вас есть что-нибудь от головной боли? Сколько раз в день это принимать?	"	, "	У меня болит здесь. Я споткнулся на лестнице.	"	, "	Как вы себя чувствуете? У вас головокружение?	"	, "	У меня простуда. Я кашляю и чихаю. 	"	, "	Я не очень хорошо себя чувствую. У меня болит живот.	"	, "	Для поддержания здоровья тела необходимо хорошее питание. 	"	, "	Принимайте эти таблетки три раза в день в течение недели.	"	, "	Если вы хотите похудеть, вам не следует есть поздно вечером.	"	, "	Не следует принимать антибиотики, идите к врачу.	"	, "	У него болит бок. Он упал с дерева и сломал ребро.	"	, "	У тебя достаточно денег? Я хочу, чтобы ты купил подарок.	"	, "	У неё недостаточно денег, чтобы купить новую блузку.	"	, "	Не покупай то пальто. Оно красивоe, но недостаточно длинное.	"	, "	Достаточно ли молока в вашем кофе? Допивай своё кофе. 	"	, "	Моя подруга хочет кофе, но у нее недостаточно денег, чтобы купить его.	"	, "	Я повредил спину, когда работал в саду.	"	, "	Я купил пиджак и рубашку. Пиджак был дешевый, но рубашка была дорогой.	"	, "	Примерь эти туфли. Сними одну из своих туфель, и одень эту.	"	, "	Среди гостей был странный человек. Он подслушал наш разговор.	"	, "	Я никогда не забуду, как играл в снежки с ребятами из моего района.	"	, "	Тебе следует оставить это в прошлом: что сделано, то сделано.	"	, "	Ты нужно уехать отсюда как можно скорее.	"	, "	Вам стоит попробовать этот напиток. Это вкусно.	"	, "	Касия не занималась вчера вечером, потому что она чувствовала себя уставшей.	"	, "	Я люблю жареную курицу и картофель, но их слишком сложно готовить.	"	, "	Я не хотел об этом говорить. Не я начал этот разговор, а ты.	"	, "	Приятно снова увидеть тебя. Давай обменяемся телефонами, чтобы снова поговорить вскоре.	"	, "	Я всегда забываю свой номер мобильного телефона. Я должен записать это.	"	, "	Извините, я не помню вашего имени. У меня ужасная память.	"	, "	Веди себя тихо. Ребенок спит. Мы должны поговорить тихо.	"	,];

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