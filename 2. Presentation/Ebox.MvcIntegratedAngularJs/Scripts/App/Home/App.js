
(function () {
    angular.module('HomeModule', ['Common'])
        .config(function ($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        });   
})();

