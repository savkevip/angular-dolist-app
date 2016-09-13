'use strict';

angular
	.module('dolist')
	.controller('DolistCtrl', DolistCtrl);

	function DolistCtrl($http) {
		var vm = this;
		vm.title = "Remmember list";
		vm.subtitle = "Make your own remmember list... :)";
		vm.remove = remove;
		vm.add = add;
		vm.checkName = checkName;

	// service for get json
		$http.get("some.json")
	    	.then(function(response) {
				vm.lists = response.data; 
	    	});

	    function remove(index) {
	    	vm.lists.splice(index, 1);
	    }

	    function add() {
	    	vm.inserted = {
	    		id: vm.lists.length + 1,
	    		name: '',
	    		time: ''
	    	}
	    	vm.lists.push(vm.inserted);
	    }

	    function checkName(date) {
	    	if(date === "") {
	    		return "*Please, fill name for duty..."
	    	}
	    }

	}