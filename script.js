
$("#puncher").click(function(){
  // $("#about-div").toggleClass("hide");
  var active = $(".show");
  active.toggleClass("hide show");
  $('html,body').scrollTop(0);
  $("#puncher-show").toggleClass("hide show");
});

$("#thainer").click(function(){
  var active = $(".show");
  active.toggleClass("hide show");
  $('html,body').scrollTop(0);
  $("#thainer-show").toggleClass("hide show");
});

$("#aboutme").click(function(){
  var active = $(".show");
  active.toggleClass("hide show");
  $('html,body').scrollTop(0);
  $("#about-div").toggleClass("hide show");
});

$("#wikasia").click(function(){
  var active = $(".show");
  active.toggleClass("hide show");
  $('html,body').scrollTop(0);
  $("#wikasia-show").toggleClass("hide show");
});

$("#myname").click(function(){
  var active = $(".show");
  $(".hello").toggleClass("hide show");
  active.toggleClass("hide show");
});


// phone mode
$("#p-about").click(function(){
  $(".projects").hide();
  $("#p-text").show();
});

$("#p-works").click(function(){
  $(".projects").show();
  $("#p-text").hide();
})