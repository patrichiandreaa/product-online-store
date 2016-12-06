(function() {
    "use strict";
    var module = angular.module("app");
    function buildEntries(value, max) {
        var entries = [];
        for (var i = 0; i < max; i++) {
            var icon = i <= value ? "glyphicon-star" : "glyphicon-star-empty";
            entries.push(icon);
        }

        return entries;
    }
    module.component("productRating",
    {
        templateUrl: "/app/Components/Templates/product-rating.component.html",
        bindings: {
            value: "<",
            max: "<",
            setRAting:"&"
        },
        controllerAs:"vm",
        controller: function() {
            var vm = this;

            vm.$onInit= function() {
                vm.entries = new Array(buildEntries(vm.value,vm.max));
            }
            vm.$onChange = function() {
                vm.entries = new Array(buildEntries(vm.value,vm.max));
            }
    }
    });
}());