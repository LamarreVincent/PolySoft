(function () {

    angular
      .module('Events')
      .controller('EventsController', EventsController)
      .factory('EventAvailableFactory', EventAvailableFactory)


    EventsController.$inject = ['$rootScope', '$scope', 'EventAvailableFactory', 'GetEventListService'];

    function EventsController($rootScope, $scope, EventAvailableFactory, GetEventListService) {
        /*
            Etapes pour utiliser un autre service dans celui-ci
            1. creer service
            2. s'assurer que le service fais un return function(){}
            3. ajouter module dans module.js
            4. dans module.js, ajouter nouveau module dans celui-ci (angular.module('Events', ['Firebase']);)
            5. mettre nom de la factory dans EventsController.$inject
        */

        /*
        var test;
        GetEventListService().then(function (snapshot) {
            test = JSON.stringify(snapshot.val());
        });
        */
        
        var vm = this;
        vm.name = "Event name";
        EventAvailableFactory();
    }

    function EventAvailableFactory() {
        return function () {
            var eventList = [
                { name: 'PolyAtHarvard', emplacement: "Boston", hour: '19h' },
                { name: 'CodeChanllenges', emplacement: "Montreal", hour: '20h' },
            ];
            return eventList;
        }
    }    
})()