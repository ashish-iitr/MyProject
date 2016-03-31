'use strict';
/**
 *  Declare app level module which depends on views, and components
 */
angular.module('myDictionary', [
  'ngRoute',
  'LocalStorageModule',
  'myDictionary.dictionary',
  'myDictionary.api',
  'myDictionary.route'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dictionary'});
}])

/**
 * directive for showing tooltip
 */

.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});
