var eng = ["	We enjoyed our holiday. Paris is an amazing and romantic city.	"	, "	I will never forget that wonderful sunny day in Paris.	"	, "	Yesterday I finished reading the most interesting book in my life.	"	, "	You look lovely in this dress. This hairstyle is just right for you.	"	, "	That was awesome! Most of the city was aflame.	"	, "	She told an exciting story. The story engaged my interest.	"	, "	We suppose that the situation will improve. No worries! 	"	, "	I have not seen the glasses in the cupboard. Where are they?	"	, "	I don't mind getting up early. It's all the same to me.	"	, "	No decision will be made until we know all the facts.	"	, "	The job wasn't exciting, but the money was good.	"	, "	How about going to a bar. I want to have a beer and talk to you.	"	, "	Do you cook well? What’s your best dish?	"	, "	Do you go to this Itallian restaurant? Is it good?	"	, "	I’m so hungry. Let’s eat something. Do you like hot dogs?	"	, "	The food at this restaurant is very good.	"	, "	Put some oil and salt in the salad and mix.	"	, "	Take an egg and break it into the bowl.	"	, "	I'll give him a jar of peas and a bag of rice.	"	, "	You should buy a carton of juice, and a can of peas.	"	, "	He drank a mug of coffee. He ate a packet of cookies.	"	, "	There aren't any fresh vegetables. Tinned foods are not very tasty.	"	, "	There are not many empty glasses. But we can use mugs.	"	, "	There is quite a lot of alcohol. We need more snacks.	"	, "	He eats a lot of potatoes and quite a lot of meat.	"	, "	How much sugar is there in one can of cola?	"	, "	How many potatoes are there in that bag?	"	, "	How much food does an avarage person eat in a lifetime?	"	, "	Have you got any sweets? I want to eat something delicious.	"	, "	There isn't any milk, but there is some fruit juice and soda. 	"	, "	I prefer tea to coffee. I usually put three spoons of sugar in my tea.	"	, "	I can’t describe you the taste of this meal.	"	, "	Would you like some coffee or mineral water?	"	, "	Are you ready to order? Would you like something to drink?	"	, "	The same for me please.	"	, "	I love pizza so much that I can eat it every day.	"	,];
var ru = ["	Мы получили удовольствие от отпуска. Париж удивительный и романтичный город.	"	, "	Я никогда не забуду тот прекрасный солнечный день в Париже.	"	, "	Вчера я закончил читать самую интересную в моей жизни книгу.	"	, "	Прекрасно выглядишь в этом платье. Тебе идёт эта причёска.	"	, "	Это было невероятно! Большая часть города была охвачена огнём.	"	, "	Она рассказала захватывающую историю. Эта история вызвала у меня интерес.	"	, "	Мы полагаем, что ситуация улучшится. Не беспокойся!	"	, "	Я не увидел стаканы в серванте. Где они?	"	, "	Я не против вставать рано. Мне всё равно.	"	, "	Мы не будем принимать никакое решение, пока не узнаем все факты.	"	, "	Работа не была увлекательной, но с хорошими деньгами.	"	, "	Как насчет того, чтобы пойти в бар. Я хочу выпить пива и поговорить с тобой.	"	, "	Ты хорошо готовишь? Какое блюдо получается у тебя лучше всего?	"	, "	Ты ходишь в этот итальянский  ресторан? Он хороший?	"	, "	Я такой голодный. Давай съедим что-нибудь. Ты любишь хот-доги?	"	, "	Еда в этом ресторане очень хорошая.	"	, "	Добавьте в салат масло и соль и перемешайте.	"	, "	Возьми яйцо и разбей его в миску.	"	, "	Я дам ему банку гороха и мешок риса.	"	, "	Ты должен купить упаковку сока и банку гороха.	"	, "	Он выпил кружку кофе. Он съел пачку печенья.	"	, "	Нет свежих овощей. Консервированные продукты — не очень вкусные.	"	, "	Пустых стаканов не так много. Но мы можем использовать кружки.	"	, "	Здесь довольно много алкоголя. Нам нужно больше закусок.	"	, "	Он ест много картошки и довольно много мяса.	"	, "	Сколько сахара в одной банке колы?	"	, "	Сколько картошки в том мешке?	"	, "	Сколько еды в среднем съедает за свою жизнь человек?	"	, "	У тебя есть сладости? Я хочу съесть что-нибудь вкусное.	"	, "	Молока нет, но есть фруктовый сок и газировка.	"	, "	Я предпочитаю чай кофе. Я обычно кладу три ложки сахара в чай.	"	, "	Я не могу описать тебе вкус этого блюда.	"	, "	Вы бы хотели кофе или минеральную воду?	"	, "	Вы готовы сделать заказ? Хотите чего-нибудь выпить?	"	, "	Мне тоже самое, пожалуйста.	"	, "	Я так люблю пиццу, что я могу есть ее каждый день.	"	,];

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