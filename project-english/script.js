// var eng = ["Time after time", "It's not important", "I don't want to do this", "Next time lucky.","What is the matter?","It’s going to be all right.","So what?","Are you kidding?","Would you believe it?"];
// var ru = ["Раз за разом", "Это неважно", "Я не хочу этого делать", "Повезет в следующий раз","В чём дело?","Все будет хорошо.","Ну и что?","Ты шутишь?","Ты в это веришь?"];
var eng = ["I don't want to do this.", "I work as a manager.", "My friends and I work together.", "She and I are best friends.", "This is my company. It is big.", "Do you go to this restaurant? Is it good?", "David and Mike are students. They study economics.", "I like my new shoes. They are not expensive", "This is my new car. Do you like it?", "Look at thе cat! It is so nice.", "It is Tuesday. It is the 21st of August", "You need to hurry. It is almost five o’clock.", "How far is it to the station?", "It is two miles to the station.", "It’s 1 kilometer to the supermarket.", "Show him the office.", "Laura doesn’t call us very often.", "We don’t work with them.", "This letter is for you.", "Is she looking at us?", "It is my bag", "The camera is hers.", "The house is theirs.", "Give me your address.", "Do you know his friend?", "The car isn’t mine, it’s his", "This is a computer, and that is a laptop.", "These tickets are for you and those are for us", "I saw him yesterday.", "We liked their party", "I want to be there.", "I have read a great book.", "The girl singing on stage is my sister.", "She is reading a book to the children.", "It’s three kilometres between the villages.",];
var ru = ["Я не хочу делать это.", "Я работаю менеджером.", "Мы с друзьями работаем вместе.", "Мы с ней лучшие подруги.", "Это моя компания. Она крупная.", "Ты ходишь в этот ресторан? Он хороший?", "Дэвид и Майк студенты. Они изучают экономику.", "Мне нравятся мои новые туфли. Они не дорогие.", "Это моя новая машина. Тебе она нравится?", "Взгляни на кота! Он такой милый.", "Вторник. 21 августа.", "Тебе нужно поторопиться. Уже почти 5 часов.", "Как далеко до станции?", "До станции две мили.", "До супермаркета 1 километр.", "Покажите ему офис.", "Лаура не звонит нам очень часто.", "Мы с ними не работаем.", "Это письмо для вас.", "Она на нас смотрит?", "Это моя сумка.", "Камера — ее.", "Дом — их.", "Дай мне свой адрес.", "Ты знаешь его друга?", "Машина не моя, она его.", "Это компьютер, а то — ноутбук.", "Эти билеты для тебя, а те — для нас.", "Я видел его вчера.", "Нам понравилась их вечеринка.", "Я хочу быть там.", "Я прочитал замечательную книгу.", "Девушка, поющая на сцене — моя сестра.", "Она читает книгу детям.", "Расстояние между деревнями — три километра.",];


var rand = document.getElementById("rand");
var answer = document.getElementById("answer");

var engText = document.getElementById("eng_text");
var ruText = document.getElementById("ru_text");

var lng = eng.length;
var blessrng;

rand.onclick = function firstStep(){
    blessrng = Math.floor(Math.random() * lng);
    ruText.innerHTML = ru[blessrng];
    engText.innerHTML = "";
}

answer.onclick = function firstStep(){
    engText.innerHTML = eng[blessrng];
}