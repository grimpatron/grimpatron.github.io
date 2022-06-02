let eng = ["	A good diet is necessary for maintaining a healthy body.	"	, "	Take these tablets three times a day during the week.	"	, "	If you want to lose weight, you shouldn't eat late at night.	"	, "	You don't have a prescription. You shouldn't take antibiotics, go to a doctor.	"	, "	You should try this drink. It's delicious.	"	, "	Kasia didn't study last night because she felt tired.	"	, "	I like roast chicken and potatoes, but they are too hard to cook.	"	, "	I didn't want to talk about this. I didn't start this the conversation - you did.	"	, "	Good to see you gain. Let's exchange numbers so we can talk again soon.	"	, "	I always forget my mobile number. I have to write it down.	"	, "	I eat almost entirely healthy food from the market.	"	, "	She eats organic food and tries to heal naturally.	"	, "	Marie immediately felt guilty.	"	, "	The doctor had to perform surgery immediately.	"	, "	Nasty medicine is difficult to swallow down.	"	, "	If you don't mind, let me try to do this exercise.	"	, "	What should I do next? I'll do everything possible.	"	, "	I've never regretted the decision.	"	, "	My friend was cutting vegetables and cut his finger badly.	"	, "	I stumbled and pour hot coffee on a friend's shirt.	"	, "	She had nothing to do except spend money at the casino.	"	, "	I'm sorry, I don’t remember  your name. I've got a terrible memory.	"	, "	Be quite. The baby's sleeping. We have to talk quietly.	"	, "	Italy is not as big as Germany, but bigger than Greece.	"	, "	Grandma was constantly signing me songs before sleep.	"	, "	You have a beautiful voice. Let's sing a song together.	"	, "	The girl singing on stage is my sister.	"	, "	What are you driving at? Do you think I'm stupid?	"	, "	Are you kidding? I don't even know what that is.	"	, "	It's a shame not to know these elementary things.	"	, "	Well, that explains it. Don't let me down next time.	"	, "	I absolutely agree with you. That was a great time.	"	, "	I didn't have to make any important decisions.	"	,];
let ru = ["	Для поддержания здоровья тела необходимо хорошее питание. 	"	, "	Принимайте эти таблетки три раза в день в течение недели.	"	, "	Если вы хотите похудеть, вам не следует есть поздно вечером.	"	, "	У тебя нет рецептa. Не следует принимать антибиотики, идите к врачу.	"	, "	Вам стоит попробовать этот напиток. Это вкусно.	"	, "	Касия не занималась вчера вечером, потому что она чувствовала себя уставшей.	"	, "	Я люблю жареную курицу и картофель, но их слишком сложно готовить.	"	, "	Я не хотел об этом говорить. Не я начал этот разговор, а ты.	"	, "	Приятно снова увидеть тебя. Давай обменяемся телефонами, чтобы снова поговорить вскоре.	"	, "	Я всегда забываю свой номер мобильного телефона. Я должен записать это.	"	, "	Я ем почти полностью здоровую пищу с рынка.	"	, "	Она ест натуральные продукты и старается лечиться естественным путем.	"	, "	Мари сразу же почувствовала себя виноватой.	"	, "	Врачу пришлось провести операцию немедленно.	"	, "	Противные на вкус лекарства трудно принимать.	"	, "	Если вы не возражаете, позвольте мне попробовать сделать это упражнение.	"	, "	Что я должен делать дальше? Я сделаю все возможное.	"	, "	Я никогда не жалел об этом решении. 	"	, "	Мой друг резал овощи и сильно порезал палец.	"	, "	Я споткнулся и вылил горячий кофе на рубашку друга.	"	, "	Ей нечего было делать, кроме как тратить деньги в казино.	"	, "	Извините, я не помню вашего имени. У меня ужасная память.	"	, "	Веди себя тихо. Ребенок спит. Мы должны поговорить тихо.	"	, "	Италия не такая большая, как Германия, но больше, чем Греция.	"	, "	Бабушка постоянно пела мне песни перед сном.	"	, "	У тебя красивый голос. Давайте споем песню вместе.	"	, "	Девушка, поющая на сцене — моя сестра.	"	, "	К чему ты клонишь? Ты думаешь, что я тупой?	"	, "	Ты шутишь? Я даже не знаю, что это такое.	"	, "	Стыдно не знать этих элементарных вещей.	"	, "	Ну это всё объясняет. Не подведи меня в следующий раз.	"	, "	Я полностью с тобой соглагеню. Это было прекрасное время.	"	, "	Мне не пришлось принимать никаких важных решений.	"	,];

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