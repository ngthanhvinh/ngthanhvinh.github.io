// Fix the navbar when the URL is changed
function activeNavbar() {
  $('#navbar-items a').removeClass('active');

  var links = $('#navbar-items a');
  var active = Boolean(false);

  $.each(links, function(key, va) {
    if (va.href === document.URL) {
      $(this).addClass('active');
      $(this).focus();
      active = true;
    }
  });

  if (!active) {
    $(links[0]).addClass('active');
  }
}

// When location hash changes, run hashChangeHandler()
function hashChangeHandler() {
  activeNavbar();
}

$(function() {
  hashChangeHandler();
  $(window)
    .bind('hashchange', function() {
      hashChangeHandler();
    })
    .trigger('hashchange');
});

setInterval(hashChangeHandler, 80);
