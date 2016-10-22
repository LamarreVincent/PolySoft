(function () {
    'use strict';

    angular
      .module('SideNav')
      .controller('SideNavController', SideNavController)

    SideNavController.$inject = ['$scope', '$mdSidenav', '$location'];

    function SideNavController($scope, $mdSidenav, $location) {
        $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
        };

        $scope.navigate = function (target) {
            $location.url(target);
        };
    }
})()