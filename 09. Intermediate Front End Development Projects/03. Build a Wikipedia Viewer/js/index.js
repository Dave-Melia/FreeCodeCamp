$("#searchButton").click(function() {
  $("#searchBox").toggle("slow");
});

$(function(){
  var apiURL = 'https://en.wikipedia.org/w/api.php?format=json&action=opensearch&callback=?&search=';
  
  
  $("#search").submit(function(e){
    e.preventDefault();
    
    $(".searchResults").empty();
    
    var searchString = e.target.searchBox.value;
    
    $.getJSON(apiURL + searchString, function(json) {
      for (var i = 0; i < json[1].length; i++) {
        $(".searchResults").append("<a href='" + json[3][i] + "' target='_blank'> <div class='bg-result'><p class='title'>" + json[1][i] + "</p><p class='desc'>" + json[2][i] + "</p></div></a>");
      }
    });
  });  
});