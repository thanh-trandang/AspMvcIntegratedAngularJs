
var SignInController = function ($scope, $http, defaultErrorMessageResolver) {

    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
        errorMessages['emailRequired'] = 'Please enter your email!';
        errorMessages['passwordRequired'] = 'Please enter your password!';
    });

    var self = this;
    self.SignInCommand = {
        email: "",
        password: "",
        rememberMe: false
    }

    self.message = "";

    self.signIn = function () {
        $http.post('/Authentication/SignIn', self.SignInCommand)
            .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                self.message = JSON.stringify(response);
            }, function errorCallback(errorResponse) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                self.message = JSON.stringify(errorResponse);
            });
    };
}


SignInController.$inject = ['$scope', '$http', 'defaultErrorMessageResolver'];

SignInModule.controller("SignInController", SignInController);