'use strict';

angular.module('NoteWrangler')
.controller('UsersEditController', function($scope, User, $routeParams, $location){
  $scope.submitEdit = false;
  $scope.user = User.get({id : $routeParams.id});

  $scope.saveUser = function(user){   // user is an instance of ngResource, therefore any of it's method is available on 'user'
    $scope.submitEdit = true;
    user.$update(() => {
      $location.path(`/users/${user._id}`);
      /*
      > user.id is available also because it's an instance of ngResource.
      > We're going to /users/user._id because we want to go to that users
      particular page.
      */
    });
  };

  console.log('UsersEditController');
});
