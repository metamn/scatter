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
        var left = "+=70";
        break;
       case 2:
        var top = "+=30";
        var left = "+=50";
        break;
    }
    
    fly(div, top, left);
  }); 
  
  
  // Fly in devices
  function fly(div, top, left) {
    div.show();
    
    div.animate({
      opacity: 1,
      left: left,
      top: top
    }, 1000, function() {
      div.children('span').animate({
        opacity: 1
      }, 3000, function() {
        // Animation complete
      });
    });
  }
 
  // Rotate device descriptions
  function rotate() {
    var div = $('.business #slide-1 div').first();
    var span = div.children('span');
    
    var position = div.next().children('span').position();
    
    span.animate({
      top: position.top,
      left: position.left
    }, 1000, function() {
      // 
    });
  }
  
  //rotate();
  
  
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
