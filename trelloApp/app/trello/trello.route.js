angular.module('myTrello.route', ['ngRoute'])

/**
 * for define route
 * @param  $routeProvider {[angular searvice]}
 */
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trello', {
    templateUrl: 'trello/trello.html',
    controller: 'trelloCtrl'
  });
}]);
