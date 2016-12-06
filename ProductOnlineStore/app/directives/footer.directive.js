(function () {
    angular.module('app')
        .directive('footer', footerDirective);

    function footerDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/footerTemplate.html'
        }
    }
})();