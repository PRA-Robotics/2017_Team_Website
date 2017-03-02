$(document).ready(function(){
    console.log("Boo!");
    $("#homepic > div:gt(0)").hide();
    
    setInterval(function() {
      $('#homepic > div:first')
      .fadeOut(1000)
      .next()
      .delay(1000)
      .fadeIn(1000)
      .end()
      .appendTo('#homepic');
    }, 5000);
});
