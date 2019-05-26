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

function activeNavigation() {
  activeNavbar();
  activeMenu();
}

$(activeNavigation);
window.onhashchange = activeNavigation;
