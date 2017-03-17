'use strict';

angular.module('yogisCollectionApp')
  .controller('NavbarCtrl', function ($scope, Auth, $rootScope, $state, $window, $timeout) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main',
      'icon': 'home'
    }, {
      'title': 'Products',
      'state': 'products',
      'icon': 'globe'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.toggleClass = function(req) {
        if(req == 'addleft')
            $scope.$emit('body:class:add', 'nav-sidebar-open');
        else if(req == 'addright')
            $scope.$emit('body:class:add', 'nav-sidebar-open-right');
        else
            $scope.$emit('body:class:remove', 'nav-sidebar-open');
        };

    $scope.IsColVisible = false;
    $scope.IsAbVisible = false;
    $scope.ShowHideColManu = function () {
        //If DIV is visible it will be hidden and vice versa.
          $scope.IsColVisible = $scope.IsColVisible ? false : true;
    }
    $scope.ShowHideAbManu = function () {
        //If DIV is visible it will be hidden and vice versa.
          $scope.IsAbVisible = $scope.IsAbVisible ? false : true;
    }

    $scope.search = function () {
      $rootScope.$broadcast('search:term', $scope.searchTerm);
    };

    $scope.redirect = function () {
      $state.go('products');
      // timeout makes sure that it is invoked after any other event has been triggered.
      $timeout(function () {
        // focus on search box
        var searchBox = $window.document.getElementById('searchBox');
        if(searchBox){ searchBox.focus(); }
      });
    };
  });
