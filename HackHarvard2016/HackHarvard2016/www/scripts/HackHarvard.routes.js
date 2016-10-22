(function () {
    'use strict';

    angular
        .module('HackHarvard.routes')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    /**
    * @name config
    * @desc Define valid application routes
    */
    function config($routeProvider, $locationProvider) {
      $routeProvider
      // Index page
      .when('/', {
          controller: 'HomeController',
          controllerAs: 'vm',
          templateUrl: '/templates/Home/Home.html',
          resolve:
              {
                  "check":function($location)
                  {
                      window.localStorage.removeItem("ProfileName");
                      var profileName = window.localStorage.getItem("ProfileName");
                      if(profileName == null)
                      {
                          $location.path('/NewProfile');
                      }
                  }
              }

      })
        .when('/businessCard', {
            controller: 'VirtualBusinessCardController',
           controllerAs: 'vm',
           templateUrl: '/templates/BusinessCards/BusinessCard.html'
        })
        .when('/Events', {
            controller: 'EventsController',
            controllerAs: 'vm',
            templateUrl: '/templates/Events/Events.html'
        })
        .when('/Profile', {
            controller: 'ProfileController',
            controllerAs: 'vm',
            templateUrl: '/templates/Profile/Profile.html'
        })
        .when('/NewProfile',{
            controller: 'NewProfileController',
            controllerAs: 'vm',
            templateUrl: '/templates/Profile/NewProfile.html'
        })
      .otherwise('/');

      $locationProvider.html5Mode(true);
    }
})();