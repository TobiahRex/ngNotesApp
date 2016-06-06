'use strict';

angular.module('NoteWrangler')
.controller('UsersNewController', function(User, $scope, $location){
  $scope.user = new User();
  $scope.isSaving = false;

  $scope.newUser = user => {
    $scope.isSaving = true;
    user.$save(() => {
      $scope.isSaving = false;
      $location.path('/users');
    }, error => {
      $scope.error = error;
    });
  };

  console.log('UsersNewController');
});
