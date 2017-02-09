angular.module('app')
.directive('homeDir', function() {
   return {
      restrict: 'E',
      templateUrl: './homeTmpl.html',
      scope: {
         product: '='
      }
   }


})
