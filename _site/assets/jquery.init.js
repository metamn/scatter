$(document).ready(function() {


  // Hover on a feature
  $('#features ul li').hover(
    function () {
      var content = $(this).children('span').last().html();
      var index = $(this).index() + 1;
      
      changeContent($("#features aside div:nth-child(" + index + ")"), content);
    },
    function () {
      var content = $(this).children('span').last().html();
      var index = $(this).index() + 1;
      
      restoreContent($("#features aside div:nth-child(" + index + ")"));
    }
  );
  
  
  function changeContent(div, content) {
    div.children().hide();
    if (!(div.children('p').length > 0)) {
      div.append('<p>' + content + '</p>');
    }
  }
  
  function restoreContent(div) {
    div.children('p').remove();
    div.children().show();
  }
  
  
  

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
