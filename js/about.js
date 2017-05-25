$(function() {
    $('a[href*=#]').on('click', function(e) {
	e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});

var fadeIn = false;

$(document).ready(function() {
    if (!fadeIn) {
	/* Every time the window is scrolled ... */
	$(window).scroll( function(){

            /* Check the location of each desired element */
            $('.image').each( function(i){
		// $(this).fadeIn(1500).css("display", "inline-block");
		$(this).fadeIn(1000);
	    });

            $('.subtitle').each( function(i){
		// $(this).fadeIn(1500).css("display", "inline-block");
		$(this).fadeIn(3000);
	    });

	    $('.subsection').each( function(i){
		// $(this).fadeIn(1500).css("display", "inline-block");
		$(this).fadeIn(4000);
	    });


	});
	fadeIn = true;
    }
});
