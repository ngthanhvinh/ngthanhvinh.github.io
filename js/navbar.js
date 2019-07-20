home = document.getElementById("home");
navbar = document.getElementById("myNavbar");

const handleScroll = () => {
	const offset = home.offsetTop + home.offsetHeight;
	if (window.pageYOffset > offset - 200) {
		navbar.style.background = "rgba(32, 35, 41, 0.8)";
	} else {
		navbar.style.background = "rgba(0, 0, 0, 0)";
	}
};

window.addEventListener("scroll", handleScroll);
