'use strict';

angular.module('myDictionary.dictionary', ['ngRoute'])

/**
 * main controller starts here
 */
.controller('dictionaryCtrl', ['$scope', 'callAPIService', 'localStorageService', function($scope, callAPIService, localStorageService) {
		/**
		 * initialize variable
		 */
		$scope.searchText = "";
		$scope.result = true;
		$scope.wordList = {
			words:[]
		};
		$scope.bookmarkList = localStorageService.get('bookmark');
		$scope.bookmarkLength = $scope.bookmarkList.words.length || 0;
		
		/**
		 * @param  response{[object]}
		 */
		$scope.init = function (response) {
			$scope.details = response.data.list;
			$scope.result = ($scope.details.length) ? true : false;
		};

		/**
		 * for search word 
		 */
		$scope.searchWord = function () {
			callAPIService.save($scope.searchText).then(function(response){
	            if(response.status == 200)
	            {
	               $scope.init(response);
	            }
	        });
		};
		
		/**
		 * for bookmark save
		 */
		$scope.bookmarkSave = function () {
			$scope.wordList = localStorageService.get('bookmark');
			$scope.wordList.words.unshift($scope.searchText);
			localStorageService.set('bookmark', $scope.wordList);
			$scope.bookmarkList = localStorageService.get('bookmark');
			$scope.bookmarkLength = $scope.bookmarkList.words.length;
		};
		
		/**
		 * for delete bookmark
		 * @param  idx {[number]}
		 */
		$scope.delete = function(idx) {
			$scope.wordList = localStorageService.get('bookmark');
			$scope.wordList.words.splice(idx,1);
			localStorageService.set('bookmark', $scope.wordList);
			$scope.bookmarkList = localStorageService.get('bookmark');
			$scope.bookmarkLength = $scope.bookmarkList.words.length;
		};
		
		/**
		 * for clear search box
		 */
		$scope.clearBox = function() {
			$scope.searchText = "";
			$scope.details = "";
			$scope.result = true;
		}
	  
}]);
	