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
  // console.log($windowHeight);
  var viewsHeight = getViewsHeight();
  // console.log(viewsHeight);
  viewsHeight = viewsHeight.map(height => {
    return height <= $windowHeight ? 0 : height;
  });
  // console.log(viewsHeight);
  $('.mainbag').viewScroller({
    useScrollbar: true,
    changeWhenAnim: false,
    viewsHeight: viewsHeight,
    timeToFit: 1e9
  });
}

$(document).ready(function() {
  setViewScroller();
});
