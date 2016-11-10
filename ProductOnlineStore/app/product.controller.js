(function () {
    var app = angular.module('app', ['ngTouch', 'ui.grid']);

    app.controller("ProductController", ['$scope', function ($scope) {
        var vm = this;
        vm.categories =
      [
          { Id: 1, Name: 'Material' },
          { Id: 2, Name: 'Food' }
      ];
        vm.products =
           [
       { Id: 1, Name: 'Product1', Quantity: 20, Price: '3$', Category: vm.categories[0].Name },
       { Id: 2, Name: 'Product2', Quantity: 10, Price: '4$', Category: vm.categories[1].Name }
           ];

        vm.category = vm.categories[1];

        vm.gridOptions =
   {
       data: vm.products,
       columnDefs: [
           { field: 'Id', displayName: 'Id' },
           { field: 'Name', displayName: 'Name' },
           { field: 'Price', displayName: 'Price' },
           { field: 'Quantity', displayName: 'Quantity' }]
   };
        vm.title = "Products";
    }]);
})();



