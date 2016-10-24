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
        .when('/Events', {
            controller: 'EventsController',
            controllerAs: 'vm',
            templateUrl: 'templates/Events/Events.html'
        })
      .when('/businessCard', {
          controller: 'VirtualBusinessCardController',
          controllerAs: 'vm',
          templateUrl: 'templates/BusinessCards/BusinessCard.html'
      })
      .when('/Profile', {
          controller: 'ProfileController',
          controllerAs: 'vm',
          templateUrl: 'templates/Profile/Profile.html'
      })
      .when('/NewProfile', {
          controller: 'NewProfileController',
          controllerAs: 'vm',
          templateUrl: 'templates/Profile/NewProfile.html'
      })
      .when('/Home', {
          controller: 'HomeController',
          controllerAs: 'vm',
          templateUrl: 'templates/home/Home.html',
          resolve:
              {
                  "check": function ($location) {
                      var profileName = window.localStorage.getItem("ProfileName");

                      if (profileName == null || profileName == "undefined") {
                          $location.path('/NewProfile');
                      }
                  }
              }
      })
      .otherwise('/Home');
    }
})();