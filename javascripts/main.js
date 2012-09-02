
// render view according to hash
var setSection = function(name) {
  console.log(name);
  $('section').css('display', 'none').css('height', '0')
  $('header ul li a').removeClass('active');
  $('section.' + name).css('display', 'block').css('height', 'auto')
  $('header ul li a#' + name).addClass('active');
  window.location.hash = name;
  window.scrollTo(0,0);
}

// load view by click
$('header ul li').on('click', 'a', function() {
  var sid = ($(this).attr('id'));
  setSection(sid);
  return false;
});

// load view by anchor
if (window.location.hash.length !== 0) {
  setSection(window.location.hash.replace('#', ''));
}

// populate speakers
for (var i in speakers) {
  $('section.speakers ul').append('<li class="speaker"><img src="http://www.gravatar.com/avatar/' + speakers[i].hash + '" /><span class="name">' + speakers[i].name + '</span><span class="twitter"><a href="https://twitter.com/' + speakers[i].twitter + '" target="_new">&#64;' + speakers[i].twitter + '</a></span><p class="bio">' + speakers[i].bio + '</p></li>');
}
