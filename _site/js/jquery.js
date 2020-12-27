
$(document).ready(function(){
  $('#burger').click(function(){
    $(this).toggleClass('open');
    $('#nav-menu').toggleClass('hide');
  });

  $('.nav-menu a').click(function(){
    $('#mobile-menu').toggleClass('hide');

    $('#burger').toggleClass('open');

  });
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 90) {
      if (!$('.nav-bar').hasClass('navbar-scroll')) {
        $('.nav-bar').addClass('navbar-scroll');
      }
    } else {
      if ($('.nav-bar').hasClass('navbar-scroll')) {
        $('.nav-bar').removeClass('navbar-scroll');
      }
    }
    
  });

});
