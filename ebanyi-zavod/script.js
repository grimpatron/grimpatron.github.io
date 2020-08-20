/* Пароль на страницы */
function Accept() {
  var pass = document.getElementById('pass').value;
  win = document.getElementById('pass-window');
  mask = document.getElementById('mask');
  if (pass == '228') {
    win.style.display = 'none';
    mask.style.display = 'none';
    wrapper.style.filter = "blur(0px)";
  } else { alert('Введенный Вами пароль неверен!'); }
}


if ( document.getElementsByClassName("accordion")) {
  colorize();
}

function colorize() {
  var sss = document.getElementsByClassName("accordion_trigger");
  var tog = document.getElementsByClassName("accordion_toggle");
  for (var i = 0; i < sss.length; i++) {
    var x = document.createElement("span");
    x.style.display = "inline-block";
    x.style.marginRight = "10px";
    switch (tog[i].id.slice(3, 5)) {
      case "70":
      case "71":
      case "81": console.log("\tБычара"); x.style.backgroundColor = "yellow"; break;
      case "A0":
      case "01":
      case "02":
      case "12":
      case "30":
      case "32":
      case "40":
      case "50": console.log("\tЕвро"); x.style.backgroundColor = "green"; break;
      case "16":
      case "17":
      case "25": console.log("\tСерийные"); x.style.backgroundColor = "blue"; break;
      case "09":
      case "34": console.log("\tДругие"); x.style.backgroundColor = "red"; break;
    }
    x.style.width = "25px";
    x.style.height = "25px";
    x.style.borderRadius = "50%";
    x.style.verticalAlign = "top";
    sss[i].insertBefore(x, sss[i].firstChild);
  }
}