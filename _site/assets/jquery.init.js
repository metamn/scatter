$(document).ready(function() {

  // Animations on the business page
  
  
  // Second slide
  
  setInterval(function(){
    $('.business #slide-2 div').first().addClass('highlight', 2000, function() {
      $(this).removeClass('highlight', 2000);
    });
  }, 4000);
 
  
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
  function borderColor(div, speed, color) {
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
      arrow(div, speed, color);
    });
  }
  borderColor($('.business #slide-1 div').first(), 700, '#77C8F5');
  
  
  // Change arrow color
  function arrow(div, speed, color) {
    if (color == '#77C8F5') {
      div.addClass('highlight');
    } else {
      div.removeClass('highlight');
    }
  
    if (div.attr('id') == $('.business #slide-1 div').last().attr('id')) {
      d = $('.business #slide-1 div').first();
      if (color == '#77C8F5') {
        color = '#F2C7C4';
      } else {
        color = '#77C8F5';
      }
    } else {
      d = div.next();
    }
    
    borderColor(d, speed, color);
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
