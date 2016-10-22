
(function () {

    angular
      .module('VirtualBusinessCard')
      .controller('VirtualBusinessCardController', VirtualBusinessCardController);


    VirtualBusinessCardController.$inject = ['$rootScope', '$scope'];

    /**
    * @namespace Controller
    */
    function VirtualBusinessCardController($rootScope, $scope) {
        var vm = this;
        vm.phoneNumber = "444-444-4444";
        vm.name = "user"
    }

})()