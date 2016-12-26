angular.module('lik', [])
	.controller('likCtrl', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {
		$scope.goBack = function() {
			$location.path('nav')
		}
		$scope.hash = window.location.hash
		$scope.idNeed = $scope.hash.split('?')[1]
//		console.log($scope.idNeed)
		$http({
			method: 'get',
			url: $rootScope.server + 'item?' + $scope.idNeed
		}).then(function(e) {
			$scope.likData = e.data
			console.log($scope.likData.option)
		}, function() {})
		$scope.submit = function() {
			console.log($scope.likData.option)
			for(var i=0;i<$scope.likData.option.length;i++){
				if($scope.likData.option[i].type==0){
					$scope.likData.option[i].oop=$('.liktext').eq(i).val()
				}else if($scope.likData.option[i].type==1){
					/*for(var j=0;j<$scope.likData.option[i].opt.length;j++){
						if($('.likradio')[j].attr('checked')=='true'){
							$scope.likData.option[i].opt[j].num+=1
						}
					}*/
				}else if($scope.likData.option[i].type==3){
					console.log(i)
					$scope.likData.option[i].oop=$('.likarea').eq(i).val()
				}
			}
			console.log($scope.likData.option)
			
			$http({
				url: $rootScope.server + 'item?' + $scope.idNeed,
				method: 'put'
			}).then(function() {

			}, function() {})
		}
	}])
