let eng = ["	Do you cook well? Can you bake cakes?	"	, "	Take an egg and break it into the bowl.	"	, "	There aren't any fresh vegetables. Tinned foods are not very tasty.	"	, "	There are not many empty glasses. But we can use mugs.	"	, "	There is quite a lot of alcohol. We need more snacks.	"	, "	How much sugar is there in one can of cola?	"	, "	How many potatoes are there in that bag?	"	, "	How much food does an avarage person eat in a lifetime?	"	, "	Have you got any sweets? I want to eat something delicious.	"	, "	There isn't any milk, but there is some fruit juice and soda. 	"	, "	I prefer tea to coffee. I usually put three spoons of sugar in my tea.	"	, "	I can’t describe you the taste of this dish.	"	, "	Would you like some coffee or mineral water?	"	, "	Are you ready to order? Would you like something to drink?	"	, "	I love pizza so much that I can eat it every day.	"	, "	Do you know how to use a knife and fork?	"	, "	Tom insisted on paying the bill. He gave the waiter a big tip.	"	, "	The waiter served our meals quickly. I'll give the guy a good tip.	"	, "	This dish was created by our chef.	"	, "	What time do you serve breakfast? I usually drink tea in the morning.	"	, "	There's no water in this bottle. It's empty.	"	, "	How many pieces of pizza can I eat?	"	, "	Do you like cooking? How often do you cook? What’s your best dish?	"	, "	Is there a bottle on the table? How much water is there in the bottle?	"	, "	What types of food do you like, and from which countrys?	"	, "	How many eggs do we need to make an omelet?	"	, "	Use a frying pan to cook the omelette.	"	, "	We had chicken with boiled rice.	"	, "	Chop the onions finely. Fry the onions in oil.	"	, "	What is this dish? This is not what I ordered.	"	, "	I’d like to order. What do you recommend for the main course?	"	, "	I’d like to place an order for delivery.	"	, "	You can slice bread and peel potatoes if you want to help.	"	, "	It's a vegetable, it's green and it starts with 'cu'.	"	, "	Pour me some coffee. Cut me a piece of the pie.	"	, "	Give me the bill and I'll pay for the meal.	"	, "	Spaghetti Bolognese is my favorite dish.	"	, "	I need to look at the menu to decide what to eat.	"	, "	The chef at this restaurant cooks really well.	"	, "	I am going to leave a big tip because the service was very good.	"	, "	The waiter at this restaurant is always really helpful.	"	, "	I don't like buying takeaway food.	"	, "	When you cook meat on an open fire, it smells very nice.	"	, "	Boil eggs hard and cut them into the same square pieces as crab sticks.	"	, "	I was so tired yesterday, that I drove past my own street.	"	, "	Poor neighbours, all their things were destroyed in the fire.	"	, "	Were you afraid of the dark when you were a child?	"	,];
let ru = ["	Ты хорошо готовишь? Ты умеешь печь торты?	"	, "	Возьми яйцо и разбей его в миску.	"	, "	Нет свежих овощей. Консервированные продукты — не очень вкусные.	"	, "	Пустых стаканов не так много. Но мы можем использовать кружки.	"	, "	Здесь довольно много алкоголя. Нам нужно больше закусок.	"	, "	Сколько сахара в одной банке колы?	"	, "	Сколько картошки в том мешке?	"	, "	Сколько еды в среднем съедает за свою жизнь человек?	"	, "	У тебя есть сладости? Я хочу съесть что-нибудь вкусное.	"	, "	Молока нет, но есть фруктовый сок и газировка.	"	, "	Я предпочитаю чай кофе. Я обычно кладу три ложки сахара в чай.	"	, "	Я не могу описать тебе вкус этого блюда.	"	, "	Вы бы хотели кофе или минеральную воду?	"	, "	Вы готовы сделать заказ? Хотите чего-нибудь выпить?	"	, "	Я так люблю пиццу, что я могу есть ее каждый день.	"	, "	Ты умеешь пользоваться ножом и вилкой?	"	, "	Том настоял на том, чтобы оплатить счёт. Он дал официанту большие чаевые.	"	, "	Официант быстро подал нам еду. Я дам парню хорошие чаевые.	"	, "	Это блюдо приготовил наш шеф-повар.	"	, "	Когда у вас подают завтрак? Я обычно пью чай по утрам.	"	, "	В этой бутылке нет воды. Пусто.	"	, "	Сколько кусков пиццы я могу съесть?	"	, "	Вам нравится готовить? Как часто ты готовишь? Какое твое лучшее блюдо?	"	, "	Есть ли на столе бутылка? Сколько воды в бутылке?	"	, "	Какие виды еды вам нравятся и из каких стран?	"	, "	Сколько яиц нам нужно, чтобы сделать омлет?	"	, "	Используйте сковороду, чтобы приготовить омлет.	"	, "	У нас была курица с отварным рисом.	"	, "	Лук мелко нарезать. Лук обжарить на масле.	"	, "	Что это за блюдо? Это не то, что я заказывал	"	, "	Я хотел бы сделать заказ. Что вы рекомендуете, в качестве основного блюда?	"	, "	Я хотел бы оформить заказ на доставку.	"	, "	Ты можешь нарезать хлеб и почистить картошку, если хочешь помочь.	"	, "	Это овощ, он зеленый и начинается с «ку».	"	, "	Налей мне немножко кофе. Отрежь мне кусок пирога.	"	, "	Дай мне счет, и я заплачу за еду.	"	, "	Спагетти Болоньезе - мое любимое блюдо.	"	, "	Мне нужно просмотреть меню, чтобы решить, что поесть.	"	, "	Шеф-повар в этом ресторане очень хорошо готовит.	"	, "	Я собираюсь оставить большие чаевые, потому что обслуживание было очень хорошим.	"	, "	Официант в этом ресторане всегда очень услужливый.	"	, "	Я не люблю покупать еду на вынос.	"	, "	Когда готовишь мясо на открытом огне, оно очень приятно пахнет.	"	, "	Яйца сварить вкрутую и нарезать такими же квадратными кусочками, как крабовые палочки.	"	, "	Вчера я был таким уставшим, что проехал мимо своей улицы.	"	, "	Бедные соседи, все их вещи уничтожены при пожаре.	"	, "	Боялись ли вы темноты, когда вы были ребёнком?	"	,];

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