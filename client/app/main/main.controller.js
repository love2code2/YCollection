'use strict';

angular.module('yogisCollectionApp')
  .controller('MainCtrl', function($scope, $http, socket, Product) {
    $scope.products = Product.query();
  });
