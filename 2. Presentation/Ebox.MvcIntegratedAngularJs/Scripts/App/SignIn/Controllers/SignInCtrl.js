var SignInController = function ($scope, $http) {

    var self = this;

    self.SignInCommand = {
        email: "",
        password: "",
        rememberMe: false,
        debug: false
    }

    self.message = "";

    $scope.$watch(function (scope) { return scope.signInForm; }, function (value) {
        scope.signInForm.email.valdrViolations;
    });

    self.signIn = function () {
        $scope.signInForm.email.valdrViolations;
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

SignInModule.config(function (valdrProvider, valdrMessageProvider) {
    valdrMessageProvider.setTemplate('<div class="valdr-message">{{ violation.message }}</div>');
    valdrProvider.addConstraints({
        'SignIn': {
            'email': {
                "email": {
                    "message": "Not a valid email address."
                },
                'required': {
                    'message': 'Please enter your email.'
                }
            },
            'password': {
                'required': {
                    'message': 'Please enter your password.'
                }
            }
        }
    });
});

SignInController.$inject = ['$scope', '$http'];
SignInModule.controller("SignInController", SignInController);