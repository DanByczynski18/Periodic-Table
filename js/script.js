$(document).ready(function(){
  $(".tableelement").click(function () {
    $(".infobox").empty();
    $("#mainbox").before('<div class="infobox"><h1>TEST</h1></div>');
  });
});