export default class Weather {
  constructor() {
    function weather() {
      var location = document.getElementById("location");
      var apiKey = "ce4206500db0e67c73e3e4d2112e2687";
      var url = "https://api.forecast.io/forecast/";

      navigator.geolocation.getCurrentPosition(success, error);

      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        $.getJSON(
          url +
            apiKey +
            "/" +
            latitude +
            "," +
            longitude +
            "?lang=da&units=auto&callback=?",
          function(data) {
            let temp = Math.round(data.currently.temperature);
            let summary = data.currently.summary;
            $("#temp").html(`${temp}°`);
            $("#minutely").html(`${summary}`);

            fetch("../content/test.json")
              .then(data => data.json())
              .then(weatherData => {
                weatherData.forEach(weather => {
                  if (summary === weather.weatherType) {
                    $(".weather-holder").attr(
                      `src`,
                      `../content/${weather.img}`
                    );
                  }
                });
              });
          }
        );
      }

      function error() {
        location.innerHTML = "Unable to retrieve your location";
      }
    }

    weather();
  }
}