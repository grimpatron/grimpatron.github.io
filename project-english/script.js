var eng = ["She bought this suitcase because they are going on holiday.", "She told him to stay away from that rather dysfunctional family.", "The store is located across the street next to the bank.", "When I was a kid, I went fishing with my brother every summer.", "You have to send wedding invitations to your relatives.", "My nephew spends all his spare time in front of TV.", "This shot acquaintance may grow to strong friendship.", "They shouldn’t have broken up. They are so right for each other.", "He took the box from the shelf and brought it to the table.", "I am glad that you came. Do you like it here?", "He’s busy right now. Could you please call again later?", "Young people under 21 are prohibited to buy alcohol in the US.", "They are hardly ever wrong. Time is always against us.", "I have always lived in New York and have never been to Paris.", "I can seldom find any time for reading.", "Sometimes I forget that this is all a dream.", "James usually forgets what he promised.", "Are you going to James's party? We will have a great time.", "Be careful. Don't step on the cat's tail.", "Diamonds are a girl's best friend.", "It's illegal and could endanger other people's lives.", "Why does Kate’s sister look so sad?", "I want a new refrigerator, too, but I haven't got any money.", "There is a really good record shop just around the corner.", "Sure thing, just follow me. I'm heading there now.", "When I first met Sue, she had short hair.", "Jack is a businessman. He is talkative and travels a lot.", "The car stopped and the driver got out.", "We stayed at home and watched television.", "I bought a newspaper but did't read it.", "It's a nice house but it hasn't got a garden.", "Do you want to play tennis or are you too tired?", "It was too hot, so I opened the window.", "They havent't got a key, so they can't get into the house.", "The water wasn't clean, so we didn't go swimming.", "They like films, so they often go to the cinema.", "I opened the window because it was too hot.",];
var ru = ["Она купила этот чемодан потому что они едут в отпуск.", "Она сказала ему держаться подальше от той неблагополучной семьи.", "Магазин находится через дорогу рядом с банком.", "Когда я был ребёнком, мы с братом ходили на рыбалку каждое лето.", "Ты должен отправить приглашение на свадьбу своим родственникам.", "Мой племянник проводит всё своё свободное время перед телевизором.", "Это короткое знакомство может вырасти до крепкой дружбы.", "Им не следовало расставаться. Они так подходят друг другу.", "Он взял коробку с полки и перенес ее на стол.", "Я рад, что вы пришли. Тебе здесь нравится,", "Он сейчас занят. Не могли бы вы перезвонить попозже?", "В США молодым людям до 21 года запрежено покупать алкоголь.", "Они почти никогда не ошибаются. Время всегда против нас.", "Я всегда жил в Нью-Йорке и никогда не был в Париже.", "Я редко могу найти время на чтение.", "Иногда я забываю, что всё это сон.", "Джеймс обычно забывает о том, что обещал.", "Ты идёшь на вечеринку Джеймса? Мы отлично проведём время.", "Будь осторожен. Не наступи на кошкин хвост.", "Лучшие друзья девушки это брилианты.", "Это незаконно и может подвергнуть опасности жизни других людей.", "Почему сестра Кейт такая грустная?", "Я тоже хочу новый холодильник, но у меня нет денег.", "Здесь есть отличный музыкальный магазин прямо за углом.", "Разумеется, просто следуйте за мной. Я как раз туда направляюсь.", "Когда я в первый раз встретил Сью, у неё были короткие волосы.", "Джек - бизнесмен. Он разговорчивый и много путешествует.", "Машина остановилась и водитель вышел.", "Мы остались дома и смотрели телевизор.", "Я купил газету, но не читал её.", "Это чудесный дом, но у него нет сада.", "Ты хочешь сыграть в тенис или ты слишком устал?", "Было слишком жарко, поэтому я открыл окно.", "У них нет ключа, поэтому они не могут попасть в дом.", "Вода не была чистой, поэтому мы не пошли купатся.", "Они любят фильмы, поэтому они часто ходят в кино.", "Я открыл окно потомучто было слишком жарко.",];

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