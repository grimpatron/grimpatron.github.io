let eng = ["	How long will I have to wait? I look forward to seeing you.	"	, "	In my family no one speaks any English except me!	"	, "	I don’t know anybody at the party and don’t know anything about the host.	"	, "	Somebody called Mary when I was out and told her something bad.	"	, "	He was nowhere to be seen. I have nowhere to go.	"	, "	I can't find him anywhere. Have you seen him anywhere?	"	, "	I always go somewhere quiet when I want to study.	"	, "	She said nothing, but you must tell me the truth.	"	, "	They asked me a lot of questions, but I didn't tell them anything.	"	, "	I always have something to eat before I go to work.	"	, "	Make sure you are given a receipt for everything you buy.	"	, "	You look absolutely exhausted. Would you like to sit down?	"	, "	Is there anything you are disappointed about?	"	, "	It was useless to complain. What things are annoying for you?	"	, "	What a lovely day! I'm looking forward to it.	"	, "	The harbour is described with pointed correctness.	"	, "	These books will both entertain and edify readers.	"	, "	The doctor advised him to see a nutritionist about his diet.	"	, "	A substance passes from the solid to the liquid state.	"	, "	The teacher was brusque and impatient.  He slapped the student.	"	, "	She borrowed $20 from me. She can pay me back next week.	"	, "	I am skint. Can you lend me a tenner?	"	, "	I'm engaged now, don't disturb me.	"	, "	My father used to mend our shoes.	"	, "	I'd like to tell you something, but you won't believe me.	"	, "	I'd like to speak with you, but I don't know where to start.	"	, "	I'd like to say it, but I can't find the words.	"	, "	The concert finished at 20 minutes past 11 pm. What time is your taxi coming?	"	, "	Either you or John has to finish the report before 5pm.	"	, "	Either you leave the building now or I'm calling the police.	"	, "	Either you apologize, or I’ll never speak to you again.	"	, "	I neither smoke nor drink.	"	, "	He likes neither chocolate nor ice-cream.	"	, "	She neither washed the dishes nor swept the floor.	"	, "	He’s both tall and handsome.	"	, "	I’m both happy and confused at the same time!	"	, "	I have had a long, hard day and I’m both tired and hungry.	"	,];
let ru = ["	Как долго мне придется ждать? Я с нетерпением жду встречи с вами.	"	, "	В моей семье никто не говорит по-английски, кроме меня!	"	, "	Я никого не знаю на вечеринке и ничего не знаю о хозяине.	"	, "	Кто-то позвонил Мэри, когда меня не было, и сказал что-то плохое.	"	, "	Его нигде не было видно. Мне некуда идти.	"	, "	Я нигде не могу его найти. Вы его где-нибудь видели?	"	, "	Я всегда иду в тихое место, когда хочу учиться.	"	, "	Она ничего не сказала, но ты должен рассказать мне правду.	"	, "	Они задали мне много вопросов, но я не рассказал им ничего.	"	, "	У меня всегда есть что-нибудь поесть, прежде чем я пойду на работу.	"	, "	Убедитесь, что вам дали чек на все, что вы покупаете.	"	, "	Ты выглядишь совершенно измученным. Желаете присесть?	"	, "	Есть ли что-то, чем вы разочарованы?	"	, "	Жаловаться было бесполезно. Какие вещи вас раздражают?	"	, "	Какой прекрасный день! Я с нетерпением жду этого.	"	, "	Гавань описана с исключительной точностью.	"	, "	Эти книги будут как развлекать, так и поучать читателей.	"	, "	Врач посоветовал ему обратиться к диетологу по поводу его диеты.	"	, "	Вещество переходит из твёрдого состояния в жидкое.	"	, "	Учитель был резок и нетерпелив. Он ударил ученика.	"	, "	Она заняла у меня $20. Она может вернуть мне долг на следующей неделе.	"	, "	Я банкрот. Ты не одолжишь десятку? 	"	, "	Я занят, не беспокойте меня.	"	, "	Раньше мой отец чинил нашу обувь.	"	, "	Я бы хотел рассказать тебе кое-что, но ты мне не поверишь.	"	, "	Я бы хотел поговорить с тобой, но я не знаю, с чего начать.	"	, "	Я бы хотел сказать это, но я не могу подобрать слова.	"	, "	Концерт закончился в 11 часов 20 минут вечера. Во сколько твое такси приедет?	"	, "	Либо ты либо Джон должны закончить этот отчет до 5.	"	, "	Ты либо покинешь здание сейчас же, либо я вызову полицию.	"	, "	Или ты извиняешься, или я не буду с тобой больше разговаривать.	"	, "	Я не курю и не пью.	"	, "	Ему не нравится ни шоколад, ни мороженое.	"	, "	Она ни посуду не помыла, ни пол не подмела.	"	, "	Он одновременно и высокий и привлекательный.	"	, "	Я одновременно и рад и смущен!	"	, "	У меня длинный тяжелый день, и я одновременно и устал и голоден.	"	,];

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