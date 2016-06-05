'use strict';

angular.module('NoteWrangler')
.controller('NotesNewController', function(Note, $scope, $location){

  $scope.note = new Note();

  $scope.newNote = note => {
    note.$save(() => {
      $location.path('/notes');
    });
  };

  console.log('NotesNewController');
});
