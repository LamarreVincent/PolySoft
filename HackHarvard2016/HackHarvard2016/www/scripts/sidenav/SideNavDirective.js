(function () {
  'use strict';

	angular
      .module('SideNav')
      .directive('sidenav', sidenav);

  /**
  * @namespace sidenav
  */
	function sidenav() {
    /**
    * @name sidenav
    * @desc The directive to be returned
    * @memberOf SideNav
    */
    var directive = {
      controller: 'SideNavController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
      	sidenav: '='
      },
      templateUrl: 'templates/sidenav/sidenavDirective.html'
    };

    return directive;
  }
})();
