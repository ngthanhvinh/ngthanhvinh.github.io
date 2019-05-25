function activeNav() {
  $('#navbar-items a').removeClass('active');

  var links = $('#navbar-items a');
  var active = Boolean(false);

  $.each(links, function(key, va) {
    if (va.href == document.URL) {
      $(this).addClass('active');
      active = true;
    }
  });

  if (!active) {
    $(links[0]).addClass('active');
  }
}

$(activeNav);
window.onhashchange = activeNav;
