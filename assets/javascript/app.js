$( document ).ready(function(){
    //This is the array of car brands
    var topics = ["nsx", "wrx", "m3", "camaro" ,"corvette" ,"gtr" ,"miata" ,"veyron" ,"lancer+evo", "mustang"];
    console.log(topics);

    //function for adding buttons
    
    
    //for loop to create a buttons for each item in the array
    //function renderButtons() {
    $('#topics-view').empty()    
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("topics");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $('#topics-view').append(a);
        }       
    //} 

    //click function for adding a new button to the topics array
    $('#add-car').on("click", function(event){
        event.preventDefault();

        var car = $('#car-input').val().trim();
        topics.push(car);
        console.log(topics);
        //renderButtons();
    })

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

                var results = response.data;
                //clears the images div id every time a button is clicked
                $('#images').empty();

                for (var i = 0; i < results.length; i++) {
                    var carDiv = $('<div>');
                    var p = $('<p>').text("Rating: " + results[i].rating);
                    var carImage = $('<img>');

                    carImage.attr("src", results[i].images.fixed_height_still.url);

                    carDiv.append(p);
                    carDiv.append(carImage);

                    $('#images').append(carDiv);

                }
            
            });
    
    })
        
    //renderButtons();
})

