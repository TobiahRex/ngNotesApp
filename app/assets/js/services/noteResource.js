'use strict';

angular.module('NoteWrangler')
.factory('NoteResource', function($resource){

  return $resource('api/notes/:id');

});
