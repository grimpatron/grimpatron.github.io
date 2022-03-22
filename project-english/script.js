let eng = ["	He is far more intelligent than his wife thinks.	"	, "	She wanted to spend less time at her job.	"	, "	You should take the bus — it’s the easiest way to get there.	"	, "	Lisa is the youngest student in her class, but she is the smartest.	"	, "	Where is the nearest bus stop?	"	, "	Where can I find the nearest bakery?	"	, "	How far is it to the train station?	"	, "	How long will it take to get there?	"	, "	Could you give me directions to the nearest bus stop?	"	, "	Turn left into Lake Road. Go past  the bank.	"	, "	Go straight on and then turn right at the crossroads.	"	, "	At the corner of the street you'll see a red building.	"	, "	Go ahead and then turn right at the traffic lights.	"	, "	The pedestrian street is far from here.	"	, "	Continue along this street until you see a bank.	"	, "	Turn left at the corner. Then go straight on for about five minutes.	"	, "	As suggested by the map it should be somewhere around here.	"	, "	Sorry, I don’t know. I’m not from around here.	"	, "	The shoe shop is across from sports shop.	"	, "	The baker's is between the dry-cleaner's and the butcher's.	"	, "	The newsagent's is near the hairdresser's.	"	, "	When you get to bridge you'll see this building.	"	, "	I’m looking for an old bridge. Is this bridge far from here?	"	, "	It's two miles to the station. This is the shortest way.	"	, "	It’s 1 kilometer to the supermarket. You can't miss it.	"	, "	It’s 500 meters from here at the end of the road.	"	, "	When I visit onother country, I try to learn some of the language.	"	, "	I have visited seven countries so far.	"	, "	Have you ever been to Japan?	"	, "	She enjoys traveling around Europe.	"	, "	Unfortunately, I have never been to Europe.	"	, "	The best way to explore the island is to hire a car.	"	, "	President of Ukraine Volodymyr Zelensky rejects asylum offers from Europe.	"	, "	It's my bag. Don't touch those scissors. Put them back.	"	, "	Can you recommend a scary movie for the night?	"	, "	He recommended a good movie. I've watched it a few times.	"	, "	I enjoyed this movie. Can you recommend another one?	"	, "	How about Dead Poets Society? I think you'd like it.	"	, "	I don't really like musicals. Besides, I've already seen this movie.	"	, "	How long has your sister been living in London?	"	, "	What do you do in your free time? Tell me about it.	"	, "	I'm Misha and these are Todd and Jessica. We are friends and work together. 	"	, "	Our office is not far. It is a nice place in the centre of the city.	"	, "	Todd’s clever. He is a chief accountant. His boss is nice to him.	"	, "	Jessica is a manager and clever too. She is waiting for a promotion.	"	, "	I live with my parents. Jessica and Todd live together, they are a couple.	"	, "	We often have parties. You’ll never see us after 7 at the office.	"	, "	We work full time but not long hours. We have a good salary.	"	, "	Dave's over there. He's chatting with Joan.	"	, "	He's waiting for the train now. His train arrives at midnight.	"	, "	Diana, can you take a photo of the class?	"	, "	What are you listening to? What is the name of this song?	"	, "	We read about the royal wedding in the newspaper.	"	, "	I can't come at the moment. I'm talking on the phone.	"	, "	Ask your teacher about the pronunciation of this word.	"	, "	When I'm on holiday, I never think about work.	"	,];
let ru = ["	Он гораздо умнее, чем думает его жена.	"	, "	Она хотела проводить меньше времени на работе.	"	, "	Тебе следует ехать на автобусе — это самый легкий способ добраться туда.	"	, "	Лиза самая младшая ученица  в её классе, но она самая умная.	"	, "	Где находится ближайшая автобусная остановка?	"	, "	Где я могу найти ближайшую пекарню?	"	, "	Как далеко до железнодорожного вокзала?	"	, "	Сколько времени займет добраться туда?	"	, "	Не могли бы вы указать направление до ближайшей автобусной остановки?	"	, "	Поверните налево на Лейк-роуд. Пройдите мимо банка.	"	, "	Идите прямо, а затем поверните направо на перекрестке.	"	, "	На углу улицы вы увидите красное здание.	"	, "	Идите вперед, a затем поверните направо на светофоре.	"	, "	Пешеходная улица далеко отсюда.	"	, "	Продолжайте идти по этой улице, пока не увидите банк.	"	, "	Поверните налево на углу. Затем идите прямо минут пять.	"	, "	Судя по карте, он должен быть где-то здесь.	"	, "	Извините, я не знаю. Я не местный.	"	, "	Обувной магазин находится напротив спортивного магазина.	"	, "	Пекарня находится между химчисткой и мясной лавкой.	"	, "	Газетный киоск находится недалеко от парикмахерской.	"	, "	Когда вы доберетесь до моста, вы увидите это здание.	"	, "	Я ищу старый мост.  Этот мост находится далеко отсюда?	"	, "	До станции две мили. Это самый короткий путь.	"	, "	До супермаркета 1 километр. Вы не можете пропустить это.	"	, "	Это в 500 метрах отсюда, в конце дороге.	"	, "	Когда я приезжаю в другую страну, я стараюсь немного выучить язык.	"	, "	Я посетил семь стран на данный момент.	"	, "	Ты когда-нибудь был в Японии?	"	, "	Ей нравится путешествовать по Европе.	"	, "	К сожалению, я никогда не был в Европе.	"	, "	Лучший способ исследовать остров — арендовать автомобиль.	"	, "	Президент Украины Владимир Зеленский отверг предложения убежища из Европы.	"	, "	Это моя сумка. Не трогай эти ножницы. Положите их обратно.	"	, "	Можешь порекомендовать мне фильм ужасов на ночь?	"	, "	Он порекомендовал хороший фильм. Я просмотрел его несколько раз.	"	, "	Мне понравился этот фильм. Можеim порекомендовать еще один?	"	, "	Как насчет Общества Мертвых поэтов? Я думаю, тебе бы это понравилось.	"	, "	Я не очень люблю мюзиклы. Кроме того, я уже видел этот фильм.	"	, "	Как долго твоя сестра живет в Лондоне?	"	, "	Что ты делаешь в свободное время? Расскажи мне об этом.	"	, "	Я Миша, а это Тод и Джессика. Мы друзья и работаем вместе.	"	, "	Наш офис недалеко. Это приятное место в центре города.	"	, "	Тод умный. Он главный бухгалтер. Его начальник хорошо к нему относится.	"	, "	Джессика менеджер и тоже умная. Она ждет повышения.	"	, "	Я живу с родителями. Джессика и Тод живут вместе, они пара.	"	, "	У нас часто вечеринки. Вы никогда не увидите нас в офисе после 7 вечера.	"	, "	Мы работаем на полную ставку, но без переработок. У нас хорошая зарплата.	"	, "	Дэйв там. Он болтает с Джоан.	"	, "	Он ждет поезд сейчас. Его поезд прибывает в полночь.	"	, "	Диана, можешь сфотографировать класс?	"	, "	Что ты слушаешь? Какое название у этой песни?	"	, "	Мы читали о королевской свадьбе в газете.	"	, "	Я не могу прийти в данный момент. Я говорю по телефону.	"	, "	Спросите учителя о произношении этого слова.	"	, "	Когда я в отпуске, я никогда не думаю о работе.	"	,];

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