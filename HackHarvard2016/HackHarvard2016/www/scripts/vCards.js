(function() {
    var vcards = angular.module("VirtualBusinessCard", []);

    vcards.controller("vcController", ['$scope', function ($scope) {
        $scope.phoneNumber = "444-444-4444";
        $scope.name = "user"
    }]);


})()