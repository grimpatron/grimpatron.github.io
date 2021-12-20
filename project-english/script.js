var eng = ["	There is a bottle of milk in the fridge.	"	, "	There wasn’t a wallet on my table. Was there anybody in my room?	"	, "	Let's go to the dining room, our lunch is getting cold.	"	, "	Is there a bottle on the table? How much water is there in the bottle?	"	, "	There is a free parking place between those two big cars.	"	, "	A woman in front of me pretended not to hear my question.	"	, "	Don’t keep money under your pillow, go to the bank!	"	, "	There is a laptop on the windowsill. You can use it.	"	, "	There aren’t any letters at the post office for you.	"	, "	Are there any letters at the post office for me?	"	, "	There is some tea in the teapot. There is a cup next to the teapot.	"	, "	There are so many different ways to learn English.	"	, "	Ther are some oranges ot the table. Put them in the fridge.	"	, "	There are some magazines and a book on the shelve. Bring me the book. 	"	, "	There is a meeting tomorrow morning. It will start at 7, so don't be late.	"	, "	We stood opposite each other and held hands.	"	, "	There is a library across the street. It’s just behind this building.	"	, "	Unfortunately, I can’t remember the names of all my clients.	"	, "	The only thing you can do now is wait.	"	, "	Excuse me, do you work here? Could you help me, please?	"	, "	I'm so busy today. We can go shopping tomorrow.	"	, "	Could I leave my bags here, and pick them up later?	"	, "	The tap doesn't work. I can't figure out how to fix it.	"	, "	Many people use flowers for decoration in their homes.	"	, "	I need to change my clothes. I will be ready in 5 minutes.	"	, "	You have to go straight for 5 minutes and then turn right.	"	, "	We enjoyed our holiday. Paris is an interesting city.	"	, "	You can go. Turn off the light and close the door.	"	, "	How many times have you visited the art galleries?	"	, "	I’m looking for an old bridge. Is this bridge far from here?	"	, "	As suggested by the map it should be somewhere around here.	"	, "	You would need to turn left at the traffic lights.	"	, "	You should take the second turn on the right.	"	, "	It’s four blocks down the street on this side of the road.	"	, "	Do you take credit cards? OK, I'll pay in cash.	"	, "	Are you looking for anything in particular? What colour would you like?	"	, "	I would like to try it on. Where is the changing room?	"	, "	I'm not sure. I need to think about it. I will come back later.	"	, "	Can I help you? What size do you wear?	"	, "	Have you got it in another size? Have you got it in size forty-two?	"	, "	Have you got it in another colour? Have you got it in black?	"	, "	No, thanks. I'm just looking.	"	, "	I will take it. How much is it? Does it come with a guarantee?	"	, "	That's expensive. Do you have something cheaper?	"	, "	I would like to return a purchase and get a refund.	"	, "	This is too big.Do you have a smaller size?	"	, "	This is too small.Do you have a larger size?	"	,];
var ru = ["	В холодильнике есть бутылка молока.	"	, "	На моём столе не было кошелька. Был ли кто-то в моей комнате?	"	, "	Пойдем в столовую, наш обед отсывает. 	"	, "	Есть ли на столе бутылка? Сколько воды в бутылке?	"	, "	Есть свободное парковочное место между теми двумя большими машинами.	"	, "	Женщина впереди меня сделала вид, что не услышала мой вопрос.	"	, "	Не держи деньги под подушкой, иди в банк!	"	, "	На подоконнике есть ноутбук. Ты можешь использовать его.	"	, "	На почте нет никаких писем для тебя.	"	, "	Есть ли на почте какие-то письма для меня?	"	, "	В чайнике есть немного чая. Рядом с чайником стоит чашка.	"	, "	Есть так много разных способов выучить английский язык.	"	, "	На столе несколько апельсинов. Положи их в холодильник.	"	, "	На полке есть несколько журнолов и книга. Принеси мне книгу.	"	, "	Завтра утром собрание. Оно будет в 7 часов, так что не опаздывай.	"	, "	Мы стояли друг напротив друга и держались за руки.	"	, "	На другой стороне улицы находится библиотека. Это сразу за этим зданием.	"	, "	К сожалению, я не могу запомнить имена всех моих клиентов.	"	, "	Единственная вещь, которую ты можешь сделать сейчас, это ждать.	"	, "	Прошу прощения, вы работаете здесь? Вы не могли бы мне помочь?	"	, "	Я сегодня так занят. Мы можем пойти за покупками завтра.	"	, "	Могу ли я оставить свои пакеты здесь, и забрать их позже?	"	, "	Кран не работает. Я не могу понять как его починить	"	, "	Многие люди используют цветы для украшения своих домов.	"	, "	Мне надо переодеться. Я буду готов через 5 минут.	"	, "	Вам надо идти прямо 5 минут, затем повернуть направо.	"	, "	Мы получили удовольствие от отпуска. Париж интересный город,	"	, "	Ты можешь идти. Выключи свет и закрой дверь.	"	, "	Сколько раз вы посещали картинные галереи?	"	, "	Я ищу старый мост.  Этот мост находится далеко отсюда?	"	, "	Судя по карте, он должен быть где-то здесь.	"	, "	Вам нужно повернуть налево у светофора.	"	, "	На втором перекрёстке сверните направо.	"	, "	Это через четыре квартала вдоль по этой стороне улицы.	"	, "	Вы принимаете кредитные карты? Хорошо, я заплачу наличными.	"	, "	Ищете что-то конкретное? Какой цвет вы бы хотели?	"	, "	Я бы хотел это примерить. Где находится примерочная?	"	, "	Я не уверен. Мне нужно подумать. Я зайду попозже.	"	, "	Я могу вам помочь? Какой размер вы носите?	"	, "	У вас есть эта вещь другого размера? У вас есть размер сорок два?	"	, "	У вас есть эта вещь в другом цвете? У вас есть чёрного цвете?	"	, "	Нет, спасибо. Я просто смотрю.	"	, "	Я это возьму. Сколько это стоит? На эту вещь есть гарантия?	"	, "	Это дорого. У вас есть что-нибудь подешевле?	"	, "	Я бы хотел вернуть покупку и получить назад деньги.	"	, "	Это слишком большое. У вас есть размер поменьше?	"	, "	Это слишком маленькое. У вас есть размер побольше?	"	,];

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