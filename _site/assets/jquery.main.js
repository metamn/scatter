$(document).ready(function() {

  // Browse categories
  $('.main #explore #browse-categories').click(function() {
    $('.main #categories').slideToggle('slow');
    $(this).toggleClass('active');
    $('.main article').toggleClass('hidden');
  });
  
  
  // Click on camera
  $('.main article .messagecontainer .messagephoto-icon').click(function() {
    cardActive($(this).parent().parent().parent(), $(this).next());
  });
  
  // Click on company details
  $('.main article .usercontainer').click(function() {
    cardActive($(this).parent().parent(), $(this).children('.companyinfo'));
  });

  // Click on map
  $('.main article .cardfooter .mapicon, .main #map').click(function() {
    $('.main #map').slideToggle('slow');
    return false;
  });

  // Click on message
  $('.main article .cardfooter .l_chat').click(function() {
    cardActive($(this).parent().parent().parent(), $(this).parent().parent().children('.messagecontainer').children('.sendmessage'));
    return false;
  });
  
  // Click on follow
  $('.main article .cardfooter .l_followbtn').click(function() {
    $(this).toggleClass('active');
    return false;
  });
  
  
  // Make the card active or inactive
  function cardActive(card, item) {
    var on = item.is(':visible');
    var counter = 0;
    card.children().children('.usercontainer').children('.companyinfo').is(':visible') ? counter += 1 : counter = counter;
    card.children().children('.messagecontainer').children('.sendmessage').is(':visible') ? counter += 1 : counter = counter;
    card.children().children('.messagecontainer').children('.messagephoto').is(':visible') ? counter += 1 : counter = counter;
    
    item.slideToggle('slow');
    
    if (on) {
      if (counter == 1) {
        card.removeClass('active');
      }
    } else {
      card.addClass('active');
    }
  }

});


var container = document.querySelector('.main #content');
var msnry = new Masonry( container, {
  // options
  itemSelector: '.card'
});
