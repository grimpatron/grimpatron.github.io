var eng = ["	I didn't hear the telephone, I was scrubbing out the bathroom.	"	, "	I won't be at home this evening, so don't phone me.	"	, "	She doesn't like her job because she does the same thing all the time.	"	, "	If the lamp doesn’t work, try changing the light bulb.	"	, "	The stove doesn’t work. Put the soup in the microwave.	"	, "	There is a bottle of milk in the fridge.	"	, "	There wasn’t a wallet on my table. Was there anybody in my room?	"	, "	There isn't a balcony and a garage in my house, but there is a basement.	"	, "	Are there many big trees in your garden?	"	, "	Let's go to the dining room, our lunch is getting cold.	"	, "	Is there a bottle on the table? How much water is there in the bottle?	"	, "	There is a bathroom behind you. There is a shower and a washbasin.	"	, "	There is a free parking place between those two big cars.	"	, "	A woman in front of me pretended not to hear my question.	"	, "	Don’t keep money under your pillow, go to the bank!	"	, "	There is a laptop on the windowsill. You can use it.	"	, "	There aren’t any letters at the post office for you.	"	, "	Are there any letters at the post office for me?	"	, "	There is some tea in the cup. There is the cup next to the teapot.	"	, "	There are so many different ways to learn English.	"	, "	Ther are some oranges ot the table. Put them in the fridge.	"	, "	There are some magazines and a book in the shelve. Bring me the book. 	"	, "	There is a meeting tonight. It will start at 7, so don't be late.	"	, "	We stood opposite each other and held hands.	"	, "	There is a library across the street. It’s just behind this building.	"	, "	Unfortunately, I can’t remember the names of all my clients.	"	, "	The only thing you can do now is wait.	"	, "	Excuse me, do you work here? Could you help me, please?	"	, "	I'm so busy today. We can go shopping tomorrow.	"	, "	Could I leave my bags here, and pick them up later?	"	, "	Are you looking for anything in particular? What colour would you like?	"	, "	Do you take credit cards? OK, I'll pay in cash.	"	, "	The tap doesn't work. I can't figure out how to fix it.	"	, "	Many people use flowers for decoration in their homes.	"	, "	I need to change my clothes. I will be ready in 5 minutes.	"	, "	You have to go straight for 5 minutes and then turn right.	"	, "	I will come back in 15 minutes. Let me know when you`re free.	"	, "	We enjoyed our holiday. Paris is an interesting city.	"	, "	You can go. Turn off the light and close the door.	"	, "	How many times have you visited the art galleries?	"	,];
var ru = ["	Я не слышал телефонного звонка, я чистил ванну.	"	, "	Меня не будет дома этим вечером, поэтому не звони мне.	"	, "	Она не любит свою работу, потому что она делает одно и тоже всё время.	"	, "	Если светильник не работает, попробуйте заменить лампочку.	"	, "	Плита не работает. Поставь суп в микроволновку.	"	, "	В холодильнике есть бутылка молока.	"	, "	На моём столе не было кошелька. Был ли кто-то в моей комнате?	"	, "	В моем доме нет балкона и гаража, но есть подвал.	"	, "	В твоём саду много больших деревьев?	"	, "	Пойдем в столовую, наш обед отсывает. 	"	, "	Есть ли на столе бутылка? Сколько воды в бутылке?	"	, "	За тобой ванная. Там есть душ и умывальник.	"	, "	Есть свободное парковочное место между теми двумя большими машинами.	"	, "	Женщина впереди меня сделала вид, что не услышала мой вопрос.	"	, "	Не держи деньги под подушкой, иди в банк!	"	, "	На подоконнике есть ноутбук. Ты можешь использовать его.	"	, "	На почте нет никаких писем для тебя.	"	, "	Есть ли на почте какие-то письма для меня?	"	, "	В чашке есть немного чая. Чашка стоит рядом с чайником.	"	, "	Есть так много разных способов выучить английский язык.	"	, "	На столе несколько апельсинов. Положи их в холодильник.	"	, "	На полке есть несколько журнолов и книга. Принеси мне книгу.	"	, "	Сегодня вечером собрание. Оно будет в 7 часов, так что не опаздывай.	"	, "	Мы стояли друг напротив друга и держались за руки.	"	, "	На другой стороне улицы находится библиотека. Это сразу за этим зданием.	"	, "	К сожалению, я не могу запомнить имена всех моих клиентов.	"	, "	Единственная вещь, которую ты можешь сделать сейчас, это ждать.	"	, "	Прошу прощения, вы работаете здесь? Вы не могли бы мне помочь?	"	, "	Я сегодня так занят. Мы можем пойти за покупками завтра.	"	, "	Могу ли я оставить свои пакеты здесь, и забрать их позже?	"	, "	Ищете что-то конкретное? Какой цвет вы бы хотели?	"	, "	Вы принимаете кредитные карты? Хорошо, я заплачу наличными.	"	, "	Кран не работает. Я не могу понять как его починить	"	, "	Многие люди используют цветы для украшения своих домов.	"	, "	Мне надо переодеться. Я буду готова через 5 минут.	"	, "	Вам надо идти прямо 5 минут, затем повернуть направо.	"	, "	Я вернусь через 15 минут. Дай мне знать, когда ты освободишься.	"	, "	Мы получили удовольствие от отпуска. Париж интересный город,	"	, "	Ты можешь идти. Выключи свет и закрой дверь.	"	, "	Сколько раз вы посещали картинные галереи?	"	,];

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