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
          controller: 'indexController',
          controllerAs: 'vm',
          templateUrl: '/templates/home/index.html'
      })
      .when('/test', {
        controller: 'testController',
        controllerAs: 'vm',
        templateUrl: '/templates/home/test.html'
      })
      .otherwise('/');

      $locationProvider.html5Mode(true);
    }
})();