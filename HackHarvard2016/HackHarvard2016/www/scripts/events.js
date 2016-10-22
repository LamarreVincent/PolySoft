(function () {
    var events = angular.module("Events", []);

    events.controller("eventsController", ['$scope', 'eventsAvailable', function ($scope, eventsAvailable) {
        $scope.name = "Event name";
        $scope.events = eventsAvailable();
    }]);
    
    events.factory('eventsAvailable', [ function (win) {
        
        return function()
        {
            var eventList = [
                { name: 'PolyAtHarvard', emplacement: "Boston", hour: '19h' },
                { name: 'CodeChanllenges', emplacement: "Montreal", hour: '20h' },
            ];
            return eventList;
        }
    }]);

    


})()