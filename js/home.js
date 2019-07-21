const astronaut = document.getElementsByClassName("astronaut")[0];

const speed = 0.045;
const radius = 16;

var step = 0;
var x = -radius;
var y = 0;

const changeCoordinate = () => {
	x = Math.floor(Math.cos(speed * step) * radius + radius);
	y = Math.floor(Math.sin(speed * step) * radius + radius);
	astronaut.style.left = `${x}px`;
	astronaut.style.bottom = `${y}px`;
	++step;
};

setInterval(changeCoordinate, 50);
