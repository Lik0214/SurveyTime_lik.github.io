angular.module('yeomanApp',['ui.router'])
 .directive('view', function(){
 	return {
 		restrict:'ECMA',
	 	replace:true,
	 	templateUrl:'views/nav.html'
 	}
 	
 })
.directive('list2', function(){
 	return {
 		restrict:'ECMA',
	 	replace:true,
	 	templateUrl:'views/list.html'
 	}
 	
 })
