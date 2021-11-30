var eng = ["He’s busy right now. Could you please call again later?", "I can seldom find any time for reading.", "James usually forgets what he promised.", "Are you going to James's party? We will have a great time.", "It's illegal and could endanger other people's lives.", "I want a new refrigerator, too, but I haven't got any money.", "Sure thing, just follow me. I'm heading there now.", "When I first met Sue, she had short hair.", "Jack is a businessman. He is talkative and travels a lot.", "The car stopped and the driver got out.", "We stayed at home and watched television.", "I bought a newspaper but did't read it.", "It's a nice house but it hasn't got a garden.", "Do you want to play tennis or are you too tired?", "It was too hot, so I opened the window.", "They havent't got a key, so they can't get into the house.", "The water wasn't clean, so we didn't go swimming.", "They like films, so they often go to the cinema.", "I opened the window because it was too hot.", "Maybe your uncle can help you to find a job.", "They can't get into the house because they haven't got a key.", "He's hungry because he didn't have breakfst.", "We didn't go swimming because the water wasn't clean.", "I like Carol, so I invite her to my party.", "I like Carol, because she's a nice person.", "We didn't go uot last night because of the rain.", "The door was open, so we walked in.", "Fred didn’t go to work because he was ill.", "Are you free tonight? How about meeting at half past six?", "What would you like to do this afternoon? How about going to a café?", "May be we can have lunch together? What time's good for you?", "I try to call my parents at least once a week.", "He is a pretty awful driver. His car crashed into a lamp post.", "That's awful. Of course everyone else thought it was hilarious!", "What a shame we missed the wedding.", "Everywhere we went, people were friendly.",];
var ru = ["Он сейчас занят. Не могли бы вы перезвонить попозже?", "Я редко могу найти время на чтение.", "Джеймс обычно забывает о том, что обещал.", "Ты идёшь на вечеринку Джеймса? Мы отлично проведём время.", "Это незаконно и может подвергнуть опасности жизни других людей.", "Я тоже хочу новый холодильник, но у меня нет денег.", "Разумеется, просто следуйте за мной. Я как раз туда направляюсь.", "Когда я в первый раз встретил Сью, у неё были короткие волосы.", "Джек - бизнесмен. Он разговорчивый и много путешествует.", "Машина остановилась, и водитель вышел.", "Мы остались дома и смотрели телевизор.", "Я купил газету, но не читал её.", "Это чудесный дом, но у него нет сада.", "Ты хочешь сыграть в тенис или ты слишком устал?", "Было слишком жарко, поэтому я открыл окно.", "У них нет ключа, поэтому они не могут попасть в дом.", "Вода не была чистой, поэтому мы не пошли купаться.", "Они любят фильмы, поэтому они часто ходят в кино.", "Я открыл окно потому что было слишком жарко.", "Может быть, твой дядя может помочь тебе найти работу.", "Они не могут попасть в дом потому что у них нет ключа.", "Он голоден, потому что он не завтракал.", "Мы не пошли купаться потому что вода не была чистой.", "Мне нравится Кэрол, поэтому я пригласил её на мою вечеринку.", "Мне нравится Кэрол, потому что она чудесный человек.", "Мы не пошли гулять прошлой ночью из-за дождя.", "Дверь была открыта, поэтому мы вошли внутрь.", "Фред не пошёл на работу, потому что был болен.", "Ты свободен сегодня вечером? Как насчет встречи в половине седьмого?", "Чем бы ты хотел заняться сегодня днём? Как насчет того, чтобы пойти в кафе?", "Может, мы вместе пообедаем? В какое время вам удобно?", "Я стараюсь звонить родителям, по крайней мере, раз в неделю.", "Он довольно ужасный водитель. Eго машина врезалась в фонарный столб.", "Это ужасно. Конечно, все остальные думали, что это было весело!", "Как жаль, что мы пропустили свадьбу.", "Везде, где мы были, люди были очень дружелюбными.",];

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