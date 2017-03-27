'use strict';

angular.module('yogisCollectionApp')
  .factory('Catalog', function ($resource) {
    return $resource('/api/catalogs/:id');
  });
