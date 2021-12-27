var eng = ["	Is there a bottle on the table? How much water is there in the bottle?	"	, "	There is some tea in the teapot. There is a cup on the bottom shelf of the cupboard.	"	, "	Excuse me, do you work here? Could you help me, please?	"	, "	Could I leave my bags here, and pick them up later?	"	, "	I need to change my clothes. I will be ready in 5 minutes.	"	, "	How many times have you visited the art galleries?	"	, "	Do you take credit cards? OK, I'll pay cash.	"	, "	Are you looking for anything in particular? Which do you prefer?	"	, "	I would like to try it on. Where is the changing room?	"	, "	I'm not sure. I need to think about it. I will come back later.	"	, "	Can I help you? What size do you wear? What colour would you like?	"	, "	Have you got it in another size? Have you got it in size forty-two?	"	, "	Have you got it in another colour? Have you got it in black?	"	, "	No, thanks. I'm just looking.	"	, "	I will take it. How much is it? Does it come with a guarantee?	"	, "	That's expensive. Do you have something cheaper?	"	, "	I would like to return a purchase and get a refund.	"	, "	This is too big. Do you have a smaller size?	"	, "	This is too small. Do you have a larger size?	"	, "	Does it fit all right? Do you want to take it?	"	, "	I need a new suit. Do you have suits in stock?	"	, "	It doesn't fit me. Have you got this suit in size 48.	"	, "	I bought this here yesterday. I'd like to change this for a different size.	"	, "	Unfortunately, I don't have any small change. Would you have change for this?	"	, "	Do you need a bag? Here you are. Here’s your change. Anything else?	"	, "	It's not what I'm looking for. Thanks anyway.	"	, "	I don't like this. Can I bring this back if it does not fit?	"	, "	Do you sell jeans? Can you recommend me something?	"	, "	Did you find what you were looking for? How about this one?	"	, "	What material is it? Is it machine-washable?	"	, "	We enjoyed our holiday. Paris is an amazing and romantic city.	"	, "	I will never forget that wonderful sunny day in Paris.	"	, "	Yesterday I finished reading the most interesting book in my life.	"	, "	You look lovely in that dress. This hairstyle is just right for you.	"	, "	That was awesome! Most of the city was aflame.	"	, "	She told an exciting story. The story engaged my interest.	"	, "	Give me a minute. We suppose that the situation will improve.	"	, "	You can look at paintings and sculptures at an art gallery.	"	, "	You can send a letter or buy a postcard at a post office.	"	, "	You can borrow a book or a magazine from a library.	"	, "	You can buy food, clothes and kitchenware at a supermarket.	"	, "	You can watch films and cartons at a cinema.	"	, "	You can see plays, ballets and listen to opera at a theatre.	"	, "	You can play tennis and football at a sport center.	"	, "	You can look at old object and to learn about the history at a museum.	"	, "	You can find a police officer and report a crime at a police station.	"	, "	You can by medicine and personal hygiene products at a pharmacy.	"	, "	You can by fresh fruits and vegetables at a greengrocer's.	"	, "	I have not seen the glasses in the cupboard. Where are they?	"	,];
var ru = ["	Есть ли на столе бутылка? Сколько воды в бутылке?	"	, "	В чайнике есть немного чая. На нижней полке буфета стоти чашка.	"	, "	Прошу прощения, вы работаете здесь? Вы не могли бы мне помочь?	"	, "	Могу ли я оставить свои пакеты здесь, и забрать их позже?	"	, "	Мне надо переодеться. Я буду готов через 5 минут.	"	, "	Сколько раз вы посещали картинные галереи?	"	, "	Вы принимаете кредитные карты? Хорошо, я заплачу наличными.	"	, "	Ищете что-то конкретное?  Что вы предпочитаете?	"	, "	Я бы хотел это примерить. Где находится примерочная?	"	, "	Я не уверен. Мне нужно подумать. Я зайду попозже.	"	, "	Я могу вам помочь? Какой размер вы носите? Какой цвет вы бы хотели?	"	, "	У вас есть эта вещь другого размера? У вас есть размер сорок два?	"	, "	У вас есть эта вещь в другом цвете? У вас есть чёрного цвете?	"	, "	Нет, спасибо. Я просто смотрю.	"	, "	Я это возьму. Сколько это стоит? На эту вещь есть гарантия?	"	, "	Это дорого. У вас есть что-нибудь подешевле?	"	, "	Я бы хотел вернуть покупку и получить назад деньги.	"	, "	Это слишком большое. У вас есть размер поменьше?	"	, "	Это слишком маленькое. У вас есть размер побольше?	"	, "	Это вам подходит? Вы будете это брать?	"	, "	Мне нужен новый костюм. У вас есть в продаже костюмы?	"	, "	Это не подходит мне. У вас есть этот костюм 48-го размера.	"	, "	Я купил это здесь вчера. Я бы хотел обменять эту вещь на другой размер.	"	, "	К сожалению, у меня нет мелочи. У вас будет сдача с этой суммы?	"	, "	Вам нужен пакет? Возьмите. Вот Ваша сдача. Что-то ещё?	"	, "	Это не то, что я ищу. Спасибо, в любом случае.	"	, "	Мне это не нравится. Могу я вернуть вещь, если она не подойдет мне?	"	, "	Вы продаёте джинсы? Вы можете мне что-то порекомендовать?	"	, "	Вы нашли то, что искали? Как насчёт этого?	"	, "	Из чего оно сделаны? Это можно стирать в машине?	"	, "	Мы получили удовольствие от отпуска. Париж удивительный и романтичный город.	"	, "	Я никогда не забуду тот прекрасный солнечный день в Париже.	"	, "	Вчера я закончил читать самую интересную в моей жизни книгу.	"	, "	Прекрасно выглядишь в этом платье. Тебе идёт эта причёска.	"	, "	Это было невероятно! Большая часть города была охвачена огнём.	"	, "	Она рассказала захватывающую историю. Эта история вызвала у меня интерес.	"	, "	Дайте мне одну минуту. Мы полагаем, что ситуация улучшится.	"	, "	Вы можете посмотреть на картины и скульптуры в галерее искуств.	"	, "	Вы можете отправить письмо или купить открытку в почтовом отделении.	"	, "	Вы можете отдолжить книгу или журнал в библиотеке.	"	, "	Вы можете купить еду одежду и кухонные принадлежности в супермаркете.	"	, "	Вы можете смотреть фильмы и мультфильмы в кинотеатре.	"	, "	Вы можете увидеть спектакли, баллеты и послушать оперу в театре.	"	, "	Вы можете поиграть в теннис и футбол в спортивном центре.	"	, "	Вы можете посмотреть на старинные объекты и узнать об истории в музее.	"	, "	Вы можете найти полицейского и сообщить о преступлении в полицейском участке.	"	, "	Вы можите купить лекарства и средства личной гигиены в аптеке.	"	, "	Вы можете купить свежие фрукты и овощи в овощной лавке.	"	, "	Я не увидел стаканы в серванте. Где они?	"	,];

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