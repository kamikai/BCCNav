'use strict';

var app = angular.module('BCCNavApp', [])
    .controller('BCCNavCtrl', ['$scope', function($scope) {

        $scope.utilities = [
            {title: 'Bike Racks', key: 'bikeracks', display: false, markers: bikerackdata},
            {title: 'Bus Stops', key: 'bus_stops', display: false, markers: busstopdata},
            {title: 'Ferry Terminals', key: 'ferries', display: false, markers: ferriesdata},
            {title: 'Libraries', key: 'libraries', display: false, markers: librariesdata},
            {title: 'Wifi Hotspots', key: 'wifi', display: false, markers: wifidata}
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
        };
        console.log('Scope!');
    }]);

/* Modify angular to not conflict with Jinja template tags. */
app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);
