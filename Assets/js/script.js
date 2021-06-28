// Weather API
var weatherKey = "9ae9bb9e134c118baf51a3e5e47e8a55";
var city = "houston";
var weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + weatherKey;

fetch(weatherAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    }) 