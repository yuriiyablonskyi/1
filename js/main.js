$(function() {

// header active effect
	$( '.header__link' ).click(function() {

		$( ".header__link" ).removeClass('active_link');
		$(this).toggleClass('active_link');
	});

// removes the standard appearance of links
	$('a').click(function(e) {

		e.preventDefault();
	});

// tabs
	$('.tabs__link').click(function() {

		$('.tabs__link').removeClass('tabs__link--active');
		$('.tabs__item').removeClass('tabs__item--active');
		$(this).addClass('tabs__link--active');
		$($(this).attr('href')).addClass('tabs__item--active');
	})
	$('.tabs__link:first').click();
	// burger menu 
	$('.burger').click(function() {
	$('.menu').toggleClass('active-menu');
	$(this).toggleClass('active-burger');
	});
	// floating header
	$(window).scroll(function() {

			if ($(this).scrollTop() > 800){
			$('.header').addClass('header__fixed');
			$('.intro').addClass('intro--mt');
			}
			else {
			$('.header').removeClass('header__fixed');
			$('.intro').removeClass('intro--mt');
			}
		});

		// скрол по сайту
		$('[data-nav]').on('click', function(event) {
				event.preventDefault();

				let elementId = $(this).data('nav');
				let elementOffset = $(elementId).offset().top;
				$('html, body').animate({
						scrollTop: elementOffset - 80
				}, 700);
		});

	// slider
	$('.slider-top__wrapper, .slider-bottom__wrapper').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-next.svg" alt=""></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	});

});
