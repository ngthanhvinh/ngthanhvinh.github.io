home = document.getElementsByClassName("home")[0];
upArrow = document.getElementsByClassName("up-arrow")[0];
navbar = document.getElementById("myNavbar");

const handleScroll = () => {
	const offsetY = home.offsetTop + home.offsetHeight;

	if (window.pageYOffset > Math.max(50, offsetY - 500)) {
		upArrow.style.visibility = "visible";
	} else {
		upArrow.style.visibility = "hidden";
	}
};

window.addEventListener("load", handleScroll);
window.addEventListener("scroll", handleScroll);
