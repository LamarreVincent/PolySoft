﻿(function() {
    'use strict';
    
    var harvard = angular.module("HackHarvard", ['HackHarvard.routes', 'HackHarvard.test.controllers', "VirtualBusinessCard", "Events", 'ngMaterial']);

    angular.module('HackHarvard.routes', ['ngRoute']);
    angular.module('HackHarvard.test.controllers', []);

    harvard.controller("indexController", ['$scope', function ($scope) {
        $scope.name = "WE ARE THE CHAMPION";
    }]);

    harvard.run();
})()