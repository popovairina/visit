$(document).ready(function() {


  /* Модалка со входом */ 
  $('.header-interface__button').on("click", function(){
    $('#login').fadeIn();
  });
  $('.popup-body__button').on("click", function(){
    $('#login').fadeOut();
  });
  $('.popup-close').on("click", function(){
    $('.overlay').fadeOut();
    $('body').css({
      'overflow-y':'scroll',
      'overflow-x':'hidden'
    });
  });
});