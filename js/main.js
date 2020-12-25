'use strict';

(function($){
	$(document).ready(function() {
		
		// Slick slider
		
		$('.slider').slick({
		centerMode: true,
		prevArrow: '<div class="slider-prev">&larr;</div>',
		nextArrow: '<div class="slider-next">&rarr;</div>',
		appendArrows: $('.slider-arrows'),
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
			},
			{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
			}
		]
		});
		
	});
})(jQuery);
