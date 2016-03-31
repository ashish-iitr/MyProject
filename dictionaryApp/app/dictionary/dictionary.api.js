'use strict';

angular.module('myDictionary.api', [])

/**
 * api call factory
 * @param  $http {[angular service]}
 * @param  $q {[angular service]}
 * @return promise {[object]}
 */
.factory('callAPIService', ['$http', '$q', function ($http, $q) {
        return {
            save: function (data) {
                var deferred = $q.defer();
                $http({
                    url: "https://mashape-community-urban-dictionary.p.mashape.com/define?term=" + data,
                    method: "GET",
                    headers: {
                        "X-Mashape-Key" : "VrZBZyMZUWmshpR4iecrjq6XQCmnp1Oar7QjsnbknMXfI5U2IS",
                        "Accept"	: "application/json"

                    }
                })
                    .then(function (response) {
                        deferred.resolve(response);
                    });

                return deferred.promise;
            }
        }
}]);
