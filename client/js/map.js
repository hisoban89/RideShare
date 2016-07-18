  // Note: This example requires that you consent to location sharing when
  // prompted by your browser. If you see the error "The Geolocation service
  // failed.", it means you probably did not give permission for the browser to
  // locate you.

function initMap() {

    var userPosition = {lat: 6.93622529, lng: 79.8800723};

    var locations = [
      ['<div ng-controller="bookingController"><input type="hidden" value="booked" class="register-input" placeholder="Booking" ng-model="booking"></input><button id="myBtn" onclick="myFunction()">Confirm</button></div>', 6.93979, 79.87395 , 4],

      ['<div ng-controller="bookingController"><input type="hidden" value="booked" class="register-input" placeholder="Booking" ng-model="booking"></input><button id="myBtn" onclick="myFunction()">Confirm</button></div>', 6.93960, 79.86827, 5],

      ['<div ng-controller="bookingController"><input type="hidden" value="booked" class="register-input" placeholder="Booking" ng-model="booking"></input><button id="myBtn" onclick="myFunction()">Confirm</button></div>', 6.93579, 79.88362, 3],

      ['<div ng-controller="bookingController"><input type="hidden" value="booked" class="register-input" placeholder="Booking" ng-model="booking"></input><button id="myBtn" onclick="myFunction()">Confirm</button></div>', 6.94427, 79.88135, 2],

      ['<div ng-controller="bookingController"><input type="hidden" value="booked" class="register-input" placeholder="Booking" ng-model="booking"></input><button id="myBtn" onclick="myFunction()">Confirm</button></div>', 6.94682, 79.87830, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeControl: false,
      center : userPosition,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });



// ======  ======================================

 var origin_place_id = null;
        var destination_place_id = null;
        var travel_mode = google.maps.TravelMode.WALKING;


        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(map);

        var origin_input = document.getElementById('origin-input');
        var destination_input = document.getElementById('destination-input');
        var modes = document.getElementById('mode-selector');

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(origin_input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(destination_input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(modes);

        var origin_autocomplete = new google.maps.places.Autocomplete(origin_input);
        origin_autocomplete.bindTo('bounds', map);
        var destination_autocomplete =
            new google.maps.places.Autocomplete(destination_input);
        destination_autocomplete.bindTo('bounds', map);

        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        function setupClickListener(id, mode) {
          var radioButton = document.getElementById(id);
          radioButton.addEventListener('click', function() {
            travel_mode = mode;
          });
        }
        setupClickListener('changemode-walking', google.maps.TravelMode.WALKING);
        setupClickListener('changemode-transit', google.maps.TravelMode.TRANSIT);
        setupClickListener('changemode-driving', google.maps.TravelMode.DRIVING);

        function expandViewportToFitPlace(map, place) {
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
          }
        }

        origin_autocomplete.addListener('place_changed', function() {
          var place = origin_autocomplete.getPlace();
          if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
          }
          expandViewportToFitPlace(map, place);

          // If the place has a geometry, store its place ID and route if we have
          // the other place ID
          origin_place_id = place.place_id;
          route(origin_place_id, destination_place_id, travel_mode,
                directionsService, directionsDisplay);
        });

        destination_autocomplete.addListener('place_changed', function() {
          var place = destination_autocomplete.getPlace();
          if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
          }
          expandViewportToFitPlace(map, place);

          // If the place has a geometry, store its place ID and route if we have
          // the other place ID
          destination_place_id = place.place_id;
          route(origin_place_id, destination_place_id, travel_mode,
                directionsService, directionsDisplay);
        });

        function route(origin_place_id, destination_place_id, travel_mode,
                       directionsService, directionsDisplay) {
          if (!origin_place_id || !destination_place_id) {
            return;
          }
          directionsService.route({
            origin: {'placeId': origin_place_id},
            destination: {'placeId': destination_place_id},
            travelMode: travel_mode
          }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }



// ====================================================================================================


    var infoWindow = new google.maps.InfoWindow({map: map});
    //
    var infowindow = new google.maps.InfoWindow();

      var marker, i;

      for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }

// =========================================

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'View Details'
      });

        //marker.setPosition(pos);
        infoWindow.setPosition(pos);
        infoWindow.setContent('<ul><li ng-repeat="user in users">'+
                                  'Hi user !!!<br> Please book your closest vehicle'+
                                '</li>'+
                              '</ul>');
        // map.setCenter(pos);

      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }



  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }