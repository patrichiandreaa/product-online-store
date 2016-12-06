(function() {
    "use strict";

    var module = angular.module("app");

    function fetchMovies($http) {
        return $http.get('/app/product.json')
            .then(function(response) {
                return response.data;
            });
    }

    function controller($http) {
        var vm = this;
        vm.message = "Some message";

        vm.changeMessage = function () {
            vm.message = "New message";
        };
        vm.products = [];
        vm.$onInit= function() {
            fetchMovies($http)
                .then(function(products) {
                    vm.products = products;
                });

            vm.increaseQuantity=function(products)
            {
                if (products.Quantity <= 30)
                {
                    products.Quantity += 1;
                }

             
            }
            vm.decreaseQuantity=function(products)
            {
                if (products.Quantity > 30)
                {
                    products.Quantity -= 1;
                }
            }
            vm.goTo = function(id) {
                vm.$router.navigate(["Details", { id:products.Id},"Description"]);
            };
             
            vm.setRating= function(products, newRating) {
                products.Rating = newRating;
            }
        }
    }
    module.component("productList",
    {
        templateUrl: '/app/Components/Templates/product-list.component.html',
        controllerAs:"vm",
        controller: ["$http", controller],
        bindings:
        {
            "router":"<"
        }
});

}());