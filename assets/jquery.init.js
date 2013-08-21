$(document).ready(function() {

  // Animations on the business page
  
  $('.business img').each(function(index) {
    $(this).animate({ backgroundColor: "olive" }, "slow");
  });
  
  
  // Scrolling on the business page
  
  $('.business #header nav li').click(function() {
    var index = $(this).index() + 1;
    
    var slide = $('.business section:nth-child(' + index + ')');
    $("html, body").animate({ scrollTop: slide.offset().top }, "slow");
    
    $('.business #header nav li').removeClass('active');
    $(this).addClass('active');
    
    return false;
  });
  
  
  
  
  // Scrolling on the frontpage

  // Scroll to features
  $('#intro form input').click(function() {
    $("html, body").animate({ scrollTop: $('#features').offset().top }, "slow");
    return false;
  });


});
