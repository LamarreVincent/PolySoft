(function () {

    angular
      .module('Profile')
      .controller('ProfileController', ProfileController)


    ProfileController.$inject = ['$rootScope', '$scope'];

    function ProfileController($rootScope, $scope) {
        var vm = this;
        vm.name = "My name"
        vm.events = "None"
    }

   
})()