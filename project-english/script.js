var eng = ["Could you tell me the time, please? My watch is broken.", "What time is it? I’ve left my watch at home.", "What time is the next bus to Denver?", "How much is a single ticket to Dallas?", "Would you like a window or an aisle seat?", "The next rehearsal is on Friday evening.", "He’s starting his new job on Monday.", "Our house is on the other side of town.", "Could you tell me when we get to the university?", "Could you tell me where is the restroom?", "The movie contains a large number of violent scenes.", "I still don’t know some people in the office.", "Can we meet next week instead?", "This place is really nice. Do you come here a lot?", "I want to spend more time with you.", "I am going to visit my godfather.", "I want to visit the homeland of our ancestors.", "He has four children – two sons and two daughters.", "I sat by the ocean and watched the marvelous sunset.", "Grandfather decided to teach his grandson how to read and write.", "Only parents can teach children what is right and what is wrong.", "As I am free today, we can meet with you.", "She bought this suitcase because they are going on holiday.", "There are some special traditions in my family.", "She told him to stay away from that rather dysfunctional family.", "I don't recognize the man in the photo.", "The store is located across the street next to the bank.", "When I was a kid, I went fishing with my brother every summer.", "You have to send wedding invitations to your relatives.", "The kids played outside and didn’t hear their nanny.", "My nephew spends all his spare time in front of TV.", "My aunt wills her money to charity.", "This shot acquaintance may grow to strong friendship.", "They shouldn’t have broken up. They are so right for each other.", "Elizabeth is my friend. We like to spend time together.",];
var ru = ["Скажите, пожалуйста, сколько времени? Мои часы сломаны.", "Который сейчас час? Я забыл свои часы дома.", "Во сколько идет следующий автобус на Денвер?", "Сколько стоит билет в один конец до Далласа?", "Вы хотите сидеть у окна или в проходе?", "Следующая репетиция состоится в пятницу вечером.", "В понедельник он приступает к новой работе.", "Наш дом на противоположной стороне города.", "Не могли бы вы подсказать мне, когда мы доедем до университета?", "Не могли бы вы подсказать мне, где здесь туалет?", "Фильм содержит большое количество сцен насилия.", "Я все еще не знаю некоторых людей в офисе.", "Мы можем встретиться на следующей неделе?", "Это место действительно замечательное. Вы часто здесь бываете?", "Я хочу проводить больше времени с тобой.", "Я собираюсь навестить своего крестного отца.", "Я хочу посетить родину наших предков.", "У него четверо детей: два сына и две дочери.", "Я сидел рядом с океаном и наблюдал за чудесным закатом.", "Дедушка решил научить своего внука читать и писать.", "Только родители могут научить детей что хорошо и плохо.", "Так как я сегодня свободен, мы с тобой можем встретиться.", "Она купила этот чемодан потому что они едут в отпуск.", "В моей семье есть несколько особых традиций.", "Она сказала ему держаться подальше от той неблагополучной семьи.", "Я не узнаю человека на фотографии.", "Магазин находится через дорогу рядом с банком.", "Когда я был ребёнком, мы с братом ходили на рыбалку каждое лето.", "Ты должен отправить приглашение на свадьбу своим родственникам.", "Дети играли на улице и не слышали свою няню.", "Мой племянник проводит всё своё свободное время перед телевизором.", "Моя тётя завещает деньги на благотворительность.", "Это короткое знакомство может вырасти до крепкой дружбы.", "Им не следовало расставаться. Они так подходят друг другу.", "Элизабет - мой друг. Мы любим проводить время вместе.",];

var rand = document.getElementById("rand");
var answer = document.getElementById("answer");

var engText = document.getElementById("eng_text");
var ruText = document.getElementById("ru_text");

var lng = eng.length;
var rngNumber;
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