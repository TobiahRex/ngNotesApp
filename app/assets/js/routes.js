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
  });
});
