angular.module('lik', [])
	.controller('likCtrl', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {
		$scope.goBack = function() {
			$location.path('nav')
		}
		$scope.uid = window.localStorage.uid;
		$http({
			method: 'get',
			url: $rootScope.server + 'item?uid='+$scope.uid
		}).then(function(e) {
			console.log(e)
			$scope.likTitle = e.title
			console.log(e.data)
			$scope.likData = e.data
		}, function() {})
	}])
