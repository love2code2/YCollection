'use strict';

angular.module('yogisCollectionApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',     
    };
  });
