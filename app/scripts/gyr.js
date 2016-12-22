angular.module('yeomanApp',['ui.router'])
 .directive('view', function(){
 	return {
 		restrict:'ECMA',
	 	replace:true,
	 	templateUrl:'views/nav.html'
 	}
 	
 })
angular.module('gyr',['ui.router'])
.directive('list2', function(){
 	return {
 		restrict:'ECMA',
	 	replace:true,
	 	templateUrl:'views/list.html'
 	}
 	
 })
 }).controller('yr',['$scope','$location', function($scope,$location){
 	$scope.go=function(){
 		$location.path('nav')
 	}
 	$scope.add= function(){
 		$location.path('nav/add')
 	}
 }])
