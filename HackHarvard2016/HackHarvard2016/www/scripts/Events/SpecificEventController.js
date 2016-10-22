(function () {

    angular
      .module('SpecificEvent')
      .controller('SpecificEventController', SpecificEventController)

    SpecificEventController.$inject = ['$rootScope', '$scope', '$cordovaCamera', '$http'];

    function SpecificEventController($rootScope, $scope, $cordovaCamera, $http)
    {    
        var vm = this;
        vm.addContact = function ()
        {
            alert("AddCOntact");
            var pictureUri = "";
            var options = {
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
            };

            $cordovaCamera.getPicture(options)
                .then(function (imageURI) {
                    pictureUri = imageURI;
                    vm.recognize(pictureUri);

                }, function (err) {
                    window.alert("Error");
                });
        }

        vm.recognize = function(pictureUri)
        {
            var image = new Image;
            image.src = pictureUri;
            var binaryImage = vm.getBase64Image(image)

            var request = {
                method: 'POST',
                url: 'https://api.projectoxford.ai/vision/v1.0/ocr?language=en&detectOrientation=true',
                headers: { 'content-type': 'application/json', 'Ocp-Apim-Subscription-Key': 'a6d6668766e0413cba64ca6a75942686' },
                //data: { 'url': 'http://fabricjs.com/article_assets/2_7.png' }
                data: binaryImage
            }

            $http(request).then(function (response)
            {
                alert(response.data);
            },
            function (response)
            {
                alert(response);
            });
        }

        vm.getBase64Image = function(img) {
            // Create an empty canvas element
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            // Copy the image contents to the canvas
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            // Get the data-URL formatted image
            // Firefox supports PNG and JPEG. You could check img.src to guess the
            // original format, but be aware the using "image/jpg" will re-encode the image.
            var dataURL = canvas.toDataURL("image/png");

            return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        }
    }



})()