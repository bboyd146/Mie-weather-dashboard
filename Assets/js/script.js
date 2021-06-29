// Current weather values
var tempVal = $('#temp');
var windVal = $('#wind');
var humidVal = $('#humidity');
var uvVal = $('#uv-index');

// Weather API
var weatherKey = "9ae9bb9e134c118baf51a3e5e47e8a55";
var city = "houston";

$('button').on('click', function(event) {
    // text value for city search
     var citySer = $("#city-search").val();
    var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${citySer}&units=imperial&appid=${weatherKey}`;
event.preventDefault();
    fetch(weatherAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        }) 
})