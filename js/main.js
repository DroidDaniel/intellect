$(document).ready(function(){
    ////////////////Navbar mobile menu toggle animation
    $(".navmenu-toggle").click(function(){
        $(".navmenu-toggle").toggleClass("open");
        $(".menu").toggleClass("nav-width");
        $(".nav__wrapper #menu-header-menu li a").toggleClass("nav-li--fade-in");
        $("body").toggleClass("no-scroll nav__wrapper__overlay");
    });
    ////////////////Form input field label animation
    $('.form-input').focus(function(){
        $(this).parents('.form-group').addClass('focused');
        $(this).removeClass('form_error_class');  
      });
      
      $('.form-input').blur(function(){
        var inputValue = $(this).val();
        if ( inputValue == "" ) {
          $(this).removeClass('filled');
          $(this).parents('.form-group').removeClass('focused');  
        } else {
          $(this).addClass('filled');
        }
      })  

  });


  document.getElementById("sub").addEventListener("click", validateEmail);

  function validateEmail(){

    //Name field
    var nameField = document.getElementById("username");
    if ( nameField.value == "" ) {
        nameField.classList.add("form_error_class");
    }
    else{
        console.log("success")
    }

    //email field
    var emailField = document.getElementById("useremail");
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField.value) == false){
        emailField.classList.add("form_error_class");
    }
    else{
        console.log("success")
    }

    //message field
    var messageField = document.getElementById("usermessage");
    if ( messageField.value == "" ) {
        messageField.classList.add("form_error_class");
    }
    else{
        console.log("success")
    }
}