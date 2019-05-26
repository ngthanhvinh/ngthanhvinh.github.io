// Fix the navbar when the URL is changed
function activeNavbar() {
  $('#navbar-items a').removeClass('active');

  var links = $('#navbar-items a');
  var active = Boolean(false);

  $.each(links, function(key, va) {
    if (va.href === document.URL) {
      $(this).addClass('active');
      active = true;
    }
  });

  if (!active) {
    $(links[0]).addClass('active');
  }
}

// Fix the menu when the URL is changed
function activeMenu() {
  var links = $('#menu-normal div a');
  var active = Boolean(false);

  var disableSrc = 'assets/menu-disable.svg';
  var activeSrc = 'assets/menu-active.svg';

  $.each(links, function(key, va) {
    if (va.href === document.URL) {
      $(this)
        .children()
        .attr('src', activeSrc);
      active = true;
    } else {
      $(this)
        .children()
        .attr('src', disableSrc);
    }
  });

  if (!active) {
    $(links[0])
      .children()
      .attr('src', activeSrc);
  }
}

// Portrait Animation when the URL is changed to '#about'
async function portraitAnimation() {
  var portraitImg = $('.portrait-img');
  if (location.hash === '#about') {
    setTimeout(function() {
      portraitImg.css('opacity', '1');
    }, 500);
  } else {
    portraitImg.css('opacity', '0.3');
  }
}

// When location hash changes, run hashChangeHandler()
function hashChangeHandler() {
  portraitAnimation();
  activeNavbar();
  activeMenu();
}

$(hashChangeHandler);
window.onhashchange = hashChangeHandler;
