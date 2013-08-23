$(document).ready(function() {

  // Typer
  
  $(function () {
    $('[data-typer-targets]').typer();
  });
  
  $('[data-typer-targets]').bind('DOMNodeInserted DOMSubtreeModified DOMNodeRemoved', function(event) {
    $('.business #slide-1 #p2, .business #slide-1 #p3').html($('[data-typer-targets]').html());
  })
  
  
  // Scrolling on the business page
  
  $('.business #header nav li').click(function() {
    var index = $(this).index() + 2;
    
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
