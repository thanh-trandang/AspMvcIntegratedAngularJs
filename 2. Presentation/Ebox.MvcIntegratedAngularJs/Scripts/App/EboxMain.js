var commonModule = angular.module('Common', ['ui.router']);
var EboxMain = angular.module('EboxMain', ['Common']);

var HomeController = function ($scope) {
    $scope.topic =
       "Integrating ASP.NET MVC and AngularJS";
    $scope.author = "Tran Dang Thanh";

    this.search = {
        keyword: "",
        placeHolder: "Please enter your keyword..."
    };

    this.beginSearch = function () {
        this.search.keyword = "Your search has been started. Please wait...";
    };

    var initialize = function () {
        $scope.pageHeading = "Home Section";
    }

    initialize();
}

HomeController.$inject = ['$scope'];
EboxMain.controller("HomeController", HomeController);

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