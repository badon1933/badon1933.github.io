let top2 = $('#about').offset().top;
let top3 = $('#services').offset().top;
let top4 = $('#contact-us').offset().top;

$(document).scroll(function () {
  var scrollPos = $(document).scrollTop();
  console.log(scrollPos);
  if (scrollPos < top2) {
    $('.navbar').css('background-color', 'transparent');
    $('.nav-link').removeClass('active');
    $('#home-nav').addClass('active');
  } else {
    $('.navbar').css('background-color', '#545454');
    console.log(top2);
    if (scrollPos >= top2 && scrollPos < top3) {
      $('.nav-link').removeClass('active');
      $('#about-nav').addClass('active');
    } else if (scrollPos >= top3 && scrollPos < top4) {
      $('.nav-link').removeClass('active');
      $('#services-nav').addClass('active');
    } else {
      $('.nav-link').removeClass('active');
      $('#contact-nav').addClass('active');
    }
  }
});