(function () {
    angular.module('appCore')
        .constant('moment', moment);    

    var Constants = {
        LOG_IN: '/authentication/signin',
        REGISTER: '/Account/Register'
    };

    var ValidationMessages = {
        NOT_VALID_EMAIL: "Not a valid email address.",
        EMAIL_REQUIRED: 'Please enter your email.',
        PASSWORD_REQUIRED: 'Please enter your password.',
        FIRST_NAME_REQUIRED: 'Please enter your first name.',
        LAST_NAME_REQUIRED: 'Please enter your last name.'
    };

    angular.module('appCore')
        .constant('Constants', Constants);

    angular.module('appCore')
        .constant('ValidationMessages', ValidationMessages);
})();