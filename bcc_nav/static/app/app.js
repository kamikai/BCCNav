'use strict';

var app = angular.module('BCCNavApp', [])
    .controller('BCCNavCtrl', ['$scope', function($scope) {

        $scope.utilities = [
            {title: 'Bike Racks', key: 'bikeracks', display: false, markers: bikerackdata},
            {title: 'Bus Stops', key: 'bus_stops', display: false, markers: busstopdata},
            {title: 'Ferry Terminals', key: 'ferries', display: false, markers: ferriesdata},
            {title: 'Libraries', key: 'libraries', display: false, markers: },
            {title: 'Wifi Hotspots', key: 'wifi', display: false, markers: }
        ];

        $scope.toggleUtility = function (utility) {
            console.log('Toggling utility: ' + utility.title + ', Now: ' + utility.display);

            if (utility.display) {
                if (!utility)
            }
        }

    }]);

/* Modify angular to not conflict with Jinja template tags. */
app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);
