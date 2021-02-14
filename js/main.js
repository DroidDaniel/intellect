////////////////loader animation
$(window).load(function() {
	$('#overlay').fadeOut();
});
$(document).ready(function() {
	////////////////Navbar mobile menu toggle animation
	$(".navmenu-toggle").click(function() {
		$(".navmenu-toggle").toggleClass("open");
		$(".menu").toggleClass("nav-width");
		$(".nav__wrapper #menu-header-menu li a").toggleClass("nav-li--fade-in");
		$("body").toggleClass("no-scroll nav__wrapper__overlay");
	});
	////////////////Navbar mobile menu sidebar animation
	if($(window).width() <= 1100) {
		$(".nav__wrapper #menu-header-menu li a").click(function() {
			$(".nav__wrapper #menu-header-menu li a").toggleClass("nav-li--fade-in");
			$(".menu").removeClass("nav-width");
			$(".navmenu-toggle").removeClass("open");
			$("body").removeClass("no-scroll nav__wrapper__overlay");
		});
	}
	////////////////Add active class to navbar menu links
	$(document).on("scroll", onScroll);
	$('#menu-center ul li').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('#useremail').blur(function() {
		$("#useremail").css("border", "1px solid #00a651");
		$(".form_error_msg_email").css({
			"opacity": "0",
			"top": "10px"
		});
	});
	////////////////body overlay animation
	$(window).resize(function() {
		if($(window).width() > 1100) {
			$("body").removeClass("no-scroll nav__wrapper__overlay");
		}
	});
	////////////////Form input field label animation
	$('.form-input').focus(function() {
		$(this).parents('.form-group').addClass('focused');
		$(this).removeClass('form_error_class');
	});
	$('.form-input').blur(function() {
			var inputValue = $(this).val();
			if(inputValue == "") {
				$(this).removeClass('filled');
				$(this).parents('.form-group').removeClass('focused');
			} else {
				$(this).addClass('filled');
			}
		})
		///////Conatct Form validation
	document.getElementById("sub-value").addEventListener("click", validateForm);

	function validateForm() {
		//Name field
		var nameField = document.getElementById("username");
		if(nameField.value == "") {
			nameField.classList.add("form_error_class");
		} else {
			nameField.classList.remove("form_error_class");
		}
		//email field
		var emailField = document.getElementById("useremail");
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var emailValue = reg.test(emailField.value);
		if(emailValue == false) {
			$("#useremail").css("border", "1px solid #dd0735");
			$(".form_error_msg_email").css({
				"opacity": "1",
				"top": "-12px"
			});
		} else {
			$("#useremail").css("border", "solid 1px #00a651");
			$(".form_error_msg_email").css({
				"opacity": "0",
				"top": "10px"
			});
		}
		//message field
		var messageField = document.getElementById("usermessage");
		if(messageField.value == "") {
			messageField.classList.add("form_error_class");
		} else {
			emailField.classList.remove("form_error_class");
		}
		return false;
	}
    var bottomPos = $(window).scrollTop() + $(window).height()
    console.log(bottomPos);
});
////////////////Add active class to navbar menu links in scroll
function onScroll(event) {
	var scrollPos = $(document).scrollTop() + 100;
	$('#menu-center ul li a').each(function() {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if(refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('#menu-center ul li a').removeClass("active");
			currLink.addClass("active");
		} else {
			currLink.removeClass("active");
		}
	});
}
////////////////Scroll to top animation
$(document).on("scroll", function() {
	if($(document).scrollTop() > 180) {
		$(".nav__wrapper").addClass("shrink");
	} else {
		$(".nav__wrapper").removeClass("shrink");
	}
	if($(this).scrollTop() > 1300) {
		$('#back2Top').fadeIn();
	} else {
		$('#back2Top').fadeOut();
	}
});
$("#back2Top").click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 800);
});