$(document).ready(function() {

  // Show testimonials
  $('#features nav').click(function() {
    $('#testimonials').slideToggle();
    scrollBottom();
  });
  
    
  // Scroll to bottom
  function scrollBottom() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  }

});
