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
 	$scope.username = window.localStorage.username
 }])
