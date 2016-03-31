'use strict';

angular.module('myTrello.trello', [])

/**
 * main controller starts here
 */
.controller('trelloCtrl', ['$scope', 'callAPIService', function($scope, callAPIService){
	/**
	 * initialize object
	 * @type {Object}
	 */
	$scope.card = {
		title : '',
		date : '',
		creator: '' 
	};

	$scope.task = {
		text : '',
		date : '',
		creator: '' 
	};

    $scope.cards = {
        lists: {
        	"Pending": [], 
        	"Inprogress": [], 
        	"Completed": [], 
        	"Closed": []
        }
    };

    $scope.containers = [];

    $scope.containers.push($scope.cards);

    /**
     * [first call for api when page load]
     */
    // callAPIService.getDetails().then(function(response){
    //     if(response.status == 200)
    //     {
    //        $scope.containers = response.data;
    //     }
    // });


    // Generate initial tasklist
    for (var i = 0; i <= 3; ++i) {
        $scope.cards.lists.Pending.push({label: "Item A" + i});
        $scope.cards.lists.Inprogress.push({label: "Item B" + i});
        $scope.cards.lists.Completed.push({label: "Item C" + i});
        $scope.cards.lists.Closed.push({label: "Item D" + i});
    }
	/**
	 * [check for source card name]
	 * @param  {[number]} idx [index of card]
	 * @return nothing
	 */
	$scope.checkSrcCard = function(idx) {
		console.log("--source--",idx);
		$scope.srcIdx = idx;
    };
    /**
     * [function when task moves you can api within]
     * @param  {[object]} event   [browser default event object]
     * @return nothing
     */
	$scope.taskMove = function(event) {
		console.log("--task move--");
        console.log(event);
        console.log($scope.cards.lists);
     //    callAPIService.moveTsk(argument).then(function(response){
     //        if(response.status == 200)
     //        {
     //          $scope.containers = response.data;
     //        }
	    // });
    };
    /**
     * [function for swap card content]
     */
    $scope.swap = function() {    	
    	console.log("--swap--");
    	var tempKey;
		Object.keys($scope.cards.lists).forEach(function(key,index) {
			console.log(key,index);
			if(index == $scope.dstIdx){
				tempKey = $scope.cards.lists[key];
				console.log("temp",tempKey);
				$scope.cards.lists[key] = $scope.cards.lists[$scope.srcIdx]; 
			}
		})
		$scope.cards.lists[$scope.srcIdx] = tempKey;
    }   
    /**
     * [function when card moves you can api within]
     * @param  {object} event    [default browser event]
     * @param  {number} idx      [index where dropped]
     * @param  {object} item     [source content itme]
     * @param  {string} type     [move or copy]
     * @param  {string} external [if any external source]
     * @return {boolean}         [false for disable default move]
     */
    $scope.cardMove = function(event, idx, item, type, external) {
    	console.log("--card move--");
        $scope.dstIdx = idx;
        $scope.swap();
     //    callAPIService.moveCard(argument).then(function(response){
     //        if(response.status == 200)
     //        {
     //           $scope.containers = response.data;
     //        }
	    // });
        return false;     
    };

    /**
     * [add new card you can call api within]
     */
    $scope.addCard = function () {
    	console.log($scope.cards.lists);
    	$scope.cards.lists[$scope.card.title] = [];
    	$scope.cardDetails = $scope.card;
    	$scope.card = {
			title : '',
			date : '',
			creator: '' 
		};
    	$('#cardModal').modal('hide');

    	// callAPIService.addCard($scope.cardDetails).then(function(response){
     //        if(response.status == 200)
     //        {
     //           $scope.containers = response.data;
     //        }
	    // });
    };

    /**
     * [add new task within a card you can call api within]
     */
    $scope.addTask = function () {
    	console.log($scope.cards.lists,$scope.srcIdx);
    	var text = {label: $scope.task.text};
    	$scope.cards.lists[$scope.srcIdx].push(text)
    	$scope.taskDetails = $scope.task;
    	$scope.task = {
			text : '',
			date : '',
			creator: '' 
		};
    	$('#taskModal').modal('hide');

    	// callAPIService.addTask($scope.taskDetails).then(function(response){
     //        if(response.status == 200)
     //        {
     //           $scope.containers = response.data;
     //        }
	    // });
    };
	  
}]);
	