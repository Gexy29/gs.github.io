function changeFunction () {
  var change = document.getElementById ("changebtn");
  if (change.innerHTML === "Показать все") {
    change.innerHTML = "Скрыть все";
    
  }
  else {
    change.innerHTML = "Показать все";
  }
}

jQuery('.lightzoom').lightzoom();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    // autoplay: true,
    autoplayTimeout: 2000,
    items: 3,
    margin: 20,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
    
    
  });
});

function send(event, php){
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
    json = JSON.parse(this.response); 
        console.log(json);
          
        
        if (json.result == "success") {
          // Если сообщение отправлено
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
      // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {alert("Ошибка отправки запроса");};
  req.send(new FormData(event.target));
  }


