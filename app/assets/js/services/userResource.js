'use strict';

angular.module('NoteWrangler')
.factory('User', function($resource){

  return $resource('api/users/:id', {id: '@_id'},
  {
    update : {
      method : 'PUT'
    }
  });

});
