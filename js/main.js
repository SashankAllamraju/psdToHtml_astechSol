// data
var hpy_song = {
  quote_start: '<span><img src="./images/quote-start.png" alt="quote-start"</span>',
  quote_end: '<span><img src="./images/quote-end.png" alt="quote-end"</span>',
  para_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also into the electronic typesetting, remaining essentially',
  chorus_title: 'Chorus:',
  chorus_text: 'was popularised in the 1960s the  release of Letraset sheets containing Lorem Ipsum pass, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

// insert data for HPY song
/* for Big Quotes in HPY song - starting*/
$("#para-1 p").append(hpy_song.quote_start);

$("#para-1 p").append(hpy_song.para_1.toUpperCase());
$("#chorus-1 .chorus-title p, #chorus-2 .chorus-title p").append(hpy_song.chorus_title.toUpperCase());
$("#chorus-1 .chorus-text p, #chorus-2 .chorus-text p").append(hpy_song.chorus_text.toUpperCase());

/* for Big Quotes in HPY song - ending*/
$("#chorus-2 .chorus-text p").append(hpy_song.quote_end);



// adding css for active main-menu
$(document).ready(function () {
  // css styling for active menu
  $('#main-menu li').on('click', function() {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });
});

// Menus' default state on a device - collapsed or not
/** sometimes this is not working. Not sure why. comment out this part of code to check for other aspects. will fix this later */
$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 767) {
      $(".collapse").removeClass("in");
    }
});

// carousel timer
$('.carousel').carousel({
  interval: 3500
})

// google map directions
var map;

// for rendering all routes
function calculateAndDisplayRoute(origin, destination, directionsService, directionsDisplay, map) {
  directionsService.route({
    origin: origin,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    provideRouteAlternatives: true,
    avoidHighways: false,
    avoidTolls: false,
    drivingOptions: { // shows optimistic path under current traffic conditions
      departureTime: new Date(Date.now()),
      trafficModel: 'optimistic'
    }
  }, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        for (var i = response.routes.length - 1, len = response.routes.length; i > -1; i--) {
          var strokeColor = (i > 0) ? '#726f68' : 'blue';
          /* inforwindow yet to be fixed
          var distance = response.routes[i].legs[0].distance.text;
          var duration = response.routes[i].legs[0].duration.text;
          var infowindow = new google.maps.InfoWindow();
          infowindow.setContent(" distance: "+distance+"<br> duration: "+duration+" ");
          */
          new google.maps.DirectionsRenderer({
            map: map,
            directions: response,
            routeIndex: i,
            polylineOptions: {
              strokeColor: strokeColor,
              strokeOpacity: 0.9,
              strokeWeight: 5}
          });
        }
      } else {
        window.alert('Unable to find the distance via road. Directions request failed due to - ' + status);
      }
  });
}


// for initializing map
function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(
    document.getElementById("map"), {
      center: new google.maps.LatLng(19.021335, 72.842255),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  directionsDisplay.setMap(map);

  /* geocoding to be fixed later
  // fetching coordinates for origin and destination
  var geocoder = new google.maps.Geocoder();
  // allocate origin and destination addresses here
  var originCoordinates = geocodeAddress(geocoder, 'Chhatrapati Shivaji Terminus');
  //console.log(originCoordinates);
  var destinationCoordinates = geocodeAddress(geocoder, 'Chhatrapati Shivaji International Airport');
  //console.log(destinationCoordinates);
  */

  // render all routes
  calculateAndDisplayRoute(new google.maps.LatLng(18.9398208,72.8354676), new google.maps.LatLng(19.0895595, 72.8656144), directionsService, directionsDisplay, map);
}

/* geocoding to be fixed later
// for geocoding
function geocodeAddress(geocoder, address) {
  var addr = address;
  geocoder.geocode({'address': addr}, function(results, status) {
    if (status === 'OK') {
      return results[0].geometry.location;
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
*/

// initialize
google.maps.event.addDomListener(window, "load", initMap);
