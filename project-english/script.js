let eng = ["	Do you think a member of your family could choose a good date for you?	"	, "	George won the fight because he was more prepared than his rival.	"	, "	We don’t get on very well with our neighbours.	"	, "	My wife expect a baby. I mean she's pregnant.	"	, "	She was convinced that her husband was guilty of infidelity.	"	, "	Their marriage was destroyd by infidelity and jealousy.	"	, "	When my parents got divorced, it was tough on me.	"	, "	Respect is a very important part of any relationships.	"	, "	The woman gave up her lover to save her marriage.	"	, "	They shouldn’t have broken up. They are so right for each other.	"	, "	We cannot predict the future, but we can influence it.	"	, "	Who does this bag belong to? Whose bag is this?	"	, "	I cannot think of the right word.	"	, "	Do not give up. We're going all the way together.	"	, "	The trip was very boring, although it was well-organized.	"	, "	Despite always being late, he is a very responsible worker.	"	, "	There will be a power cut this evening. Are there any candles in the house?	"	, "	Mom was worried because she didn't know when dad would come.	"	, "	They promised to build a pedestrian bridge over the river.	"	, "	I have read a remarkable book. He has composed an outstanding song.	"	, "	There was a queue of people waiting patiently for the bus to arrive.	"	, "	Drop off the passengers at the airport. The departure at 4 o'clock.	"	, "	I want to change my schedule, but my boss won't allow it. 	"	, "	How long will I have to wait? I look forward to seeing you.	"	, "	We can get a trolley in baggage reclaim when we pickup our bags.	"	, "	What is the farthest distance that you have ever walked?	"	, "	If you could be an animal, what animal would you be?	"	, "	Look at thе cat! It's so cute when it sleeps.	"	, "	The dog's bark and howl signify very different things.	"	, "	Don't step on the dog's tail. This dog can bite.	"	, "	She hasn't got a cat, but she has got a parrot, a turtle, and a squirrel.	"	, "	You should choose a salad instead of a burger.	"	, "	He went fishing instead of playing tennis.	"	, "	We have to find a way to solve this problem.	"	, "	The cat has just eaten. The cat is sleeping on the couch.	"	, "	The cat is hiding under my couch. It peeking out from under the couch.	"	, "	I haven't decided where to go on holiday yet.	"	, "	I've just heard the news. Поздравляю!	"	, "	I've washed my hand so that I can help you with the cooking.	"	, "	I haven't found a bag. Have you put a bag in the bin?	"	, "	The city is having problems with trash removal.	"	, "	I'll sweep, dust the furniture and wash the dishes.	"	,];
let ru = ["	Вы думаете, может ли член вашей семьи выбрать для вас хорошее свидание?	"	, "	Джордж выиграл бой, потому что он был более подготовлен, чем его соперник.	"	, "	Мы не очень хорошо ладим с соседями.	"	, "	Моя жена ждет ребенка. Я имею в виду, что она беременна.	"	, "	Она была убеждена, что ее муж виновен в измене.	"	, "	Их брак был разрушен изменами и ревностью.	"	, "	Когда мои родители развелись, мне было тяжело.	"	, "	Уважение — очень важная часть любых отношений.	"	, "	Женщина порвала с любовником ради сохранения брака.	"	, "	Им не следовало расставаться. Они так подходят друг другу.	"	, "	Мы не можем предсказывать будущее, но мы можем на него повлиять.	"	, "	Кому принадлежит эта сумка? Чья это сумка?	"	, "	Не могу придумать подходящего слова.	"	, "	Не сдавайся. Мы вместе до самого конца.	"	, "	Поездка была скучной, хотя и была хорошо организована.	"	, "	Несмотря на постоянные опоздания, он очень ответственный работник.	"	, "	Этим вечером будет отключение электричества. Есть в доме свечи?	"	, "	Мама беспокоилась, потому что не знала, когда папа вернется домой.	"	, "	Они пообещали построить пешеходный мост через реку.	"	, "	Я прочитал замечательную книгу. Он сочинил выдающуюся песню.	"	, "	Там была очередь из людей, терпеливо ожидающих прибытия автобуса.	"	, "	Высади пассажиров в аэропорту. Отправление в 4 часа.	"	, "	Я хочу изменить свой график, но мой начальник этого не разрешает.	"	, "	Как долго мне придется ждать? Я с нетерпением жду встречи с вами.	"	, "	Мы можем получить тележку в зоне выдачи багажа, когда забираем наши сумки.	"	, "	Какое самое дальнее расстояние вы когда либо проходили?	"	, "	Если бы вы могли стать животным, кого бы вы выбрали?	"	, "	Взгляни на кота! Он такой милый когда спит.	"	, "	Вой и лай собаки означают очень разные вещи.	"	, "	Не наступи на собачий хвост. Эта собака может укусить.	"	, "	У нее нет кошки, но есть попугай, черепаха и белка.	"	, "	Тебе следует выбрать салат вместо бургера.	"	, "	Вместо игры в теннис он отправился на рыбалку.	"	, "	Мы должны найти способ решить эту проблему. 	"	, "	Кошка только что поела. Кошка спит на диване.	"	, "	Кот прячется под моим диваном. Он выглядывает из-под дивана.	"	, "	Я еще не решил, куда поеду в отпуск.	"	, "	Я только что услышал новость. Congratulations!	"	, "	Я вымыл руки, так  что я могу помочь тебе с готовкой.	"	, "	Я не нашел сумку. Ты положили пакет в мусорное ведро?	"	, "	В городе проблемы с вывозом мусора.	"	, "	Я буду подметать, вытирать пыль с мебели и мыть посуду.	"	,];

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