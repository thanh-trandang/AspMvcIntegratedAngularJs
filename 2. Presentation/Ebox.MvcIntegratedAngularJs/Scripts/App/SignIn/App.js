
(function () {
    angular.module('SignInModule', ['Common'])
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    });
})();
