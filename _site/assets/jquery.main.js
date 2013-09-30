$(document).ready(function() {

  // Click on menu / filter
  $('.main #filter span').click(function() {
    $('.main #filter span').removeClass('active');
    $(this).toggleClass('active');
  }); 
  
  // Click on Search
  $('.main #search').click(function() {
    $('.main input').slideToggle();
    $(this).siblings('button').hide();
    return false;
  });

  // Click on Signup / Login
  $('.main #signup, .main #login, .main #welcome').click(function() {
    $('.main #signup, .main #login, .main #welcome').slideToggle();
    return false;
  });
  
  // Explore location
  $('.main #explore-location').click(function() {
    $('.main #location').slideToggle('slow');
    $(this).toggleClass('active');
    $('.main article').toggleClass('inactive');
    
    if ($('.main #categories').is(":visible")) {
      $('.main #categories').slideToggle('slow');
      $('.main #browse-categories').toggleClass('active');
      $('.main article').toggleClass('inactive');
    }
  });

  // Browse categories
  $('.main #browse-categories').click(function() {
    $('.main #categories').slideToggle('slow');
    $(this).toggleClass('active');
    $('.main article').toggleClass('inactive');
    
    if ($('.main #location').is(":visible")) {
      $('.main #location').slideToggle('slow');
      $('.main #explore-location').toggleClass('active');
      $('.main article').toggleClass('inactive');
    }
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
