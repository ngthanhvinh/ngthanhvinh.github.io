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

function activeMenu() {
  var links = $('#navigation-normal div a');
  var active = Boolean(false);

  var disableSrc = 'assets/navigation-disable.svg';
  var activeSrc = 'assets/navigation-active.svg';

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

function activeNavigation() {
  activeNavbar();
  activeMenu();
}

$(activeNavigation);
window.onhashchange = activeNavigation;
