let eng = ["	I am a very responsible, hardworking and emotional person.    	"	, "	Do you remember the party when we first met?	"	, "	What time do you normally get home from work?	"	, "	She works as a reporter for a local newspaper.	"	, "	Long time no see! What have you been up to? 	"	, "	Laura doesn't call us very often, but I saw her yesterday.	"	, "	I work as a manager. I work from nine to five.	"	, "	We don't want to work with them. They do their job badly.	"	, "	John and his wife are from Sydney. They moved here three years ago.	"	, "	Tell me about youself. What do you do?	"	, "	They are very nice people, I know them well.	"	, "	Christmas Day is on the twenty-fifth of December.	"	, "	New Year's Day is on the first of January.	"	, "	Valentine's Day is on the fourteenth of February.	"	, "	Halloween is on the thirty-first of October.	"	, "	International Women's Day is on the eighth of March.	"	, "	Independence Day is on the fourth of July.	"	, "	They asked me a lot of questions, but I didn't tell them anything.	"	, "	Emma didn't want anything to eat. She said that she wasn't hungry.	"	, "	Were you afraid of the dark when you were a child?	"	, "	She was the winner of Miss Malaysia beauty contest in 1983.	"	, "	I was so tired yesterday, that I drove past my own street.	"	, "	Poor neighbours, all their things were destroyed in the fire.	"	, "	Last week was really the worst in my life.	"	, "	It was the only way to change the situation.	"	, "	When she was fifteen her family moved to Italy.	"	, "	He wrote the letter, put it in the envelope, left it on the table and went out.	"	, "	Our house was destroyed by a falling tree.	"	, "	Did you do anything special at the weekend?	"	, "	Where did you go? Who did you go with?	"	, "	I stayed at home on saturday and did my homework.	"	, "	You promised to help her. You can’t back out now!	"	, "	Clare was so beautifully dressed, that all were impressed.	"	, "	I used to have a lot of free time when I was young.	"	, "	Sorry, I am late. Did I miss something?	"	, "	We liked their party. It was great.	"	, "	Yesterday I was at a concert. It was a terrible.	"	, "	She said nothing, but you must tell me the truth.	"	, "	She said that she was tired and she needed to rest.	"	, "	Have you talked to her today? What did you say to her?	"	, "	That was way easier than I thought it would be.	"	, "	There's nothing more interesting than a good book.	"	, "	She is a better student than others, but a very unpleasant person.	"	, "	The green skirt is shorter than the yellow one.	"	, "	These trousers are bigger than those trousers.	"	,];
let ru = ["	Я очень ответственный, трудолюбивый и эмоциональный человек.	"	, "	Ты помнишь ту вечеринку, когда мы впервые встретились?	"	,"	Во сколько ты обычно добираешься домой с работы?	"	,"	Она работает репортером в местной газете.	"	,"	Давно не виделись! Чем занимался все это время?  	"	,"	Лаура звонит нам не очень часто, но я видел её вчера.	"	,"	Я работаю менеджером. Я работаю с 9 до 5.	"	,"	Мы не хотим с ними работать. Они плохо делают свою работу	"	,"	Джон и его жена из Сиднея. Они переехали сюда три года назад.	"	,"	Расскажите мне о себе. Чем ты занимаешься?	"	,"	Они очень милые люди, я знаю их хорошо.	"	,"	Рождество приходится на двадцать пятое декабря.	"	,"	Новый год приходится на первое января.	"	,"	День святого Валентина приходится на четырнадцатое февраля.	"	,"	Хэллоуин приходится на тридцать первое октября.	"	,"	Международный женский день приходится на восьмое марта.	"	,"	День независимости приходится на четвертое июля.	"	,"	Они задали мне много вопросов, но я не рассказал им ничего.	"	,"	Эмма не хотела ничего есть. Она сказала что она не была голодна.	"	,"	Боялись ли вы темноты, когда вы были ребёнком?	"	,"	Она стала победительницей конкурса красоты «Мисс Малайзия» в 1983 году.	"	,"	Вчера я был таким уставшим, что проехал мимо своей улицы.	"	,"	Бедные соседи, все их вещи уничтожены при пожаре.	"	,"	Последняя неделя действительно была самой ужасной в моей жизни.	"	,"	Это был единственный способ изменить ситуацию.	"	,"	Когда ей было пятнадцать, ее семья переехала в Италию.	"	,"	Он написал письмо, положил его в конверт, оставил на столе и ушел.	"	,"	Наш дом был разрушен упавшим деревом.	"	,"	Ты делал что-то особенное на выходных?	"	,"	Куда ты ходил? С кем ты пошел?	"	,"	В субботу я остался дома и сделал домашнее задание.	"	,"	Ты обещал помочь ей. Ты не можешь отказаться сейчас!	"	,"	Клер была одета так красиво, что все были впечатлены.	"	,"	У меня было много свободного времени, когда я был молод.	"	,"	Извините, я опоздал. Я что-то пропустил?	"	,"	Нам понравилась их вечеринка. Это было здорово.	"	,"	Вчера я был на концерте. Это было ужасно.	"	,"	Она ничего не сказала, но ты должен рассказать мне правду.	"	,"	Она сказала, что устала и ей нужно отдохнуть.	"	,"	Ты разговаривал с ней сегодня? Что ты сказал ей?	"	,"	Это было намного проще, чем я думал.	"	,"	Нет ничего интереснее чем хорошая книга.	"	,"	Она учится лучше, чем другие, но она очень неприятный человек.	"	,"	Зелёная юбка короче чем жёлтая.	"	,"	Эти брюки больше, чем те брюки.	"	,];

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