$(document).ready(function() {


  // Hover on a bubble feature
  $('#features aside div').hover(
    function () {
      var index = $(this).index() + 1;
      $("#features ul li:nth-child(" + index + ") span").last().show('slow');
      
      $("#features ul li:nth-child(" + index + ")").addClass('active');
      $(this).addClass('active');
    },
    function () {
      $(this).removeClass('active');
      
      var index = $(this).index() + 1;
      $("#features ul li:nth-child(" + index + ")").removeClass('active');
    }
  );
  

  // Hover on a blue feature
  $('#features ul li').hover(
    function () {
      var index = $(this).index() + 1;
      $("#features aside div:nth-child(" + index + ")").addClass('active');
      $(this).children('span').last().show('slow');
    },
    function () {
      var index = $(this).index() + 1;
      $("#features aside div:nth-child(" + index + ")").removeClass('active');
    }
  );
 
  
  
  

  // Animate features 
  $('#features aside div').hide();
  
  $('#features aside div').each(function(index) {
    var div = $(this);
    
    switch(index) {
      case 0:
        var top = "+=100";
        var left = "+=50";
        break;
      case 1:
        var top = "-=100";
        var left = "+=50";
        break;
       case 2:
        var top = "+=30";
        var left = "+=5";
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
