'use strict';

angular.module('NoteWrangler')
.controller('NotesShowController', function(Note, $scope, $routeParams, $location){

  Note.get({id : $routeParams.id}, note => {
    $scope.note = note;
  }, response => { console.log(`ERROR:${response}`);});

  $scope.deleteNote = note => {
    note.$remove(() => {
      $location.path('/notes');
    });
  };

  console.log('NotesShowController');
});
