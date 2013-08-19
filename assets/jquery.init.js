$(document).ready(function() {

  // Animations on the business page
  
  
  // First slide
  $('.business #slide-1 div').hide();
  $('.business #slide-1 div').each(function(index) {
    var div = $(this);
    
    switch(index) {
      case 0:
        var top = "+=50";
        var left = "+=50";
        break;
      case 1:
        var top = "-=100";
        var left = "+=50";
        break;
       case 2:
        var top = "+=30";
        var left = "+=100";
        break;
    }
    
    fly(div, top, left);
  }); 
  
  
  // Change device border color
  function borderColor(div, speed) {
    var color = "#77C8F5";
    
    div.animate({
      borderRightColor: color
    }, speed, function() {
      // Animation complete
    });
    
    div.animate({
      borderBottomColor: color
    }, speed, function() {
      // Animation complete
    });
    
    div.animate({
      borderLeftColor: color
    }, speed, function() {
      // Animation complete
    });
    
    div.animate({
      borderTopColor: color
    }, speed, function() {
      arrow(div, speed);
    });
  }
  borderColor($('.business #slide-1 div').first(), 500, '+');
  
  
  function arrow(div, speed) {
    div.addClass('highlight', speed);
    borderColor(div.next(), speed);
  }
  
  
  
  // Fly in devices
  function fly(div, top, left) {
    div.show();
    
    div.animate({
      opacity: 1,
      left: left,
      top: top
    }, 1000, function() {
      // Animation complete
    });
  }
 
  
  
  
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


  // Show testimonials
  $('#features nav').click(function() {
    $('#testimonials').slideToggle();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
  
  

});
