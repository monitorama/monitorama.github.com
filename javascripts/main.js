
$('header ul li').on('click', 'a', function() {
  var sid = ($(this).attr('id'));
  $('section').css('display', 'none').css('height', '0')
  $('header ul li a').removeClass('active');
  $('section.' + sid).css('display', 'block').css('height', 'auto')
  $(this).addClass('active');
  return false;
});

for (var i in speakers) {
  $('section.speakers ul').append('<li class="speaker"><img src="http://www.gravatar.com/avatar/' + speakers[i].hash + '" /><span class="name">' + speakers[i].name + '</span><span class="twitter"><a href="https://twitter.com/' + speakers[i].twitter + '" target="_new">&#64;' + speakers[i].twitter + '</a></span><p class="bio">' + speakers[i].bio + '</p></li>');
}
