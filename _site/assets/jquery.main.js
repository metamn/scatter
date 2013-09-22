$(document).ready(function() {

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
