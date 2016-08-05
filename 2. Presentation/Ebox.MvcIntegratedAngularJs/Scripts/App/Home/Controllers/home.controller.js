
(function () {
    'use strict';

    angular.module('HomeModule').controller("HomeController", HomeController);

    HomeController.$inject = ['$scope', '$http', 'moment'];
    function HomeController($scope, $http, moment) {
        var self = this;
        self.SignInCommand = {
            email: "trandangthanh@gmail.com",
            password: "123456",
            rememberMe: false,
            debug: false
        }

        $scope.topic =
           "Integrating ASP.NET MVC and AngularJS";
        $scope.time = moment().format('MMMM Do YYYY, h:mm:ss a') + ' - Time zone: ' + moment.tz.guess();

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
