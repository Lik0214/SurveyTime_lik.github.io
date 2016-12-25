angular.module('gyr',['ui.router'])
.directive('list2', function(){
 	return {
 		restrict:'ECMA',
	 	replace:true,
	 	templateUrl:'views/list.html'
 	}
 	
}).controller('yr',['$rootScope','$scope','$location','$http', function($rootScope,$scope,$location,$http){
 	$scope.go=function(){
 		$location.path('nav')
 	}
 	$scope.goOn = function(){
 		$location.path('share')
 	}
 	$scope.add= function(){
 		$location.path('nav/add')
 	}
 	$scope.mine= function(){
 		$location.path('mine')
 	}
 	$scope.username = window.localStorage.username
 	$http({
				url:$rootScope.server+"item?uid="+window.localStorage.uid,
				method:"get"
			}).then(function(e){
				console.log(e)
			},function(){
				
			});

 }])
