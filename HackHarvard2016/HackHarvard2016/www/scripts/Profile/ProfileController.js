(function () {

    angular
      .module('Profile')
      .controller('ProfileController', ProfileController)


    ProfileController.$inject = ['$rootScope', '$scope'];

    function ProfileController($rootScope, $scope) {
        var vm = this;
        vm.name = window.localStorage.getItem("ProfileName");
        vm.logo = window.localStorage.getItem("Logo");

        vm.currentNavItem = 'cards';
        vm.cards = 'These are cards';
        vm.events = 'These are past, next, hosted events';
        vm.settings = 'This is the settings section';

        vm.changeProfileName = function changeProfileName(profileName)
        {
            window.localStorage.setItem("ProfileName", profileName);
        }

        vm.changeProfilePicture = function changeProfilePicture(profilePicture)
        {
            window.localStorage.setItem("Logo", profilePicture);
        }

        vm.deleteProfile = function deleteProfile()
        {
            window.localStorage.setItem("ProfileName", "undefined");
            window.localStorage.setItem("Logo", "undefined");

            console.log("Local storage: ");
            console.log(window.localStorage.getItem("ProfileName"));
            console.log(window.localStorage.getItem("Logo"));
        }
    }

   
})()