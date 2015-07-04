'use strict';

var app = angular.module('BCCNavApp', [])
    .controller('BCCNavCtrl', ['$scope', function($scope) {
        $scope.utilities = [
            {title: 'Bike Racks', key: 'bikeracks', display: false},
            {title: 'Bus Stops', key: 'bus_stops', display: false},
            {title: 'Ferry Terminals', key: 'ferries', display: false},
            {title: 'Libraries', key: 'libraries', display: false},
            {title: 'Wifi Hotspots', key: 'wifi', display: false}
        ];

        $scope.clicker = function () {

        }

    }]);

/* Modify angular to not conflict with Jinja template tags. */
app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);
