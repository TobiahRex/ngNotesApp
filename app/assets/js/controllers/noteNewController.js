'use strict';

angular.module('NoteWrangler')
.controller('NotesNewController', function(Note, $scope, $location){
  $scope.note = new Note();
  $scope.isSaving = false;

  $scope.newNote = note => {
    $scope.isSaving = true;
    note.$save(() => {
      $scope.isSaving = false;
      $location.path('/notes');
    }, error => {
      $scope.error = error;
    });
  };

  console.log('NotesNewController');
});
