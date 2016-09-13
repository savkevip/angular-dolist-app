'use strict';

angular
	.module('dolist')
	.directive('addStuff', addStuff);

	function addStuff() {
		return {
			restrict: 'E',
			templateUrl: 'directives/add-stuff.html',
			controller: 'DolistCtrl',
			controllerAs: 'vm'
		}
	}