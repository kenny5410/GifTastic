//$( document ).ready(function(){
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
//})

