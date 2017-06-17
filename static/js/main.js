$(document).ready(function(){
	colorize();

	var
		hejTouchingOffset = $(".hej-touching").offset().top,
		headHeight = $(".header").height(),
		imageHejHeight = $(".hej-touching").height(),
		headerImage = $('.header').css('background-image'),
		descriptionImages = $('.hej-description-steps').find('img'),
		descriptionImageHeight = $(descriptionImages[0]).height()
	 ;

	$(window).scroll(function() {
		if ($(window).scrollTop() > (headHeight)/2) {
			$(".header").css('marginTop', '-200px');
		} else {
			$(".header").css('marginTop', '0');
		}

		if($(window).scrollTop() > ($(descriptionImages[0]).offset().top) - (descriptionImageHeight)*3 ) {
			$(descriptionImages[0]).css('left', '0');
		} if($(window).scrollTop() > ($(descriptionImages[1]).offset().top) - (descriptionImageHeight)*3 ) {
			$(descriptionImages[1]).css('left', '0');
		} if($(window).scrollTop() > ($(descriptionImages[2]).offset().top) - (descriptionImageHeight)*3 ) {
			$(descriptionImages[2]).css('left', '0');
		}
	});
});


function colorize() {
	//** notice we are including jquery and the color plugin at
	//** http://code.jquery.com/color/jquery.color-2.1.0.js
	var scroll_pos = 0;
	var animation_begin_pos = 0;
	var animation_end_pos = 10000;
	var beginning_color = new $.Color( 'rgb(110,90,98)' );
	var ending_color = new $.Color( 'rgb(0,197,209)' ); ;
	$(document).scroll(function() {
			scroll_pos = $(this).scrollTop();
			if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) {
					var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
					var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
					var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
					var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
					var newColor = new $.Color( newRed, newGreen, newBlue );
					$('html').animate({ backgroundColor: newColor }, 0);
			} else if ( scroll_pos > animation_end_pos ) {
					 $('body').animate({ backgroundColor: ending_color }, 0);
			} else if ( scroll_pos < animation_begin_pos ) {
					 $('body').animate({ backgroundColor: beginning_color }, 0);
			} else { }
	});
}