$(function() {

	// open mobile menu
	$(".mobile_menu").click(function() {
		$(".home_header_wrap").slideToggle("fast");
		$(".home_header_bottom").toggleClass("active");
	});

	// equal height 
	
	$('.section_news_item .article').equalHeights();

	$('.section_about_item .article').equalHeights();
	$('.section_about_item h3').equalHeights();
	$('.section_benefits_item .article').equalHeights();


	//back to top button
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},500, "swing");
		return false;
	});


	$(window).scroll(function () {
		if ($(this).scrollTop() >= 300) {
			$(".scrollToTop").css("display", "flex");
		} else {
			$(".scrollToTop").hide();
		}
	});

	// equal height on resize 
	$(window).resize(function() {
		
		$('.section_about_item h3').css('height','auto');
		$('.section_about_item h3').equalHeights();

		$('.section_about_item .article').css('height','auto');
		$('.section_about_item .article').equalHeights(); 

		$('.section_benefits_item .article').css('height','auto');
		$('.section_benefits_item .article').equalHeights();

		$('.section_news_item .article').css('height','auto');
		$('.section_news_item .article').equalHeights();

	});

});
