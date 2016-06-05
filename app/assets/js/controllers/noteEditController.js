'use strict';

angular.module('NoteWrangler')
.controller('NotesEditController', function($scope, Note, $routeParams, $location){
  $scope.submitEdit = false;
  $scope.note = Note.get({id : $routeParams.id});

  $scope.saveNote = function(note){   // note is an instance of ngResource, therefore any of it's method is available on 'note'
    $scope.submitEdit = true;
    note.$update(() => {
      $location.path(`/notes/${note._id}`);
      /*
      > note.id is available also because it's an instance of ngResource.
      > We're going to /notes/note._id because we want to go to that notes
      particular page. 
      */
    });
  };

  console.log('NotesEditController');
});
