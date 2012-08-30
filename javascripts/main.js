console.log('This would be the main JS file.');

$('header ul li').on('click', 'a', function() {
  var sid = ($(this).attr('id'));
  //console.log(section);
  $('section').css('visibility', 'hidden').css('height', '0');
  $('section#' + sid).css('visibility', 'visible').css('height', 'auto');
  return false;
});
