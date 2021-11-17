var eng = ["The movie contains a large number of violent scenes.", "I am going to visit my godfather.", "I want to visit the homeland of our ancestors.", "He has got four children – two sons and two daughters.", "I sat by the ocean and watched the marvelous sunset.", "As I am free today, we can meet with you.", "She bought this suitcase because they are going on holiday.", "There are some special traditions in my family.", "She told him to stay away from that rather dysfunctional family.", "I don't recognize the man in the photo.", "The store is located across the street next to the bank.", "When I was a kid, I went fishing with my brother every summer.", "You have to send wedding invitations to your relatives.", "The kids played outside and didn’t hear their nanny.", "My nephew spends all his spare time in front of TV.", "My aunt wills her money to charity.", "This shot acquaintance may grow to strong friendship.", "They shouldn’t have broken up. They are so right for each other.", "Elizabeth is my friend. We like to spend time together.", "He has got some friends in London.  He visits them every month.", "She hasn't got a dog and a cat, but she has got a parrot.", "He took the box from the shelf and brought it to the table.", "I am glad that you came. Do you like it here?", "He’s busy right now. Could you please call again later?", "As far as I know, smoking here is prohibited.", "Young people under 21 are prohibited to buy alcohol in the US.", "They are hardly ever wrong. Time is always against us.", "What's going on? Does he always act like this?", "I have always lived in New York and have never been to Paris.", "I can seldom find any time for reading.", "Sometimes I forget that this is all a dream.", "James usually forgets what he promised.", "Are you going to James's party? We will have a great time.", "Be careful. Don't step on the cat's tail.", "Diamonds are a girl's best friend.", "It's illegal and could endanger other people's lives.", "Why does Kate’s sister look so sad?",];
var ru = ["Фильм содержит большое количество сцен насилия.", "Я собираюсь навестить своего крестного отца.", "Я хочу посетить родину наших предков.", "У него четверо детей: два сына и две дочери.", "Я сидел рядом с океаном и наблюдал за чудесным закатом.", "Так как я сегодня свободен, мы с тобой можем встретиться.", "Она купила этот чемодан потому что они едут в отпуск.", "В моей семье есть несколько особых традиций.", "Она сказала ему держаться подальше от той неблагополучной семьи.", "Я не узнаю человека на фотографии.", "Магазин находится через дорогу рядом с банком.", "Когда я был ребёнком, мы с братом ходили на рыбалку каждое лето.", "Ты должен отправить приглашение на свадьбу своим родственникам.", "Дети играли на улице и не слышали свою няню.", "Мой племянник проводит всё своё свободное время перед телевизором.", "Моя тётя завещает деньги на благотворительность.", "Это короткое знакомство может вырасти до крепкой дружбы.", "Им не следовало расставаться. Они так подходят друг другу.", "Элизабет - мой друг. Мы любим проводить время вместе.", "У него есть несколько друзей в Лондоне. Он навещает их каждый месяц", "У нее нет собаки и кошки, но есть попугай.", "Он взял коробку с полки и перенес ее на стол.", "Я рад, что вы пришли. Тебе здесь нравится,", "В данный момент он занят. Не могли бы вы перезвонить попозже?", "Насколько я знаю, курить здесь запрещено.", "В США молодым людям до 21 года запрежено покупать алкоголь.", "Они почти никогда не ошибаются. Время всегда против нас.", "Что происходить? Он всегда себя так ведёт?", "Я всегда жил в Нью-Йорке и никогда не был в Париже.", "Я редко могу найти время на чтение.", "Иногда я забываю, что всё это сон.", "Джеймс обычно забывает о том, что обещал.", "Ты идёшь на вечеринку Джеймса? Мы отлично проведём время.", "Будь осторожен. Не наступи на кошкин хвост.", "Лучшие друзья девушки это брилианты.", "Это незаконно и может подвергнуть опасности жизни других людей.", "Почему сестра Кейт такая грустная?",];

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