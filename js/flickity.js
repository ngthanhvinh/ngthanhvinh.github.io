$(document).ready(function() {
	var $carousel = $(".carousel").flickity({
		// options
		contain: true,
		wrapAround: true
		// adaptiveHeight: true
	});

	// bind event listeners
	$carousel.flickity("resize");
	// $carousel.on("change.flickity", listener);
});

function listener() {}
