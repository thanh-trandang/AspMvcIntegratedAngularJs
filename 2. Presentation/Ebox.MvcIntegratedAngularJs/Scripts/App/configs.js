﻿(function () {
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
            blockUIConfig.autoInjectBodyBlock = false;
            blockUIConfig.blockBrowserNavigation = true;
            blockUIConfig.template = '<div class=\"block-ui-overlay\"></div><div class=\"block-ui-message-container\" aria-live=\"assertive\" aria-atomic=\"true\"></div>';
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

    angular.module('appCore').config(validationCofig);  

    function validationCofig(valdrProvider, valdrMessageProvider) {
        valdrMessageProvider.setTemplate('<div class="valdr-message">{{ violation.message }}</div>');
    }



})();