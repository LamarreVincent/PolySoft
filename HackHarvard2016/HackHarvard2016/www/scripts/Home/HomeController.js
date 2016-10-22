(function () {

    angular
      .module('Home')
      .controller('HomeController', HomeController)


    HomeController.$inject = ['$rootScope', '$scope', '$mdSidenav', '$location'];

    function HomeController($rootScope, $scope, $mdSidenav, $location) {
        $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
        };

        $scope.navigate = function (target) {
            $location.url(target);
        };
    }


})()