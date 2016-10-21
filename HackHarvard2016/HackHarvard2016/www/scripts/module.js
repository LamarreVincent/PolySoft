(function() {

    var harvard = angular.module("HackHarvard", []);
    harvard.controller("indexController", ['$scope', function ($scope) {
        $scope.name = "WE ARE THE CHAMPION";
    }]);
})()