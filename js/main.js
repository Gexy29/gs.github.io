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



