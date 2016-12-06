 (function() {
     var app = angular.module('app', ['ngAnimate', 'ngSanitize', 'ngTouch', 'ui.grid']);
 
 app.controller('DemoCtrl',[ $scope, function($scope) {
     var vm = this;
     vm.items = getItems();
     vm.getResult = getResult();
       
     function getItems() {
         return [
             { name: 'Hello' },
             { name: 'Magic'}
         ];
     }
     function getResult($index,item) {
         vm.indexResult = vm.item.filter[$index];
         vm.itemResult = item;
     }
 }
  
]);
})();