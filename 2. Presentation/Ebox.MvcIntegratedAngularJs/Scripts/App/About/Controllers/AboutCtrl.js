
var AboutController = function ($scope) {
    $scope.pageHeading = "About Section";
}
AboutController.$inject = ['$scope'];

// angular.module('AboutModule').controller("AboutController", AboutController);
AboutModule.controller("AboutController", AboutController);