let eng = ["	Do you cook well? Can you bake cakes?	"	, "	There are not many empty glasses. But we can use mugs.	"	, "	There is quite a lot of alcohol. We need more snacks.	"	, "	How much food does an avarage person eat in a lifetime?	"	, "	Have you got any sweets? I want to eat something delicious.	"	, "	There isn't any milk, but there is some fruit juice and soda. 	"	, "	I prefer tea to coffee. I usually put three spoons of sugar in my tea.	"	, "	Are you ready to order? Would you like something to drink?	"	, "	Tom insisted on paying the bill. He gave the waiter a big tip.	"	, "	The waiter served our meals quickly. I'll give the guy a good tip.	"	, "	This dish was created by our chef.	"	, "	What time do you serve breakfast? I usually drink tea in the morning.	"	, "	There's no water in this bottle. It's empty.	"	, "	Do you like cooking? How often do you cook? What’s your best dish?	"	, "	What types of food do you like, and from which countrys?	"	, "	How many eggs do we need to make an omelet?	"	, "	Use a frying pan to cook the omelette.	"	, "	We had chicken with boiled rice.	"	, "	Chop the onions finely. Fry the onions in oil.	"	, "	What is this dish? This is not what I ordered.	"	, "	I’d like to order. What do you recommend for the main course?	"	, "	I’d like to place an order for delivery.	"	, "	You can slice bread and peel potatoes if you want to help.	"	, "	It's a vegetable, it's green and it starts with 'cu'.	"	, "	Pour me some coffee. Cut me a piece of the pie.	"	, "	Give me the bill and I'll pay for the meal.	"	, "	Spaghetti Bolognese is my favorite dish.	"	, "	I need to look at the menu to decide what to eat.	"	, "	The chef at this restaurant cooks really well.	"	, "	I am going to leave a big tip because the service was very good.	"	, "	The waiter at this restaurant is always really helpful.	"	, "	I don't like buying takeaway food.	"	, "	When you cook meat on an open fire, it smells very nice.	"	, "	Boil eggs hard and cut them into the same square pieces as crab sticks.	"	, "	George is my friend. We meet about once a month.	"	, "	I am a very responsible, hardworking and emotional person.    	"	, "	Do you remember the party when we first met?	"	, "	What time do you normally get home from work?	"	, "	She works as a reporter for a local newspaper.	"	, "	Long time no see! What have you been up to? 	"	, "	David and Mike are students. They study economics at university.	"	, "	Laura doesn't call us very often, but I saw her yesterday.	"	, "	What is her name? Where is she from?	"	, "	This is Jim. He is a policeman and lives in New York.	"	,];
let ru = ["	Ты хорошо готовишь? Ты умеешь печь торты?	"	, "	Пустых стаканов не так много. Но мы можем использовать кружки.	"	, "	Здесь довольно много алкоголя. Нам нужно больше закусок.	"	, "	Сколько еды в среднем съедает за свою жизнь человек?	"	, "	У тебя есть сладости? Я хочу съесть что-нибудь вкусное.	"	, "	Молока нет, но есть фруктовый сок и газировка.	"	, "	Я предпочитаю чай кофе. Я обычно кладу три ложки сахара в чай.	"	, "	Вы готовы сделать заказ? Хотите чего-нибудь выпить?	"	, "	Том настоял на том, чтобы оплатить счёт. Он дал официанту большие чаевые.	"	, "	Официант быстро подал нам еду. Я дам парню хорошие чаевые.	"	, "	Это блюдо приготовил наш шеф-повар.	"	, "	Когда у вас подают завтрак? Я обычно пью чай по утрам.	"	, "	В этой бутылке нет воды. Пусто.	"	, "	Вам нравится готовить? Как часто ты готовишь? Какое твое лучшее блюдо?	"	, "	Какие виды еды вам нравятся и из каких стран?	"	, "	Сколько яиц нам нужно, чтобы сделать омлет?	"	, "	Используйте сковороду, чтобы приготовить омлет.	"	, "	У нас была курица с отварным рисом.	"	, "	Лук мелко нарезать. Лук обжарить на масле.	"	, "	Что это за блюдо? Это не то, что я заказывал	"	, "	Я хотел бы сделать заказ. Что вы рекомендуете, в качестве основного блюда?	"	, "	Я хотел бы оформить заказ на доставку.	"	, "	Ты можешь нарезать хлеб и почистить картошку, если хочешь помочь.	"	, "	Это овощ, он зеленый и начинается с «ку».	"	, "	Налей мне немножко кофе. Отрежь мне кусок пирога.	"	, "	Дай мне счет, и я заплачу за еду.	"	, "	Спагетти Болоньезе - мое любимое блюдо.	"	, "	Мне нужно просмотреть меню, чтобы решить, что поесть.	"	, "	Шеф-повар в этом ресторане очень хорошо готовит.	"	, "	Я собираюсь оставить большие чаевые, потому что обслуживание было очень хорошим.	"	, "	Официант в этом ресторане всегда очень услужливый.	"	, "	Я не люблю покупать еду на вынос.	"	, "	Когда готовишь мясо на открытом огне, оно очень приятно пахнет.	"	, "	Яйца сварить вкрутую и нарезать такими же квадратными кусочками, как крабовые палочки.	"	, "	Георг мой друг. Мы встречаемся примерно раз в месяц.	"	, "	Я очень ответственный, трудолюбивый и эмоциональный человек.	"	, "	Ты помнишь ту вечеринку, когда мы впервые встретились?	"	, "	Во сколько ты обычно добираешься домой с работы?	"	, "	Она работает репортером в местной газете.	"	, "	Давно не виделись! Чем занимался все это время?  	"	, "	Дэвид и Майк студенты. Они изучают экономику в университете.	"	, "	Лаура звонит нам не очень часто, но я видел её вчера.	"	, "	Как ее зовут? Откуда она?	"	, "	Это Джим. Он полицейский и живет в Нью-Йорке.	"	,];

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