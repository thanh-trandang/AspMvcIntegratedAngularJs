var commonModule = angular.module('Common', ['ngRoute']);
var EboxMain = angular.module('EboxMain', ['Common']);

var indexViewModel = function ($scope) {
    $scope.topic =
       "Integrating ASP.NET MVC and AngularJS";
    $scope.author = "Tran Dang Thanh";

    this.search = {
        keyword: "",
        placeHolder: "Enter any word"
    };

    this.beginSearch = function () {
        this.search.keyword = "Your search has been started. Please wait...";
    };

    var initialize = function () {
        $scope.pageHeading = "Home Section";
    }

    initialize();
}

indexViewModel.$inject = ['$scope'];
EboxMain.controller("indexViewModel", indexViewModel);

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