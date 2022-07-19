let eng = ["	How long will I have to wait? I look forward to seeing you.	"	, "	You should choose a salad instead of a burger.	"	, "	The cat is hiding under my couch. It's peeking out from under the couch.	"	, "	I've washed my hands so that I can help you with the cooking.	"	, "	I haven't found a bag. Have you put a bag in the bin?	"	, "	Don’t go anywhere, I will be back soon. Don’t forget to look the door!	"	, "	He told me his name, but I've forgotten it.	"	, "	In my family no one speaks any English except me!	"	, "	I don’t know anybody at the party and don’t know anything about the host.	"	, "	Somebody called Mary when I was out and told her something bad.	"	, "	He was nowhere to be seen. I have nowhere to go.	"	, "	I can't find him anywhere. Have you seen him anywhere?	"	, "	I always go somewhere quiet when I want to study.	"	, "	She said nothing, but you must tell me the truth.	"	, "	They asked me a lot of questions, but I didn't tell them anything.	"	, "	I always have something to eat before I go to work.	"	, "	Make sure you are given a receipt for everything you buy.	"	, "	You look absolutely exhausted. Would you like to sit down?	"	, "	Is there anything you are disappointed about?	"	, "	It was useless to complain. What things are annoying for you?	"	, "	What a lovely day! I'm looking forward to it.	"	, "	The harbour is described with pointed correctness.	"	, "	These books will both entertain and edify readers.	"	, "	The doctor advised him to see a nutritionist about his diet.	"	, "	A substance passes from the solid to the liquid state.	"	, "	The teacher was brusque and impatient.  He slapped the student.	"	, "	She borrowed $20 from me. She can pay me back next week.	"	, "	I am skint. Can you lend me a tenner?	"	, "	I'm engaged now, don't disturb me.	"	, "	My father used to mend our shoes.	"	,];
let ru = ["	Как долго мне придется ждать? Я с нетерпением жду встречи с вами.	"	, "	Тебе следует выбрать салат вместо бургера.	"	, "	Кот прячется под моим диваном. Он выглядывает из-под дивана.	"	, "	Я вымыл руки, так  что я могу помочь тебе с готовкой.	"	, "	Я не нашел сумку. Ты положили пакет в мусорное ведро?	"	, "	Никуда не уходи, я скоро вернусь. Не забудь запереть дверь!	"	, "	Он назвал мне свое имя, но я его забыл.	"	, "	В моей семье никто не говорит по-английски, кроме меня!	"	, "	Я никого не знаю на вечеринке и ничего не знаю о хозяине.	"	, "	Кто-то позвонил Мэри, когда меня не было, и сказал что-то плохое.	"	, "	Его нигде не было видно. Мне некуда идти.	"	, "	Я нигде не могу его найти. Вы его где-нибудь видели?	"	, "	Я всегда иду в тихое место, когда хочу учиться.	"	, "	Она ничего не сказала, но ты должен рассказать мне правду.	"	, "	Они задали мне много вопросов, но я не рассказал им ничего.	"	, "	У меня всегда есть что-нибудь поесть, прежде чем я пойду на работу.	"	, "	Убедитесь, что вам дали чек на все, что вы покупаете.	"	, "	Ты выглядишь совершенно измученным. Желаете присесть?	"	, "	Есть ли что-то, чем вы разочарованы?	"	, "	Жаловаться было бесполезно. Какие вещи вас раздражают?	"	, "	Какой прекрасный день! Я с нетерпением жду этого.	"	, "	Гавань описана с исключительной точностью.	"	, "	Эти книги будут как развлекать, так и поучать читателей.	"	, "	Врач посоветовал ему обратиться к диетологу по поводу его диеты.	"	, "	Вещество переходит из твёрдого состояния в жидкое.	"	, "	Учитель был резок и нетерпелив. Он ударил ученика.	"	, "	Она заняла у меня $20. Она может вернуть мне долг на следующей неделе.	"	, "	Я банкрот. Ты не одолжишь десятку? 	"	, "	Я занят, не беспокойте меня.	"	, "	Раньше мой отец чинил нашу обувь.	"	,];

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