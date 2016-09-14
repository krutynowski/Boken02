$(document).ready(function(){
  console.log("test")
  $('#load').fadeOut(4000, function(){ 
  $('#landingComp').css('visibility','visible').hide().fadeIn(1300);
  $('.pages.navbar-through').css('visibility','visible').hide().fadeIn(1300);
  }); 

  $("body").on("click", ".item-title", function(e){ 
    window.location.href='/auth/login';
    // var pic = $(event.currentTarget);
  });               

});

 