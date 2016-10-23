(function () {

    angular
      .module('NewProfile')
      .controller('NewProfileController', NewProfileController)


    NewProfileController.$inject = ['$rootScope', '$scope', '$cordovaCamera', '$location'];

    function NewProfileController($rootScope, $scope, $cordovaCamera, $location) {
        var vm = this;
        vm.name= "";
        vm.phoneNumber;
        vm.email = "@";
        vm.logo = 0;
        vm.display = "images\\placeholder-user.png"

        vm.save = function ()
        {
            window.localStorage.setItem("ProfileName", vm.name);
            window.localStorage.setItem("Logo", vm.logo);

            $location.path('/Profile')
        }

        vm.addLogo = function()
        {
            var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
            };

            $cordovaCamera.getPicture(options)
                .then(function (imageURI)
                {
                    vm.logo = imageURI;
                    vm.display = imageURI;
                }, function (err)
                {
                    window.alert("Error");
            });
        }
    }


})()