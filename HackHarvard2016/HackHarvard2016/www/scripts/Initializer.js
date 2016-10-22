(function() {
    'use strict';
    
    var harvard = angular.module("HackHarvard", ['HackHarvard.routes', 'Home',
        "VirtualBusinessCard", "Events", 'Profile', 'NewProfile']);

    angular.module('HackHarvard.routes', ['ngRoute']);
    angular.module('VirtualBusinessCard', []);
    angular.module("Events", []);
    angular.module('Profile', []);
    angular.module('Home', []);
    angular.module('NewProfile', []);

    harvard.run();
})()