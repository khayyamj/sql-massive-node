angular.module('app')
.service('mainService', function($http) {

   this.getProducts = function() {
      return $http.get('/api/products').then(function(response) {
         return response.data;
      })
   }

   this.getDetails = function(id) {
      console.log("Service received id: ", id);
      return $http.get('/api/products/'+ id).then(function(response) {
         console.log ('getDetails response: ', response)
         return response.data;
      })
   }

   this.update = function (product) {
      console.log('Put Url: ', '/api/products/'+product.id,
         'Product Object: ', product);
      return $http({
         method: 'PUT',
         url: '/api/products/'+product.id,
         data: {
            "name": product.name,
            "description": product.description,
            "price": product.price,
            "imageUrl": product.imageUrl
         }
      }).then(function(response) {
         return response.data;
      })
   }

   this.remove = function (id) {
      return $http.delete('/api/products/' + id).then(function(response) {
         console.log('Product id# ' + id + ' has been deleted')
         return response.data;
      })
   }

   this.addNewItem = function(newProduct) {
      return $http.post('/api/products', newProduct).then(function(response) {
         return response.data;
      })
   }

})
