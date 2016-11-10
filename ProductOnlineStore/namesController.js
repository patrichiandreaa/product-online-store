angular.module('myApp', []).controller('namesCtrl', function ($scope) {
    $scope.products = [
        { Name: 'Product1', Quantity: 20, Price: '3$', Category: 'test' },
        { Name: 'Product2', Quantity: 10, Price: '4$', Category: 'test1' }
    ];
});


