let eng = ["	Lisa is the youngest student in her class, but she is the smartest.	"	, "	This scooter is less expensive than that motorbike.	"	, "	That was the least interesting book I have ever read.	"	, "	It's the least I can do for his family.	"	, "	The newsagent's is near the hairdresser's.	"	, "	I’m looking for an old bridge. Is this bridge far from here?	"	, "	It's two miles to the station. This is the shortest way.	"	, "	It’s 1 kilometer to the supermarket. You can't miss it.	"	, "	It’s 500 meters from here at the end of the road.	"	, "	When I visit onother country, I try to learn some of the language.	"	, "	I have visited seven countries so far.	"	, "	Have you ever been to Japan?	"	, "	She enjoys traveling around Europe.	"	, "	Unfortunately, I have never been to Europe.	"	, "	The best way to explore the island is to hire a car.	"	, "	The best way to get to the airport is to take a taxi.	"	, "	It was the first time when I was watching the sunrise at the ocean.	"	, "	I had a good time in New-York and I hope to go there again.	"	, "	President of Ukraine Volodymyr Zelensky rejects asylum offers from Europe.	"	, "	It's my bag. Don't touch those scissors. Put them back.	"	, "	Can you recommend a scary movie for the night?	"	, "	He recommended a good movie. I've watched it a few times.	"	, "	I enjoyed this movie. Can you recommend another one?	"	, "	How about Dead Poets Society? I think you'd like it.	"	, "	I don't really like musicals. Besides, I've already seen this movie.	"	, "	The movie contains a large number of violent scenes.	"	, "	How long has your sister been living in London?	"	, "	What do you do in your free time? Tell me about it.	"	, "	Jessica is a manager and clever too. She is waiting for a promotion.	"	, "	Dave's over there. He's chatting with Joan.	"	, "	He's waiting for the train now. His train arrives at midnight.	"	, "	Diana, can you take a photo of the class?	"	, "	What are you listening to? What is the name of this song?	"	, "	We read about the royal wedding in the newspaper.	"	, "	I can't come at the moment. I'm talking on the phone.	"	, "	Ask your teacher about the pronunciation of this word.	"	, "	When I'm on holiday, I never think about work.	"	, "	I has a bad dream while I was sleaping on the sofa.	"	, "	Karina was ironing clothes when the lights went out.	"	, "	I was talking to my wife in the park when two cars crashed behind us.	"	, "	My mother found some old photographs while she was cleaning her room.	"	, "	Someone took Peter's bag while he was making a phone call.	"	, "	He looks like his brother. His brother's name is Tom.	"	, "	The camera is hers, I have to return it on Tuesday.	"	, "	Their house is further up the street. It's over there.	"	,];
let ru = ["	Лиза самая младшая ученица  в её классе, но она самая умная.	"	, "	Этот скутер менее дорогой, чем тот мотоцикл.	"	, "	Это была самая неинтересная книга из всех, что я читал.	"	, "	Это самое меньшее, что я могу сделать для его семьи.	"	, "	Газетный киоск находится недалеко от парикмахерской.	"	, "	Я ищу старый мост.  Этот мост находится далеко отсюда?	"	, "	До станции две мили. Это самый короткий путь.	"	, "	До супермаркета 1 километр. Вы не можете пропустить это.	"	, "	Это в 500 метрах отсюда, в конце дороге.	"	, "	Когда я приезжаю в другую страну, я стараюсь немного выучить язык.	"	, "	Я посетил семь стран на данный момент.	"	, "	Ты когда-нибудь был в Японии?	"	, "	Ей нравится путешествовать по Европе.	"	, "	К сожалению, я никогда не был в Европе.	"	, "	Лучший способ исследовать остров — арендовать автомобиль.	"	, "	Лучший способ добраться до аэропорта – взять такси.	"	, "	Это был первый раз, когда я наблюдал рассвет у океана.	"	, "	Я хopoшo пpoвeл вpemя в Нью-Йopke и нaдeюcь пpиeхaть eщe paз.	"	, "	Президент Украины Владимир Зеленский отверг предложения убежища из Европы.	"	, "	Это моя сумка. Не трогай эти ножницы. Положите их обратно.	"	, "	Можешь порекомендовать фильм ужасов на ночь?	"	, "	Он порекомендовал хороший фильм. Я просмотрел его несколько раз.	"	, "	Мне понравился этот фильм. Можешь порекомендовать еще один?	"	, "	Как насчет Общества Мертвых поэтов? Я думаю, тебе бы это понравилось.	"	, "	Я не очень люблю мюзиклы. Кроме того, я уже видел этот фильм.	"	, "	Фильм содержит большое количество сцен насилия.	"	, "	Как долго твоя сестра живет в Лондоне?	"	, "	Что ты делаешь в свободное время? Расскажи мне об этом.	"	, "	Джессика менеджер и тоже умная. Она ждет повышения.	"	, "	Дэйв там. Он болтает с Джоан.	"	, "	Он ждет поезд сейчас. Его поезд прибывает в полночь.	"	, "	Диана, можешь сфотографировать класс?	"	, "	Что ты слушаешь? Какое название у этой песни?	"	, "	Мы читали о королевской свадьбе в газете.	"	, "	Я не могу прийти в данный момент. Я говорю по телефону.	"	, "	Спросите учителя о произношении этого слова.	"	, "	Когда я в отпуске, я никогда не думаю о работе.	"	, "	Мне приснился плохой сон, пока я спал на диване.	"	, "	Карина гладила одежду, когда погас свет.	"	, "	Я разговаривал с женой в парке, когда позади нас врезались две машины.	"	, "	Моя мама нашла несколько старых фотографий, пока убиралась в своей комнате.	"	, "	Кто-то забрал сумку Питера, пока он делал телефонный звонок.	"	, "	Он выглядит как его брат. Его брата зовут том.	"	, "	Камера ее, я должен вернуть ее во вторник.	"	, "	Их дом — дальше по улице. Это там.	"	,];

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