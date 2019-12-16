export default class Weather {
  constructor() {
    function weather() {
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
            console.log(data);

            let temp = Math.round(data.currently.temperature);
            let summary = data.currently.summary;
            let iconName = data.currently.icon.replace(/-/g, "_").toUpperCase();
            console.log(summary);

            console.log(iconName);
            $("#temp").html(`${temp}°`);
            $("#minutely").html(`${summary}`);
            var skycons = new Skycons({ color: "white" });
            skycons.set("weatherIcon", iconName);
            skycons.play();
          }
        );
      }

      function error() {
        $("#minutely").html("Unable to retrieve your location");
      }
    }
    weather();
  }
}
