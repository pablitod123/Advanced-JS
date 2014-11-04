console.log("javascript working!"); // Just to test. 
$(document).ready(function() {
  $.get("http://api.icndb.com/jokes/random?exclude=[explicit]", function(response) {
    

    var randomjoke = response.value.joke
   
      var  thejoke = $("<center><h3>" + randomjoke + "</h3></center>")
      $("#list").append(thejoke);
    
      console.log(randomjoke);
 
  })
  // script.js
    $("#refresh-button").click(function() {
      location.reload();
    });

});