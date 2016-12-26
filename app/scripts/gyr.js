angular.module('gyr', ['ui.router','angular-clipboard'])
	.directive('list2', function() {
		return {
			restrict: 'ECMA',
			replace: true,
			templateUrl: 'views/list.html'
		}

	}).controller('yr', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {
		$scope.go = function() {
			$location.path('nav')
			window.location.reload()
		}
		$scope.goOn = function(id) {
			window.localStorage.id=$scope.gyr_arr[id].id
			$location.path('share')
		$scope.goOn = function(a) {
			$scope.gyr_id = a
			$scope.gyr_luyou = 'ddadad?id='+$scope.gyr_id
			console.log(a)
//			gyr_xinas.style.display = 'block'
		}
		$scope.goSta = function(id) {
			window.localStorage.id=$scope.gyr_arr[id].id
		}
		$scope.add = function() {
			$location.path('nav/add')
		}
		$scope.mine = function() {
			$location.path('mine')
		}
		$scope.username = window.localStorage.username
		$http({
			url: "http://47.90.20.200:1602/item?uid=" + window.localStorage.uid,
			method: "get"
		}).then(function(e) {
			$scope.gyr_arr = e.data
			console.log(e)
		}, function() {

		});
		$scope.remove = function(id) {
			var makeSure = confirm('确定要删除吗？')
			if(makeSure) {
				$http({
					url: 'http://47.90.20.200:1602/item?id=' + id,
					method: 'delete'
				}).then(function(e) {
					window.location.reload()
				}, function() {

				});
			}

		}
		
		new Clipboard('.btn', {
            text: function(trigger) {
    	alert('复制成功')
        return trigger.getAttribute('aria-label');
    }
});
	}])