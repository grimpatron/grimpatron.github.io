let eng = ["	How long will I have to wait? I look forward to seeing you.	"	, "	Look at thе cat! It's so cute when it sleeps.	"	, "	She hasn't got a cat, but she has got a parrot, a turtle, and a squirrel.	"	, "	You should choose a salad instead of a burger.	"	, "	He went fishing instead of playing tennis.	"	, "	The cat has just eaten. The cat is sleeping on the couch.	"	, "	The cat is hiding under my couch. It's peeking out from under the couch.	"	, "	I haven't decided where to go on holiday yet.	"	, "	I've just heard the news. Congratulations!	"	, "	I've washed my hands so that I can help you with the cooking.	"	, "	I haven't found a bag. Have you put a bag in the bin?	"	, "	The city is having problems with trash removal. The rubbish is collected every Wednesday.	"	, "	I'll sweep, dust the furniture and wash the dishes.	"	, "	Tidy your room. Whose turn is it to take out the trash?	"	, "	Every morning I make the bed, lay the table and do the washing-up.	"	, "	Don’t go anywhere, I will be back soon. Don’t forget to look the door!	"	, "	No offence, but you're the worst dancer I've ever seen.	"	, "	He told me his name, but I've forgotten it.	"	, "	Cleaning is part of my daily routine.	"	, "	In my family no one speaks any English except me!	"	, "	I don’t know anybody at the party and don’t know anything about the host.	"	, "	Somebody called Mary when I was out and told her something bad.	"	, "	He was nowhere to be seen. I have nowhere to go.	"	, "	I can't find him anywhere. Have you seen him anywhere?	"	, "	I always go somewhere quiet when I want to study.	"	, "	She said nothing, but you must tell me the truth.	"	, "	They asked me a lot of questions, but I didn't tell them anything.	"	, "	I always have something to eat before I go to work.	"	, "	You look absolutely exhausted. Would you like to sit down?	"	, "	Is there anything you are disappointed about?	"	, "	It was useless to complain. What things are annoying for you?	"	, "	What a lovely day! I'm looking forward to it.	"	, "	The harbour is described with pointed correctness.	"	, "	These books will both entertain and edify readers.	"	,];
let ru = ["	Как долго мне придется ждать? Я с нетерпением жду встречи с вами.	"	, "	Взгляни на кота! Он такой милый когда спит.	"	, "	У нее нет кошки, но есть попугай, черепаха и белка.	"	, "	Тебе следует выбрать салат вместо бургера.	"	, "	Он отправился на рыбалку вместо игры в теннис.	"	, "	Кошка только что поела. Кошка спит на диване.	"	, "	Кот прячется под моим диваном. Он выглядывает из-под дивана.	"	, "	Я еще не решил, куда поеду в отпуск.	"	, "	Я только что услышал новость. Поздравляю!	"	, "	Я вымыл руки, так  что я могу помочь тебе с готовкой.	"	, "	Я не нашел сумку. Ты положили пакет в мусорное ведро?	"	, "	В городе проблемы с вывозом мусора. Мусор собирают каждую среду.	"	, "	Я буду подметать, вытирать пыль с мебели и мыть посуду.	"	, "	Приберись в своей комнате. Чья очередь выносить мусор?	"	, "	Каждое утро я заправляю постель, накрываю стол и мою посуду.	"	, "	Никуда не уходи, я скоро вернусь. Не забудь запереть дверь!	"	, "	Без обид, но ты худший танцор, которого я когда-либо видел.	"	, "	Он назвал мне свое имя, но я его забыл.	"	, "	Уборка — это часть моей ежедневной рутины.	"	, "	В моей семье никто не говорит по-английски, кроме меня!	"	, "	Я никого не знаю на вечеринке и ничего не знаю о хозяине.	"	, "	Кто-то позвонил Мэри, когда меня не было, и сказал что-то плохое.	"	, "	Его нигде не было видно. Мне некуда идти.	"	, "	Я нигде не могу его найти. Вы его где-нибудь видели?	"	, "	Я всегда иду в тихое место, когда хочу учиться.	"	, "	Она ничего не сказала, но ты должен рассказать мне правду.	"	, "	Они задали мне много вопросов, но я не рассказал им ничего.	"	, "	У меня всегда есть что-нибудь поесть, прежде чем я пойду на работу.	"	, "	Ты выглядишь совершенно измученным. Желаете присесть?	"	, "	Есть ли что-то, чем вы разочарованы?	"	, "	Жаловаться было бесполезно. Какие вещи вас раздражают?	"	, "	Какой прекрасный день! Я с нетерпением жду этого.	"	, "	Гавань описана с исключительной точностью.	"	, "	Эти книги будут как развлекать, так и поучать читателей.	"	,];

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