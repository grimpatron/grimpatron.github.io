let eng = ["	It's the least I can do for his family.	"	, "	It was the first time when I was watching the sunrise at the ocean.	"	, "	I had a good time in New-York and I hope to go there again.	"	, "	I had a bad dream while I was sleaping on the sofa.	"	, "	Karina was ironing clothes when the lights went out.	"	, "	I was talking to my wife in the park when two cars crashed behind us.	"	, "	My mother found some old photographs while she was cleaning her room.	"	, "	Someone took Peter's bag while he was making a phone call.	"	, "	This camera is hers, I have to return it on Tuesday.	"	, "	My company is in Paris, so it's useful to know French.	"	, "	He went to Asia about ten years ago. He enjoys living there.	"	, "	It depends on what kind of films do you like?	"	, "	How long does it take to go from Berlin to Paris.	"	, "	When you go home try to drive slowly.	"	, "	I want to buy a car, but first I need to get a driver's license.	"	, "	This is my new kick scooter. Do you want to ride it?	"	, "	I'll never forget buying my first motorbike.	"	, "	The yacht isn’t mine, it’s his. Do you like it?	"	, "	The car stopped and the driver got out.	"	, "	My friend likes driving. We often go for a drive with him.	"	, "	The restaurant is in an inconvenient location. We will have to go on foot.	"	, "	My cousin was born in 1988. He is four years older than me.	"	, "	Jane fell for Mike. I want her to be happy.	"	, "	You should put it behind you now: what's done is done.	"	, "	This house is mine. You can live here until autumn.	"	, "	You need to get out of here as soon as possible.	"	, "	When I go to the gym in summer I get hot.	"	, "	I didn't drink anything all day so I got thirsty.	"	, "	I stayed up too late and I got really tired.	"	, "	I forgot my umbrella yesterday and I got wet.	"	, "	I'm really cold. Can I sit by the fire? I need to get warm.	"	, "	I didn't eat breakfast so I'm getting hungry.	"	, "	I didn't have a map or my mobile and I got lost.	"	, "	I put my hand on a bee and I got stung.	"	, "	There's no central heating and I often get cold.	"	, "	I stayed out in the sun and I got sunburnt.	"	, "	Build a fire so you won't get cold.	"	, "	Make a plan. You'll feel better, that's sure.	"	,];
let ru = ["	Это самое меньшее, что я могу сделать для его семьи.	"	, "	Это был первый раз, когда я наблюдал рассвет у океана.	"	, "	Я хopoшo пpoвeл вpemя в Нью-Йoркe и нaдeюcь пpиeхaть eщe paз.	"	, "	Мне приснился плохой сон, пока я спал на диване.	"	, "	Карина гладила одежду, когда погас свет.	"	, "	Я разговаривал с женой в парке, когда позади нас врезались две машины.	"	, "	Моя мама нашла несколько старых фотографий, пока убиралась в своей комнате.	"	, "	Кто-то забрал сумку Питера, пока он делал телефонный звонок.	"	, "	Эта камера ее, я должен вернуть ее во вторник.	"	, "	Моя компания находится в Париже, поэтому полезно знать французский язык.	"	, "	Он переехал в Азию около десяти лет назад. Ему очень нравится жить там.	"	, "	Это зависит от того, какие фильмы вы любите?	"	, "	Сколько времени занимает дорога из Берлина в Париж?	"	, "	Когда ты поедешь домой, постарайся ехать помедленнее.	"	, "	Я хочу купить машину, но сначала мне нужно получить водительские права.	"	, "	Это мой новый самокат. Хочешь проехать на нём?	"	, "	Я никогда не забуду покупку моего первого мотоцикла.	"	, "	Яхта не моя, она его. Тебе она нравится?	"	, "	Машина остановилась, и водитель вышел.	"	, "	Мой друг любит водить. Мы с ним часто отправляемся кататься на машине.	"	, "	Ресторан располагается в неудобном месте. Нам придется идти пешком.	"	, "	Мой двоюродный брат родился в 1988 году. Он старше меня на четыре года.	"	, "	Джейн влюбилась в Майка. Я хочу, чтобы она была счастлива.	"	, "	Тебе следует оставить это в прошлом: что сделано, то сделано.	"	, "	Этот дом мой. Ты можешь пожить здесь до осени.	"	, "	Ты должен уехать отсюда как можно скорее.	"	, "	Когда я иду в спортзал летом, мне становится жарко.	"	, "	Я ничего не пил весь день, поэтому я почувствовал жажду.	"	, "	Я не ложился спать др позднa и очень устал.	"	, "	Я забыл свой зонт вчера и промок.	"	, "	Мне очень холодно. Можно я посижу у костра? Мне нужно согреться.	"	, "	Я не завтракал, поэтому проголодался.	"	, "	У меня не было ни карты, ни мобильного, и я заблудился.	"	, "	Я положил руку на пчелу, и меня ужалили.	"	, "	Там нет центрального отопления, и я часто простужаюсь.	"	, "	Я остался на солнце, и я получил солнечный ожог.	"	, "	Разожги костер, чтобы не замерзнуть.	"	, "	Составить план. Вы почувствуете себя лучше, это точно.	"	,];

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