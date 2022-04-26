let eng = ["	I want to buy a car, but first I need to get a driver's license.	"	, "	This is my new kick scooter. Do you want to ride it?	"	, "	I'll never forget buying my first motorbike.	"	, "	The yacht isn’t mine, it’s his. Do you like it?	"	, "	The car stopped and the driver got out.	"	, "	My friend likes driving. We often go for a drive with him.	"	, "	The restaurant is in an inconvenient location. We will have to go on foot.	"	, "	Jane fell for Mike. I want her to be happy.	"	, "	You should put it behind you now: what's done is done.	"	, "	This house is mine. You can live here until autumn.	"	, "	You need to get out of here as soon as possible.	"	, "	It's a shame not to know these elementary things.	"	, "	When I go to the gym in summer I get hot.	"	, "	I didn't drink anything all day so I got thirsty.	"	, "	I stayed up too late and I got really tired.	"	, "	I forgot my umbrella yesterday and I got wet.	"	, "	I'm really cold. Can I sit by the fire? I need to get warm.	"	, "	I didn't eat breakfast so I'm getting hungry.	"	, "	I didn't have a map or a mobile and I got lost.	"	, "	I put my hand on a bee and I got stung.	"	, "	There's no central heating and I often get cold.	"	, "	I stayed out in the sun and I got sunburnt.	"	, "	Build a fire so you won't get cold.	"	, "	Make a plan. You'll feel better, that's sure.	"	, "	Don't stand under a tree because the lightning might hit the tree, or you.	"	, "	Don't touch anything metal in your car and I'm sure the lightning won't hurt you.	"	, "	Get away from the bees because you might get stung again.	"	, "	Don't pinch the bee-sting because the sting will get worse, that's for sure.	"	, "	Don't leave your home in an earthquake. A building might fall on you outside.	"	, "	Stay away from mirrors because they might break and cut you.	"	, "	Sorry to be late. I got up late and missed the bus.	"	, "	Sorry to be late. I came as quickly as I could.	"	, "	It's fine, but don't let it happen again.	"	, "	I'm afraid I didn't hear my alarm clock.	"	, "	There is a meeting tomorrow morning. It will start at 7, so don't be late.	"	, "	You need to hurry. It is almost five o’clock.	"	, "	The meeting will begin at two o'clock on the dot.	"	, "	My car broke down, I lost my keys and then a missed the train.	"	, "	He will come in 15 minutes. Show him the office.	"	, "	I got on the wrong bus and I got lost. I don't know where i am.	"	,];
let ru = ["	Я хочу купить машину, но сначала мне нужно получить водительские права.	"	, "	Это мой новый самокат. Хочешь проехать на нём?	"	, "	Я никогда не забуду покупку моего первого мотоцикла.	"	, "	Яхта не моя, она его. Тебе она нравится?	"	, "	Машина остановилась, и водитель вышел.	"	, "	Мой друг любит водить. Мы с ним часто отправляемся кататься на машине.	"	, "	Ресторан располагается в неудобном месте. Нам придется идти пешком.	"	, "	Джейн влюбилась в Майка. Я хочу, чтобы она была счастлива.	"	, "	Тебе следует оставить это в прошлом: что сделано, то сделано.	"	, "	Этот дом мой. Ты можешь пожить здесь до осени.	"	, "	Ты должен уехать отсюда как можно скорее.	"	, "	Стыдно не знать этих элементарных вещей.	"	, "	Когда я иду в спортзал летом, мне становится жарко.	"	, "	Я ничего не пил весь день, поэтому я почувствовал жажду.	"	, "	Я не ложился спать до позднa и очень устал.	"	, "	Я забыл свой зонт вчера и промок.	"	, "	Мне очень холодно. Можно я посижу у костра? Мне нужно согреться.	"	, "	Я не завтракал, поэтому проголодался.	"	, "	У меня не было ни карты, ни мобильного, и я заблудился.	"	, "	Я положил руку на пчелу, и меня ужалили.	"	, "	Там нет центрального отопления, и я часто простужаюсь.	"	, "	Я остался на солнце, и я получил солнечный ожог.	"	, "	Разожги костер, чтобы не простудиться.	"	, "	Составить план. Вы почувствуете себя лучше, это точно.	"	, "	Не стойте под деревом, потому что молния может ударить в дерево или в вас.	"	, "	Не трогайте ничего металического в машине, и я уверен, что молния не причинит вам вреда.	"	, "	Держитесь подальше от пчел, потому что вас могут снова ужалить.	"	, "	Не щипайте пчелиный укус, потому что укус станет хуже, это уж точно.	"	, "	Не покидайте свой дом во время землетрясения. Снаружи на вас может упасть здание.	"	, "	Держитесь подальше от зеркал, потому что они могут разбиться и порезать вас.	"	, "	Извините за опоздание. Я встал поздно и опоздал на автобус.	"	, "	Извините за опоздание. Я приехал так быстро, как только мог.	"	, "	Все в порядке, но не позволяйте этому повториться.	"	, "	К сожалению, я не услышал свой будильник.	"	, "	Завтра утром собрание. Оно будет в 7 часов, так что не опаздывай.	"	, "	Тебе нужно поторопиться. Уже почти 5 часов.	"	, "	Собрание начнётся ровно в два часа.	"	, "	Моя машина сломалась, я потерял ключи, а потом опоздал на поезд.	"	, "	Он придет через 15 минут. Покажите ему офис.	"	, "	Я сел не в тот автобус и заблудился. Я не знаю, где я.	"	,];

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