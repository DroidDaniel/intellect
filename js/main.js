$(document).ready(function(){
    ////////////////Navbar mobile menu toggle animation
    $(".navmenu-toggle").click(function(){
        $(".navmenu-toggle").toggleClass("open");
        $(".menu").toggleClass("nav-width");
        $(".nav__wrapper #menu-header-menu li a").toggleClass("nav-li--fade-in");
        $("body").toggleClass("no-scroll nav__wrapper__overlay");
    });
    if ($(window).width() <= 1100) {
        $(".nav__wrapper #menu-header-menu li a").click(function(){
        $(".nav__wrapper #menu-header-menu li a").toggleClass("nav-li--fade-in");
        $(".menu").removeClass("nav-width");
        $(".navmenu-toggle").removeClass("open");
        $("body").removeClass("no-scroll nav__wrapper__overlay");
        });
     }

     $(window).resize(function(){
        if ($(window).width() > 1100) {
            $("body").removeClass("no-scroll nav__wrapper__overlay");
        }else{
            $(".navmenu-toggle").click(function(){
                $("body").addClass("no-scroll nav__wrapper__overlay");
            });
        }
        
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


  document.getElementById("sub").addEventListener("click", validateForm);

  function validateForm(){
    //Name field
    var nameField = document.getElementById("username");
    if ( nameField.value == "" ) {
        nameField.classList.add("form_error_class");
    }
    else{
        emailField.classList.remove("form_error_class");
    }

    //email field
    var emailField = document.getElementById("useremail");
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField.value) == false){
        emailField.classList.add("form_error_class");
    }
    else{
        emailField.classList.remove("form_error_class");
    }

    //message field
    var messageField = document.getElementById("usermessage");
    if ( messageField.value == "" ) {
        messageField.classList.add("form_error_class");
    }
    else{
        emailField.classList.remove("form_error_class");
    }
}

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('#menu-center ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 100;
    $('#menu-center ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}