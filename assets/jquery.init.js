$(document).ready(function() {


  // Scrolling on the business page
  
  $('.business nav li').click(function() {
    var index = $(this).index() + 1;
    var slide = $('.business section:nth-child(' + index + ')');
    $("html, body").animate({ scrollTop: slide.offset().top }, "slow");
    
    $('.business nav li').removeClass('active');
    $(this).addClass('active');
    
    return false;
  });
  
  
  

  // Hover on a bubble feature
  $('#features aside div').hover(
    function () {
      var index = $(this).index() + 1;
      var content = $("#features ul li:nth-child(" + index + ") span").last().html();
      
      $("#features #highlight").html(content);
      $("#features #highlight").fadeIn();
      
      $("#features ul li:nth-child(" + index + ")").addClass('active');
      $(this).addClass('active');
    },
    function () {
      $(this).removeClass('active');
      
      var index = $(this).index() + 1;
      $("#features ul li:nth-child(" + index + ")").removeClass('active');
      
      $("#features #highlight").fadeOut();
    }
  );
  

  // Hover on a feature title
  $('#features ul li').hover(
    function () {
      var index = $(this).index() + 1;
      $("#features aside div:nth-child(" + index + ")").addClass('active');
      
      var content = $("#features ul li:nth-child(" + index + ") span").last().html();
      $("#features #highlight").html(content);
      $("#features #highlight").fadeIn();
    },
    function () {
      var index = $(this).index() + 1;
      $("#features aside div:nth-child(" + index + ")").removeClass('active');
      $("#features #highlight").fadeOut();
    }
  );
 
  
  
  

  // Animate features
  // Animate devices on the business page
  $('#features aside div, .business article div').hide();
  
  $('#features aside div, .business article div').each(function(index) {
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
  
  function fly(div, top, left) {
    div.show();
    
    div.animate({
      opacity: 1,
      left: left,
      top: top
    }, 1000, function() {
      // Animation complete.
    });
  }
 
  

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
