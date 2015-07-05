var positionMarker;
var positionTarget;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var positionWindow = new google.maps.InfoWindow({
    content: '<div id="content" onclick="setLocation()"> <button type="button" > Set Location </button> <button type="button" onclick="setDestination()"> Set Destination</button>  </div>'
});

function initialize() {

    var mapOptions = {
        center: { lat: -27.480329, lng: 153.0245508},
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    directionsDisplay = new google.maps.DirectionsRenderer();
    var myLatlng = new google.maps.LatLng(-27.44408185, 153.16674033);
    positionMarker = new google.maps.Marker({position: myLatlng, map: map});
    positionMarker.visible = false;

    google.maps.event.addListener(map, 'click', function(e) {
        positionTarget = e;
        positionMarker.setPosition(e.latLng);
        positionWindow.open(map, positionMarker);

    });

    directionsDisplay.setMap(map);
}

function setLocation() {
    if(positionLocation == null) {
        positionLocation = new google.maps.Marker({position: positionTarget.latLng, map: map});
    } else {
        positionLocation.setMap(null);
        positionLocation = new google.maps.Marker({position: positionTarget.latLng, map: map});
    }
}

function setDestination() {
    if(positionLocation == null) {
        positionDestination = new google.maps.Marker({position: positionTarget.latLng, map: map});
    } else {
        positionLocation.setMap(null);
        positionDestination = new google.maps.Marker({position: positionTarget.latLng, map: map});
    }
    calcRoute(positionDestination);
    removeDestinationMarkers();
}

function removeDestinationMarkers(){
    positionLocation.setMap(null);
    positionDestination.setMap(null);

}

function calcRoute(destination) {
    var start = positionLocation.getPosition();
    var end = destination.getPosition();
    var request = {
        origin:start,
        destination:end,
        travelMode: google.maps.TravelMode.WALKING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);