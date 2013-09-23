$(document).ready(function() {

  // Browse categories
  $('.main #explore #browse-categories').click(function() {
    $('.main #categories').slideToggle('slow');
    $(this).toggleClass('active');
    $('.main article').toggleClass('hidden');
  });

  // Click on map
  $('.main article .cardfooter .mapicon, .main #map span').click(function() {
    $('.main article').toggleClass('hidden');
    
    $(this).parent().parent().parent().toggleClass('expanded');
    $(this).parent().parent().children('#map').slideToggle();
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
  

});


var container = document.querySelector('.main #content');
var msnry = new Masonry( container, {
  // options
  itemSelector: '.card'
});
