const VIEWS = [
  '.home-container',
  '.about-container',
  '.projects-container',
  '.contact-container'
];

function getViewsHeight() {
  return VIEWS.map(view => $(view).outerHeight());
}

function setViewScroller(viewsHeight) {
  var $windowHeight = $(window).height();
  var viewsHeight = getViewsHeight();
  viewsHeight = viewsHeight.map(height => {
    return height <= $windowHeight ? 0 : height;
  });
  $('.mainbag').viewScroller({
    useScrollbar: true,
    changeWhenAnim: false,
    viewsHeight: viewsHeight,
    timeToFit: 2000
  });
}

$(document).ready(function() {
  setViewScroller();
  $(window).resize(setViewScroller);
});
