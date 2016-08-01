var EBoxAngularMVCApp = angular.module("EBoxAngularMVCApp", ['ui.router']);

// EBoxAngularMVCApp.controller("HomeController", HomeController);
var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('index', {
            url: '/index?donuts',
            views: {
                "containerOne": {
                    templateUrl: '/Home/Index'
                },
                "containerTwo": {
                    templateUrl: function (params) {
                        if (params.donuts) {
                            return '/Home/About?donuts=' + params.donuts;
                        }
                        else {
                            return "/Home/About";
                        }
                    }
                }
            }
        });
};

configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];
var runFunction = function ($rootScope, $location, $injector) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

    });
};
runFunction.$inject = ['$rootScope', '$location', '$injector'];
EBoxAngularMVCApp.config(configFunction).run(runFunction);