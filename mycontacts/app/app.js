'use strict';

// Declare app level module which depends on views, and components
angular.module('myContacts', [
  'ngRoute',
  'myContacts.contacts',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
