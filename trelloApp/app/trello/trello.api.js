'use strict';

angular.module('myTrello.api', [])

/**
 * api call factory
 * @param  $http {[angular service]}
 * @param  $q {[angular service]}
 * @return promise {[object]}
 */
.factory('callAPIService', ['$http', '$q', function ($http, $q) {
        return {
            getDetails: function () {
                var deferred = $q.defer();
                $http({
                    url: "api link here",
                    method: "GET",
                    headers: {
                        "Key" : "dfdfds",
                        "Accept"	: "application/json"

                    }
                })
                    .then(function (response) {
                        deferred.resolve(response);
                    });

                return deferred.promise;
            },
            moveTsk: function (data) {
                var deferred = $q.defer();
                $http({
                    url: "api link here",
                    method: "POST",
                    data: data,
                    headers: {
                        "Key" : "dfdfds",
                        "Accept"    : "application/json"

                    }
                })
                    .then(function (response) {
                        deferred.resolve(response);
                    });

                return deferred.promise;
            },
            moveCard: function (data) {
                var deferred = $q.defer();
                $http({
                    url: "api link here",
                    method: "POST",
                    data: data,
                    headers: {
                        "Key" : "dfdfds",
                        "Accept"    : "application/json"

                    }
                })
                    .then(function (response) {
                        deferred.resolve(response);
                    });

                return deferred.promise;
            },
            addCard: function (data) {
                var deferred = $q.defer();
                $http({
                    url: "api link here",
                    method: "POST",
                    data: data,
                    headers: {
                        "Key" : "dfdfds",
                        "Accept"    : "application/json"

                    }
                })
                    .then(function (response) {
                        deferred.resolve(response);
                    });

                return deferred.promise;
            },
            addTask: function (data) {
                var deferred = $q.defer();
                $http({
                    url: "api link here",
                    method: "POST",
                    data: data,
                    headers: {
                        "Key" : "dfdfds",
                        "Accept"    : "application/json"

                    }
                })
                    .then(function (response) {
                        deferred.resolve(response);
                    });

                return deferred.promise;
            }
        }
}]);
