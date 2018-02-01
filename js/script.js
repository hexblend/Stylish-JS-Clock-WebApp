$(document).ready(function() {
  function TimeNow(){
    // Storing Hours,Minutes,Secods
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // Showing Location Name
    var locations_list = document.getElementById('locations-list');
    var curr_location = locations_list.options[locations_list.selectedIndex].text;
    document.getElementById("location-output").innerHTML = 'Time in ' + curr_location;

    // Setting Time-Zones Based On Options
    if (curr_location == 'Paris'){
      h += 1;
    } else if (curr_location == 'Bucharest') {
      h += 2;
    } else if (curr_location == 'Moscow') {
      h += 3;
    }

    // Setting Up AM/PM
    var ampm = '';

    // Setting up 12-hour option
    var switcher1 = document.getElementById('switcher1');
    if (switcher1.className.indexOf("active") != -1){
      if (h > 12){
        ampm = 'PM';
        h -= 12;
      } else {
        ampm = 'AM';
      }
    }

  // Showing The Hour/Minutes/Seconds with 2 figures
    if (h < 10){ h = '0' + h; }
    if (m < 10){ m = '0' + m; }
    if (s < 10){ s = '0' + s; }

    // Final Time Output;
    var time = h + ':' + m + ':' + s;
    document.getElementById('clock-output').innerHTML = time + '<span>' + ampm + '</span>';
  }
  // Refreshing The Clock Every Second
  setInterval(TimeNow, 1000);
});
