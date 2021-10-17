// var eng = ["Time after time", "It's not important", "I don't want to do this", "Next time lucky.","What is the matter?","It’s going to be all right.","So what?","Are you kidding?","Would you believe it?"];
// var ru = ["Раз за разом", "Это неважно", "Я не хочу этого делать", "Повезет в следующий раз","В чём дело?","Все будет хорошо.","Ну и что?","Ты шутишь?","Ты в это веришь?"];
var eng = ["My friends and I work together.", "She and I are best friends.", "You need to hurry. It is almost five o’clock.", "Laura doesn’t call us very often.", "We don’t work with them.", "Is she looking at us?", "The camera is hers.", "The house is theirs.", "The car isn’t mine, it’s his", "This is a computer, and that is a laptop.", "These tickets are for you and those are for us", "We liked their party", "I want to be there.", "I have read a great book.", "The girl singing on stage is my sister.", "She is reading a book to the children.", "It’s three kilometres between the villages.", "What are you looking for?", "How long will it take to get there?", "How long will I have to wait?", "I’d like to place an order.", "I'm so sick of this cold weather!", "Yesterday I met Tom and his wife.", "It is cold outside, put on your coat.", "We go to the theatre every Saturday.", "You're the worst dancer I've ever seen.", "We're going all the way together", "Well, that explains it.", "What are you driving at? Do you think I'm stupid?", "This is Jim. He is a policeman and lives in New York.", "Each district of the city has the charm of its own.", "Whose turn is it to take out the trash?", "The cat played with its toy.",];
var ru = ["Мы с друзьями работаем вместе.", "Мы с ней лучшие подруги.", "Тебе нужно поторопиться. Уже почти 5 часов.", "Лаура не звонит нам очень часто.", "Мы с ними не работаем.", "Она на нас смотрит?", "Камера — ее.", "Дом — их.", "Машина не моя, она его.", "Это компьютер, а то — ноутбук.", "Эти билеты для тебя, а те — для нас.", "Нам понравилась их вечеринка.", "Я хочу быть там.", "Я прочитал замечательную книгу.", "Девушка, поющая на сцене — моя сестра.", "Она читает книгу детям.", "Расстояние между деревнями — три километра.", "Что вы ищете?", "Сколько времени займет добраться туда?", "Как долго мне придется ждать?", "Я хотел бы сделать заказ.", "Меня так достала эта холодная погода!", "Вчера я встретил Тома и его жену.", "На улице холодно, надень пальто.", "Мы ходим в театр каждую субботу.", "Ты худший танцор, которого я когда-либо видел.", "Мы вместе до самого конца.", "Ну это всё объясняет.", "К чему ты клонишь? Ты думаешь, что я тупой?", "Это Джим. Он полицейский и живет в Нью-Йорке.", "У каждого района города есть свое собственное очарование.", "Чья очередь выносить мусор?", "Кошка играла со своей игрушкой.",];


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