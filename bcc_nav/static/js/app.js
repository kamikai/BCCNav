function initialize() {


    function addMarker(theposition, themap, theicon, thetitle, theinfo) {

        if (theicon == 'default') {

            theicon = '../static/img/icon1.png';
        }

        var contentString = '<div id="content">' + theinfo + '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: theposition,
            map: themap,
            icon: theicon,
            title: thetitle
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(themap,marker);
        });

    }

    var mapOptions = {
        center: { lat: -27.480329, lng: 153.0245508},
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    /* bike racks */
    /*for (i = 0; i < bikerackdata.length; i++) {
     addMarker(new google.maps.LatLng(bikerackdata[i][0],bikerackdata[i][1]), map, bikerackdata[i][2], bikerackdata[i][3], bikerackdata[i][4])
     }*/

    /* bus stops */
    /*for (i = 0; i < busstopdata.length; i++) {
     addMarker(new google.maps.LatLng(busstopdata[i][0],busstopdata[i][1]), map, busstopdata[i][2], busstopdata[i][3], busstopdata[i][4])
     }*/

    /* wi fi */
    /*for (i = 0; i < wifidata.length; i++) {
     addMarker(new google.maps.LatLng(wifidata[i][0],wifidata[i][1]), map, wifidata[i][2], wifidata[i][3], wifidata[i][4])
     }*/

    /*for (i = 0; i < librariesdata.length; i++) {
     addMarker(new google.maps.LatLng(librariesdata[i][0],librariesdata[i][1]), map, librariesdata[i][2], librariesdata[i][3], librariesdata[i][4])
     }*/

    for (i = 0; i < ferriesdata.length; i++) {
        addMarker(
            new google.maps.LatLng(
                ferriesdata[i][0],
                ferriesdata[i][1]),
            map, ferriesdata[i][2],
            ferriesdata[i][3],
            ferriesdata[i][4]
        );
    }

}

google.maps.event.addDomListener(window, 'load', initialize);