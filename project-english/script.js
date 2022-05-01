let eng = ["	Jane fell for Mike. I want her to be happy.	"	, "	You should put it behind you now: what's done is done.	"	, "	This house is mine. You can live here until autumn.	"	, "	You need to get out of here as soon as possible.	"	, "	When I go to the gym in summer I get hot.	"	, "	I didn't drink anything all day so I got thirsty.	"	, "	I stayed up too late and I got really tired.	"	, "	I'm really cold. Can I sit by the fire? I need to get warm.	"	, "	I didn't eat breakfast so I'm getting hungry.	"	, "	I stayed out in the sun and I got sunburnt.	"	, "	Build a fire so you won't get cold.	"	, "	Make a plan. You'll feel better, that's sure.	"	, "	Don't stand under a tree because the lightning might hit the tree, or you.	"	, "	Don't touch anything metal in your car and I'm sure the lightning won't hurt you.	"	, "	Get away from the bees because you might get stung again.	"	, "	Don't pinch the bee-sting because the sting will get worse, that's for sure.	"	, "	Don't leave your home in an earthquake. A building might fall on you outside.	"	, "	Stay away from mirrors because they might break and cut you.	"	, "	Sorry to be late. I got up late and missed the bus.	"	, "	Sorry to be late. I came as quickly as I could.	"	, "	It's fine, but don't let it happen again.	"	, "	I'm afraid I didn't hear my alarm clock.	"	, "	There is a meeting tomorrow morning. It will start at 7, so don't be late.	"	, "	You need to hurry. It is almost five o’clock.	"	, "	The meeting will begin at two o'clock on the dot.	"	, "	My car broke down, I lost my keys and then a missed the train.	"	, "	He will come in 15 minutes. Show him the office.	"	, "	I got on the wrong bus and I got lost. I don't know where i am.	"	, "	You have to go to college for a lot of years if you want to be a doctor.	"	, "	I brush my teeth two times a day. I take a shower every two days.	"	, "	There was a strange man among the guest. He overheard our conversation.	"	, "	These rectangular boxes are not as heavy as those ones.	"	, "	Italy is not as big as Germany, but bigger than Greece.	"	, "	This computer is too old, so I bought that new laptop.	"	, "	These tickets are for you and those are for us.	"	, "	Have you got enough money? I want you to buy a gift.	"	, "	She hasn't got enough money to buy a new blouse.	"	, "	I bought a jacket and a shirt. The jacket was cheap, but the shirt was expensive.	"	, "	Try on these shoes. Take off one of your shoes and put on this one.	"	, "	She was drinking coffee and reading a magazine when I came in.	"	,];
let ru = ["	Джейн влюбилась в Майка. Я хочу, чтобы она была счастлива.	"	, "	Тебе следует оставить это в прошлом: что сделано, то сделано.	"	, "	Этот дом мой. Ты можешь пожить здесь до осени.	"	, "	Ты должен уехать отсюда как можно скорее.	"	, "	Когда я иду в спортзал летом, мне становится жарко.	"	, "	Я ничего не пил весь день, поэтому я почувствовал жажду.	"	, "	Я не ложился спать до позднa и очень устал.	"	, "	Мне очень холодно. Можно я посижу у костра? Мне нужно согреться.	"	, "	Я не завтракал, поэтому проголодался.	"	, "	Я остался на солнце, и я получил солнечный ожог.	"	, "	Разожги костер, так ты не простудишься.	"	, "	Составить план. Вы почувствуете себя лучше, это точно.	"	, "	Не стойте под деревом, потому что молния может ударить в дерево или в вас.	"	, "	Не трогайте ничего металического в машине, и я уверен, что молния не причинит вам вреда.	"	, "	Держитесь подальше от пчел, потому что вас могут снова ужалить.	"	, "	Не щипайте пчелиный укус, потому что укус станет хуже, это уж точно.	"	, "	Не покидайте свой дом во время землетрясения. Снаружи на вас может упасть здание.	"	, "	Держитесь подальше от зеркал, потому что они могут разбиться и порезать вас.	"	, "	Извините за опоздание. Я встал поздно и опоздал на автобус.	"	, "	Извините за опоздание. Я приехал так быстро, как только мог.	"	, "	Все в порядке, но не позволяйте этому повториться.	"	, "	К сожалению, я не услышал свой будильник.	"	, "	Завтра утром собрание. Оно будет в 7 часов, так что не опаздывай.	"	, "	Тебе нужно поторопиться. Уже почти 5 часов.	"	, "	Собрание начнётся ровно в два часа.	"	, "	Моя машина сломалась, я потерял ключи, а потом опоздал на поезд.	"	, "	Он придет через 15 минут. Покажите ему офис.	"	, "	Я сел не в тот автобус и заблудился. Я не знаю, где я.	"	, "	Ты должен ходить в колледж много лет, если хочешь быть доктором.	"	, "	Я чищу зубы два раза в день. Я принимаю душ каждые два дня.	"	, "	Среди гостей был странный человек. Он подслушал наш разговор.	"	, "	Эти прямоугольные ящики не такие тяжелые, как те.	"	, "	Италия не такая большая, как Германия, но больше, чем Греция.	"	, "	Этот компьютер слишком старый, поэтому я купил тот новый ноутбук.	"	, "	Эти билеты для тебя, а те — для нас.	"	, "	У тебя достаточно денег? Я хочу, чтобы ты купил подарок.	"	, "	У неё недостаточно денег, чтобы купить новую блузку.	"	, "	Я купил пиджак и рубашку. Пиджак был дешевый, но рубашка была дорогой.	"	, "	Примерь эти туфли. Сними одну из своих туфель, и одень эту.	"	, "	Она пила кофе и читала журнал, когда я пришел.	"	,];

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