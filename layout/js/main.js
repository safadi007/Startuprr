$(document).ready(function(){
	// ADD Active to NAVBAR item
	$(".nav-link").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
		$("html , body").animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		},2000);
	});
	$('.num').counterUp({
	    delay: 10,
	    time: 1000
	});
})
