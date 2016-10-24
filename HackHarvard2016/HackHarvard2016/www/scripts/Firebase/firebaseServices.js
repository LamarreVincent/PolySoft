(function () {
    angular
        .module('Firebase')

        .factory('GetEventListService', function () {
            return function () { return firebase.database().ref('/event/').once('value') };
            
            /*
                newEventListServiceInstance = [
                    { name: 'PolyAtHarvard', emplacement: "Boston", hour: '19h' },
                    { name: 'CodeChanllenges', emplacement: "Montreal", hour: '20h' },
                ];
                return newEventListServiceInstance;
            */         
        })

        .factory('CreateEventService', function (address, date, eventName, time) {
            var newEventCreatorServiceInstance;
            function createNewEvent(address, date, eventName, time) {
                // TODO : Changer 5 pour une variable
                firebase.database().ref('/event/5').set({
                    Address: address,
                    Date: date,
                    EventName: eventName,
                    Time: time
                });
            }
            return newEventCreatorServiceInstance;
        })

        .factory('CreateCardService', function (company, emain, job, name, phone) {
            var newCardCreatorServiceInstance;
            return newCardCreatorServiceInstance;
        })
})()