'use strict';

var app = angular.module('BCCNavApp', [])
    .controller('BCCNavCtrl', ['$scope', function($scope) {

        $scope.utilities = [
            {title: 'Bike Racks', display: false, markers: bikerackdata},
            {title: 'Boat Ramps', display: false, markers: boatrampsdata},
            {title: 'Bus Stops', display: false, markers: busstopdata},
            {title: 'Clinics', display: false, markers: clinicsdata},
            {title: 'Dog Parks', display: false, markers: dogdata},
            {title: 'Drinking Fountains', display: false, markers: fountainsdata},
            {title: 'Ferry Terminals', display: false, markers: ferriesdata},
            {title: 'Libraries', display: false, markers: librariesdata},
            {title: 'Pools', display: false, markers: poolsdata},
            {title: 'Skate Parks', display: false, markers: skatedata},
            {title: 'Tennis Courts', display: false, markers: tennisdata},
            {title: 'Public Toilets', display: false, markers: toiletsdata},
            {title: 'Wifi Hotspots', display: false, markers: wifidata}
        ];

        $scope.toggleUtility = function (utility) {
            console.log('Toggling utility: ' + utility.title + ', Now: ' + utility.display);
            $scope.redraw();
        };

        $scope.redraw = function () {
            deleteMarkers();
            for (var i=0; i<$scope.utilities.length; i++) {
                if ($scope.utilities[i].display) {
                    allmarkers.push.apply(allmarkers, $scope.utilities[i].markers);
                }
            }
            renderMarkers();
        };

    }]);

/* Modify angular to not conflict with Jinja template tags. */
app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);
