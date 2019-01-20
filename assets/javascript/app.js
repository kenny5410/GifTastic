$( document ).ready(function(){
    //This is the array of car brands
    var topics = ["acura", "audi", "bmw", "dodge" ,"ford" ,"jeep" ,"lamborghini" ,"nissan" ,"tesla" ,"toyota" ,"volkswagen"];
    console.log(topics);

    //function for adding buttons
    
    
    //for loop to create a buttons for each item in the array
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topics");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $('#topics-view').append(a);
    }

    //Giphy API Variable click function
    $('.topics').on("click", function() {
        var car = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=tiA8TWDUyhiEmjQ99eKe8WgUlRWF0y9p&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response) {
                console.log(queryURL);
                console.log(response);
            
            });
    })
        

})

