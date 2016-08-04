
(function () {
    var AboutController = function ($scope) {
        $scope.pageHeading = "About Section - THanh Tran";
    }


    AboutController.$inject = ['$scope'];

    angular.module('AboutModule').controller("AboutController", AboutController);
})();
