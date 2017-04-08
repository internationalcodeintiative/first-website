$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});

$(document).ready(function(){
    $('#scroller').slick({
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	arrows: false,
    });
});
