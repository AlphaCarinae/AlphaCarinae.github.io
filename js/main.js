console.log('js connected');

$(document).ready(function() {

//scroll smoothly to the next section
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'swing');
  });

  //make the vertical bar full page (instead of fill window)
  let height = $(document).height();
  $(".vertical").css({height: height +'px'});
})
