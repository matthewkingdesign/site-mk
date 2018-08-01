$(document).ready(function(){
  $("#homepage-hamburger").click(function() {
    $("#homepage-content").slideToggle();
  });
  // $("#homepage-hamburger").click(function() {
  //   $("#homepage-blurb").fadeToggle();
  // });
  // $("#homepage-hamburger").hover(function(){
  //   if($(this).hasClass("zoomed")){
  //     $(this).removeClass("zoomed");
  //   }else{
  //     $(this).addClass("zoomed");
  //   }
  // });

  $("#homepage-hamburger").click(function(){
  if($(".container").hasClass("zoomed")){
    $(".container").removeClass("zoomed");
  }else{
      $(".container").addClass("zoomed");
  }
  });
});
