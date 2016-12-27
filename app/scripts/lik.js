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
		}, function() {})
		$scope.submit = function() {
			for(var i = 0; i < $scope.likData.option.length; i++) {
				if($scope.likData.option[i].type == 0) {
					$scope.likData.option[i].oop = $('.liktext').eq(i).val()
				} else if($scope.likData.option[i].type == 1) {
					for(var j = 0; j < $scope.likData.option[i].opt.length; j++) {
						if($('.lik_survey_question').eq(i).find('input:radio').eq(j).prop('checked') == true) {
							$scope.likData.option[i].opt[j].num +=1
						}
					}
				} else if($scope.likData.option[i].type == 2) {
					for(var j = 0; j < $scope.likData.option[i].opt.length; j++) {
						if($('.lik_survey_question').eq(i).find('input:checkbox').eq(j).prop('checked') == true) {
							$scope.likData.option[i].opt[j].num +=1
						}
					}
				} else if($scope.likData.option[i].type == 3) {
					$scope.likData.option[i].oop = $('.likarea').eq(i).val()
				}
			}

			$http({
				url: $rootScope.server + 'item?' + $scope.idNeed,
				method: 'put',
				data:$scope.likData
			}).then(function() {

			}, function() {})
		}
	}])