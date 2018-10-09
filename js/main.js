console.log('js connected');

$(document).ready(function() {


  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    console.log(this);
    console.log($($(this).attr('href')).offset().top);
    $('html').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'swing');
  });
})
