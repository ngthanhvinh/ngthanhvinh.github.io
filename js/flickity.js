$(document).ready(function() {
	var $carousel = $(".carousel").flickity({
		// options
		contain: true,
		wrapAround: true,
		selectedAttraction: 0.01,
		friction: 0.15
		// adaptiveHeight: true
	});

	// bind event listeners
	$carousel.flickity("resize");
	// $carousel.on("change.flickity", listener);
});

function listener() {}
