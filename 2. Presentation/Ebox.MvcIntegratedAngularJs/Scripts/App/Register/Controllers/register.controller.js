
(function () {
    'use strict';

    angular.module('RegisterModule').controller("RegisterController", RegisterController);

    RegisterController.$inject = ['$scope', '$http', 'blockUIConfig', 'toastr'];
    function RegisterController($scope, $http, blockUIConfig, toastr) {

        var self = this;
        self.RegisterCommand = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        }

        self.register = function () {
            $http.post('/Account/Register', self.RegisterCommand)
                .then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    // self.message = JSON.stringify(response);
                    toastr.success("You have been registered successfully.");
                }, function errorCallback(errorResponse) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.                   
                    toastr.error("Sorry! We cannot register you for now.");
                });
        };


    };

    angular.module('RegisterModule')
        .config(function (valdrProvider, valdrMessageProvider) {
            valdrMessageProvider.setTemplate('<div class="valdr-message">{{ violation.message }}</div>');
            valdrProvider.addConstraints({
                'Register': {
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
                    ,
                    'firstName': {
                        'required': {
                            'message': 'Please enter your first name.'
                        }
                    }
                    ,
                    'lastName': {
                        'required': {
                            'message': 'Please enter your last name.'
                        }
                    }
                }
            });
        });
})();



