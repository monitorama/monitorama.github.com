
// alert older MSIE browsers
if (($.browser.msie) && ($.browser.version <= 8.0)) {
  alert('Your browser does not support HTML5, which is required for this site.\nRedirecting you to the official Registration site now.')
  window.location.href = 'http://monitorama.eventbrite.com/';
}

// render view according to hash
var setSection = function(name) {
  $('section').css('display', 'none').css('height', '0')
  $('header ul li a').removeClass('active');
  $('section.' + name).css('display', 'block').css('height', 'auto')
  $('header ul li a#' + name).addClass('active');
  window.location.hash = name;
  window.scrollTo(0,0);
}

// load view by click from navbar
$('header ul li.internal').on('click', 'a', function() {
  var sid = ($(this).attr('id'));
  setSection(sid);
  return false;
});

// load view by click from footer
$('footer ul li.internal').on('click', 'a', function() {
  var sid = ($(this).attr('id'));
  setSection(sid);
  return false;
});

// load view by click from ribbon
$('.ribbon').on('click', 'a', function() {
  var sid = ($(this).attr('id'));
  setSection(sid);
  return false;
})

// load view by anchor
if (window.location.hash.length !== 0) {
  setSection(window.location.hash.replace('#', ''));
}
