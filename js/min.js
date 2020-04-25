$(document).ready(function() {
 $(".dropdown-toggle").click(function() {
  $(".dropdown").slideToggle();
  $(".dropdown-toggle img").toggleClass('rotated');
 });

 $(".mb-menu").click(function() {
  $(".side-nav").css('left', 0);
 });


 $(".btn_cls").click(function() {
  $(".side-nav").css('left', -300);
 });


 $(".accordion").click(function() {
  $(".myBarinside1").animate({
   width: '24%'
  });

  $(".myBarinside2").animate({
   width: '58%'
  });

  $(".myBarinside3").animate({
   width: '76%'
  });


  $(".myBarinside4").animate({
   width: '17%'
  });


  $(".myBarinside5").animate({
   width: '49%'
  });
 });

});




$(document).ready(function() {
 $(".set > a").on("click", function() {
  if ($(this).hasClass("active")) {
   $(this).removeClass("active");
   $(this)
    .siblings(".content")
    .slideUp(200);
   $(".set > a i")
    .removeClass("fa-minus")
    .addClass("fa-plus");
  } else {
   $(".set > a i")
    .removeClass("fa-minus")
    .addClass("fa-plus");
   $(this)
    .find("i")
    .removeClass("fa-plus")
    .addClass("fa-minus");
   $(".set > a").removeClass("active");
   $(this).addClass("active");
   $(".content").slideUp(200);
   $(this)
    .siblings(".content")
    .slideDown(200);
  }
 });
});



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