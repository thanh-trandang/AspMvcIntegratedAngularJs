(function () {
    angular.module('appCore')
        .config(function ($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        });

    angular.module('appCore')
        .config(function (blockUIConfig) {
            blockUIConfig.message = 'Hang on!';
            blockUIConfig.delay = 0;
            blockUIConfig.blockBrowserNavigation = true;
        });

    angular.module('appCore')
    .config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            closeButton: true,
            timeOut: 0,
            extendedTimeOut: 0,
            autoDismiss: false,
            closeHtml: '<button>&times;</button>',
            positionClass: 'toast-bottom-right',
            target: 'body'
        });
    });

})();