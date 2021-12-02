var eng = ["I seldom find any time for reading.", "The car stopped and the driver got out.", "We stayed at home and watched television.", "I bought a newspaper but did't read it.", "It was too hot, so I opened the window.", "They havent't got a key, so they can't get into the house.", "The water wasn't clean, so we didn't go swimming.", "They like films, so they often go to the cinema.", "I opened the window because it was too hot.", "Maybe your uncle can help you to find a job.", "They can't get into the house because they haven't got a key.", "He's hungry because he didn't have breakfst.", "We didn't go swimming because the water wasn't clean.", "I like Carol, so I invite her to my party.", "I like Carol, because she's a nice person.", "We didn't go uot last night because of the rain.", "The door was open, so we walked in.", "Fred didn’t go to work because he was ill.", "Are you free tonight? How about meeting at half past six?", "What would you like to do this afternoon? How about going to a café?", "May be we can have lunch together? What time's good for you?", "I try to call my parents at least once a week.", "He is a pretty awful driver. His car crashed into a lamp post.", "That's awful. Of course everyone else thought it was hilarious!", "What a shame we missed the wedding.", "Everywhere we went, people were friendly.", "The car's been standing in the garage for weeks.", "I think she went out onto the balcony.", "Her office is at the end of the hall.", "The kitchen is directly below her bedroom.", "The dining room looks out onto a pretty garden.", "The house comprises two bedrooms, a kitchen, and a living room.", "The stairs lead to the roof. The whole city is visible from the roof.", "The living room also does duty as a home office.", "We sold a two-bedroom apartment.", "I didn't hear the telephone, I was scrubbing out the bathroom.", "I’d like to rent an apartment with spacious roof terrace.", "It's a nice house but it hasn't got a garden.", "Leave your bags in the hall and go upstairs.", "She went downstairs to the kitchen.",];
var ru = ["Я купил газету, но не читал её.", "Было слишком жарко, поэтому я открыл окно.", "У них нет ключа, поэтому они не могут попасть в дом.", "Вода не была чистой, поэтому мы не пошли купаться.", "Они любят фильмы, поэтому они часто ходят в кино.", "Я открыл окно потому что было слишком жарко.", "Может быть, твой дядя может помочь тебе найти работу.", "Они не могут попасть в дом потому что у них нет ключа.", "Он голоден, потому что он не завтракал.", "Мы не пошли купаться потому что вода не была чистой.", "Мне нравится Кэрол, поэтому я пригласил её на мою вечеринку.", "Мне нравится Кэрол, потому что она чудесный человек.", "Мы не пошли гулять прошлой ночью из-за дождя.", "Дверь была открыта, поэтому мы вошли внутрь.", "Фред не пошёл на работу, потому что был болен.", "Ты свободен сегодня вечером? Как насчет встречи в половине седьмого?", "Чем бы ты хотел заняться сегодня днём? Как насчет того, чтобы пойти в кафе?", "Может, мы вместе пообедаем? В какое время вам удобно?", "Я стараюсь звонить родителям, по крайней мере, раз в неделю.", "Он довольно ужасный водитель. Eго машина врезалась в фонарный столб.", "Это ужасно. Конечно, все остальные думали, что это было весело!", "Как жаль, что мы пропустили свадьбу.", "Везде, где мы были, люди были очень дружелюбными.", "Автомобиль стоит в гараже уже несколько недель.", "Я думаю, она вышла на балкон.", "Её кабинет — в конце коридора.", "Кухня располагается прямо под её спальней.", "Из окна столовой открывается вид на прекрасный сад.", "Дом состоит из двух спален, кухни и гостиной.", "Лестница ведёт на крышу. С крыши видно весь город.", "Гостиная также выполняет обязанности кабинета.", "Мы снимаем квартиру с двумя спальнями.", "Я не слышала телефонного звонка, я чистила ванну.", "Я бы хотел арендовать квартиру с просторной террасой на крыше.", "Это чудесный дом, но у него нет сада.", "Оставьте сумки в прихожей и поднимитесь по лестнице.", "Она спустилась по лестнице на кухню.",];

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