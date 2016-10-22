﻿(function() {
    'use strict';
    
    var harvard = angular.module("HackHarvard", ['HackHarvard.routes',
        'HackHarvard.test.controllers',
        "VirtualBusinessCard",
        "Events",
        'ngMaterial',
        'Profile',
        'Home',
        'NewProfile'
    ]);

    angular.module('HackHarvard.routes', ['ngRoute']);
    angular.module('HackHarvard.test.controllers', []);
    angular.module('Events', []);
    angular.module('Profile', []);
    angular.module('Home', []);
    angular.module('NewProfile', []);
    angular.module('VirtualBusinessCard', []);


    harvard.run();
})()