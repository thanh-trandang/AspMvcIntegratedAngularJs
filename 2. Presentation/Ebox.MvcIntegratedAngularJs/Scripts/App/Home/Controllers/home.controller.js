
(function () {
    'use strict';

    angular.module('HomeModule').controller("HomeController", HomeController);

    HomeController.$inject = ['$scope', '$http'];
    function HomeController($scope, $http) {

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

})();
