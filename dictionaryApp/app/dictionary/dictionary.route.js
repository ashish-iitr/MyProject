angular.module('myDictionary.route', ['ngRoute'])

/**
 * for difine route
 * @param  $routeProvider {[angular searvice]}
 */
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dictionary', {
    templateUrl: 'dictionary/dictionary.html',
    controller: 'dictionaryCtrl'
  });
}]);
