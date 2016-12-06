(function () {
    var app = angular.module('app', ['ngTouch', 'ui.grid']);
    app.service('retrieveDataFromProduct', ['$scope', '$http', function ($scope, $http) {

        $http.get('/app/product.json')
         .success(function (data) {
             $scope.gridOptions.data = data;
                       })
                        .error(function (data, status, headers, config) {
                            console.log('error');
                        });

    }]);
})();



