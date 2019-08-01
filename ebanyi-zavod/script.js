/* Пароль на страницы */
function Accept() {
    var pass = document.getElementById('pass').value;
            win  = document.getElementById('pass-window');
            mask = document.getElementById('mask');
    if (pass == '228') {
            win.style.display='none';
            mask.style.display='none';
            wrapper.style.filter="blur(0px)";
    } else { alert('Введенный Вами пароль неверен!'); }
}