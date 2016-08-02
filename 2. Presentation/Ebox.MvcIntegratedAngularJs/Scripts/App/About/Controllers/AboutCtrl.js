
var AboutController = function ($scope) {
    $scope.pageHeading = "About Section";
}
AboutController.$inject = ['$scope'];

AboutModule.controller("AboutController", AboutController);