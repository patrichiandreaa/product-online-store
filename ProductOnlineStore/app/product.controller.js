(function() {
    var app = angular.module('app', ['ngTouch', 'ui.grid']);

    app.controller("ProductController",['$scope','$timeout', function($scope,$timeout) {
            var vm = this;
            vm.title = "Products";
            vm.categories = getCategories();
            vm.products = getProducts();
            vm.category = vm.categories[1];
            vm.onCategoryChange = onCategoryChange;

            vm.products = vm.products.filter(function (item) {
                return (item.Category === vm.category.Name);
            });
        
            function onCategoryChange($event) {
                
            }
            vm.gridOptions =
            {
                data: vm.products,
                columnDefs: getColumnDefinition(),
                filterOptions: { filterText: '', useExternalFilter: true }
            };


            function getCategories() {
                return [
                    { Id: 1, Name: 'Material' },
                    { Id: 2, Name: 'Food' }
                ];
            }

            function getProducts() {
                return [
                    { Id: 1, Name: 'Product1', Quantity: 20, Price: '3$', Category: vm.categories[0].Name },
                    { Id: 2, Name: 'Product2', Quantity: 10, Price: '4$', Category: vm.categories[1].Name }
                ];
            }

            function getColumnDefinition() {
                return [
                    { field: 'Id', displayName: 'Id' },
                    { field: 'Name', displayName: 'Name' },
                    { field: 'Price', displayName: 'Price' },
                    { field: 'Quantity', displayName: 'Quantity' }
                ];
            }

        }
    ]);
})();
//(function () {
//    var app = angular.module('app', ['ngTouch', 'ui.grid']);
//    app.controller("ProductController", ['$scope', '$http', function ($scope, $http) {
//     var vm = this;
//        $http.get('/app/product.json')
//                .success(function (data) {
//                    $scope.myData = data;
//                })
//                .error(function (data, status, headers, config) {
//                    console.log('error');
//                });

//        vm.filterOptions =
//        {
//            filterText: ''
//        };
//        vm.gridOptions =
//   {
//       data: 'product.json',
//       columnDefs: [
//           { field: 'Id', displayName: 'Id' },
//           { field: 'Name', displayName: 'Name' },
//           { field: 'Price', displayName: 'Price' },
//           { field: 'Quantity', displayName: 'Quantity' }],
//       filterOptions:vm.filterOptions
//   };
//        vm.title = "Products";
//        }]);
// })();



