home = document.getElementsByClassName("home")[0];
upArrow = document.getElementsByClassName("up-arrow")[0];
navbar = document.getElementById("myNavbar");

const handleScroll = () => {
	const offsetY = home.offsetTop + home.offsetHeight;
	if (window.pageYOffset > offsetY - 200) {
		navbar.style.background = "rgba(28, 28, 29, 0.8)";
	} else {
		navbar.style.background = "rgba(0, 0, 0, 0)";
	}

	if (window.pageYOffset > Math.max(50, offsetY - 500)) {
		upArrow.style.visibility = "visible";
	} else {
		upArrow.style.visibility = "hidden";
	}
};

window.addEventListener("load", handleScroll);
window.addEventListener("scroll", handleScroll);
