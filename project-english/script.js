let eng = ["	They asked me a lot of questions, but I didn't tell them anything.	"	, "	I was so tired yesterday, that I drove past my own street.	"	, "	He wrote the letter, put it in the envelope, left it on the table and went out.	"	, "	I used to have a lot of free time when I was young.	"	, "	She said nothing, but you must tell me the truth.	"	, "	Have you talked to her today? What did you say to her?	"	, "	They all studied really hard for their final exams.	"	, "	Last week was really the worst in my life.	"	, "	That was way easier than I thought it would be.	"	, "	There's nothing more interesting than a good book.	"	, "	She is a better student than others, but a very unpleasant person.	"	, "	The green skirt is shorter than the yellow one.	"	, "	These trousers are bigger than those trousers.	"	, "	My third marriage will be the most successful.	"	, "	Coffee is one of the most popular beverages worldwide.	"	, "	He is far more intelligent than his wife thinks.	"	, "	She wanted to spend less time at her job.	"	, "	You should take the bus — it’s the easiest way to get there.	"	, "	Go straight on until you come to a crossroads.	"	, "	Is there a hotel near here?	"	, "	Could you tell me the way to the hotel.	"	, "	You would need to turn left at the traffic lights.	"	, "	Could you tell me how to get to the train station?	"	, "	How can I get to the local market?	"	, "	Where is the nearest bus stop?	"	, "	Where can I find the nearest bakery?	"	, "	How far is it to the train station?	"	, "	How long will it take to get there?	"	, "	Could you give me directions to the nearest bus stop?	"	, "	Turn left into Lake Road. Go past  the bank.	"	, "	Go straight on and then turn right at the crossroads.	"	, "	At the corner of the street you'll see a red building.	"	, "	Go ahead and then turn right at the traffic lights.	"	, "	The pedestrian street is far from here.	"	, "	Continue along this street until you see a bank.	"	, "	Turn left at the corner. Then go straight on for about five minutes.	"	, "	When I visit onother country, I try to learn some of the language.	"	, "	I have visited seven countries so far.	"	, "	President of Ukraine Volodymyr Zelensky rejects asylum offers from Europe.	"	, "	How long has your sister been living in London?	"	, "	What do you do in your free time? Tell me about it.	"	, "	I'm Misha and these are Todd and Jessica. We are friends and work together. 	"	, "	Our office is not far. It is a nice place in the centre of the city.	"	, "	Todd’s clever. He is a chief accountant. His boss is nice to him.	"	, "	Jessica is nice and funny. She is a manager and she is clever too.	"	, "	I live with my parents. Jessica and Todd live together, they are a couple.	"	, "	We often have parties. You’ll never see us after 7 at the office.	"	, "	We work full time but not long hours. We have a good salary.	"	,];
let ru = ["	Они задали мне много вопросов, но я не рассказал им ничего.	"	, "	Вчера я был таким уставшим, что проехал мимо своей улицы.	"	, "	Он написал письмо, положил его в конверт, оставил на столе и ушел.	"	, "	У меня было много свободного времени, когда я был молод.	"	, "	Она ничего не сказала, но ты должен рассказать мне правду.	"	, "	Ты разговаривал с ней сегодня? Что ты сказал ей?	"	, "	Они все очень усердно готовились к выпускным экзаменам.	"	, "	Последняя неделя действительно была самой ужасной в моей жизни.	"	, "	Это было намного проще, чем я думал.	"	, "	Нет ничего интереснее чем хорошая книга.	"	, "	Она учится лучше, чем другие, но она очень неприятный человек.	"	, "	Зелёная юбка короче чем жёлтая.	"	, "	Эти брюки больше, чем те брюки.	"	, "	Мой третий брак будет самым удачным.	"	, "	Кофе — это один из самых популярных напитков во всем мире.	"	, "	Он гораздо умнее, чем думает его жена.	"	, "	Она хотела проводить меньше времени на работе.	"	, "	Тебе следует ехать на автобусе — это самый легкий способ добраться туда.	"	, "	Идите прямо пока не дойдёте до перекрестка.	"	, "	Есть ли какой нибуть отель поблизости? 	"	, "	Не могли бы вы подсказать мне дорогу к отелю?	"	, "	Вам нужно будет повернуть налево у светофора.	"	, "	Не могли бы вы сказать мне, как добраться до вокзала?	"	, "	Как мне добраться до местного рынка.	"	, "	Где находится ближайшая автобусная остановка?	"	, "	Где я могу найти ближайшую пекарню?	"	, "	Как далеко до железнодорожного вокзала?	"	, "	Сколько времени займет добраться туда?	"	, "	Не могли бы вы указать направление до ближайшей автобусной остановки?	"	, "	Поверните налево на Лейк-роуд. Пройдите мимо банка.	"	, "	Идите прямо, а затем поверните направо на перекрестке.	"	, "	На углу улицы вы увидите красное здание.	"	, "	Идите вперед, a затем поверните направо на светофоре.	"	, "	Пешеходная улица далеко отсюда.	"	, "	Продолжайте идти по этой улице, пока не увидите банк.	"	, "	Поверните налево на углу. Затем идите прямо минут пять.	"	, "	Когда я приезжаю в другую страну, я стараюсь немного выучить язык.	"	, "	Я посетил семь стран на данный момент.	"	, "	Президент Украины Владимир Зеленский отверг предложения убежища из Европы.	"	, "	Как долго твоя сестра живет в Лондоне?	"	, "	Что ты делаешь в свободное время? Расскажи мне об этом.	"	, "	Я Миша, а это Тод и Джессика. Мы друзья и работаем вместе.	"	, "	Наш офис недалеко. Это приятное место в центре города.	"	, "	Тод умный. Он главный бухгалтер. Его начальник хорошо к нему относится.	"	, "	Джессика милая и веселая. Она менеджер и тоже умная.	"	, "	Я живу с родителями. Джессика и Тод живут вместе, они пара.	"	, "	У нас часто вечеринки. Вы никогда не увидите нас в офисе после 7 вечера.	"	, "	Мы работаем на полную ставку, но без переработок. У нас хорошая зарплата.	"	,];

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