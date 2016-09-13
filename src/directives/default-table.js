'use-strict';

angular
	.module('dolist')
	.directive('defaultTable', defaultTable);

	function defaultTable() {
		return {
			restrict: 'E',
			templateUrl: 'directives/default-table.html',
			controller: 'DolistCtrl',
			controllerAs: 'vm'
		}
	}