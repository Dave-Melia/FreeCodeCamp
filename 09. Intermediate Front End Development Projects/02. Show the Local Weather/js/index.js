var apiKey = '9f551066cc1cb2ecfd1537fc5d36b2ab';

$(function() {

  $.getJSON("http://ip-api.com/json", function(data) {
    var lat = data.lat;
    var lon = data.lon;
    var city = data.city + ", " + data.countryCode;
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=" + apiKey;

    $(".cityClass").html(city);


    $.getJSON(apiURL, function(json) {
      //Temperature in Celsius
      var tempCel = json.main.temp;
      //Fahrenheit = C * (9 / 5) + 3
      var tempFah = tempCel * 9 / 5 + 32;
      //Rain, Snow, Clear etc.
      var weatherDesc = json.weather[0].main;
      //Sunset & sunrise in epoch time coverted to UTC Hours & Minutes
      var sunset = new Date(json.sys.sunset * 1000);
      var sunrise = new Date(json.sys.sunrise * 1000);
      var unit = "metric";

      //Round the temperature to the nearest whole
      $(".tempClass").html(Math.round(tempCel));
      // oC icon from weather icons
      $(".unitClass").html("<i class='wi wi-celsius unitClass blueStyle'></i>");

      //Switch from Celsius to Fahrenheit (and back again) function
      $(".switchClass").click(function() {
        if (unit === "metric") {
          //Set unit to 'imperial' from the default: "metric"
          unit = "imperial";
          $(".switchClass").html("switch to celsius");
          //Switches the temperature from C to F
          $(".tempClass").html(Math.round(tempFah));
          //Switches the weather icon from C to F
          $(".unitClass").html("<i class='wi wi-fahrenheit unitClass blueStyle'></i>");
        } else if (unit === "imperial") {
          //Reverse above
          unit = "metric";
          $(".switchClass").html("switch to fahrenheit");
          $(".tempClass").html(Math.round(tempCel));
          $(".unitClass").html("<i class='wi wi-celsius unitClass blueStyle'></i>");
        }
      });


      //Displays text: Rain, Clowds, Snow etc.
      $(".weatherClass").html(weatherDesc);
      //Sunrise icon & hours : minutes from previous epoch conversion
      $(".sunrise").html("<i class='wi wi-sunrise'></i>" + sunrise.getHours() + ":" + sunrise.getMinutes());
      //Sunset icon & hours : minutes from previous epoch conversion
      $(".sunset").html("<i class='wi wi-sunset'></i>" + sunset.getHours() + ":" + sunset.getMinutes());

      //Switch statement to change the background
      //Based on the current weatherDesc
      switch (weatherDesc) {
        case 'Rain':
          $("body").css("background", "url(http://i65.tinypic.com/b620i9.jpg) no-repeat center center fixed");
          $(".weatherIcon").html("<i class='wi wi-rain'></i>");
          break;
        case 'Drizzle':
          $("body").css("background", "url(http://i65.tinypic.com/b620i9.jpg) no-repeat center center fixed");
          $(".weatherIcon").html("<i class='wi wi-rain'></i>");
          break;
        case 'Clouds':
          $('body').css("background", "url(http://i68.tinypic.com/vp8ft2.jpg) no-repeat center center fixed");
          $(".weatherIcon").html("<i class='wi wi-cloudy'></i>");
          break;
        case 'Snow':
          $('body').css("background", "url(http://i68.tinypic.com/rvd4t1.jpg) no-repeat center center fixed");
          $(".weatherIcon").html("<i class='wi wi-snow'></i>");
          $('.blueStyle').css("color", "#122a3a");
          break;
        case 'Clear':
          $('body').css("background", "url(http://i65.tinypic.com/9pz384.jpg) no-repeat center center fixed");
          $(".weatherIcon").html("<i class='wi wi-cloud'></i>");
          break;
        case 'Thunderstorm':
          $("body").css("background", "url(http://i66.tinypic.com/zludxf.jpg) no-repeat center center fixed");
          $(".weatherIcon").html("<i class='wi wi-thunderstorm'></i>");
          break;
        case 'Atmosphere':
          $("body").css("background", "url(http://i63.tinypic.com/1o0tnp.jpg) no-repeat center center fixed");
          $(".weatherIcon").html("<i class='wi wi-fog'></i>");
          break;
        default:
          $('body').css("background", "url(http://i65.tinypic.com/9pz384.jpg) no-repeat center center fixed");
          $(".weatherIcon").html("<i class='wi wi-cloud'></i>");
      }

    });
  });
});
