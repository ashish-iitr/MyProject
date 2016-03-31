'use strict';
/**
 *  Declare app level module which depends on views, and components
 */
angular.module('myTrello', [
  'ngRoute',
  'myTrello.trello',
  'myTrello.api',
  'myTrello.route',
  'dndLists'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/trello'});
}])

