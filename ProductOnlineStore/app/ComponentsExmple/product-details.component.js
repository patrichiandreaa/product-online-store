(function() {
    "use strict";
    var module = angular.module("app");

    module.component("productDetails",
    {
        templateUrl: "/app/Components/Templates/product-details.component.html",
        $routeConfig:[
            {path:"/description ",component:"productDescription", name:"Description"},
            {path:"/fabrication",component:"productFabrication", name:"Fabrication"}
        ],
        controllerAs:"vm",
        controller:function() {
            var vm = this;
            vm.$routerOnActivate = function() {
                vm.$routerOnActivate = function(next, previous) {
                    vm.Id = next.params.id;
                }
            };
        }
    
});
} ());