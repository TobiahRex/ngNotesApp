'use strict';

angular.module('NoteWrangler')
.controller('UsersIndexController', function(User, $scope){
  User.query(dbUsers => {
    $scope.users = dbUsers;
  }, (httpResponse) => {console.log(httpResponse.data);});

  console.log('UsersIndexController');
});
