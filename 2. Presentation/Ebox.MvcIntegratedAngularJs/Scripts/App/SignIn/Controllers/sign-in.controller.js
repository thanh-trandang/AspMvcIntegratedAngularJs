
(function () {
    'use strict';

    angular.module('SignInModule').controller("SignInController", SignInController);

    SignInController.$inject = ['$scope', '$http', 'toastr', 'Constants', 'Flash'];
    function SignInController($scope, $http, toastr, Constants, Flash) {
        var regex = new RegExp(Constants.LOG_IN, 'i');
        $scope.blockPattern = regex.toString();

        var self = this;
        self.SignInCommand = {
            email: "",
            password: "",
            rememberMe: false,
            debug: false
        }

        self.message = "";

        self.signIn = function () {
            $http.post(Constants.LOG_IN, self.SignInCommand)
                .then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    // self.message = JSON.stringify(response);
                    // toastr.success("You signed in successfully.");
                    var id = Flash.create('success', "You signed in successfully as <strong> " + self.SignInCommand.email + "</strong>.", 0, { id: 'sign-in-success' }, true);
                }, function errorCallback(errorResponse) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    self.message = JSON.stringify(errorResponse);
                });
        };


    };

})();



