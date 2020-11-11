$(function() {
	$('.works-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:false,
		navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
		startPosition: 1,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$('.contributor-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:false,
		navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
		// startPosition: 0,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
});

new WOW().init();

