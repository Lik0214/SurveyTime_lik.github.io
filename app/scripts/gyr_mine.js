angular.module('gyrmine',['ui.router'])
	.controller('mine',['$rootScope','$scope','$location','$http', function($rootScope,$scope,$location,$http){
 	$scope.go=function(){
 		$location.path('nav')
 	}
 	$scope.add= function(){
 		$location.path('nav/add')
 	}
 	$scope.mine= function(){
 		$location.path('mine')
 	}
 	$scope.exit = function(){
 		$location.path('login')
 	}
 	$scope.username = window.localStorage.username;
 	$scope.passblock = function(){
 		$scope.y_tankuang = 'y_tankuang1';
 	}
 	$scope.ynone = function(){
 		$http({
 			url:$rootScope.server+"users/login",
 			method:'get',
 		}).then(function(e){
 			console.log(e)
 		},function(){
 			
 		})
	 	$scope.y_tankuang = 'y_tankuang';
	}
 	$scope.usename = function(){
 		$scope.y_tan_user = 'y_tan_usera';
 	}
 	$scope.yzili = function(){
 		$scope.y_tan_user = 'y_tan_user';
 	}
 	
 }])
