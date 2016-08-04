
(function () {
    angular.module('AboutModule', ['Common'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
})();

