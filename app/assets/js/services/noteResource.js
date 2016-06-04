'use strict';

angular.module('NoteWrangler')
.factory('Note', function($resource){

  return $resource('api/notes/:id', {id: '@_id'}, 
  {
    update : {
      method : 'PUT'
    }
  });

});
