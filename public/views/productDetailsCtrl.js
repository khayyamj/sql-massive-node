angular.module('app')
.controller('productDetailsCtrl', function($scope, mainService, $state) {
   const id = $state.params.id;

   mainService.getDetails(id).then(function(response) {
         $scope.product = response;
      })

   $scope.update = function (product) {
      product.id = id;
      mainService.update(product)
      .then(function(response) {
         $scope.product = response;
         $state.go('home');
      })
   }

   $scope.remove = function() {
      mainService.remove(id).then(function(response) {
         console.log(response);
         $state.go('home');
      })
   }
})
