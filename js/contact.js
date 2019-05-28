var words = document.getElementsByClassName('contact-word');
var logos = document.getElementsByClassName('contact-logo');
var wordArray = [];
var currentWord = 0;
// var newWord = 0;
// var day = new Date();
// var currentTime = day.getTime();

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord(newWord) {
  if (currentWord === newWord) return;

  var cw = wordArray[currentWord];
  var nw = wordArray[newWord];

  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'contact-letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = newWord;
}

function animateLetterOut(cw, i) {
  cw[i].className = 'contact-letter out';
}

function animateLetterIn(nw, i) {
  nw[i].className = 'contact-letter in';
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'contact-letter';
    letter.innerHTML = content.charAt(i) === ' ' ? `&nbsp;` : content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

logosContainer = document.getElementById('contact-logos');

logosContainer.addEventListener('mouseleave', function() {
  changeWord(0);
});

for (let i = 0; i < logos.length; ++i) {
  logos[i].addEventListener('mouseenter', function() {
    logos[i].children[0].src =
      logos[i].children[0].src.slice(0, -4) + '-hover.svg';
    changeWord(i + 1);
  });
  logos[i].addEventListener('mouseleave', function() {
    logos[i].children[0].src = logos[i].children[0].src.slice(0, -10) + '.svg';
  });
}
