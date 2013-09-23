$(document).ready(function() {

  // Click on map
  $('.main article .cardfooter .mapicon, .main #map span').click(function() {
    $('.main #map').slideToggle('slow');
    return false;
  });

  // Click on photo
  $('.main article .cardfooter .l_camera').click(function() {
    closeHidden($(this).parent().parent().parent());
    $(this).parent().parent().children('.companyphoto').slideToggle('slow');
    return false;
  });

  // Click on message
  $('.main article .cardfooter .l_chat').click(function() {
    closeHidden($(this).parent().parent().parent());
    $(this).parent().parent().children('.messagecontainer').children('.sendmessage').slideToggle('slow');
    return false;
  });
  

  // Click on follow
  $('.main article .cardfooter .l_followbtn').click(function() {
    $(this).toggleClass('active');
    return false;
  });
  
  
  // Click on company name
  $('.main article .usercontainer').click(function() {
    closeHidden($(this).parent().parent()); 
    $(this).children('.companyinfo').slideToggle('slow');  
  });
  
  
  // Close all hidden content
  function closeHidden(card) {
    /*
    card.children().children('.usercontainer').children('.companyinfo').hide();
    card.children().children('.messagecontainer').children('.sendmessage').hide();
    card.children().children('.companyphoto').hide();
    */
    
    card.toggleClass('active');
  }

});


var container = document.querySelector('.main #content');
var msnry = new Masonry( container, {
  // options
  itemSelector: '.card'
});
