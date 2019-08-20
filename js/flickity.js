$(document).ready(function() {
	var $carousel = $(".carousel").flickity({
		// options
		// contain: true,
		wrapAround: true
	});

	// bind event listeners
	$carousel.flickity("resize");
});
