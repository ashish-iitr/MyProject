'use strict';

angular.module('myContacts.contacts', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

//contacts controller
.controller('ContactsCtrl', ['$scope','$firebaseArray',function($scope,$firebaseArray) {
	//init firebase
	var ref = new Firebase('https://contactapp1.firebaseio.com/contacts');
	//get contacts
	$scope.contacts = $firebaseArray(ref);
	//console.log($scope.contacts);
	//show add form
	$scope.showAddForm = function(){
		$scope.addFormShow = true;
	};
	$scope.showEditForm = function(contact){
		$scope.editFormShow = true;

		$scope.name = contact.name;
		$scope.email = contact.email;
		$scope.company = contact.company;
		$scope.home_phone = contact.phones[0].home_phone;
		$scope.office_phone = contact.phones[0].office_phone;
		$scope.street_address = contact.address[0].street_address;
		$scope.city = contact.address[0].city;
		$scope.zip = contact.address[0].zip;
	};

	//hide form
	$scope.hide = function(){
		$scope.addFormShow = false;
		$scope.contactShow = false;
	};
	//submit add form
	$scope.addFormSubmit = function(){
		//assign values
		if($scope.name){ var name = $scope.name; }else{ var name = null; }
		if($scope.email){ var email = $scope.email; }else{ var email = null; }
		if($scope.company){ var company = $scope.company; }else{ var company = null; }
		if($scope.home_phone){ var home_phone = $scope.home_phone; }else{ var home_phone = null; }
		if($scope.office_phone){ var office_phone = $scope.office_phone; }else{ var office_phone = null; }
		if($scope.street_address){ var street_address = $scope.street_address; }else{ var street_address = null; }
		if($scope.city){ var city = $scope.city; }else{ var city = null; }
		if($scope.zip){ var zip = $scope.zip; }else{ var zip = null; }

		$scope.contacts.$add({
			name:name,
			email:email,
			company:company,
			phones:[
				{
					home_phone:home_phone,
					office_phone:office_phone
				}
			],
			address:[
				{
					street_address:street_address,
					city:city,
					zip:zip
				}
			]
			
			
		}).then(function(ref){
			$scope.id = ref.key();
			//clear form
			$scope.clearFields();
			//hide form
			$scope.addFormShow = false;
			//message
			$scope.msg = "contacts added";
		});
	};

	//update contact
	$scope.editFormSubmit = function(){
		console.log("updating contact...");
		//get id
		var id = $scope.id;
		//get record
		var record = $scope.contacts.$getRecord(id);
		//assign values
		record.name = $scope.name;
		record.email = $scope.email;
		record.company = $scope.company;
		record.phones[0].home_phone = $scope.home_phone;
		record.phones[0].office_phone = $scope.office_phone;
		record.address[0].street_address = $scope.street_address;
		record.address[0].city = $scope.city;
		record.address[0].zip = $scope.zip;
		//save
		$scope.contacts.$save(record).then(function(ref) {
			// body...
		});
		$scope.clearFields();
		$scope.editFormShow = false;
		$scope.msg = "contact updated"; 

	};

	$scope.removeContact = function (contact) {
		// body...
		$scope.contacts.$remove(contact);
		$scope.msg = "contact deleted";
	}

	$scope.clearFields = function() {
		// body...
		$scope.name = " ";
		$scope.email = " ";
		$scope.company = " ";
		$scope.home_phone = " ";
		$scope.office_phone = " ";
		$scope.street_address = " ";
		$scope.city = " ";
		$scope.zip = " ";
	};

	$scope.showContact = function (contact) {
		// body...
		$scope.name = contact.name;
		$scope.email = contact.email;
		$scope.company = contact.company;
		$scope.home_phone = contact.phones[0].home_phone;
		$scope.office_phone = contact.phones[0].office_phone;
		$scope.street_address = contact.address[0].street_address;
		$scope.city = contact.address[0].city;
		$scope.zip = contact.address[0].zip;
		$scope.contactShow = true;
	}


}]);