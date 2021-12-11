var eng = ["I try to call my parents at least once a week.", "Everywhere we went, people were friendly.", "The car's been standing in the garage for weeks.", "I think she went out onto the balcony.", "Her office is at the end of the hall.", "The kitchen is directly below her bedroom.", "Our dining room connects to the kitchen and living room.", "The house comprises two bedrooms, a kitchen, and a living room.", "The stairs lead to the roof. The whole city is visible from the roof.", "The living room also does duty as a home office.", "We sold a two-bedroom apartment.", "I didn't hear the telephone, I was scrubbing out the bathroom.", "I’d like to rent an apartment with spacious roof terrace.", "Leave your bags in the hall and go upstairs.", "She went downstairs to the kitchen.", "Coffee is one of the most popular beverages worldwide.", "I got up in the middle of the night because I couldn't sleep.", "I won't be at home this evening, so don't phone me.", "She doesn't like her job because she does the same thing all the time.", "He didn't have any money because he didn't have a job.", "If the lamp doesn’t work, try changing the light bulb.", "The stove doesn’t work. Put the soup in the microwave.", "There is a bottle of milk in the fridge.", "There are two bedrooms and one bathroom in my flat.", "There are four chairs and a big table in the dinning room.", "There wasn’t a wallet on my table. Was there anybody in my room?", "There isn't a balcony and a garage in my house.", "Are there many big trees in your garden?", "Let's go to the dining room, our lunch is getting cold.", "Is there a bottle on the table? How much water is there in the bottle?", "There is a bathroom behind you. There is a shower and a washbasin.", "There aren’t any letters at the post office for you.", "Are there any letters at the post office for me?", "There are some pens and a book in the bag.", "There is some tea in the cup. There is the cup next to the teapot.", "There is a free parking place between those two big cars.", "A woman in front of me pretended not to hear my question.", "Don’t keep money under your pillow, go to the bank!", "We rented a one-room apartment above the restaurant.", "There is a laptop on the windowsill. You can use it.", "There are so many different ways to learn English.",];
var ru = ["Я стараюсь звонить родителям, по крайней мере, раз в неделю.", "Везде, где мы были, люди были очень дружелюбными", "Автомобиль стоит в гараже уже несколько недель.", "Я думаю, она вышла на балкон.", "Её кабинет — в конце коридора.", "Кухня располагается прямо под её спальней.", "Наша столовая соединяется с кухней и гостинной.", "Дом состоит из двух спален, кухни и гостиной.", "Лестница ведёт на крышу. С крыши видно весь город.", "Гостиная также выполняет обязанности кабинета.", "Мы продали квартиру с двумя спальнями.", "Я не слышал телефонного звонка, я чистил ванну.", "Я бы хотел арендовать квартиру с просторной террасой на крыше.", "Оставьте сумки в прихожей и поднимитесь по лестнице.", "Она спустилась по лестнице на кухню.", "Кофе — это один из самых популярных напитков во всем мире.", "Я встал среди ночи, потому что я не мог уснуть.", "Меня не будет дома этим вечером, поэтому не звони мне.", "Она не любит свою работу, потому что она делает одно и тоже всё время.", "У него не было никаких денег, потому что не было работы.", "Если светильник не работает, попробуйте заменить лампочку.", "Плита не работает. Поставь суп в микроволновку.", "В холодильнике есть бутылка молока.", "В моей квартире две спальни и одна ванная комната.", "В столовой четыре стула и большой стол.", "На моём столе не было кошелька. Был ли кто-то в моей комнате?", "В моем доме нет балкона и гаража.", "В твоём саду много больших деревьев?", "Пойдем в столовую, наш обед отсывает. ", "Есть ли на столе бутылка? Сколько воды в бутылке?", "За тобой ванная. Там есть душ и умывальник.", "На почте нет никаких писем для тебя.", "Есть ли на почте какие-то письма для меня?", "В сумке есть несколько ручек и книга.", "В чашке есть немного чая. Чашка стоит рядом с чайником.", "Есть свободное парковочное место между теми двумя большими машинами.", "Женщина впереди меня сделала вид, что не услышала мой вопрос.", "Не держи деньги под подушкой, иди в банк!", "Мы сняли однокомнатную квартиру над рестораном.", "На подоконнике есть ноутбук. Ты можешь использовать его.", "Есть так много разных способов выучить английский язык.",];

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