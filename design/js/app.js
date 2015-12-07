$( document ).ready(function() {

$(document).foundation();

  $('.off-canvas-content').backstretch([
        "http://dl.dropbox.com/u/515046/www/outside.jpg"
      , "http://dl.dropbox.com/u/515046/www/garfield-interior.jpg"
      , "http://dl.dropbox.com/u/515046/www/cheers.jpg"
    ], {duration: 3000, fade: 750});

  var volume = $('.volume-btn');
  volume.on("click", function() {
    $(this).addClass('active');
  });
  $('body').click(function(e) {
      if ( !(
              $.contains(volume[0], e.target) ||
              volume.is(e.target)                 ||
              $('.js-callback-control').is(e.target)
          )
      ) {
         volume.removeClass('active');
      }
  });

});
