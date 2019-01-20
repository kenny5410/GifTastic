$( document ).ready(function(){
    //This is the array of car brands
    var topics = ["nsx", "wrx", "m3", "camaro" ,"corvette" ,"gtr" ,"miata" ,"veyron" ,"lancer+evo", "mustang"];
    console.log(topics);

    //Function to to display car stil gif information
    function displayCarInfo() {
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
                    carImage.attr("data-still", results[i].images.fixed_height_still.url);
                    carImage.attr("data-animate", results[i].images.fixed_height.url);
                    carImage.attr("data-state", "still");
                    carImage.attr("id", "car-gif")
                    carDiv.append(p);
                    carDiv.append(carImage);

                    $('#images').append(carDiv);

                }           
            });     
    }
    
    //for loop to create a buttons for each item in the array
    function renderButtons() {
        $('#topics-view').empty()    
            for (var i = 0; i < topics.length; i++) {
                var a = $("<button>");
                a.addClass("car-topics");
                a.attr("data-name", topics[i]);
                a.text(topics[i]);
                $('#topics-view').append(a);
            }       
    } 

    //click function for adding a new button to the topics array
    $('#add-car').on("click", function(event){
        event.preventDefault();

        var car = $('#car-input').val().trim();
        topics.push(car);
        console.log(topics);
        renderButtons();
    })

    //Function to either animate or keep image still
    function animate() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    };

    //Click event listener when the car call car-topics is clicked
    $(document).on("click", ".car-topics", displayCarInfo)

    //Cick event listner to either animate or keep images still
    $(document).on("click", "#car-gif", animate)


    renderButtons();   
})

