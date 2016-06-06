angular.module('NoteWrangler')
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    redirectTo    :   '/notes'
  })

  .when('/notes', {
    templateUrl   :   'assets/templates/notes/index.html',
    controller    :   'NotesIndexController',
    controllerAs  :   'noteIndexCtrl'
  })

  .when('/notes/new', {
    templateUrl   :   'assets/templates/notes/new.html',
    controller    :   'NotesNewController',
    controllerAs  :   'noteNewCtrl'
  })

  .when('/notes/:id', {
    templateUrl   :   'assets/templates/notes/show.html',
    controller    :   'NotesShowController',
    controllerAs  :   'noteShowCtrl'
  })

  .when('/notes/:id/edit', {
    templateUrl   :   'assets/templates/notes/edit.html',
    controller    :   'NotesEditController',
    controllerAs  :   'noteEditCtrl'
  })

  .when('/users', {
    templateUrl   :   'assets/templates/users/index.html',
    controller    :   'UsersIndexController',
    controllerAs  :   'userIndexCtrl'
  })

  .when('/users/new', {
    templateUrl   :   'assets/templates/users/new.html',
    controller    :   'UsersNewController',
    controllerAs  :   'userNewCtrl',
  })

  .when('/users/:id', {
    templateUrl   :   'assets/templates/users/show.html',
    controller    :   'UsersShowController',
    controllerAs  :   'userShowCtrl'
  })

  .when('/users/:id/edit', {
    templateUrl   :   'assets/templates/users/edit.html',
    controller    :   'UsersEditController',
    controllerAs  :   'userEditCtrl'
  })

});
