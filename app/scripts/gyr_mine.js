angular.module('gyrmine',['ui.router'])
	.controller('yr_mine',['$rootScope','$scope','$location','$http', function($rootScope,$scope,$location,$http){
 	$scope.go=function(){
 		$location.path('nav')
 	}
 	//点击添加
 	$scope.add= function(){
 		$location.path('nav/add')
 	}
 	//退出登录
 	$scope.exit = function(){
 		$location.path('login')
 	}
 	$scope.username = window.localStorage.username;
 	$scope.passblock = function(){
 		$scope.y_tankuang = 'y_tankuang1';
 	}
 	//修改密码
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
 					url:$rootScope.server+"users/"+window.localStorage.uid,
 					method:'put',
 					data:{
 						username:window.localStorage.username,
 						//username:window.localStorage.uid,
 						password:$scope.password_new
 					}
 				}).then(function(){
 					alert('修改成功,请重新登录');
 					$location.path('login')
// 					console.log(e)
// 					window.localStorage.uid=e.data.id;
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
 }])
