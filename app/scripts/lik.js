angular.module('lik', [])
	.controller('likCtrl', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {
		$scope.goBack = function() {
			$location.path('nav')
		}
		$scope.hash=window.location.hash
		console.log($scope.hash)
//		$scope.hashUid=$scope.hash.split('=')[1].split('&')[0]
//		$scope.hashId=$scope.hash.split('=')[2].split('=')[1]
		$http({
			method: 'get',
			url: $rootScope.server + 'item',
			params: {
				uid: window.localStorage.uid,
				id: window.localStorage.id
			}
		}).then(function(e) {
			console.log(e.data)
			$scope.likData = e.data
		}, function() {})
	}])
	.directive('quescont', function() {
		return {
			template: '<div class="lik_ques_cont" ng-repeat="l in x.opt"><div class="lik_ques_opt"><input type="{{iptype}}" name="{{$parent.$index}}" />{{l.op}}</div></div>',
			replace:true,
			link:function(s,e,a){
				if(a.qtype == 0){
					s.iptype="text"
				}else if(a.qtype==1){
					s.iptype="radio"
				}else if(a.qtype==2){
					s.iptype="checkbox"
				}
			}
		}
	})