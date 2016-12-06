(function () {
    "use strict";
    var module = angular.module('app', ['ngTouch', 'ui.grid', 'ngGrid', 'ui.grid.resizeColumns']);

    module.component('productTable',
        {
            templateUrl: '/app/ComponentsForOnlineStore/Components/product-table/product-table.template.html',
            controllerAs: 'vm',
            scope:true,
            controller: function ($scope) {
                var vm = this;
                vm.title = "Products";
                vm.categories = getCategories();
                vm.allProducts = allProducts();
                vm.category = vm.categories[0];
                vm.onCategoryChange = onCategoryChange;
               
                vm.products = getFilteredData();

                vm.gridOptions =
                {
                    columnDefs: getColumnDefinition(),
                    data: vm.products,
                    filterOptions: { filterText: '', useExternalFilter: true }
                };

                vm.gridOptions1 =
                {
                    columnDefs: getColumnDefinitionForOrders(),
                    data: [],
                    filterOptions: { filterText: '', useExternalFilter: true }

                };

                function onCategoryChange() {
                    vm.gridOptions.data = getFilteredData();
                }


                function getFilteredData() {
                    return vm.allProducts.filter(function (item) {
                        return item.Quantity > 0 && (item.Category === vm.category.Name || vm.category.Id === 0);
                    });
                }


                function getColumnDefinition() {
                    return [
                        { field: 'Name', displayName: 'Name' },
                        { field: 'Price', displayName: 'Price' },
                        { field: 'Quantity', displayName: 'Quantity' },
                        { field: 'Category', displayName: 'Category' },
                        {
                            name: 'Add to Cart',
                            cellTemplate: '/app/ComponentsForOnlineStore/Components/product-table/grid-option.template.html'
                        },
                        {
                            name: 'Remove',
                            cellTemplate:'/app/ComponentsForOnlineStore/Components/product-table/remove-item-template.html'
                        }
                    ];
                }

                function getColumnDefinitionForOrders() {
                    return [
                        { field: 'Product', displayName: 'Product' },
                        { field: 'Quantity', displayName: 'Quantity' },
                        { field: 'Price', displayName: 'Price', cellFilter: 'currency' },
                        { field: 'Category', displayName: 'Category', width: '*' },
                        { field: 'Date', cellFilter: 'date:\'MM/dd/yyyy\'', width: '20%' },
                        { field: 'Total', displayName: 'Total', cellFilter: 'currency' },
                        { name: 'Remove', cellTemplate: '/app/ComponentsForOnlineStore/Components/product-table/remove-item-template.html' }
                    ];
                }

                $scope.addRowsToSecondGrid = function (rowEntity) {
                    var rowId = {};
                    angular.forEach(vm.gridOptions1.data,
                        function (item) {
                            if (item.ProductId === rowEntity.ProductId) {
                                rowId = item;
                            }
                        });
                    if (angular.equals(rowId, {})) {
                        vm.gridOptions1.data.push({
                            'OrderId': 1,
                            'ProductId': rowEntity.ProductId,
                            'Product': rowEntity.Name,
                            'Quantity': rowEntity.Quantity,
                            'Category': rowEntity.Category,
                            'Price': rowEntity.Price,
                            'Date': Date.now(),
                            'Total': rowEntity.Price

                        });
                        rowEntity.Quantity--;
                        return;

                    }

                    rowEntity.Quantity--;
                    rowId.Quantity++;
                    rowId.Total = $scope.getTotal(rowId);
                    rowId.Remove = $scope.removeItems(rowId);
                }

                $scope.checkStock = function (rowEntity) {
                    if (rowEntity.Quantity <= 0) {
                        return true;
                    }
                    return false;
                }

                //$scope.removeItems = function (rowEntity) {
                //    var idx = vm.products.indexOf(rowEntity);
                //    if (idx >= 0) {
                //        rowEntity.splice(idx, 1);
                //    }

                //}

                $scope.getTotal = function (rowEntity) {
                    console.log(rowEntity.Quantity);
                    console.log(rowEntity.Price);
                    console.log(rowEntity.Quantity * rowEntity.Price);
                    return rowEntity.Quantity * rowEntity.Price;
                }

                function getCategories() {
                    return [
                        { Id: 0, Name: '---Please select---' },
                        { Id: 1, Name: 'Material' },
                        { Id: 2, Name: 'Food' },
                        { Id: 3, Name: 'Accessories' }
                    ];
                }


                function allProducts() {
                    return [
                        { ProductId: 1, Name: 'Product1', Quantity: 20, Price: '3', Category: vm.categories[1].Name },
                        { ProductId: 2, Name: 'Product2', Quantity: 10, Price: '4', Category: vm.categories[2].Name },
                        { ProductId: 3, Name: 'Product3', Quantity: 11, Price: '6', Category: vm.categories[3].Name },
                        { ProductId: 4, Name: 'Product4', Quantity: 1, Price: '4', Category: vm.categories[3].Name }
                    ];
                }

            },

        });
}());
