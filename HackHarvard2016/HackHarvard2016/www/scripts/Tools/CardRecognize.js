(function () {

    angular
      .module('CardRecognize')
      .factory('CardRecognizeFactory', CardRecognizeFactory)

    CardRecognizeFactory.$inject = ['$rootScope', '$scope'];

    function CardRecognizeFactory($rootScope, $scope)
    {
        return "ALLO";
        //return function()
        //{
        //    alert("Recognize")
        //    var params = {
        //        // Request parameters
        //        "language": "unk",
        //        "detectOrientation ": "true",
        //    };
        //    var token = a6d6668766e0413cba64ca6a75942686;

        //    $.ajax({
        //        url: "https://api.projectoxford.ai/vision/v1.0/ocr?" + $.param(params),
        //        beforeSend: function (xhrObj) {
        //            // Request headers
        //            xhrObj.setRequestHeader("Content-Type", "application/json");
        //            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", token);
        //        },
        //        type: "POST",
        //        // Request body
        //        data: { "url": "https://identity.stanford.edu/print-toolkit/images/student-business-card-870.png" },
        //    })
        //    .done(function (data) {
        //        alert("success");
        //        window.alert(data);
        //    })
        //    .fail(function () {
        //        alert("error");
        //    });
        //}
    }


})()