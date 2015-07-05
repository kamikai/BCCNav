// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < allmarkers2.length; i++) {
    allmarkers2[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  allmarkers = [];
  allmarkers2 = [];
}

function buttonCheck() {
    if (ferryOn == true) {
        addFerries()
    }

    if (libraryOn == true) {
        addlibraries()
    }

    if (wifiOn == true) {
        addWiFi()
    } 

    if (busOn == true) {
        addBuses()
    } 

    if (bikeOn == true) {
        addBikes()
    } 
}

function ferrySwap() {
    if (ferryOn == false) {
        ferryOn = true;
    } else {
        ferryOn = false;   
    }
    rePaint()
}

function librarySwap() {
    if (libraryOn == false) {
        libraryOn = true;
    } else {
        libraryOn = false;   
    }
    rePaint()
}

function wifiSwap() {
    if (wifiOn == false) {
        wifiOn = true;
    } else {
        wifiOn = false;   
    }
    rePaint()
}

function busSwap() {
    if (busOn == false) {
        busOn = true;
    } else {
        busOn = false;   
    }
    rePaint()
}

function bikeSwap() {
    if (bikeOn == false) {
        bikeOn = true;
    } else {
        bikeOn = false;   
    }
    rePaint()
}

function addBikes() {
    /* bike racks */
        for (i = 0; i < bikerackdata.length; i++) { 
            allmarkers.push(bikerackdata[i])
        }
}

function addBuses() {        
        /* bus stops */
        for (i = 0; i < busstopdata.length; i++) { 
            allmarkers.push(busstopdata[i])
        } 
}

function addWiFi() {
         /* wi fi */
        for (i = 0; i < wifidata.length; i++) { 
            allmarkers.push(wifidata[i])
        }
}

function addlibraries() {
        for (i = 0; i < librariesdata.length; i++) { 
        allmarkers.push(librariesdata[i])
        }
}

function addFerries() {
        for (i = 0; i < ferriesdata.length; i++) { 
           allmarkers.push(ferriesdata[i])
        }
}

function renderMarkers() {
    for (i = 0; i < allmarkers.length; i++) { 
        addMarker(new google.maps.LatLng(allmarkers[i][0],allmarkers[i][1]), allmarkers[i][2], allmarkers[i][3], allmarkers[i][4])
    }

}

function addMarker(theposition, theicon, thetitle, theinfo) {

if (theicon == 'default') {

    var theicon = '../static/img/icon1.png';
}

var contentString = '<div id="content">' + theinfo + '</div>';

var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

var marker = new google.maps.Marker({
      position: theposition,
      map: map,
      icon: theicon,
      title: thetitle
  });

google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    calcRoute(theposition);
  });
  
    allmarkers2.push(marker);

}

function rePaint() {
    /* adds all the markers based on what buttons are checked then renders them */
    deleteMarkers()
    buttonCheck();
    renderMarkers();
    
}




var map;

var allmarkers = [];
var allmarkers2 = [];
var bikeOn = false;
var busOn = false;
var ferryOn = false;
var libraryOn = false;
var wifiOn = false;

/////////////////////////////////////////////>>>>>>>>>>>>>>>>>>>>>
var positionLocation;
var positionDestination;
var positionMarker;
var positionTarget;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var positionWindow = new google.maps.InfoWindow({
      content: '<div id="content" onclick="setLocation()"> <button type="button" > Set Location </button> <button type="button" onclick="setDestination()"> Set Destination</button>  </div>'
  });
////////////////////////////////////////////////////////////^
function initialize() { 
        
  var mapOptions = {
    center: { lat: -27.480329, lng: 153.0245508},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  ////////////////////////////////>>>>>>>>>>>>>>>>>>>>
  directionsDisplay = new google.maps.DirectionsRenderer();
  var myLatlng = new google.maps.LatLng(-27.44408185, 153.16674033);
  positionMarker = new google.maps.Marker({position: myLatlng, map: map});
  positionMarker.visible = false;

  google.maps.event.addListener(map, 'click', function(e) {
    positionTarget = e;
    positionMarker.setPosition(e.latLng);
    positionWindow.open(map, positionMarker);

  });

////////////////////////////////////////////^
  directionsDisplay.setMap(map);
}
/////////////////////////////////>>>
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
/////////////////////////////////^^^
google.maps.event.addDomListener(window, 'load', initialize);