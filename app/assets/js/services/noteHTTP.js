'use strict';

angular.module('NoteWrangler')
.service('NoteHTTP', function($http){

  this.getOne = id => {
    console.log('NoteHTTP id: ', id);
    return $http.get(`api/notes/${id}`);
  };
});
