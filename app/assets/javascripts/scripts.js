$(document).ready(function(){

  // simple height toggle animation
  // $("#homepage-hamburger").click(function() {
  //   $("#homepage-content").animate({
  //     height: 'toggle'
  //   });
  // });

  $("#homepage-hamburger").click(function(){
      var div = $("#homepage-content");
      div.animate({height: 'toggle'}, "slow");
      div.animate({top: '100px'}, "slow");
      $("#homepage-blurb").animate({width:'33vw'},"slow");
  });

  // CHANGE CURSOR TO HAMBURGER on Click event
  // $("#homepage-hamburger").click(function(){
  // if($(".container").hasClass("zoomed")){
  //   $(".container").removeClass("zoomed");
  // }else{
  //     $(".container").addClass("zoomed");
  // }
  // });
});
