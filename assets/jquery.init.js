$(document).ready(function() {


  // Scroll to features
  $('#intro form input').click(function() {
    $("html, body").animate({ scrollTop: $('#features').offset().top }, "slow");
    return false;
  });

  // Show testimonials
  $('#features nav').click(function() {
    $('#testimonials').slideToggle();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
  
  

});
