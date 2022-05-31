let eng = ["	When you see someone in trouble, do you usually stop and help them?	"	, "	A good diet is necessary for maintaining a healthy body.	"	, "	Take these tablets three times a day during the week.	"	, "	If you want to lose weight, you shouldn't eat late at night.	"	, "	You don't have a prescription. You shouldn't take antibiotics, go to a doctor.	"	, "	His side hurts. He fell from a tree and broke a rib.	"	, "	My friend wants coffee, but she doesn't have enough money to buy one.	"	, "	Try on these shoes. Take off one of your shoes and put on this one.	"	, "	I’ll never forget playing snowballs with the kids from my neighbourhood.	"	, "	You should try this drink. It's delicious.	"	, "	Kasia didn't study last night because she felt tired.	"	, "	I like roast chicken and potatoes, but they are too hard to cook.	"	, "	I didn't want to talk about this. I didn't start this the conversation - you did.	"	, "	Good to see you gain. Let's exchange numbers so we can talk again soon.	"	, "	I always forget my mobile number. I have to write it down.	"	, "	I eat almost entirely healthy food from the market.	"	, "	She eats organic food and tries to heal naturally.	"	, "	Marie immediately felt guilty.	"	, "	The doctor had to perform surgery immediately.	"	, "	Nasty medicine is difficult to swallow down.	"	, "	If you don't mind, let me try to do this exercise.	"	, "	What should I do next? I'll do everything possible.	"	, "	I've never regretted the decision.	"	, "	My friend was cutting vegetables and cut his finger badly.	"	, "	I stumbled and pour hot coffee on a friend's shirt.	"	, "	She had nothing to do except spend money at the casino.	"	, "	I'm sorry, I don’t remember  your name. I've got a terrible memory.	"	, "	Be quite. The baby's sleeping. We have to talk quietly.	"	, "	These rectangular boxes are not as heavy as those ones.	"	, "	Italy is not as big as Germany, but bigger than Greece.	"	, "	This computer is too old, so I bought that new laptop.	"	, "	Grandma was constantly signing me songs before sleep.	"	, "	You have a beautiful voice. Let's sing a song together.	"	, "	The girl singing on stage is my sister.	"	,];
let ru = ["	Когда вы видите кого-то в беде, вы обычно останавливаетесь и помогаете ему?	"	, "	Для поддержания здоровья тела необходимо хорошее питание. 	"	, "	Принимайте эти таблетки три раза в день в течение недели.	"	, "	Если вы хотите похудеть, вам не следует есть поздно вечером.	"	, "	У тебя нет рецептa. Не следует принимать антибиотики, идите к врачу.	"	, "	У него болит бок. Он упал с дерева и сломал ребро.	"	, "	Моя подруга хочет кофе, но у нее недостаточно денег, чтобы купить его.	"	, "	Примерь эти туфли. Сними одну из своих туфель, и одень эту.	"	, "	Я никогда не забуду, как играл в снежки с ребятами из моего района.	"	, "	Вам стоит попробовать этот напиток. Это вкусно.	"	, "	Касия не занималась вчера вечером, потому что она чувствовала себя уставшей.	"	, "	Я люблю жареную курицу и картофель, но их слишком сложно готовить.	"	, "	Я не хотел об этом говорить. Не я начал этот разговор, а ты.	"	, "	Приятно снова увидеть тебя. Давай обменяемся телефонами, чтобы снова поговорить вскоре.	"	, "	Я всегда забываю свой номер мобильного телефона. Я должен записать это.	"	, "	Я ем почти полностью здоровую пищу с рынка.	"	, "	Она ест натуральные продукты и старается лечиться естественным путем.	"	, "	Мари сразу же почувствовала себя виноватой.	"	, "	Врачу пришлось провести операцию немедленно.	"	, "	Противные на вкус лекарства трудно принимать.	"	, "	Если вы не возражаете, позвольте мне попробовать сделать это упражнение.	"	, "	Что я должен делать дальше? Я сделаю все возможное.	"	, "	Я никогда не жалел об этом решении. 	"	, "	Мой друг резал овощи и сильно порезал палец.	"	, "	Я споткнулся и вылил горячий кофе на рубашку друга.	"	, "	Ей нечего было делать, кроме как тратить деньги в казино.	"	, "	Извините, я не помню вашего имени. У меня ужасная память.	"	, "	Веди себя тихо. Ребенок спит. Мы должны поговорить тихо.	"	, "	Эти прямоугольные ящики не такие тяжелые, как те.	"	, "	Италия не такая большая, как Германия, но больше, чем Греция.	"	, "	Этот компьютер слишком старый, поэтому я купил тот новый ноутбук.	"	, "	Бабушка постоянно пела мне песни перед сном.	"	, "	У тебя красивый голос. Давайте споем песню вместе.	"	, "	Девушка, поющая на сцене — моя сестра.	"	,];

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