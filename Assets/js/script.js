// Current weather values
var tempVal = $('#temp');
var windVal = $('#wind');
var humidVal = $('#humidity');
var uvVal = $('#uv-index');
// variable for 5 day forecast
var dailyFor = $('day-forecast');

// Weather API
var weatherKey = "9ae9bb9e134c118baf51a3e5e47e8a55";


$('button').on('click', function(event) {
    // text value for city search
     var citySer = $("#city-search").val();
    //  inserting variables for parameters
    var currentwApi = `https://api.openweathermap.org/data/2.5/weather?q=${citySer}&units=imperial&appid=${weatherKey}`;
event.preventDefault();
    fetch(currentwApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${weatherKey}`;
        fetch(oneCallApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // variable to make header for current weather
            var currentDay = $('#repo-search-term');
            console.log(currentDay);
            currentDay.text(citySer);
            tempVal.text("Temp:" + data.current.temp + "˚F");
            windVal.text("Wind:" + data.current.wind_speed + "MPH");
            humidVal.text("Humidity:" + data.current.humidity);
            uvVal.text("UV Index:" + data.current.uvi);

            var fiveDay = $('#forecast');
            dailyFor.children().text('5 Day Forecast:');
            for (let i = 1; i < 6; i++) {
            fiveDay.text(data.daily[i].temp);
            fiveDay.text(data.daily[i].wind_speed);
            fiveDay.text(data.daily[i].humidity);
            fiveDay.text(data.daily[i].uvi);
            }

        })

            
        }) 
})