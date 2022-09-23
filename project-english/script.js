let eng = ["	A substance passes from the solid to the liquid state.	"	, "	She borrowed $20 from me. She can pay me back next week.	"	, "	I am skint. Can you lend me a tenner?	"	, "	I'm engaged now, don't disturb me.	"	, "	I'd like to tell you something, but you won't believe me.	"	, "	I'd like to speak with you, but I don't know where to start.	"	, "	I'd like to say it, but I can't find the words.	"	, "	The concert finished at 20 minutes past 11 pm. What time is your taxi coming?	"	, "	Either you or John has to finish the report before 5pm.	"	, "	Either you leave the building now or I'm calling the police.	"	, "	Either you apologize, or I’ll never speak to you again.	"	, "	I neither smoke nor drink. I'm trying to be nice.	"	, "	He likes neither chocolate nor ice-cream.	"	, "	She neither washed the dishes nor swept the floor.	"	, "	He’s both tall and handsome.	"	, "	I’m both happy and confused at the same time!	"	, "	I have had a long, hard day and I’m both tired and hungry.	"	, "	These books will both entertain and edify readers.	"	, "	Today is a national holiday, so I have a day off.	"	, "	If you do not think about your future, you cannot have one.	"	, "	If you don’t walk today, you’ll have to run tomorrow.	"	, "	We've been waiting for you since 10 o'clock.	"	, "	I have been studying English for 4 years.	"	, "	I’ve known her for six months. I've known him since I was 10.	"	, "	When you leave home you should disconnect all the electric appliances.	"	, "	How do I get to the petrol station.	"	, "	I don't want you to make the same mistakes.	"	, "	The flight will be announced soon. Meanwhile, please remain seated.	"	,];
let ru = ["	Вещество переходит из твёрдого состояния в жидкое.	"	, "	Она заняла у меня $20. Она может вернуть мне долг на следующей неделе.	"	, "	Я банкрот. Ты не одолжишь десятку? 	"	, "	Я занят, не беспокойте меня.	"	, "	Я бы хотел рассказать тебе кое-что, но ты мне не поверишь.	"	, "	Я бы хотел поговорить с тобой, но я не знаю, с чего начать.	"	, "	Я бы хотел сказать это, но я не могу подобрать слова.	"	, "	Концерт закончился в 11 часов 20 минут вечера. Во сколько твое такси приедет?	"	, "	Либо ты либо Джон должны закончить этот отчет до 5.	"	, "	Ты либо покинешь здание сейчас же, либо я вызову полицию.	"	, "	Или ты извиняешься, или я не буду с тобой больше разговаривать.	"	, "	Я не курю и не пью. Я стараюсь быть приятным.	"	, "	Ему не нравится ни шоколад, ни мороженое.	"	, "	Она ни посуду не помыла, ни пол не подмела.	"	, "	Он одновременно и высокий и привлекательный.	"	, "	Я одновременно и рад и смущен!	"	, "	У меня длинный тяжелый день, и я одновременно и устал и голоден.	"	, "	Эти книги будут как развлекать, так и поучать читателей.	"	, "	Сегодня государственный праздник, поэтому у меня выходной.	"	, "	Если вы не думаете о будущем — у вас его не будет.	"	, "	Если ты не идешь сегодня, то будешь вынужден бежать завтра.	"	, "	Мы ждём вас с десяти часов.	"	, "	Я изучаю английский 4 года.	"	, "	Я знаком с ней шесть месяцев. Я знаю его с 10 лет.	"	, "	Когда вы уходите из дома, следует выключить из сети все электроприборы.	"	, "	Как добраться до заправки.	"	, "	Я не хочу, чтобы ты совершал те же ошибки.	"	, "	Рейс будет скоро объявлен, а пока что оставайтесь на своих местах.	"	,];

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