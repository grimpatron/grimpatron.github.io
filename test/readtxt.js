var myVar = 0;
// Создали промежуточный блок div#temp
var tempDiv = $('body').append($('<div/>').attr('id', 'temp')).find('#temp');
// Загрузили данные в этот блок
tempDiv.load("file.txt");
// Записали ответ в переменную
myVar = tempDiv.text();
// Удалили промежуточный блок
tempDiv.remove();

console.log(myVar); // Выведет 123456 (string)








// function getXmlHttp() {
//   var xmlhttp;
//   try {
//       xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
//   } catch (e) {
//       try {
//           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//       } catch (E) {
//           xmlhttp = false;
//       }
//   }
//   if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
//       xmlhttp = new XMLHttpRequest();
//   }
//   return xmlhttp;
// }

// (function () {
//   var xmlhttp = getXmlHttp();
//   xmlhttp.open('GET', 'file.txt', false);
//   xmlhttp.send(null);
//   if (xmlhttp.status == 200) {
//       var response = xmlhttp.responseText;
//       alert(response);
//   }
// })();
