(function () {

    angular
      .module('NewProfile')
      .controller('NewProfileController', NewProfileController)


    NewProfileController.$inject = ['$rootScope', '$scope'];

    function NewProfileController($rootScope, $scope) {
        var vm = this;
        vm.name;
        vm.save = function()
        {
            window.localStorage.setItem("ProfileName", vm.name);
            window.alert(window.localStorage.getItem("ProfileName"));
        }
    }


})()