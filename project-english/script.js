let eng = ["	You don't have a prescription. You shouldn't take antibiotics, go to a doctor.	"	, "	You should try this drink. It's delicious.	"	, "	I like roast chicken and potatoes, but they are too hard to cook.	"	, "	I eat almost entirely healthy food from the market.	"	, "	She eats organic food and tries to heal naturally.	"	, "	Marie immediately felt guilty.	"	, "	The doctor had to perform surgery immediately.	"	, "	If you don't mind, let me try to do this exercise.	"	, "	What should I do next? I'll do everything possible.	"	, "	I've never regretted the decision.	"	, "	My friend was cutting vegetables and cut his finger badly.	"	, "	I stumbled and pour hot coffee on a friend's shirt.	"	, "	She had nothing to do except spend money at the casino.	"	, "	Be quite. The baby's sleeping. We have to talk quietly.	"	, "	Grandma was constantly singing me songs before sleep.	"	, "	You have a beautiful voice. Let's sing a song together.	"	, "	Are you kidding? I don't even know what that is.	"	, "	Well, that explains it. Don't let me down next time.	"	, "	I didn't have to make any important decisions.	"	, "	It was amazing to hear your voice on the radio!	"	, "	Do you think a member of your family could choose a good date for you?	"	, "	George won the fight because he was more prepared than his rival.	"	, "	We don’t get on very well with our neighbours.	"	, "	My wife expect a baby. I mean she's pregnant.	"	, "	She was convinced that her husband was guilty of infidelity.	"	, "	Their marriage was destroyd by infidelity and jealousy.	"	, "	When my parents got divorced, it was tough on me.	"	, "	Respect is a very important part of any relationships.	"	, "	The woman gave up her lover to save her marriage.	"	, "	We cannot predict the future, but we can influence it.	"	, "	Who does this bag belong to. Whose bag is this?	"	, "	Do you believe in the supernatural? Do you believe in life after death? 	"	, "	I cannot think of the right word.	"	, "	Do not give up. We're going all the way together.	"	,];
let ru = ["	У тебя нет рецептa. Не следует принимать антибиотики, идите к врачу.	"	, "	Вам стоит попробовать этот напиток. Это вкусно.	"	, "	Я люблю жареную курицу и картофель, но их слишком сложно готовить.	"	, "	Я ем почти полностью здоровую пищу с рынка.	"	, "	Она ест натуральные продукты и старается лечиться естественным путем.	"	, "	Мари сразу же почувствовала себя виноватой.	"	, "	Врачу пришлось провести операцию немедленно.	"	, "	Если вы не возражаете, позвольте мне попробовать сделать это упражнение.	"	, "	Что я должен делать дальше? Я сделаю все возможное.	"	, "	Я никогда не жалел об этом решении. 	"	, "	Мой друг резал овощи и сильно порезал палец.	"	, "	Я споткнулся и вылил горячий кофе на рубашку друга.	"	, "	Ей нечего было делать, кроме как тратить деньги в казино.	"	, "	Веди себя тихо. Ребенок спит. Мы должны поговорить тихо.	"	, "	Бабушка постоянно пела мне песни перед сном.	"	, "	У тебя красивый голос. Давайте споем песню вместе.	"	, "	Ты шутишь? Я даже не знаю, что это такое.	"	, "	Ну это всё объясняет. Не подведи меня в следующий раз.	"	, "	Мне не пришлось принимать никаких важных решений.	"	, "	Это было потрясающе услышать твой голос по радио.	"	, "	Как вы думаете, может ли член вашей семьи выбрать для вас хорошее свидание?	"	, "	Джордж выиграл бой, потому что он был более подготовлен, чем его соперник.	"	, "	Мы не очень хорошо ладим с соседями.	"	, "	Моя жена ждет ребенка. Я имею в виду, что она беременна.	"	, "	Она была убеждена, что ее муж виновен в измене.	"	, "	Их брак был разрушен изменами и ревностью.	"	, "	Когда мои родители развелись, мне было тяжело.	"	, "	Уважение — очень важная часть любых отношений.	"	, "	Женщина порвала с любовником ради сохранения брака.	"	, "	Мы не можем предсказывать будущее, но мы можем на него повлиять.	"	, "	Кому принадлежит эта сумка? Чья это сумка?	"	, "	Ты веришь в сверхъестественное? Верите ли вы в жизнь после смерти?	"	, "	Не могу придумать подходящего слова.	"	, "	Не сдавайся. Мы вместе до самого конца.	"	,];

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