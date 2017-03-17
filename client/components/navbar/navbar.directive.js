'use strict';

angular.module('yogisCollectionApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'E',
      controller: 'NavbarCtrl'
    };    
  })

.directive('body', function(){
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      scope.$on('body:class:add', function(e, name){
        element.addClass(name);
      });
      scope.$on('body:class:remove', function(e, name){
        element.removeClass(name);
      });
      return;
    }
  };
})

.directive('changeClassOnScroll', function ($window) {
  return {
    restrict: 'A',
    scope: {
        offset: "@",
        scrollClass: "@"
    },
    link: function(scope, element) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= parseInt(scope.offset)) {
                element.addClass(scope.scrollClass);
            } else {
                element.removeClass(scope.scrollClass);
            }
        });
    }
  };
});