var eng = ["	They haven't got a key, so they can't get into the house.	"	, "	They can't get into the house because they haven't got a key.	"	, "	We didn't go uot last night because of the rain.	"	, "	The door was open, so we walked in.	"	, "	Are you free tonight? How about meeting at half past six?	"	, "	What would you like to do this afternoon? How about going to a café?	"	, "	May be we can have lunch together? What time's good for you?	"	, "	I try to call my parents at least once a week.	"	, "	He is a pretty awful driver. His car crashed into a lamp post.	"	, "	That's awful. Of course everyone else thought it was hilarious!	"	, "	What a shame we missed the wedding.	"	, "	Everywhere we went, people were friendly.	"	, "	The car's been standing in the garage for weeks.	"	, "	I think she went out onto the balcony.	"	, "	Her office is at the end of the hall.	"	, "	The kitchen is directly below her bedroom.	"	, "	Our dining room connects to the kitchen and living room.	"	, "	The house comprises two bedrooms, a kitchen, and a living room.	"	, "	The stairs lead to the roof. The whole city is visible from the roof.	"	, "	The living room also does duty as a home office.	"	, "	We sold a two-bedroom apartment.	"	, "	I didn't hear the telephone, I was scrubbing out the bathroom.	"	, "	I’d like to rent an apartment with spacious roof terrace.	"	, "	It's a nice house but it hasn't got a garden.	"	, "	Leave your bags in the hall and go upstairs.	"	, "	She went downstairs to the kitchen.	"	, "	Coffee is one of the most popular beverages worldwide.	"	, "	I got up in the middle of the night because I couldn't sleep.	"	, "	I won't be at home this evening, so don't phone me.	"	, "	She doesn't like her job because she does the same thing all the time.	"	, "	He didn't have any money because he didn't have a job.	"	, "	If the lamp doesn’t work, try changing the light bulb.	"	, "	The stove doesn’t work. Put the soup in the microwave.	"	, "	There is a bottle of milk in the fridge.	"	, "	There is two bedrooms and one bathroom in my flat.	"	, "	There are four chairs and a table in the dinning room.	"	, "	There wasn’t a wallet on my table. Was there anybody in my room?	"	,];
var ru = ["	У них нет ключа, поэтому они не могут попасть в дом.	"	, "	Они не могут попасть в дом потому что у них нет ключа.	"	, "	Мы не пошли гулять прошлой ночью из-за дождя.	"	, "	Дверь была открыта, поэтому мы вошли внутрь.	"	, "	Ты свободен сегодня вечером? Как насчет встречи в половине седьмого?	"	, "	Чем бы ты хотел заняться сегодня днём? Как насчет того, чтобы пойти в кафе?	"	, "	Может, мы вместе пообедаем? В какое время вам удобно?	"	, "	Я стараюсь звонить родителям, по крайней мере, раз в неделю.	"	, "	Он довольно ужасный водитель. Eго машина врезалась в фонарный столб.	"	, "	Это ужасно. Конечно, все остальные думали, что это было весело!	"	, "	Как жаль, что мы пропустили свадьбу.	"	, "	Везде, где мы были, люди были очень дружелюбными.	"	, "	Автомобиль стоит в гараже уже несколько недель.	"	, "	Я думаю, она вышла на балкон.	"	, "	Её кабинет — в конце коридора.	"	, "	Кухня располагается прямо под её спальней.	"	, "	Наша столовая соединяется с кухней и гостинной.	"	, "	Дом состоит из двух спален, кухни и гостиной.	"	, "	Лестница ведёт на крышу. С крыши видно весь город.	"	, "	Гостиная также выполняет обязанности кабинета.	"	, "	Мы продали квартиру с двумя спальнями.	"	, "	Я не слышал телефонного звонка, я чистил ванну.	"	, "	Я бы хотел арендовать квартиру с просторной террасой на крыше.	"	, "	Это чудесный дом, но у него нет сада.	"	, "	Оставьте сумки в прихожей и поднимитесь по лестнице.	"	, "	Она спустилась по лестнице на кухню.	"	, "	Кофе — это один из самых популярных напитков во всем мире.	"	, "	Я встал среди ночи, потому что я не мог уснуть.	"	, "	Меня не будет дома этим вечером, поэтому не звони мне.	"	, "	Она не любит свою работу, потому что она делает одно и тоже всё время.	"	, "	У него не было никаких денег, потому что не было работы.	"	, "	Если светильник не работает, попробуйте заменить лампочку.	"	, "	Плита не работает. Поставь суп в микроволновку.	"	, "	В холодильнике есть бутылка молока.	"	, "	В моей квартире две спальни и одна ванная комната.	"	, "	В столовой четыре стула и стол.	"	, "	На моём столе не было кошелька. Был ли кто-то в моей комнате?	"	,];

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