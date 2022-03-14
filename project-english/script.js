let eng = ["	That was way easier than I thought it would be.	"	, "	There's nothing more interesting than a good book.	"	, "	She is a better student than others, but a very unpleasant person.	"	, "	The green skirt is shorter than the yellow one.	"	, "	These trousers are bigger than those trousers.	"	, "	He is far more intelligent than his wife thinks.	"	, "	She wanted to spend less time at her job.	"	, "	You should take the bus — it’s the easiest way to get there.	"	, "	Lisa is the youngest student in her class, but she is the smartest.	"	, "	Go straight on until you come to a crossroads.	"	, "	Is there a hotel near here?	"	, "	Could you tell me the way to the hotel.	"	, "	You would need to turn left at the traffic lights.	"	, "	Could you tell me how to get to the train station?	"	, "	How can I get to the local market?	"	, "	Where is the nearest bus stop?	"	, "	Where can I find the nearest bakery?	"	, "	How far is it to the train station?	"	, "	How long will it take to get there?	"	, "	Could you give me directions to the nearest bus stop?	"	, "	Turn left into Lake Road. Go past  the bank.	"	, "	Go straight on and then turn right at the crossroads.	"	, "	At the corner of the street you'll see a red building.	"	, "	Go ahead and then turn right at the traffic lights.	"	, "	The pedestrian street is far from here.	"	, "	Continue along this street until you see a bank.	"	, "	Turn left at the corner. Then go straight on for about five minutes.	"	, "	As suggested by the map it should be somewhere around here.	"	, "	Sorry, I don’t know. I’m not from around here.	"	, "	The shoe shop is across from sports shop.	"	, "	The baker's is between the dry-cleaner's and the butcher's.	"	, "	The newsagent's is near the hairdresser's.	"	, "	When you get to bridge you'll see this building.	"	, "	When I visit onother country, I try to learn some of the language.	"	, "	I have visited seven countries so far.	"	, "	Have you ever been to Japan?	"	, "	She enjoys traveling around Europe.	"	, "	Unfortunately, I have never been to Europe.	"	, "	The best way to explore the island is to hire a car.	"	, "	President of Ukraine Volodymyr Zelensky rejects asylum offers from Europe.	"	, "	It's my bag. Don't touch those scissors. Put them back.	"	,];
let ru = ["	Это было намного проще, чем я думал.	"	, "	Нет ничего интереснее чем хорошая книга.	"	, "	Она учится лучше, чем другие, но она очень неприятный человек.	"	, "	Зелёная юбка короче чем жёлтая.	"	, "	Эти брюки больше, чем те брюки.	"	, "	Он гораздо умнее, чем думает его жена.	"	, "	Она хотела проводить меньше времени на работе.	"	, "	Тебе следует ехать на автобусе — это самый легкий способ добраться туда.	"	, "	Лиза самая младшая ученица  в её классе, но она самая умная.	"	, "	Идите прямо пока не дойдёте до перекрестка.	"	, "	Есть ли какой нибуть отель поблизости? 	"	, "	Не могли бы вы подсказать мне дорогу к отелю?	"	, "	Вам нужно будет повернуть налево у светофора.	"	, "	Не могли бы вы сказать мне, как добраться до вокзала?	"	, "	Как мне добраться до местного рынка.	"	, "	Где находится ближайшая автобусная остановка?	"	, "	Где я могу найти ближайшую пекарню?	"	, "	Как далеко до железнодорожного вокзала?	"	, "	Сколько времени займет добраться туда?	"	, "	Не могли бы вы указать направление до ближайшей автобусной остановки?	"	, "	Поверните налево на Лейк-роуд. Пройдите мимо банка.	"	, "	Идите прямо, а затем поверните направо на перекрестке.	"	, "	На углу улицы вы увидите красное здание.	"	, "	Идите вперед, a затем поверните направо на светофоре.	"	, "	Пешеходная улица далеко отсюда.	"	, "	Продолжайте идти по этой улице, пока не увидите банк.	"	, "	Поверните налево на углу. Затем идите прямо минут пять.	"	, "	Судя по карте, он должен быть где-то здесь.	"	, "	Извините, я не знаю. Я не местный.	"	, "	Обувной магазин находится напротив спортивного магазина.	"	, "	Пекарня находится между химчисткой и мясной лавкой.	"	, "	Газетный киоск находится недалеко от парикмахерской.	"	, "	Когда вы доберетесь до моста, вы увидите это здание.	"	, "	Когда я приезжаю в другую страну, я стараюсь немного выучить язык.	"	, "	Я посетил семь стран на данный момент.	"	, "	Ты когда-нибудь был в Японии?	"	, "	Ей нравится путешествовать по Европе.	"	, "	К сожалению, я никогда не был в Европе.	"	, "	Лучший способ исследовать остров — арендовать автомобиль.	"	, "	Президент Украины Владимир Зеленский отверг предложения убежища из Европы.	"	, "	Это моя сумка. Не трогай эти ножницы. Положите их обратно.	"	,];

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