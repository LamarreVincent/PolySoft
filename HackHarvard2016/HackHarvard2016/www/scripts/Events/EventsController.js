(function () {

    angular
      .module('Events')
      .controller('EventsController', EventsController)
      .factory('EventAvailableFactory', EventAvailableFactory)


    EventsController.$inject = ['$rootScope', '$scope', 'EventAvailableFactory'];

    function EventsController($rootScope, $scope, EventAvailableFactory) {
        var vm = this;
        vm.name = "Event name";
        vm.events = EventAvailableFactory();
    }

    function EventAvailableFactory()
    {
        return function()
        {
            var eventList = [
                { name: 'PolyAtHarvard', emplacement: "Boston", hour: '19h' },
                { name: 'CodeChanllenges', emplacement: "Montreal", hour: '20h' },
            ];
            return eventList;
        }
    }
})()