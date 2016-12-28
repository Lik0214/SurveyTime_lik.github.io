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
		}
		$scope.goOn = function(a, b) {
			$scope.gyr_luyou = 'http://www.surveytime.cn/1602/lik/dist/#!/share/servey?uid=' + a + '&id=' + b

			$scope.active = 'active'
			$scope.r_active = ''
			$scope.yr_active = ''

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
			url: $rootScope.server + "item?uid=" + window.localStorage.uid,
			method: "get"
		}).then(function(e) {
			$scope.gyr_arrs = e.data;
			wcg_hans(0, 6)
			$scope.$watch('gyr_arrs', function() {
				$scope.wcg_arrd = []
				for(var i = 0; i < $scope.gyr_arrs.length / 6; i++) {
					$scope.wcg_arrd.push({
						se: '1'
					})
				}
				$scope.wcg_arrd[0].se = 'background:#FFFFCC'
			})
			$scope.$watch('gyr_arr', function() {
				if($scope.gyr_arr.length == 0) {
					wcg_hans($scope.numbers - 1, 6)
					for(var i=0;i<$scope.wcg_arrd.length;i++){
						$scope.wcg_arrd[i].se = ''
					  }
					$scope.wcg_arrd[$scope.numbers].se = 'background:#FFFFCC'
				}

			})
			console.log(e);
		}, function() {});

		function wcg_hans(a, b) {
			$scope.numbers = a
			$scope.gyr_arr = $scope.gyr_arrs.slice(a * b, a * b + b);
		}
		$scope.wcg_diand = function(c) {
			wcg_hans(c, 6)
					   for(var i=0;i<$scope.wcg_arrd.length;i++){
						$scope.wcg_arrd[i].se = ''
					  }
				$scope.wcg_arrd[c].se = 'background:#FFFFCC'
					   
		}
		$scope.wcg_left = function() {
			$scope.numbers--
				if($scope.numbers == -1) {
					
					$scope.numbers = 0
				} 
				wcg_hans($scope.numbers, 6)
			for(var i=0;i<$scope.wcg_arrd.length;i++){
						$scope.wcg_arrd[i].se = ''
					  }
				$scope.wcg_arrd[$scope.numbers].se = 'background:#FFFFCC'
		}
		$scope.wcg_right = function() {
			$scope.numbers++
				if($scope.numbers == $scope.wcg_arrd.length) {
					$scope.numbers = $scope.wcg_arrd.length - 1
				}
				wcg_hans($scope.numbers, 6)
				for(var i=0;i<$scope.wcg_arrd.length;i++){
						$scope.wcg_arrd[i].se = ''
					  }
				$scope.wcg_arrd[$scope.numbers].se = 'background:#FFFFCC'
		}
		$scope.remove = function(id, b) {
			var makeSure = confirm('确定要删除吗？')

			if(makeSure) {

				$http({
					url: $rootScope.server + 'item?id=' + id,
					method: 'delete'
				}).then(function(e) {
					$http({
						url: $rootScope.server + "item?uid=" + window.localStorage.uid,
						method: "get"
					}).then(function(e) {
						$scope.gyr_arrs = e.data;

						wcg_hans($scope.numbers, 6)
						console.log(e);
					}, function() {});
				}, function() {});
			}
		}
	}])