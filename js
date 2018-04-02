
 
 var weather = new XMLHttpRequest();
       weather.open("GET", 
        "https://api.wunderground.com/api/038aa9444988e848/conditions/q/WA/Pullman.json", false);

        weather.send(null);
        
        var r = JSON.parse(weather.response);
        var weather = "Current Location: " + r.current_observation.display_location.full ;
        
        var temp = r.current_observation.temperature_string + "<br />";
        
        var wind = r.current_observation.wind_string + "<br />";
        var relative_humidity = r.current_observation.relative_humidity + "<br />";
        var feelslike_string = r.current_observation.feelslike_f +  "<br />";
        
        document.getElementById("weather").innerHTML = weather ;
        document.getElementById("temp").innerHTML = temp ;
        document.getElementById("wind").innerHTML = wind ;
        document.getElementById("relative_humidity").innerHTML = relative_humidity ;
        document.getElementById("feelslike_string").innerHTML = feelslike_string ;
            



(function($) {
  $(document).ready(function() {
    // hide .navbar first
    $(".navbarscroll").hide();

    //fade in .navbar
    $(function() {
      $(window).scroll(function() {
        // set distance uster needs to scroll before fadeIn starts
        if ($(this).scrollTop() > 100) {
          $(".navscroll").fadeIn();
        } else {
          $(".navscroll").fadeOut();
        }
      });
    });
  });
})(jQuery);
