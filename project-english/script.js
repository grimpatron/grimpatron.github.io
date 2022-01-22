let eng = ["	Do you cook well? Can you bake cakes?	"	, "	How much food does an avarage person eat in a lifetime?	"	, "	Have you got any sweets? I want to eat something delicious.	"	, "	Are you ready to order? Would you like something to drink?	"	, "	Tom insisted on paying the bill. He gave the waiter a big tip.	"	, "	The waiter served our meals quickly. I'll give the guy a good tip.	"	, "	This dish was created by our chef.	"	, "	There's no water in this bottle. It's empty.	"	, "	Do you like cooking? How often do you cook? What’s your best dish?	"	, "	What types of food do you like, and from which countrys?	"	, "	How many eggs do we need to make an omelet?	"	, "	Use a frying pan to cook the omelette.	"	, "	We had fried chicken with boiled rice.	"	, "	Chop the onions finely. Fry the onions in oil.	"	, "	What is this dish? This is not what I ordered.	"	, "	I’d like to order. What do you recommend for the main course?	"	, "	I’d like to place an order for delivery.	"	, "	You can slice bread and peel potatoes if you want to help.	"	, "	It's a vegetable, it's green and it starts with 'cu'.	"	, "	Pour me some coffee. Cut me a piece of the pie.	"	, "	Give me the bill and I'll pay for the meal.	"	, "	Spaghetti Bolognese is my favorite dish.	"	, "	I need to look at the menu to decide what to eat.	"	, "	The chef at this restaurant cooks really well.	"	, "	I am going to leave a big tip because the service was very good.	"	, "	The waiter at this restaurant is always really helpful.	"	, "	I don't like buying takeaway food.	"	, "	When you cook meat on an open fire, it smells very nice.	"	, "	Boil eggs hard and cut them into the same square pieces as crab sticks.	"	, "	George is my friend. We meet about once a month.	"	, "	I am a very responsible, hardworking and emotional person.    	"	, "	Do you remember the party when we first met?	"	, "	What time do you normally get home from work?	"	, "	She works as a reporter for a local newspaper.	"	, "	Long time no see! What have you been up to? 	"	, "	David and Mike are students. They study economics at university.	"	, "	Laura doesn't call us very often, but I saw her yesterday.	"	, "	What is her name? Where is she from?	"	, "	This is Jim. He is a policeman and lives in New York.	"	, "	Yesterday I met Tom and his wife. Do you know his wife?	"	, "	I work as a manager. I work nine-to-five.	"	, "	My friends and I work together.	"	, "	She and I are best friends. We went to the same school in Spain.	"	, "	Julie and my wife went to the same university.	"	, "	We don't want to work with them. They do their job badly.	"	, "	John and his wife are from Sydney. They moved here three years ago.	"	, "	Tell me about youself. What do you do?	"	, "	They are very nice people, I know them well.	"	, "	Belarus is a rather small country. There are many forests and lakes here.	"	,];
let ru = ["	Ты хорошо готовишь? Ты умеешь печь торты?	"	, "	Сколько еды в среднем съедает за свою жизнь человек?	"	, "	У тебя есть сладости? Я хочу съесть что-нибудь вкусное.	"	, "	Вы готовы сделать заказ? Хотите чего-нибудь выпить?	"	, "	Том настоял на том, чтобы оплатить счёт. Он дал официанту большие чаевые.	"	, "	Официант быстро подал нам еду. Я дам парню хорошие чаевые.	"	, "	Это блюдо приготовил наш шеф-повар.	"	, "	В этой бутылке нет воды. Пусто.	"	, "	Вам нравится готовить? Как часто ты готовишь? Какое твое лучшее блюдо?	"	, "	Какие виды еды вам нравятся и из каких стран?	"	, "	Сколько яиц нам нужно, чтобы сделать омлет?	"	, "	Используйте сковороду, чтобы приготовить омлет.	"	, "	У нас была жареная курица с отварным рисом.	"	, "	Лук мелко нарезать. Лук обжарить на масле.	"	, "	Что это за блюдо? Это не то, что я заказывал	"	, "	Я хотел бы сделать заказ. Что вы рекомендуете, в качестве основного блюда?	"	, "	Я хотел бы оформить заказ на доставку.	"	, "	Ты можешь нарезать хлеб и почистить картошку, если хочешь помочь.	"	, "	Это овощ, он зеленый и начинается с «ку».	"	, "	Налей мне немножко кофе. Отрежь мне кусок пирога.	"	, "	Дай мне счет, и я заплачу за еду.	"	, "	Спагетти Болоньезе - мое любимое блюдо.	"	, "	Мне нужно просмотреть меню, чтобы решить, что поесть.	"	, "	Шеф-повар в этом ресторане очень хорошо готовит.	"	, "	Я собираюсь оставить большие чаевые, потому что обслуживание было очень хорошим.	"	, "	Официант в этом ресторане всегда очень услужливый.	"	, "	Я не люблю покупать еду на вынос.	"	, "	Когда готовишь мясо на открытом огне, оно очень приятно пахнет.	"	, "	Яйца сварить вкрутую и нарезать такими же квадратными кусочками, как крабовые палочки.	"	, "	Георг мой друг. Мы встречаемся примерно раз в месяц.	"	, "	Я очень ответственный, трудолюбивый и эмоциональный человек.	"	, "	Ты помнишь ту вечеринку, когда мы впервые встретились?	"	, "	Во сколько ты обычно добираешься домой с работы?	"	, "	Она работает репортером в местной газете.	"	, "	Давно не виделись! Чем занимался все это время?  	"	, "	Дэвид и Майк студенты. Они изучают экономику в университете.	"	, "	Лаура звонит нам не очень часто, но я видел её вчера.	"	, "	Как ее зовут? Откуда она?	"	, "	Это Джим. Он полицейский и живет в Нью-Йорке.	"	, "	Вчера я встретил Тома и его жену. Ты знаешь его жену?	"	, "	Я работаю менеджером. Я работаю с 9 до 5.	"	, "	Мы с друзьями работаем вместе.	"	, "	Мы с ней лучшие друзья. Мы учились в одной школе в Испании.	"	, "	Джули и моя жена учились в одном университете.	"	, "	Мы не хотим с ними работать. Они плохо делают свою работу	"	, "	Джон и его жена из Сиднея. Они переехали сюда три года назад.	"	, "	Расскажите мне о себе. Чем ты занимаешься?	"	, "	Они очень милые люди, я знаю их хорошо.	"	, "	Беларусь - достаточно маленькая страна. Здесь много лесов и озер.	"	,];

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