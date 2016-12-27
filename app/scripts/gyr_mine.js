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
 			method:'post',
 			data:{
 				username:window.localStorage.username,
 				password:$scope.password_old
 			}
 		}).then(function(){
 			if($scope.password_new == $scope.password_new2){
 				$http({
 					url:$rootScope.server+"users?id="+window.localStorage.id,
 					method:'put',
 					data:{
 						username:window.localStorage.username,
 						password:$scope.password_new
 					}
 				}).then(function(){
 					console.log()
 					alert('修改成功')
 				},function(){
 					
 				})
 			}else{
 				alert('输入密码不一致')
 			}
 		},function(){
 			alert('请输入正确初始密码')
 		})
	}
 	$scope.yr_close = function(){
 		$scope.y_tankuang = 'y_tankuang';
 	}
 	$scope.yr_close2 = function(){
 		$scope.y_tan_user = 'y_tan_user';
 	}
 	$scope.usename = function(){
 		$scope.y_tan_user = 'y_tan_usera';
 	}
 	$scope.y_ecit = function(){
 		
 	}
 	
 }])
