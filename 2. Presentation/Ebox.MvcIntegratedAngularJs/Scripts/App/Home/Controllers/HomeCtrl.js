
var HomeController = function ($scope) {
    this.search = {
        keyword: "",
        placeHolder: "Enter any word"
    };

    this.beginSearch = function () {
        this.search.keyword = "Your search has been started. Please wait...";
    };
};

HomeController.$inject = ['$scope'];

angular.module("EBoxAngularMVCApp").controller("HomeController", HomeController);