 $(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
			$('.menu').style='#000'
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});

});
 

 