
$('header ul li').on('click', 'a', function() {
  var sid = ($(this).attr('id'));
  $('section').css('display', 'none').css('height', '0');
  $('section.' + sid).css('display', 'block').css('height', 'auto');
  return false;
});

for (var i in speakers) {
  //$('section.speakers ul').append('<li class="speaker"><img src="http://www.gravatar.com/avatar/' + speakers[i].hash + '" />' + speakers[i].name + '</li>');
  $('section.speakers ul').append('<li class="speaker">' + speakers[i].name + '</li>');
}
