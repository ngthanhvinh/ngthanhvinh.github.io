home = document.getElementsByClassName("home")[0];
navbar = document.getElementById("myNavbar");

const handleScroll = () => {
	const offset = home.offsetTop + home.offsetHeight;
	if (window.pageYOffset > offset - 200) {
		navbar.style.background = "rgba(28, 28, 29, 0.8)";
	} else {
		navbar.style.background = "rgba(0, 0, 0, 0)";
	}
};

window.addEventListener("load", handleScroll);
window.addEventListener("scroll", handleScroll);
