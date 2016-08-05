(function () {
    angular.module('appCore')
        .config(function ($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        });;
})();