let eng = ["	Tom insisted on paying the bill. He gave the waiter a big tip.	"	, "	The waiter served our meals quickly. I'll give the guy a good tip.	"	, "	You can slice bread and peel potatoes if you want to help.	"	, "	It's a vegetable, it's green and it starts with 'cu'.	"	, "	Pour me some coffee. Cut me a piece of the pie.	"	, "	Give me the bill and I'll pay for the meal.	"	, "	My grandmother was a good cook. Cabbage rolls are my favorite dish.	"	, "	I need to look at the menu to decide what to eat.	"	, "	The chef at this restaurant cooks really well.	"	, "	I am going to leave a big tip because the service was very good.	"	, "	The waiter at this restaurant is always really helpful.	"	, "	I don't like buying takeaway food.	"	, "	When you cook meat on an open fire, it smells very nice.	"	, "	Boil eggs hard and cut them into the same square pieces as crab sticks.	"	, "	George is my friend. We meet about once a month.	"	, "	I am a very responsible, hardworking and emotional person.    	"	, "	Do you remember the party when we first met?	"	, "	What time do you normally get home from work?	"	, "	She works as a reporter for a local newspaper.	"	, "	Long time no see! What have you been up to? 	"	, "	David and Mike are students. They study economics at university.	"	, "	Laura doesn't call us very often, but I saw her yesterday.	"	, "	What is her name? Where is she from?	"	, "	This is Jim. He is a policeman and lives in New York.	"	, "	Yesterday I met Tom and his wife. Do you know his wife?	"	, "	I work as a manager. I work nine-to-five.	"	, "	My friends and I work together.	"	, "	She and I are best friends. We went to the same school in Spain.	"	, "	Julie and my wife went to the same university.	"	, "	We don't want to work with them. They do their job badly.	"	, "	John and his wife are from Sydney. They moved here three years ago.	"	, "	Tell me about youself. What do you do?	"	, "	They are very nice people, I know them well.	"	, "	Belarus is a rather small country. There are many forests and lakes here.	"	, "	Christmas Day is on the twenty-fifth of December.	"	, "	New Year's Day is on the first of January.	"	, "	Valentine's Day is on the fourteenth of February.	"	, "	Halloween is on the thirty-first of October.	"	, "	International Women's Day is on the eighth of March.	"	, "	Independence Day is on the fourth of July.	"	, "	My mother is now retired, but for most of her life she worked on a loom.	"	, "	They asked me a lot of questions, but I didn't tell them anything.	"	, "	Emma didn't want anything to eat. She said that she wasn't hungry.	"	, "	Were you afraid of the dark when you were a child?	"	, "	She was the winner of Miss Malaysia beauty contest in 1983.	"	, "	I was so tired yesterday, that I drove past my own street.	"	, "	Poor neighbours, all their things were destroyed in the fire.	"	, "	Last week was really the worst in my life.	"	, "	It was the only way to change the situation.	"	, "	When she was fifteen her family moved to Italy.	"	,];
let ru = ["	Том настоял на том, чтобы оплатить счёт. Он дал официанту большие чаевые.	"	, "	Официант быстро подал нам еду. Я дам парню хорошие чаевые.	"	, "	Ты можешь нарезать хлеб и почистить картошку, если хочешь помочь.	"	, "	Это овощ, он зеленый и начинается с «ку».	"	, "	Налей мне немножко кофе. Отрежь мне кусок пирога.	"	, "	Дай мне счет, и я заплачу за еду.	"	, "	Моя бабушка хорошо готовила. Голубцы - моё любимое блюдо.	"	, "	Мне нужно просмотреть меню, чтобы решить, что поесть.	"	, "	Шеф-повар в этом ресторане очень хорошо готовит.	"	, "	Я собираюсь оставить большие чаевые, потому что обслуживание было очень хорошим.	"	, "	Официант в этом ресторане всегда очень услужливый.	"	, "	Я не люблю покупать еду на вынос.	"	, "	Когда готовишь мясо на открытом огне, оно очень приятно пахнет.	"	, "	Яйца сварить вкрутую и нарезать такими же квадратными кусочками, как крабовые палочки.	"	, "	Георг мой друг. Мы встречаемся примерно раз в месяц.	"	, "	Я очень ответственный, трудолюбивый и эмоциональный человек.	"	, "	Ты помнишь ту вечеринку, когда мы впервые встретились?	"	, "	Во сколько ты обычно добираешься домой с работы?	"	, "	Она работает репортером в местной газете.	"	, "	Давно не виделись! Чем занимался все это время?  	"	, "	Дэвид и Майк студенты. Они изучают экономику в университете.	"	, "	Лаура звонит нам не очень часто, но я видел её вчера.	"	, "	Как ее зовут? Откуда она?	"	, "	Это Джим. Он полицейский и живет в Нью-Йорке.	"	, "	Вчера я встретил Тома и его жену. Ты знаешь его жену?	"	, "	Я работаю менеджером. Я работаю с 9 до 5.	"	, "	Мы с друзьями работаем вместе.	"	, "	Мы с ней лучшие друзья. Мы учились в одной школе в Испании.	"	, "	Джули и моя жена учились в одном университете.	"	, "	Мы не хотим с ними работать. Они плохо делают свою работу	"	, "	Джон и его жена из Сиднея. Они переехали сюда три года назад.	"	, "	Расскажите мне о себе. Чем ты занимаешься?	"	, "	Они очень милые люди, я знаю их хорошо.	"	, "	Беларусь - достаточно маленькая страна. Здесь много лесов и озер.	"	, "	Рождество приходится на двадцать пятое декабря.	"	, "	Новый год приходится на первое января.	"	, "	День святого Валентина приходится на четырнадцатое февраля.	"	, "	Хэллоуин приходится на тридцать первое октября.	"	, "	Международный женский день приходится на восьмое марта.	"	, "	День независимости приходится на четвертое июля.	"	, "	Моя мама сейчас на пенсии, но большую часть жизни проработала на ткацком станке.	"	, "	Они задали мне много вопросов, но я не рассказал им ничего.	"	, "	Эмма не хотела ничего есть. Она сказала что она не была голодна.	"	, "	Боялись ли вы темноты, когда вы были ребёнком?	"	, "	Она стала победительницей конкурса красоты «Мисс Малайзия» в 1983 году.	"	, "	Вчера я был таким уставшим, что проехал мимо своей улицы.	"	, "	Бедные соседи, все их вещи уничтожены при пожаре.	"	, "	Последняя неделя действительно была самой ужасной в моей жизни.	"	, "	Это был единственный способ изменить ситуацию.	"	, "	Когда ей было пятнадцать, ее семья переехала в Италию.	"	,];

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