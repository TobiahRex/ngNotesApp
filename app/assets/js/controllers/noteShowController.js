'use strict';

angular.module('NoteWrangler')
.controller('NotesShowController', function(Note, $scope, $routeParams){

  Note.get({id : $routeParams.id}, note => {
    $scope.note = note;
  }, response => { console.log(`ERROR:${response}`);});

  console.log('NotesShowController');
});
