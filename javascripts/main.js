
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

// boilerplate form handler
var formHandler = function (url) {
  return function () {
    var data = {};
    var parent = $(this).parent();
    var inputs = parent.find('.form-input');
    for (var i=0; i<inputs.length; i++) {
      data[inputs[i].name] = inputs[i].value;
    }
    var thanks = function (response) {
      parent.parent().parent().find('p, form, ul').css('display', 'none')
      parent.parent().removeClass('text-left').addClass('text-center');
      parent.parent().append('<span class="success">Thanks for your submission! Please check your inbox for a confirmation email.</span>');
    }
    $.post(url, data, thanks).fail(thanks);
    return false;
  }
}

// function to sort speakers by surname
function compare(a,b) {
  nameA = a.name.split(' ')
  lastNameA = a.simple_last_name || nameA[nameA.length - 1]
  nameB = b.name.split(' ')
  lastNameB = b.simple_last_name || nameB[nameB.length - 1]
  if (lastNameA < lastNameB)
    return -1;
  else if (lastNameA > lastNameB)
    return 1;
  else
    return 0;
}

// sort speakers
speakers = rawSpeakers.sort(compare)

// iterate through speakers
for (var i in speakers) {
  var image = '<img src="http://www.gravatar.com/avatar/' + speakers[i].hash + '" />';
  var name = '<span class="name">' + speakers[i].name;
  if (speakers[i].keynote == true) {
    name += ' - Keynote';
  }
  name += '</span>';
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
  var video = '';
  if (speakers[i].video.length > 0) {
    video = '<span class="video"><a href="' +
      speakers[i].video + '" target="_new"><i class="fa fa-video-camera"></i></a></span>';
  }
  var slides = '';
  if (speakers[i].slides.length > 0) {
    slides = '<span class="slides"><a href="' +
      speakers[i].slides + '" target="_new"><i class="fa fa-slideshare"></i></a></span>';
  }

  var bio = '<p class="bio">' + speakers[i].bio + '</p>';

  $('section.speakers ul').append('<li class="speaker">' + image + name + slides + video + twitter + github + bio + '</li>');

  // populate titles for schedule
  if (speakers[i].title.length > 0) {
    $('.schedule span.speaker:contains(' + speakers[i].name + ')').parent().find('h5').html(speakers[i].title);
  }

  // populate abstracts for schedule
  //if (speakers[i].abstract.length > 0) {
  //  $('.schedule span.speaker:contains(' + speakers[i].name + ')').parent().find('h5').html(speakers[i].abstract);
  //}

  // display abstracts on hover
  $('section.schedule').on('mouseenter', 'td.session', function() {
    $(this).children('span').removeClass('hidden');
  }).on('mouseleave', 'td.session', function() {
    $(this).children('span').addClass('hidden');
  });
}

// hide sponsors title and list if empty
if (sponsors.length === 0) {
  $($('.sponsors h4')[0]).addClass('hidden');
  $('.sponsors div.sponsors').addClass('hidden');
} else {
  $($('.sponsors h4')[0]).removeClass('hidden');
  $('.sponsors div.sponsors').removeClass('hidden');
}

// iterate through sponsors
for (var i in sponsors) {
  if (sponsors[i].name.length && sponsors[i].enabled && sponsors[i].url.length && sponsors[i].bio.length) {
    var width = sponsors[i].width || 200;
    $('section.sponsors div.sponsors').append(
      '<div class="sponsor">' +
        '<a href="' + sponsors[i].url + '" target="_blank">' + '<img src="images/logo_' + sponsors[i].name + '.png" width="' + width + '" /></a>' +
        sponsors[i].bio +
      '</div>'
    );

    $('div.marquee').append('<a href="' + sponsors[i].url + '" target="_blank">' + '<img src="images/logo_' + sponsors[i].name + '.png" /></a>');
  }
}
