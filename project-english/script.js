let eng = ["	They asked me a lot of questions, but I didn't tell them anything.	"	, "	Emma didn't want anything to eat. She said that she wasn't hungry.	"	, "	I was so tired yesterday, that I drove past my own street.	"	, "	Last week was really the worst in my life.	"	, "	He wrote the letter, put it in the envelope, left it on the table and went out.	"	, "	Did you do anything special at the weekend?	"	, "	I stayed at home on saturday and did my homework.	"	, "	You promised to help her. You can’t back out now!	"	, "	Clare was so beautifully dressed, that all were impressed.	"	, "	I used to have a lot of free time when I was young.	"	, "	Sorry, I am late. Did I miss something?	"	, "	We liked their party. It was great.	"	, "	Yesterday I was at a concert. It was terrible.	"	, "	She said nothing, but you must tell me the truth.	"	, "	She said that she was tired and she needed to rest.	"	, "	Have you talked to her today? What did you say to her?	"	, "	They all studied really hard for their final exams.	"	, "	I found an interesting picture in the book. I showed it to my friend.	"	, "	That was way easier than I thought it would be.	"	, "	There's nothing more interesting than a good book.	"	, "	She is a better student than others, but a very unpleasant person.	"	, "	The green skirt is shorter than the yellow one.	"	, "	These trousers are bigger than those trousers.	"	, "	My third marriage will be the most successful.	"	, "	Coffee is one of the most popular beverages worldwide.	"	, "	He is far more intelligent than his wife thinks.	"	, "	Go straight on until you come to a crossroads.	"	, "	Is there a hotel near here?	"	, "	Could you tell me the way to the hotel.	"	, "	You would need to turn left at the traffic lights.	"	, "	Could you tell me how to get to the train station?	"	, "	How can I get to the local market?	"	, "	Where is the nearest bus stop?	"	, "	Where can I find the nearest bakery?	"	, "	How far is it to the train station?	"	, "	How long will it take to get there?	"	, "	Could you give me directions to the nearest bus stop?	"	, "	When I visit onother country, I try to learn some of the language.	"	, "	I have visited seven countries so far.	"	, "	President of Ukraine Volodymyr Zelensky rejects asylum offers from Europe.	"	,];
let ru = ["	Они задали мне много вопросов, но я не рассказал им ничего.	"	, "	Эмма не хотела ничего есть. Она сказала что она не была голодна.	"	, "	Вчера я был таким уставшим, что проехал мимо своей улицы.	"	, "	Последняя неделя действительно была самой ужасной в моей жизни.	"	, "	Он написал письмо, положил его в конверт, оставил на столе и ушел.	"	, "	Ты делал что-то особенное на выходных?	"	, "	В субботу я остался дома и сделал домашнее задание.	"	, "	Ты обещал помочь ей. Ты не можешь отказаться сейчас!	"	, "	Клер была одета так красиво, что все были впечатлены.	"	, "	У меня было много свободного времени, когда я был молод.	"	, "	Извините, я опоздал. Я что-то пропустил?	"	, "	Нам понравилась их вечеринка. Это было здорово.	"	, "	Вчера я был на концерте. Это было ужасно.	"	, "	Она ничего не сказала, но ты должен рассказать мне правду.	"	, "	Она сказала, что устала и ей нужно отдохнуть.	"	, "	Ты разговаривал с ней сегодня? Что ты сказал ей?	"	, "	Они все очень усердно готовились к выпускным экзаменам.	"	, "	Я нашёл интересную картинку в книге. Я показал её своему другу.	"	, "	Это было намного проще, чем я думал.	"	, "	Нет ничего интереснее чем хорошая книга.	"	, "	Она учится лучше, чем другие, но она очень неприятный человек.	"	, "	Зелёная юбка короче чем жёлтая.	"	, "	Эти брюки больше, чем те брюки.	"	, "	Мой третий брак будет самым удачным.	"	, "	Кофе — это один из самых популярных напитков во всем мире.	"	, "	Он гораздо умнее, чем думает его жена.	"	, "	Идите прямо пока не дойдёте до перекрестка.	"	, "	Есть ли какой нибуть отель поблизости? 	"	, "	Не могли бы вы подсказать мне дорогу к отелю?	"	, "	Вам нужно будет повернуть налево у светофора.	"	, "	Не могли бы вы сказать мне, как добраться до вокзала?	"	, "	Как мне добраться доместного рынка.	"	, "	Где находится ближайшая автобусная остановка?	"	, "	Где я могу найти ближайшую пекарню?	"	, "	Как далеко до железнодорожного вокзала?	"	, "	Сколько времени займет добраться туда?	"	, "	Не могли бы вы указать направление до ближайшей автобусной остановки?	"	, "	Когда я приезжаю в другую страну, я стараюсь немного выучить язык.	"	, "	Я посетил семь стран на данный момент.	"	, "	Президент Украины Владимир Зеленский отверг предложения убежища из Европы.	"	,];

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