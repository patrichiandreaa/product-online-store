(function() {
    angular.module('app')
        .directive('header', headerDirective);

    function headerDirective() {
        return {
            restrict: 'E',
             templateUrl:'/app/headerTemplate.html'
    }
}
})();