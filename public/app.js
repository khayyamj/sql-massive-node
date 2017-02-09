angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/');

   $stateProvider
      // HOME STATE
      .state('home', {
        url: '/',
        templateUrl: './views/homeTmpl.html'
      })
      // DETAILS STATE
      .state('details', {
        url: '/details/:id',
        templateUrl: './views/productDetail.html',
        controller: 'productDetailsCtrl'
      });





});
