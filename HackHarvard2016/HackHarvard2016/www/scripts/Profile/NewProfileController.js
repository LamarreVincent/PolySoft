(function () {

    angular
      .module('NewProfile')
      .controller('NewProfileController', NewProfileController)


    NewProfileController.$inject = ['$rootScope', '$scope', '$cordovaCamera', '$location'];

    function NewProfileController($rootScope, $scope, $cordovaCamera, $location) {
        var vm = this;
        vm.name= "T";
        vm.phoneNumber;
        vm.email = "@";
        vm.logo = "/";

        vm.save = function ()
        {
            window.localStorage.setItem("ProfileName", vm.name);
            window.localStorage.setItem("Logo", vm.logo);

            $location.path('/Events')

        }

        vm.addLogo = function()
        {

            window.alert("Logo");

            var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
            };

            $cordovaCamera.getPicture(options)
                .then(function (imageURI)
                {
                    vm.logo = imageURI;
                }, function (err)
                {
                    window.alert("Error");
            });
        }
    }


})()