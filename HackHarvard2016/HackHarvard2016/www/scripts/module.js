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
        'SideNav',
        'ngMessages'
    ]);

    angular.module('HackHarvard.routes', ['ngRoute']);
    angular.module('HackHarvard.test.controllers', []);
    angular.module('Events', ['Firebase']);
    angular.module('Firebase', []);
    angular.module('Profile', []);
    angular.module('Home', ['ngRoute',]);
    angular.module('NewProfile', []);
    angular.module('VirtualBusinessCard', []);
    angular.module('SideNav', []);

    harvard.run();

    //Change the color palette
    harvard.config(theming);
    theming.$inject = ['$mdThemingProvider'];
    function theming($mdThemingProvider)
    {
        $mdThemingProvider.theme('default')
        .primaryPalette('deep-purple')
        .accentPalette('deep-orange')
        .warnPalette('red');
    }
})()