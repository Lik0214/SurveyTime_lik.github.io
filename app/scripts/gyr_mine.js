angular.module('gyrmine',['ui.router'])
	.controller('mine',['$scope','$location', function($scope,$location){
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
	 	$scope.y_tankuang = 'y_tankuang';
	}
 }])
