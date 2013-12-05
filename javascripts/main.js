
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
$('header ul li').on('click', 'a', function() {
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

// boilerplate form handler
var formHandler = function (url) {
  return function () {
    var data = {};
    var parent = $(this).parent();
    var inputs = parent.find('input, textarea');
    for (var i=0; i<inputs.length; i++) {
      data[inputs[i].name] = inputs[i].value;
    }
    var thanks = function (response) {
      parent.parent().parent().find('p, form').css('display', 'none')
      parent.parent().removeClass('text-left').addClass('text-center');
      parent.parent().append('<span class="success">Thanks for your submission!</span>');
    }
    $.post(url, data, thanks).fail(thanks);
    return false;
  }
}

// submit CFP form
$('.cfp .signup form').on('click', 'a', formHandler('https://docs.google.com/a/dixongroup.net/spreadsheet/gform?key=0Aj7rpHx-u6YfdGpieUNwaXM5b3lqRFBVdTI2cjVlcXc'));

// iterate through speakers
for (var i in speakers) {
  var image = '<img src="http://www.gravatar.com/avatar/' + speakers[i].hash + '" />';
  var name = '<span class="name">' + speakers[i].name + '</span>';
  var github = '';
  if (speakers[i].github.length > 0) {
    github = '<span class="github"><a href="https://github.com/' +
      speakers[i].github + '" target="_new"><i class="fa fa-github-alt"></i></a></span>';
  }
  var twitter = '';
  if (speakers[i].twitter.length > 0) {
    twitter = '<span class="twitter"><a href="https://twitter.com/' +
      speakers[i].twitter + '" target="_new"><i class="fa fa-twitter"></i></a></span>';
  }
  var bio = '<p class="bio">' + speakers[i].bio + '</p>';
  var video = '';
  var slides = '';

  if (speakers[i].videos) {
    for (var j in speakers[i].videos) {
      video += '<iframe src="http://player.vimeo.com/video/' + speakers[i].videos[j] + '" width="500" height="375" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    }
  }

  if (speakers[i].slides) {
    for (var j in speakers[i].slides) {
      slides += '<span class="slides"><a href="' + speakers[i].slides[j] + '" target="_new">slides</a></span>';
    }
  }

  $('section.speakers ul').append('<li class="speaker">' + image + name + slides + twitter + github + bio + video + '</li>');

  // populate abstracts for schedule
  if (speakers[i].abstract.length > 0) {
    $('section.schedule td.session:contains(' + speakers[i].name + ')').append(
      '<span class="hidden abstract"><span class="name">' + speakers[i].name + '</span><hr />' + speakers[i].abstract + '</span>'
    );
  }

  // display abstracts on hover
  $('section.schedule').on('mouseenter', 'td.session', function() {
    $(this).children('span').removeClass('hidden');
  }).on('mouseleave', 'td.session', function() {
    $(this).children('span').addClass('hidden');
  });
}
