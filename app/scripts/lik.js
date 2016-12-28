angular.module('lik', [])
	.controller('likCtrl', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {
		$scope.idNeed = window.location.hash.split('?')[1]
		$http({
			method: 'get',
			url: $rootScope.server + 'item?' + $scope.idNeed
		}).then(function(e) {
			$scope.likData = e.data
		}, function() {})
		$scope.lik_success = false
		$scope.lik_submit = function() {
			alert(1)
			for(var i = 0; i < $scope.likData.option.length; i++) {
				if($scope.likData.option[i].type == 0) {
					if($('.liktext').eq(i).val()==''){
						$scope.lik_success = false
						$scope.lik_success1 = 0
					}else{
						$scope.likData.option[i].oop = $('.liktext').eq(i).val()
						$scope.lik_success1 = 1
					}
				} else if($scope.likData.option[i].type == 1) {
					for(var j = 0; j < $scope.likData.option[i].opt.length; j++) {
						if($('.lik_survey_question').eq(i).find('input:radio').eq(j).prop('checked') == false){
							$scope.lik_success = false
							$scope.lik_success2 = 0
						}else{
							$scope.likData.option[i].opt[j].num +=1
							$scope.lik_success2 = 1
						}
					}
				} else if($scope.likData.option[i].type == 2) {
					for(var j = 0; j < $scope.likData.option[i].opt.length; j++) {
						if($('.lik_survey_question').eq(i).find('input:checkbox').eq(j).prop('checked') == false){
							$scope.lik_success = false
							$scope.lik_success3 = 0
						}else{
							$scope.likData.option[i].opt[j].num +=1
							$scope.lik_success3 = 1
						}
					}
				} else if($scope.likData.option[i].type == 3) {
					if($('.likarea').eq(i).val()==''){
						$scope.lik_success = false
						$scope.lik_success4 = 0
					}else{
						$scope.likData.option[i].oop = $('.likarea').eq(i).val()
						$scope.lik_success4 = 1
					}
				}
			}
			
			if($scope.lik_success1 == 1 && $scope.lik_success2 == 1 && $scope.lik_success3 == 1 && $scope.lik_success4 == 1){
				$scope.lik_success = true
			}

			if($scope.lik_success){
				$http({
					url: $rootScope.server + 'item?' + $scope.idNeed,
					method: 'put',
					data:$scope.likData
				}).then(function() {
	
				}, function() {})
			}else{
				alert('未完成调查问卷')
			}
		}
	}])