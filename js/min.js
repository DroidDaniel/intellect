$(document).ready(function() {
	// ////////////////Navbar toggle animation
	$(".play_vid").click(function() {
		$(".marvel__model").addClass("marvel__model_active");
		$(".marvel__model_content").addClass("marvel__model_content_active");
	});
	$(".close_ico").click(function() {
		$(".marvel__model").removeClass("marvel__model_active");
		$(".marvel__model_content").removeClass("marvel__model_content_active");
	});
	$(".marvel__navmenu_toggle").click(function() {
		$(".marvel__navmenu_toggle").toggleClass("nav-hasclass bar_black");
		$(".sidebar").toggleClass("active");
		$("body").toggleClass("nav__wrapper__overlay no-scroll");
	});
	///////signup Form validation
	document.getElementById("sub-value").addEventListener("click", validateForm);

	function validateForm() {
		//Name field
		var nameField = document.getElementById("username");
		if(nameField.value == "") {
			nameField.style.borderColor = "#dd0735";
		} else {
			nameField.style.borderColor = "#EBEBEB";
		}
		//email field
		var emailField = document.getElementById("useremail");
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var emailValue = reg.test(emailField.value);
		if(emailValue == false) {
			emailField.style.borderColor = "#dd0735";
		} else {
			emailField.style.borderColor = "#EBEBEB";
		}
		//Number field
		var numberField = document.getElementById("usernumber");
		if(numberField.value == "") {
			numberField.style.borderColor = "#dd0735";
		} else {
			numberField.style.borderColor = "#EBEBEB";
		}
		return false;
	}
    ///////Play popup video
	$('#play-video').on('click', function(e){
		e.preventDefault();
		$('#video-overlay').addClass('open');
		$("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
	  });
	  
	  $('.video-overlay, .video-overlay-close').on('click', function(e){
		e.preventDefault();
		close_video();
	  });
	  
	  $(document).keyup(function(e){
		if(e.keyCode === 27) { close_video(); }
	  });
	  
	  function close_video() {
		$('.video-overlay.open').removeClass('open').find('iframe').remove();
	  };
});

////////////////Scroll to top animation
$(document).on("scroll", function() {
	if($(document).scrollTop() > 50) {
		$(".fixed_nav").addClass("shrink");
	} else {
		$(".fixed_nav").removeClass("shrink");
	}
});
