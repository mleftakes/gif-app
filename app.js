var cartoons= ["spongebob", "ninjaturtles", "daffyduck", "goofy"];




$(".button").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    var cartoon = $(this).attr("data-cartoon");



// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         cartoon + "&api_key=SfIdNOQBFrDMzrLH0prD4PQFtCcBIiTL&limit=10";

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        cartoon + "&api_key=dc6zaTOxFJmzC&limit=10";



$.ajax({
    url: queryURL,
    method: "GET"
})
  
.then(function(response) {
    // Storing an array of results in the results variable
    var results = response.data;
  
  
    for (var i = 0; i < results.length; i++) {
        
        
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            // Creating a div with the class "item"
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;


            var p = $("<p>").text("Rating: " + rating);

            var cartoonImage = $("<img>");

            cartoonImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(cartoonImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#gifs-appear-here").prepend(gifDiv);

              

        }

    

       
    }

    
    
});
});

$(".newButton").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    var cartoon = $(this).attr("data-cartoon");



// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         cartoon + "&api_key=SfIdNOQBFrDMzrLH0prD4PQFtCcBIiTL&limit=10";

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        cartoon + "&api_key=dc6zaTOxFJmzC&limit=10";



$.ajax({
    url: queryURL,
    method: "GET"
})
  
.then(function(response) {
    // Storing an array of results in the results variable
    var results = response.data;
  
  
    for (var i = 0; i < results.length; i++) {
        
        
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            // Creating a div with the class "item"
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;


            var p = $("<p>").text("Rating: " + rating);

            var cartoonImage = $("<img>");

            cartoonImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(cartoonImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#gifs-appear-here").prepend(gifDiv);

              

        }

    

       
    }

    
    
});
});



  $("#submitButton").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var addedCartoon = $("#cartoonInput").val().trim();
    
        // Adding the movie from the textbox to our array
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("newButton");
        // Adding a data-attribute
        a.attr("data-cartoon");
        // Providing the initial button text
        a.text(addedCartoon);
        // Adding the button to the HTML
        $("#allButtons").append(a);
    
        // Calling renderButtons which handles the processing of our movie array
        
});   




  





// if ($(".addedCartoon").on("click") {

// }