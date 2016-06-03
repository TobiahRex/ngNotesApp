'use strict';

angular.module('NoteWrangler')
.factory('Note', function($resource){
  return $resource('/api/notes');

});
