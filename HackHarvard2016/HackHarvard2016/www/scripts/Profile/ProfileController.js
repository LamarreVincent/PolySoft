(function () {

    angular
      .module('Profile')
      .controller('ProfileController', ProfileController)


    ProfileController.$inject = ['$rootScope', '$scope'];

    function ProfileController($rootScope, $scope) {
        var vm = this;
        vm.name = window.localStorage.getItem("ProfileName");
        vm.logo = window.localStorage.getItem("Logo");

        vm.currentNavItem = 'cards';
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
        vm.events = [
            {
                Address: "59 Shepard street, Cambridge",
                Date: "2016-10-22",
                EventName: "HackHarvard",
                Time: "16:30",
                CardList: [
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
                ]
            }
        ];

        vm.changeProfileName = function changeProfileName(profileName)
        {
            window.localStorage.setItem("ProfileName", profileName);
        }

        vm.changeProfilePicture = function changeProfilePicture(profilePicture)
        {
            window.localStorage.setItem("Logo", profilePicture);
        }

        vm.deleteProfile = function deleteProfile()
        {
            window.localStorage.setItem("ProfileName", "undefined");
            window.localStorage.setItem("Logo", "undefined");
        }
    }

   
})()