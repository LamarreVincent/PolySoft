﻿(function () {

    angular
      .module('Profile')
      .controller('ProfileController', ProfileController)


    ProfileController.$inject = ['$rootScope', '$scope'];

    function ProfileController($rootScope, $scope) {
        var vm = this;
        vm.name = window.localStorage.getItem("ProfileName");
        vm.logo = window.localStorage.getItem("Logo");
    }

   
})()