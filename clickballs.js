$(document).ready(function() {
  
  $("#wrapper").append('<canvas data-src="clickballs.pjs" id="game"></canvas>');
  $("#game").css({
    height: $(window).height() - ($(window).height() * 0.15),
    width: $(window).width() - ($(window).width() * 0.15)
  });
  
  $("#scoreboard").css({
    top: $(window).height() - ($(window).height() * 0.93),
    left: $(window).width()/2 - ($(window).width() * 0.25)
  });
  
  $("#play-again").click(function() {
    location.reload();
  });
});


