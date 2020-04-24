$(document).ready(function(){
  $(".dropdown-toggle").click(function(){
    $(".dropdown").slideToggle();
  });
    
  $(".mb-menu").click(function(){
    $(".side-nav").css('left', 0);
  });


  $(".btn_cls").click(function(){
    $(".side-nav").css('left', -300);
  });

});




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem1 = document.getElementById("myBar1");
    var elem2 = document.getElementById("myBar2");
    var elem3 = document.getElementById("myBar3");
    var elem4 = document.getElementById("myBar4");



    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 76) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem1.style.width = width + "%";
        elem2.style.width = width + "%";
        elem3.style.width = width + "%";
        elem4.style.width = width + "%";


      }
    }
  }
}




