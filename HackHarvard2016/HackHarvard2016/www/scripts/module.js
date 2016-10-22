(function() {

    var harvard = angular.module("HackHarvard", ["VirtualBusinessCard", "Events"]);
    harvard.controller("indexController", ['$scope', function ($scope) {
        $scope.name = "WE ARE THE CHAMPION";
    }]);
})()