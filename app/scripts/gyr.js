angular.module('gyr', ['ui.router', 'angular-clipboard'])
	.directive('list2', function() {
		return {
			restrict: 'ECMA',
			replace: true,
			templateUrl: 'views/list.html'
		}

	}).controller('yr', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {
		$scope.active = 'active'
		$location.path('nav');
		$scope.go = function() {
			$location.path('nav');
			$http({
				url: "http://47.90.20.200:1602/item?uid=" + window.localStorage.uid,
				method: "get"
			}).then(function(e) {
				$scope.gyr_arr = e.data;
				console.log(e);
			}, function() {});
			$scope.active = 'active'
			$scope.r_active = ''
			$scope.yr_active = ''
		}
		$scope.goOn = function(a,b) {
			$scope.gyr_luyou = 'http://www.surveytime.cn/1602/lik/dist/#!/share/servey?uid='+a+'&id='+b
		}
		$scope.goSta = function(id) {
			window.localStorage.id = $scope.gyr_arr[id].id;
		}
		$scope.add = function() {
			$location.path('nav/add');
			$scope.active = ''
			$scope.yr_active = ''
			$scope.r_active = 'r_active' 
		}
		$scope.mine = function() {
			$location.path('nav/mine');
			$scope.r_active = ''
 		    $scope.active = ''
 		    $scope.yr_active = 'yr_active'
		}
		$scope.username = window.localStorage.username;
		$http({
			url: "http://47.90.20.200:1602/item?uid=" + window.localStorage.uid,
			method: "get"
		}).then(function(e) {
			$scope.gyr_arr = e.data;
			console.log(e);
		}, function() {});
		$scope.remove = function(id) {
			var makeSure = confirm('确定要删除吗？')
			if (makeSure) {
				$http({
					url: 'http://47.90.20.200:1602/item?id=' + id,
					method: 'delete'
				}).then(function(e) {
					$http({
						url: "http://47.90.20.200:1602/item?uid=" + window.localStorage.uid,
						method: "get"
					}).then(function(e) {
						$scope.gyr_arr = e.data;
						console.log(e);
					}, function() {});
				}, function() {});
			}
		}
	}])