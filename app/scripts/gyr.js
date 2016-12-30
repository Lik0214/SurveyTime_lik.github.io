angular.module('gyr', ['ui.router'])
	.directive('list2', function() {
		return {
			restrict: 'ECMA',
			replace: true,
			templateUrl: 'views/list.html'
		}
	}).controller('yr', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {
		$scope.active = 'active'
		$scope.yr_bj = 'yr_bj'
		$location.path('nav');
		$scope.go = function() {
			$location.path('nav');
			$scope.active = 'active'
			$scope.r_active = ''
			$scope.yr_active = ''
			$scope.yr_bj = 'yr_bj'
		}
		$scope.goOn = function(a, b) {
			$scope.gyr_luyou = 'http://www.surveytime.cn/1602/lik/dist/#!/thanks/servey?uid=' + a + '&id=' + b
			$scope.active = 'active'
			$scope.r_active = ''
			$scope.yr_active = ''
			//$scope.yr_bj = ''
		}
		$scope.goSta = function(id) {
			window.localStorage.id = id;
		}
		$scope.add = function() {
			$location.path('nav/add');
			$scope.active = ''
			$scope.yr_active = ''
			$scope.yr_bj = ''
			$scope.r_active = 'r_active'
		}
		$scope.mine = function() {
			$location.path('nav/mine');
			$scope.r_active = ''
			$scope.active = ''
			$scope.yr_bj = ''
			$scope.yr_active = 'yr_active'
		}
		$scope.gyr_arrs = ''
		$scope.username = window.localStorage.username;
		$http({
			url: $rootScope.server + "item?uid=" + window.localStorage.uid,
			method: "get"
		}).then(function(e) {
			$scope.gyr_arr = e.data;
			$scope.gyr_arrs = e.data;
			console.log(e);
		}, function() {});
		$http({
			url: $rootScope.server + "item?uid=" + window.localStorage.uid,
			method: "get"
		}).then(function(e) {
			$scope.gyr_arr = e.data;
			console.log(e);
		}, function() {});
		$scope.$watch('gyr_arrs', function() {
			$scope.wcg_arrd = []
			for(var i = 0; i < $scope.gyr_arrs.length / 6; i++) {
				$scope.wcg_arrd.push({
					'se': ''
				})
			}

			if($scope.wcg_arrd.length != 0) {
				for(var i = 0; i < $scope.wcg_arrd.length; i++) {
					$scope.wcg_arrd[i].se = ''
				}
				$scope.wcg_arrd[0].se = 'display:block'
			}

			if($scope.page !== 0) {
				$scope.page--
			}

		})

		$scope.wcg_bian = function(a) {
			$scope.strs = a.toUpperCase()
			if($scope.strs != '') {
				$scope.arr1s = []

				for(var i = 0; i < $scope.gyr_arr.length; i++) {
					if($scope.gyr_arr[i].title.toUpperCase().indexOf($scope.strs) != -1) {
						$scope.arr1s.push($scope.gyr_arr[i])
					}

				}

				$scope.gyr_arrs = $scope.arr1s
			} else {
				$scope.gyr_arrs = $scope.gyr_arr

			}
			window.localStorage.wcg_tmp = a
			$scope.wcg_s = window.localStorage.wcg_tmp
		}
		$scope.page = 0
		$scope.wcg_diand = function(c) {
			$scope.page = c
			if($scope.wcg_arrd.length != 0) {
				for(var i = 0; i < $scope.wcg_arrd.length; i++) {
					$scope.wcg_arrd[i].se = ''
				}
				$scope.wcg_arrd[$scope.page].se = 'display:block'
			}

		}
		$scope.wcg_left = function() {
			$scope.page--
				if($scope.page == -1) {

					$scope.page = 0
				}
			if($scope.wcg_arrd.length != 0) {
				for(var i = 0; i < $scope.wcg_arrd.length; i++) {
					$scope.wcg_arrd[i].se = ''
				}
				$scope.wcg_arrd[$scope.page].se = 'display:block'
			}
		}
		$scope.wcg_right = function() {
			$scope.page++
				if($scope.page == $scope.wcg_arrd.length) {
					$scope.page = $scope.wcg_arrd.length - 1
				}
			if($scope.wcg_arrd.length != 0) {
				for(var i = 0; i < $scope.wcg_arrd.length; i++) {
					$scope.wcg_arrd[i].se = ''
				}
				$scope.wcg_arrd[$scope.page].se = 'display:block'
			}
		}
		$scope.remove = function(id, b) {
			var makeSure = confirm('确定要删除吗？')

			if(makeSure) {

				$http({
					url: $rootScope.server + 'item?id=' + id,
					method: 'delete'
				}).then(function(e) {
					window.localStorage.wcg_tmp = ''
					$scope.wcg_s = ''
					$('#search').val('')
					$http({
						url: $rootScope.server + "item?uid=" + window.localStorage.uid,
						method: "get"
					}).then(function(e) {
						$scope.gyr_arrs = e.data;
						$http({
							url: $rootScope.server + "item?uid=" + window.localStorage.uid,
							method: "get"
						}).then(function(e) {
							$scope.gyr_arr = e.data;
						}, function() {});
					}, function() {});
				}, function() {});
			}
		}
	}]).filter("f", function() {
		return function(input, page, siez) {
			var start = page * siez
			var end = (page + 1) * siez
			return input.slice(start, end)
		}
	})