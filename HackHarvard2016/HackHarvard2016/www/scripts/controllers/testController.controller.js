/**
* testController
* @namespace HackHarvard.test.controllers
*/
(function () {
    'use strict'

    angular
      .module('HackHarvard.test.controllers')
      .controller('testController', testController);

    testController.$inject = ['$rootScope', '$scope'];

    /**
    * @namespace testController
    */
    function testController($rootScope, $scope) {
        var vm = this;
        vm.indexPhrase = "This is an index page";
    }
})();