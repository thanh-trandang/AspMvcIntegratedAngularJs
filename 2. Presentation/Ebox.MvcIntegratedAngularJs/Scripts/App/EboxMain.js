(function () {
    angular.module('Common', [
    'ui.router', 'ui.bootstrap', 'ngAnimate', 'valdr', 'blockUI']);
})();


(function () {
    angular.module('EboxMain', ['Common']);

    var BaseController = function ($scope, $http) {

        var self = this;
        self.SignInCommand = {
            email: "trandangthanh@gmail.com",
            password: "123456",
            rememberMe: false,
            debug: false
        }

        $scope.topic =
           "Integrating ASP.NET MVC and AngularJS";
        $scope.author = "Tran Dang Thanh";

        this.search = {
            keyword: "",
            searchButtonLabel: "Search",
            placeHolder: "Please enter your keyword..."
        };



        this.beginSearch = function () {
            this.search.keyword = "Your search has been started. Please wait...";
            $http.post('/Authentication/SignIn', self.SignInCommand)
                .then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    // self.message = JSON.stringify(response);
                }, function errorCallback(errorResponse) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    self.message = JSON.stringify(errorResponse);
                });
        };

        var initialize = function () {
            $scope.pageHeading = "Home Section";
        }

        initialize();
    }

    BaseController.$inject = ['$scope', '$http'];
    angular.module('EboxMain').controller("BaseController", BaseController);
})();



//var configFunction = function ($stateProvider, $httpProvider, $locationProvider, $routeProvider) {

//    //$routeProvider.when('/index', { redirectTo: '/Home/Index' });
//    //$routeProvider.when('/about', { redirectTo: '/about' });
//    //$routeProvider.when('/contact', { redirectTo: '/contact' });

//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//    });
//};

//configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$routeProvider'];
//var runFunction = function ($rootScope, $location, $injector) {
//    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

//    });
//};
//runFunction.$inject = ['$rootScope', '$location', '$injector'];
//EBoxAngularMVCApp.config(configFunction).run(runFunction);