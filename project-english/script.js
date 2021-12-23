var eng = ["	Is there a bottle on the table? How much water is there in the bottle?	"	, "	Don’t keep money under your pillow, go to the bank!	"	, "	There is some tea in the teapot. There is a cup on the bottom shelf of the cupboard.	"	, "	There are some magazines and a book on the shelve. Bring me the book. 	"	, "	There is a library across the street. It’s just behind this building.	"	, "	The only thing you can do now is wait.	"	, "	Excuse me, do you work here? Could you help me, please?	"	, "	I'm so busy today. We can go shopping tomorrow.	"	, "	Could I leave my bags here, and pick them up later?	"	, "	The tap doesn't work. I can't figure out how to fix it.	"	, "	Many people use flowers for decoration in their homes.	"	, "	I need to change my clothes. I will be ready in 5 minutes.	"	, "	You can go. Turn off the light and close the door.	"	, "	How many times have you visited the art galleries?	"	, "	Do you take credit cards? OK, I'll pay cash.	"	, "	Are you looking for anything in particular? Which do you prefer?	"	, "	I would like to try it on. Where is the changing room?	"	, "	I'm not sure. I need to think about it. I will come back later.	"	, "	Can I help you? What size do you wear? What colour would you like?	"	, "	Have you got it in another size? Have you got it in size forty-two?	"	, "	Have you got it in another colour? Have you got it in black?	"	, "	No, thanks. I'm just looking.	"	, "	I will take it. How much is it? Does it come with a guarantee?	"	, "	That's expensive. Do you have something cheaper?	"	, "	I would like to return a purchase and get a refund.	"	, "	This is too big. Do you have a smaller size?	"	, "	This is too small. Do you have a larger size?	"	, "	Does it fit all right? Do you want to take it?	"	, "	I need a new suit. Do you have suits in stock?	"	, "	It doesn't fit me. Have you got this suit in size 48.	"	, "	I bought this here yesterday. I'd like to change this for a different size.	"	, "	Unfortunately, I don't have any small change. Would you have change for this?	"	, "	Do you need a bag? Here you are. Here’s your change. Anything else?	"	, "	It's not what I'm looking for. Thanks anyway.	"	, "	I don't like this. Can I bring this back if it does not fit?	"	, "	Do you sell jeans? Can you recommend me something?	"	, "	Did you find what you were looking for? How about this one?	"	, "	We enjoyed our holiday. Paris is an amazing and romantic city.	"	, "	I will never forget that wonderful sunny day in Paris.	"	, "	Yesterday I finished reading the most interesting book in my life.	"	, "	You look lovely in that dress.	"	, "	That was awesome! Most of the city was aflame.	"	, "	She told a exciting story. The story engaged my interest.	"	, "	Give me a minute. We suppose that the situation will improve.	"	,];
var ru = ["	Есть ли на столе бутылка? Сколько воды в бутылке?	"	, "	Не держи деньги под подушкой, иди в банк!	"	, "	В чайнике есть немного чая. На нижней полке буфета стоти чашка.	"	, "	На полке есть несколько журнолов и книга. Принеси мне книгу.	"	, "	На другой стороне улицы находится библиотека. Это сразу за этим зданием.	"	, "	Единственная вещь, которую ты можешь сделать сейчас, это ждать.	"	, "	Прошу прощения, вы работаете здесь? Вы не могли бы мне помочь?	"	, "	Я сегодня так занят. Мы можем пойти за покупками завтра.	"	, "	Могу ли я оставить свои пакеты здесь, и забрать их позже?	"	, "	Кран не работает. Я не могу понять как его починить	"	, "	Многие люди используют цветы для украшения своих домов.	"	, "	Мне надо переодеться. Я буду готов через 5 минут.	"	, "	Ты можешь идти. Выключи свет и закрой дверь.	"	, "	Сколько раз вы посещали картинные галереи?	"	, "	Вы принимаете кредитные карты? Хорошо, я заплачу наличными.	"	, "	Ищете что-то конкретное?  Что вы предпочитаете?	"	, "	Я бы хотел это примерить. Где находится примерочная?	"	, "	Я не уверен. Мне нужно подумать. Я зайду попозже.	"	, "	Я могу вам помочь? Какой размер вы носите? Какой цвет вы бы хотели?	"	, "	У вас есть эта вещь другого размера? У вас есть размер сорок два?	"	, "	У вас есть эта вещь в другом цвете? У вас есть чёрного цвете?	"	, "	Нет, спасибо. Я просто смотрю.	"	, "	Я это возьму. Сколько это стоит? На эту вещь есть гарантия?	"	, "	Это дорого. У вас есть что-нибудь подешевле?	"	, "	Я бы хотел вернуть покупку и получить назад деньги.	"	, "	Это слишком большое. У вас есть размер поменьше?	"	, "	Это слишком маленькое. У вас есть размер побольше?	"	, "	Это вам подходит? Вы будете это брать?	"	, "	Мне нужен новый костюм. У вас есть в продаже костюмы?	"	, "	Это не подходит мне. У вас есть этот костюм 48-го размера.	"	, "	Я купил это здесь вчера. Я бы хотел обменять эту вещь на другой размер.	"	, "	К сожалению, у меня нет мелочи. У вас будет сдача с этой суммы?	"	, "	Вам нужен пакет? Возьмите. Вот Ваша сдача. Что-то ещё?	"	, "	Это не то, что я ищу. Спасибо, в любом случае.	"	, "	Мне это не нравится. Могу я вернуть вещь, если она не подойдет мне?	"	, "	Вы продаёте джинсы? Вы можете мне что-то порекомендовать?	"	, "	Вы нашли то, что искали? Как насчёт этого?	"	, "	Мы получили удовольствие от отпуска. Париж удивительный и романтичный город.	"	, "	Я никогда не забуду тот прекрасный солнечный день в Париже.	"	, "	Вчера я закончил читать самую интересную в моей жизни книгу.	"	, "	Прекрасно выглядишь в этом платье.	"	, "	Это было невероятно! Большая часть города была охвачена огнём.	"	, "	Она рассказала захватывающую историю. Эта история вызвала у меня интерес.	"	, "	Дайте мне одну минуту. Мы полагаем, что ситуация улучшится.	"	,];

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