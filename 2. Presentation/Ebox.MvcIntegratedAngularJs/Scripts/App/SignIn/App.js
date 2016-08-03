var SignInModule = angular.module('SignInModule', ['Common'])
    .config(function ($locationProvider) {
        //$routeProvider.when('/product', { templateUrl: '/App/Product/Views/ProductHomeView.html', controller: 'productHomeViewModel' });
        //$routeProvider.when('/product/list', { templateUrl: '/App/Product/Views/ProductListView.html', controller: 'productListViewModel' });
        //$routeProvider.when('/product/show/:productId', { templateUrl: '/App/Product/Views/ProductView.html', controller: 'productViewModel' });
        //$routeProvider.otherwise({ redirectTo: '/product' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    });