'use strict';

angular.module('NoteWrangler')
.controller('NotesIndexController', function(Note, $scope){
  Note.query(dbNotes => {
    $scope.notes = dbNotes;
  }, (httpResponse) => {console.log(`ERROR: No notes; ${httpResponse}`);});

  
  console.log('NotesIndexController');
});
