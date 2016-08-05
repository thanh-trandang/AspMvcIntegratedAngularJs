﻿
(function () {
    'use strict';

    angular.module('SignInModule').controller("SignInController", SignInController);

    SignInController.$inject = ['$scope', '$http'];
    function SignInController($scope, $http) {

        var self = this;
        self.SignInCommand = {
            email: "",
            password: "",
            rememberMe: false,
            debug: false
        }

        self.message = "";

        self.signIn = function () {
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


    };

    angular.module('SignInModule')
        .config(function (valdrProvider, valdrMessageProvider) {
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


})();


