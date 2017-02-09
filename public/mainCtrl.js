angular.module('app')
.controller('mainCtrl', function($scope, mainService, $state) {
   mainService.getProducts().then(function(response) {
      $scope.products = response;
   })

   $scope.addNewItem = function (newProduct) {
      mainService.addNewItem(newProduct).then(function(response) {
         console.log('Item added to db: ', response)
         const id = response.id;
         $state.go('details({id: id})');
      })
   }


})
