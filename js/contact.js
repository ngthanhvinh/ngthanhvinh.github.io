var words = document.getElementsByClassName("contact-word");
var logos = document.getElementsByClassName("contact-logo");
var wordArray = [];
var currentWord = 0;
var newWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
	splitLetters(words[i]);
}

function changeWord() {
	if (currentWord === newWord) return;

	var cw = wordArray[currentWord];
	var nw = wordArray[newWord];

	for (var i = 0; i < cw.length; i++) {
		animateLetterOut(cw, i);
	}

	for (var i = 0; i < nw.length; i++) {
		nw[i].className = "contact-letter behind";
		nw[0].parentElement.style.opacity = 1;
		animateLetterIn(nw, i);
	}

	currentWord = newWord;
}

function animateLetterOut(cw, i) {
	cw[i].className = "contact-letter out";
}

function animateLetterIn(nw, i) {
	setTimeout(function() {
		nw[i].className = "contact-letter in";
	}, 100);
}

function splitLetters(word) {
	var content = word.innerHTML;
	word.innerHTML = "";
	var letters = [];
	for (var i = 0; i < content.length; i++) {
		var letter = document.createElement("span");
		letter.className = "contact-letter";
		letter.innerHTML = content.charAt(i) === " " ? `&nbsp;` : content.charAt(i);
		word.appendChild(letter);
		letters.push(letter);
	}

	wordArray.push(letters);
}

logosContainer = document.getElementById("contact-logos");

logosContainer.addEventListener("mouseleave", function() {
	newWord = 0;
});

for (let i = 0; i < logos.length; ++i) {
	logos[i].addEventListener("mouseenter", function() {
		newWord = i + 1;
	});
}

setInterval(changeWord, 300);
