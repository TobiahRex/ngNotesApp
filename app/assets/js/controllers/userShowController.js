'use strict';

angular.module('NoteWrangler')
.controller('UsersShowController', function(User, $scope, $routeParams, $location){

  User.get({id : $routeParams.id}, user => {
    $scope.user = user;
  }, response => { console.log(`ERROR:${response}`);});

  $scope.deleteUser = user => {
    user.$remove(() => {
      $location.path('/users');
    });
  };

  console.log('UsersShowController');
});
