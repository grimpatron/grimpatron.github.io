let eng = ["	This scooter is less expensive than that motorbike.	"	, "	That was the least interesting book I have ever read.	"	, "	It's the least I can do for his family.	"	, "	It was the first time when I was watching the sunrise at the ocean.	"	, "	I had a good time in New-York and I hope to go there again.	"	, "	President of Ukraine Volodymyr Zelensky rejects asylum offers from Europe.	"	, "	Can you recommend a scary movie for the night?	"	, "	He recommended a good movie. I've watched it a few times.	"	, "	I enjoyed this movie. Can you recommend another one?	"	, "	How about Dead Poets Society? I think you'd like it.	"	, "	I don't really like musicals. Besides, I've already seen this movie.	"	, "	The movie contains a large number of violent scenes.	"	, "	Dave's over there. He's chatting with Joan.	"	, "	He's waiting for the train now. His train arrives at midnight.	"	, "	Diana, can you take a photo of the class?	"	, "	What are you listening to? What is the name of this song?	"	, "	We read about the royal wedding in the newspaper.	"	, "	I can't come at the moment. I'm talking on the phone.	"	, "	Ask your teacher about the pronunciation of this word.	"	, "	When I'm on holiday, I never think about work.	"	, "	I had a bad dream while I was sleaping on the sofa.	"	, "	Karina was ironing clothes when the lights went out.	"	, "	I was talking to my wife in the park when two cars crashed behind us.	"	, "	My mother found some old photographs while she was cleaning her room.	"	, "	Someone took Peter's bag while he was making a phone call.	"	, "	He looks like his brother. His brother's name is Tom.	"	, "	This camera is hers, I have to return it on Tuesday.	"	, "	Their house is further up the street. It's over there.	"	, "	My company is in Paris, so it's useful to know French.	"	, "	He went to Asia about ten years ago. He enjoys living there.	"	, "	It depends on what kind of films do you like?	"	, "	How long does it take to go from Berlin to Paris.	"	, "	When you go home try to drive slowly.	"	, "	I want to buy a car, but first I need to get a driver's license.	"	, "	This is my new kick scooter. Do you want to ride it?	"	, "	I'll never forget buying my first motorbike.	"	, "	The yacht isn’t mine, it’s his. Do you like it?	"	, "	The car stopped and the driver got out.	"	, "	My friend likes driving. We often go for a drive with him.	"	, "	The restaurant is in an inconvenient location. We will have to on foot.	"	,];
let ru = ["	Этот скутер менее дорогой, чем тот мотоцикл.	"	, "	Это была самая неинтересная книга из всех, что я читал.	"	, "	Это самое меньшее, что я могу сделать для его семьи.	"	, "	Это был первый раз, когда я наблюдал рассвет у океана.	"	, "	Я хopoшo пpoвeл вpemя в Нью-Йoркe и нaдeюcь пpиeхaть eщe paз.	"	, "	Президент Украины Владимир Зеленский отверг предложения убежища из Европы.	"	, "	Можешь порекомендовать фильм ужасов на ночь?	"	, "	Он порекомендовал хороший фильм. Я просмотрел его несколько раз.	"	, "	Мне понравился этот фильм. Можешь порекомендовать еще один?	"	, "	Как насчет Общества Мертвых поэтов? Я думаю, тебе бы это понравилось.	"	, "	Я не очень люблю мюзиклы. Кроме того, я уже видел этот фильм.	"	, "	Фильм содержит большое количество сцен насилия.	"	, "	Дэйв там. Он болтает с Джоан.	"	, "	Он ждет поезд сейчас. Его поезд прибывает в полночь.	"	, "	Диана, можешь сфотографировать класс?	"	, "	Что ты слушаешь? Какое название у этой песни?	"	, "	Мы читали о королевской свадьбе в газете.	"	, "	Я не могу прийти в данный момент. Я говорю по телефону.	"	, "	Спросите учителя о произношении этого слова.	"	, "	Когда я в отпуске, я никогда не думаю о работе.	"	, "	Мне приснился плохой сон, пока я спал на диване.	"	, "	Карина гладила одежду, когда погас свет.	"	, "	Я разговаривал с женой в парке, когда позади нас врезались две машины.	"	, "	Моя мама нашла несколько старых фотографий, пока убиралась в своей комнате.	"	, "	Кто-то забрал сумку Питера, пока он делал телефонный звонок.	"	, "	Он выглядит как его брат. Его брата зовут том.	"	, "	Эта камера ее, я должен вернуть ее во вторник.	"	, "	Их дом — дальше по улице. Это там.	"	, "	Моя компания находится в Париже, поэтому полезно знать французский язык.	"	, "	Он переехал в Азию около десяти лет назад. Ему очень нравится жить там.	"	, "	Это зависит от того, какие фильмы вы любите?	"	, "	Сколько времени занимает дорога из Берлина в Париж?	"	, "	Когда ты поедешь домой, постарайся ехать помедленнее.	"	, "	Я хочу купить машину, но сначала мне нужно получить водительские права.	"	, "	Это мой новый самокат. Хочешь проехать на нём?	"	, "	Я никогда не забуду покупку моего первого мотоцикла.	"	, "	Яхта не моя, она его. Тебе она нравится?	"	, "	Машина остановилась, и водитель вышел.	"	, "	Мой друг любит водить. Мы с ним часто отправляемся кататься на машине.	"	, "	Ресторан располагается в неудобном месте. Нам придется идти пешком.	"	,];

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