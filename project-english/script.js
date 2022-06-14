let eng = ["	I eat almost entirely healthy food from the market.	"	, "	She eats organic food and tries to heal naturally.	"	, "	Marie immediately felt guilty.	"	, "	The doctor had to perform surgery immediately.	"	, "	If you don't mind, let me try to do this exercise.	"	, "	I've never regretted the decision.	"	, "	I stumbled and pour hot coffee on a friend's shirt.	"	, "	She had nothing to do except spend money at the casino.	"	, "	Grandma was constantly singing me songs before sleep.	"	, "	You have a beautiful voice. Let's sing a song together.	"	, "	Are you kidding? I don't even know what that is.	"	, "	Well, that explains it. Don't let me down next time.	"	, "	I didn't have to make any important decisions.	"	, "	It was amazing to hear your voice on the radio!	"	, "	Do you think a member of your family could choose a good date for you?	"	, "	George won the fight because he was more prepared than his rival.	"	, "	We don’t get on very well with our neighbours.	"	, "	My wife expect a baby. I mean she's pregnant.	"	, "	She was convinced that her husband was guilty of infidelity.	"	, "	Their marriage was destroyd by infidelity and jealousy.	"	, "	When my parents got divorced, it was tough on me.	"	, "	Respect is a very important part of any relationships.	"	, "	The woman gave up her lover to save her marriage.	"	, "	They shouldn’t have broken up. They are so right for each other.	"	, "	We cannot predict the future, but we can influence it.	"	, "	Who does this bag belong to? Whose bag is this?	"	, "	Do you believe in the supernatural? Do you believe in life after death? 	"	, "	I cannot think of the right word.	"	, "	Do not give up. We're going all the way together.	"	, "	The trip was very boring, although it was well-organized.	"	, "	Despite always being late, he is a very responsible worker.	"	, "	There will be a power cut this evening. Are there any candles in the house?	"	, "	Mom was worried because she didn't know when dad would come.	"	, "	They promised to build a pedestrian bridge over the river.	"	, "	I have read a remarkable book. He has composed an outstanding song.	"	, "	There was a queue of people waiting patiently for the bus to arrive.	"	,];
let ru = ["	Я ем почти полностью здоровую пищу с рынка.	"	, "	Она ест натуральные продукты и старается лечиться естественным путем.	"	, "	Мари сразу же почувствовала себя виноватой.	"	, "	Врачу пришлось провести операцию немедленно.	"	, "	Если вы не возражаете, позвольте мне попробовать сделать это упражнение.	"	, "	Я никогда не жалел об этом решении. 	"	, "	Я споткнулся и вылил горячий кофе на рубашку друга.	"	, "	Ей нечего было делать, кроме как тратить деньги в казино.	"	, "	Бабушка постоянно пела мне песни перед сном.	"	, "	У тебя красивый голос. Давайте споем песню вместе.	"	, "	Ты шутишь? Я даже не знаю, что это такое.	"	, "	Ну это всё объясняет. Не подведи меня в следующий раз.	"	, "	Мне не пришлось принимать никаких важных решений.	"	, "	Это было потрясающе услышать твой голос по радио.	"	, "	Вы думаете, может ли член вашей семьи выбрать для вас хорошее свидание?	"	, "	Джордж выиграл бой, потому что он был более подготовлен, чем его соперник.	"	, "	Мы не очень хорошо ладим с соседями.	"	, "	Моя жена ждет ребенка. Я имею в виду, что она беременна.	"	, "	Она была убеждена, что ее муж виновен в измене.	"	, "	Их брак был разрушен изменами и ревностью.	"	, "	Когда мои родители развелись, мне было тяжело.	"	, "	Уважение — очень важная часть любых отношений.	"	, "	Женщина порвала с любовником ради сохранения брака.	"	, "	Им не следовало расставаться. Они так подходят друг другу.	"	, "	Мы не можем предсказывать будущее, но мы можем на него повлиять.	"	, "	Кому принадлежит эта сумка? Чья это сумка?	"	, "	Ты веришь в сверхъестественное? Верите ли вы в жизнь после смерти?	"	, "	Не могу придумать подходящего слова.	"	, "	Не сдавайся. Мы вместе до самого конца.	"	, "	Поездка была скучной, хотя и была хорошо организована.	"	, "	Несмотря на постоянные опоздания, он очень ответственный работник.	"	, "	Этим вечером будет отключение электричества. Есть в доме свечи?	"	, "	Мама беспокоилась, потому что не знала, когда папа вернется домой.	"	, "	Они пообещали построить пешеходный мост через реку.	"	, "	Я прочитал замечательную книгу. Он сочинил выдающуюся песню.	"	, "	Там стояла очередь из людей, терпеливо ожидающих прибытия автобуса.	"	,];

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