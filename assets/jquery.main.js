$(document).ready(function() {

  // Close  map
  $('.main #map span').click(function() {
    $('.main #map').slideToggle('slow');
    return false;
  });

  // Click on map
  $('.main article .cardfooter .mapicon').click(function() {
    $('.main #map').slideToggle('slow');
    return false;
  });

  // Click on photo
  $('.main article .cardfooter .l_camera').click(function() {
    $(this).parent().parent().parent().toggleClass('active');
    $(this).parent().parent().children('.companyphoto').slideToggle('slow');
    return false;
  });

  // Click on message
  $('.main article .cardfooter .l_chat').click(function() {
    $(this).parent().parent().parent().toggleClass('active');
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
    $(this).parent().parent().toggleClass('active');
    $(this).children('.companyinfo').slideToggle('slow');   
  });

});


var container = document.querySelector('.main #content');
var msnry = new Masonry( container, {
  // options
  itemSelector: '.card'
});
