let eng = ["	This scooter is less expensive than that motorbike.	"	, "	That was the least interesting book I have ever read.	"	, "	It's the least I can do for his family.	"	, "	It was the first time when I was watching the sunrise at the ocean.	"	, "	I had a good time in New-York and I hope to go there again.	"	, "	President of Ukraine Volodymyr Zelensky rejects asylum offers from Europe.	"	, "	Can you recommend a scary movie for the night?	"	, "	He recommended a good movie. I've watched it a few times.	"	, "	I enjoyed this movie. Can you recommend another one?	"	, "	The movie contains a large number of violent scenes.	"	, "	Dave's over there. He's chatting with Joan.	"	, "	What are you listening to? What is the name of this song?	"	, "	We read about the royal wedding in the newspaper.	"	, "	I can't come at the moment. I'm talking on the phone.	"	, "	I had a bad dream while I was sleaping on the sofa.	"	, "	Karina was ironing clothes when the lights went out.	"	, "	I was talking to my wife in the park when two cars crashed behind us.	"	, "	My mother found some old photographs while she was cleaning her room.	"	, "	Someone took Peter's bag while he was making a phone call.	"	, "	He looks like his brother. His brother's name is Tom.	"	, "	This camera is hers, I have to return it on Tuesday.	"	, "	Their house is further up the street. It's over there.	"	, "	My company is in Paris, so it's useful to know French.	"	, "	He went to Asia about ten years ago. He enjoys living there.	"	, "	It depends on what kind of films do you like?	"	, "	How long does it take to go from Berlin to Paris.	"	, "	When you go home try to drive slowly.	"	, "	I want to buy a car, but first I need to get a driver's license.	"	, "	This is my new kick scooter. Do you want to ride it?	"	, "	I'll never forget buying my first motorbike.	"	, "	The yacht isn’t mine, it’s his. Do you like it?	"	, "	The car stopped and the driver got out.	"	, "	My friend likes driving. We often go for a drive with him.	"	, "	The restaurant is in an inconvenient location. We will have to on foot.	"	, "	My cousin was born in 1988. He is four years older than me.	"	, "	Jane fell for Mike. I want her to be happy.	"	, "	Do you know what I'm talking about?	"	, "	You should put it behind you now: what's done is done.	"	, "	This house is mine. You can live here until autumn.	"	, "	You need to get out of here as soon as possible.	"	,];
let ru = ["	Этот скутер менее дорогой, чем тот мотоцикл.	"	, "	Это была самая неинтересная книга из всех, что я читал.	"	, "	Это самое меньшее, что я могу сделать для его семьи.	"	, "	Это был первый раз, когда я наблюдал рассвет у океана.	"	, "	Я хopoшo пpoвeл вpemя в Нью-Йoркe и нaдeюcь пpиeхaть eщe paз.	"	, "	Президент Украины Владимир Зеленский отверг предложения убежища из Европы.	"	, "	Можешь порекомендовать фильм ужасов на ночь?	"	, "	Он порекомендовал хороший фильм. Я просмотрел его несколько раз.	"	, "	Мне понравился этот фильм. Можешь порекомендовать еще один?	"	, "	Фильм содержит большое количество сцен насилия.	"	, "	Дэйв там. Он болтает с Джоан.	"	, "	Что ты слушаешь? Какое название у этой песни?	"	, "	Мы читали о королевской свадьбе в газете.	"	, "	Я не могу прийти в данный момент. Я говорю по телефону.	"	, "	Мне приснился плохой сон, пока я спал на диване.	"	, "	Карина гладила одежду, когда погас свет.	"	, "	Я разговаривал с женой в парке, когда позади нас врезались две машины.	"	, "	Моя мама нашла несколько старых фотографий, пока убиралась в своей комнате.	"	, "	Кто-то забрал сумку Питера, пока он делал телефонный звонок.	"	, "	Он выглядит как его брат. Его брата зовут том.	"	, "	Эта камера ее, я должен вернуть ее во вторник.	"	, "	Их дом — дальше по улице. Это там.	"	, "	Моя компания находится в Париже, поэтому полезно знать французский язык.	"	, "	Он переехал в Азию около десяти лет назад. Ему очень нравится жить там.	"	, "	Это зависит от того, какие фильмы вы любите?	"	, "	Сколько времени занимает дорога из Берлина в Париж?	"	, "	Когда ты поедешь домой, постарайся ехать помедленнее.	"	, "	Я хочу купить машину, но сначала мне нужно получить водительские права.	"	, "	Это мой новый самокат. Хочешь проехать на нём?	"	, "	Я никогда не забуду покупку моего первого мотоцикла.	"	, "	Яхта не моя, она его. Тебе она нравится?	"	, "	Машина остановилась, и водитель вышел.	"	, "	Мой друг любит водить. Мы с ним часто отправляемся кататься на машине.	"	, "	Ресторан располагается в неудобном месте. Нам придется идти пешком.	"	, "	Мой двоюродный брат родился в 1988 году. Он старше меня на четыре года.	"	, "	Джейн влюбилась в Майка. Я хочу, чтобы она была счастлива.	"	, "	Вы знаете, о чем я говорю?	"	, "	Тебе следует оставить это в прошлом: что сделано, то сделано.	"	, "	Этот дом мой. Ты можешь пожить здесь до осени.	"	, "	Ты должен уехать отсюда как можно скорее.	"	,];

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