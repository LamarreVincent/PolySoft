(function() {
    'use strict';
    
    var harvard = angular.module("HackHarvard", ['HackHarvard.routes',
        'HackHarvard.test.controllers',
        "VirtualBusinessCard",
        "Events",
        "Firebase",
        'ngMaterial',
        'Profile',
        'Home',
        'NewProfile',
        'ngCordova',
        'SideNav'
    ]);

    angular.module('HackHarvard.routes', ['ngRoute']);
    angular.module('HackHarvard.test.controllers', []);
    angular.module('Events', ['Firebase']);
    angular.module('Firebase', []);
    angular.module('Profile', []);
    angular.module('Home', ['ngRoute', 'SideNav']);
    angular.module('NewProfile', []);
    angular.module('VirtualBusinessCard', []);
    angular.module('SideNav', []);


    harvard.run();
})()