angular.module('likDir', [])
	.directive('lik', function() {
		return {
			restrict: 'ECMA',
			templateUrl: 'views/production.html',
			replace: true
		}
	})