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
            currentDay.text(citySer);
            tempVal.text("Temp:" + data.current.temp + "˚F");
            windVal.text("Wind:" + data.current.wind_speed + "MPH");
            humidVal.text("Humidity:" + data.current.humidity + "%");
            uvVal.text("UV Index:" + data.current.uvi);

            var fiveDay = $('#day-forecast')
            var fiveDayEl = $('<li>');
            fiveDayEl.addClass('list-group');
            dailyFor.children().text('5 Day Forecast:');
            for (var i = 1; i < 6; i++) {
            fiveDayEl.text("Temp:" + data.daily[i].temp + "˚F");
            fiveDayEl.text("Wind:" + data.daily[i].wind_speed + "MPH");
            fiveDayEl.text("Humidity:" + data.daily[i].humidity+ "%");
            console.log(data.daily[i].temp);
            fiveDay.append(fiveDayEl);
            }
        })

            
        }) 
})