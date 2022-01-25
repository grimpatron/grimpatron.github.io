let calendarSheet = document.querySelector('#calendar-sheet');
let action = document.querySelector('#action-btn');
let dateAnswer = document.querySelector('#date-answer');
let dateMonth = document.querySelector('#date-month');
let dateNumber = document.querySelector('#date-number');
let dateYear = document.querySelector('#date-year');
let flag = false;
let valueDateMonth,
    valuedDteNumbers,
    valuedDteYear;

let numberUnits = ['one','two', 'three', "four", "five", "six", "seven", "eight", "nine", 'ten', "eleven", "twelve", "thirteen", "fourteen", "fifteen",
"sixteen", "seventeen", "eighteen", "nineteen"];
let numberDozens = ['twenty', 'thirty', "forty", "fifty", "sixty", "seventy", "eightty", "ninety"];
let numberСentury = ["nineteen", "two thousand"];

let monthEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthRus = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
let ordinalNumberNum = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th ", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th ", "28th", "29th", "30th", "31st"];
let ordinalNumbersEng = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth", "twenty-first", "twenty-second", "twenty-third", "twenty-fourth", "twenty-fifth", "twenty-sixth", "twenty-seventh", "twenty-eighth", "twenty-ninth", "thirtieth", "thirty-first"];
let ordinalNumbersRus = ["первый", "второй", "третий", "четвертый", "пятый", "шестой", "седьмой", "восьмой", "девятый", "десятый", "одиннадцатый", "двенадцатый", "тринадцатый", "четырнадцатый", "пятнадцатый", "шестнадцатый", "семнадцатый", "восемнадцатый", "девятнадцатый", "двадцатый", "двадцать первый", "двадцать второй", "двадцать третий", "двадцать четвертый", "двадцать пятый", "двадцать шестой", "двадцать седьмой", "двадцать восьмой", "двадцать девятый", "тринадцатый", "тридцать первый"];

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function yearAsAString() {
  let XXxx, xxXX, xxXx, xxxX;
  if ( /20../.test(valuedDteYear) ) {
    XXxx = 'two thousand';
  } else {
    XXxx = numberUnits[Math.floor(valuedDteYear / 100) - 1];
  }

  xxXX = valuedDteYear % 100;
  
  if (xxXX <=19 && xxXX >= 10) {
    xxXX = numberUnits[--xxXX];
  } 
  else if (xxXX < 10) {
    xxXx = " and ";
    xxxX = numberUnits[Math.floor(xxXX % 10 - 1)];
    xxXX = `${xxXx}${xxxX}`;
  } else if (xxXX > 19) {
    xxXx = numberDozens[Math.floor(xxXX / 10 - 2)];
    xxxX = "-" + numberUnits[Math.floor(xxXX % 10 - 1)];
    // if (/..0./.test(valuedDteYear)) { xxXx = "" }
    // if (/...0/.test(valuedDteYear)) { xxxX = "" }
    xxXX = `${xxXx}${xxxX}`;
  }


  console.log(XXxx, ":", xxXX, ":", xxXx, ":", xxxX);
  return `${XXxx} ${xxXX}`;
}

function dateAsAString() {
  return `The ${ordinalNumbersEng[valuedDteNumbers]} of ${valueDateMonth}, ${yearAsAString()}`;
}


action.addEventListener("click", () => {
  if (flag == false) {
    if (calendarSheet.style.opacity == "1") {
      calendarSheet.classList.add("animate__fadeOutUpBig");
    }
    setTimeout( anim, 100);
  } else {
    calendarSheet.classList.remove("animate__fadeOutUpBig");
    calendarSheet.classList.remove("animate__zoomIn");
    dateAnswer.innerHTML = dateAsAString();
    action.innerHTML = "Next date";
    flag = false;
  }
});

function anim(){
  calendarSheet.style.opacity = "1";
  calendarSheet.classList.add("animate__zoomIn");
  valuedDteNumbers = getRandomNumber(ordinalNumberNum.length);
  dateNumber.innerHTML = ordinalNumberNum[valuedDteNumbers];
  dateMonth.innerHTML = valueDateMonth = monthEng[getRandomNumber(monthEng.length)];
  dateYear.innerHTML = valuedDteYear = getRandomArbitrary(1880, 2030);
  action.innerHTML = "Answer";
  dateAnswer.innerHTML = "";
  flag = true;
}