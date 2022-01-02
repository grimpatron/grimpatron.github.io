var eng = ["	I would like to try it on. Where is the changing room?	"	, "	Does it fit all right? Do you want to take it?	"	, "	I need a new suit. Do you have suits in stock?	"	, "	Unfortunately, I don't have any small change. Would you have change for this?	"	, "	Do you need a bag? Here you are. Here’s your change. Anything else?	"	, "	I don't like this. Can I bring this back if it does not fit?	"	, "	Do you sell jeans? Can you recommend me something?	"	, "	Did you find what you were looking for? How about this one?	"	, "	What material is it? Is it machine-washable?	"	, "	We enjoyed our holiday. Paris is an amazing and romantic city.	"	, "	I will never forget that wonderful sunny day in Paris.	"	, "	Yesterday I finished reading the most interesting book in my life.	"	, "	You look lovely in this dress. This hairstyle is just right for you.	"	, "	That was awesome! Most of the city was aflame.	"	, "	She told an exciting story. The story engaged my interest.	"	, "	We suppose that the situation will improve. No worries! 	"	, "	You can look at paintings and sculptures at an art gallery.	"	, "	You can send a letter or buy a postcard at a post office.	"	, "	You can borrow a book or a magazine from a library.	"	, "	You can buy food, clothes and kitchenware at a supermarket.	"	, "	You can watch films and cartons at a cinema.	"	, "	You can see plays, ballets and listen to opera at a theatre.	"	, "	You can play tennis and football at a sport center.	"	, "	You can look at old objects and to learn about the history at a museum.	"	, "	You can find a police officer and report a crime at a police station.	"	, "	You can by medicine and personal hygiene products at a pharmacy.	"	, "	You can by fresh fruits and vegetables at a greengrocer's.	"	, "	I have not seen the glasses in the cupboard. Where are they?	"	, "	I don't mind getting up early. It's all the same to me.	"	, "	I like my new shoes. They are comfortable and not expensive.	"	, "	No decision will be made until we know all the facts.	"	, "	The job wasn't exciting, but the money was good.	"	, "	How about going to a bar. I want to have a beer and talk to you.	"	, "	Are you a good cook? What’s your best dish?	"	, "	Do you go to this Itallian restaurant? Is it good?	"	, "	I’m so hungry. Let’s eat something. Do you like hot dogs?	"	, "	The food at this restaurant is very good.	"	, "	Put some oil and salt in the salad and mix.	"	, "	Do you know how to use a knife and fork?	"	, "	I can’t describe you the taste of this meal.	"	,];
var ru = ["	Я бы хотел это примерить. Где находится примерочная?	"	, "	Это вам подходит? Вы будете это брать?	"	, "	Мне нужен новый костюм. У вас есть в продаже костюмы?	"	, "	К сожалению, у меня нет мелочи. У вас будет сдача с этой суммы?	"	, "	Вам нужен пакет? Возьмите. Вот Ваша сдача. Что-то ещё?	"	, "	Мне это не нравится. Могу я вернуть вещь, если она не подойдет мне?	"	, "	Вы продаёте джинсы? Вы можете мне что-то порекомендовать?	"	, "	Вы нашли то, что искали? Как насчёт этого?	"	, "	Из чего оно сделаны? Это можно стирать в машине?	"	, "	Мы получили удовольствие от отпуска. Париж удивительный и романтичный город.	"	, "	Я никогда не забуду тот прекрасный солнечный день в Париже.	"	, "	Вчера я закончил читать самую интересную в моей жизни книгу.	"	, "	Прекрасно выглядишь в этом платье. Тебе идёт эта причёска.	"	, "	Это было невероятно! Большая часть города была охвачена огнём.	"	, "	Она рассказала захватывающую историю. Эта история вызвала у меня интерес.	"	, "	Мы полагаем, что ситуация улучшится. Не беспокойся!	"	, "	Вы можете посмотреть на картины и скульптуры в галерее искуств.	"	, "	Вы можете отправить письмо или купить открытку в почтовом отделении.	"	, "	Вы можете отдолжить книгу или журнал в библиотеке.	"	, "	Вы можете купить еду одежду и кухонные принадлежности в супермаркете.	"	, "	Вы можете смотреть фильмы и мультфильмы в кинотеатре.	"	, "	Вы можете увидеть спектакли, баллеты и послушать оперу в театре.	"	, "	Вы можете поиграть в теннис и футбол в спортивном центре.	"	, "	Вы можете посмотреть на старинные объекты и узнать об истории в музее.	"	, "	Вы можете найти полицейского и сообщить о преступлении в полицейском участке.	"	, "	Вы можите купить лекарства и средства личной гигиены в аптеке.	"	, "	Вы можете купить свежие фрукты и овощи в овощной лавке.	"	, "	Я не увидел стаканы в серванте. Где они?	"	, "	Я не против вставать рано. Мне всё равно.	"	, "	Мне нравятся мои новые туфли. Они удобные и недорогие.	"	, "	Мы не будем принимать никакое решение, пока не узнаем все факты.	"	, "	Работа не была увлекательной, но с хорошими деньгами.	"	, "	Как насчет того, чтобы пойти в бар. Я хочу выпить пива и поговорить с тобой.	"	, "	Ты хорошо готовишь? Какое блюдо получается у тебя лучше всего?	"	, "	Ты ходишь в этот итальянский  ресторан? Он хороший?	"	, "	Я такой голодный. Давай съедим что-нибудь. Ты любишь хот-доги?	"	, "	Еда в этом ресторане очень хорошая.	"	, "	Добавьте в салат масло и соль и перемешайте.	"	, "	Ты умеешь пользоваться ножом и вилкой?	"	, "	Я не могу описать тебе вкус этого блюда.	"	,];

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