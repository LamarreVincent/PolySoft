
(function () {

    angular
      .module('VirtualBusinessCard')
      .controller('VirtualBusinessCardController', VirtualBusinessCardController);


    VirtualBusinessCardController.$inject = ['$rootScope', '$scope', '$location'];

    /**
    * @namespace Controller
    */
    function VirtualBusinessCardController($rootScope, $scope, $location) {
        var vm = this;
        vm.phoneNumber = "444-444-4444";
        vm.name = "user"
        vm.cards = [
            {
                Company: "Dunkin Donuts",
                Email: "e@ma.il",
                Job: "Regional manager",
                Name: "Jim Freckels",
                Phone: "(514) 123-4567"
            },
            {
                Company: "Dunkin Donuts",
                Email: "e@ma.il",
                Job: "Regional manager",
                Name: "Jim Freckels",
                Phone: "(514) 123-4567"
            },
            {
                Company: "Dunkin Donuts",
                Email: "e@ma.il",
                Job: "Regional manager",
                Name: "Jim Freckels",
                Phone: "(514) 123-4567"
            },
            {
                Company: "Dunkin Donuts",
                Email: "e@ma.il",
                Job: "Regional manager",
                Name: "Jim Freckels",
                Phone: "(514) 123-4567"
            },
            {
                Company: "Dunkin Donuts",
                Email: "e@ma.il",
                Job: "Regional manager",
                Name: "Jim Freckels",
                Phone: "(514) 123-4567"
            },
            {
                Company: "Dunkin Donuts",
                Email: "e@ma.il",
                Job: "Regional manager",
                Name: "Jim Freckels",
                Phone: "(514) 123-4567"
            },
            {
                Company: "Dunkin Donuts",
                Email: "e@ma.il",
                Job: "Regional manager",
                Name: "Jim Freckels",
                Phone: "(514) 123-4567"
            },
            {
                Company: "Tim Hortons",
                Email: "e@ma.il",
                Job: "Cashier",
                Name: "Bob Fuse",
                Phone: "(514) 923-4567"
            }
        ];
        vm.card = vm.cards[$location.search().id];
    }

})()