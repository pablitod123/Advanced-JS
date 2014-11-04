console.log("javascript working!"); // Just to test. 
$(document).ready(function() {
  $.get("http://www.reddit.com/hot.json", function(response) {
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet. 
    var stories = response.data.children;
    for(var i in stories) {
      story = stories[i].data;
      var elem = $("<li></li>");


      
      // Your code here:
      var title = $("<li> <h4>" + story["title"] + "</h4>");
      var permalink = $("<h5>" + story["permalink"] + "</h5>");
      var upvote = $("<h6>" + story["ups"] + "</h6> </li>" );


      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element. 
      // $("#list").append(elem);
      $("#list").append(title);
      $("#list").append(permalink);
      $("#list").append(upvote);

      var svgContainer = d3.select("#list").append("svg")
                            .attr("width", 200)
                            .attr("height", 80);
 
 //Draw the Circle
      var circle = svgContainer.append("circle")
                          .attr("cx", 40)
                          .attr("cy", 40)
                          .attr("r", (story["ups"] / 180));
      // In the data in the Javascript object 'story',
      // Look at the JS console in Chrome to see what story looks like
      console.log(story);

      
    }
  })
  // script.js
    $("#refresh-button").click(function() {
      location.reload();
    });

});