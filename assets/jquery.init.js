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
  
  
  function focus() {
    $('.business #slide-1 div span').each(function() {
      $(this).removeClass('highlight');
    });
    
    var index = Math.floor((Math.random()*3)+1); 
    var span = $('.business #slide-1 div:nth-of-type(' + index + ') span');
    span.addClass('highlight');
  }
  //var p = setInterval(focus, 2000);
  
  
  
  function connect(index) {
  
    index += 1;
    if (index == 4) {
      index = 1;
    } 
    
    var speed = 1000;
    
    var div = $('.business #slide-1 #animator');
    div.animate({
      borderLeftColor: '#F2C7C4',
      borderTopColor: '#F2C7C4',
      borderRightColor: '#F2C7C4',
      borderBottomColor: '#F2C7C4'
    }, speed/2, function () {
      //
    });
    
    switch(index) {
      case 1:
        div.animate({
          borderLeftColor: '#77C8F5'
        }, speed, function () {
          connect(index);
        });
        break;
      case 2:
        div.animate({
          borderTopColor: '#77C8F5'
        }, speed, function () {
          connect(index);
        });
        break;
      case 3:
        div.animate({
          borderRightColor: '#77C8F5'
        }, speed, function () {
          connect(index);
        });
        break;
      case 4:
        div.animate({
          borderBottomColor: '#77C8F5'
        }, speed, function () {
          connect(index);
        });
        break;
    }
    
  }
  connect(1);
  
  
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
