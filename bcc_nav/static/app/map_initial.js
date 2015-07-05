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

function renderMarkers() {
    for (i = 0; i < allmarkers.length; i++) {
        addMarker(new google.maps.LatLng(allmarkers[i][0],allmarkers[i][1]), allmarkers[i][2], allmarkers[i][3], allmarkers[i][4])
    }

}

function addMarker(theposition, theicon, thetitle, theinfo) {

    if (theicon == 'default') {

        theicon = '../static/img/icon1.png';
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
    });

    allmarkers2.push(marker);
}

var map;
var allmarkers = [];
var allmarkers2 = [];

function initialize() {

    var mapOptions = {
        center: { lat: -27.480329, lng: 153.0245508},
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

}

google.maps.event.addDomListener(window, 'load', initialize);