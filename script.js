
$("#puncher").click(function(){
  // $("#about-div").toggleClass("hide");
  var active = $(".show");
  active.toggleClass("hide show");
  $("#puncher-show").toggleClass("hide show");
});

$("#thainer").click(function(){
  var active = $(".show");
  active.toggleClass("hide show");
  $("#thainer-show").toggleClass("hide show");
});

$("#aboutme").click(function(){
  var active = $(".show");
  active.toggleClass("hide show");
  $("#about-div").toggleClass("hide show");
});

$("#wikasia").click(function(){
  var active = $(".show");
  active.toggleClass("hide show");
  $("#wikasia-show").toggleClass("hide show");
});

$("#myname").click(function(){
  var active = $(".show");
  active.toggleClass("hide show");
});

$("#p-about").click(function(){
  $(".projects").hide();
  $("#p-text").show();
});

$("#p-works").click(function(){
  $(".projects").show();
  $("#p-text").hide();
})