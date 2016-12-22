angular.module('py', [])/*.directive("uiView", function() {
	return {
		restrict: "ECMA",
		templateUrl: 'views/login.html',
		scope: true,
		replace: false,
		link: function(s, e, a) {
<<<<<<< HEAD
			e.find('#y_zhuce').click(function() {
				e.find('#y_nav_center_right').css('left', '100%');
				e.find('#y_nav_center_left').css('left', 0);
				e.find('#y_zhuce').addClass('active');
				e.find('#y_deng').removeClass();
			});
			e.find('#y_deng').on('click', function() {
				e.find('#y_nav_center_left').css('left', '100%');
				e.find('#y_nav_center_right').css('left', 0);
				e.find('#y_deng').addClass('active');
				e.find('#y_zhuce').removeClass();
=======
			$('#y_zhuce').click(function() {
				$('#y_nav_center_right').css('left', '100%');
				$('#y_nav_center_left').css('left', 0);
				$('#y_zhuce').className = 'active';
				$('#y_deng').className = '';
			});
			$('#y_deng').on('click', function() {
				$('#y_nav_center_left').css('left', '100%');
				$('#y_nav_center_right').css('left', 0);
				$('#y_deng').className = 'active';
				$('#y_zhuce').className = '';
>>>>>>> origin/master
			});
			var code; //在全局定义验证码   

			createCode();
			$("#change").click(function() {
				createCode();
			});
			//	document.getElementById("btn").onclick=function(){
			//		validate();
			//	};
			//产生验证码 
			function createCode() {
				code1 = "";
				var codeLength = 4; //验证码的长度  
				//	     var checkCode = document.getElementById("code");   
				var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
					'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
				for(var i = 0; i < codeLength; i++) { //循环操作  
					var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
					code1 += random[index]; //根据索引取得随机数加到code上  
				}
<<<<<<< HEAD
				e.find('#code').html(code1); //把code值赋给验证码  
=======
				$('#code').html(code); //把code值赋给验证码  
>>>>>>> origin/master
			}
			//校验验证码  
			function validate() {
				var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写        
				if(inputCode.length <= 0) { //若输入的验证码长度为0  
					alert("请输入验证码！"); //则弹出请输入验证码  
				} else if(inputCode != code1) { //若输入的验证码与产生的验证码不一致时  
					alert("验证码输入错误！");
					document.getElementById("input").value = "";
					//清空文本框  
				} else { //输入正确时  
					alert("OK");
				}
			}
		}
	}
<<<<<<< HEAD
}).controller("pyan",["$scope","$http",function($scope,$http){
//	注册
	$scope.data = {};
	$scope.signin = function(){
		if($scope.data.username == '' || $scope.data.username == null){
			$scope.y_background = 'y_background1';
			$scope.borrow="请输入账号!";
			$scope.close = function(){
				$scope.y_background = 'y_background';
			}
		}else if($scope.data.password == '' || $scope.data.password == null){
			$scope.y_background = 'y_background1';
			$scope.borrow="请输入密码!";
			$scope.close = function(){
				$scope.y_background = 'y_background';
			}
		}else if($scope.data.word == '' || $scope.data.word == null){
			$scope.y_background = 'y_background1';
			$scope.borrow="请再一次输入密码!";
			$scope.close = function(){
				$scope.y_background = 'y_background';
			}
		}else if($scope.data.word != $scope.data.password){
			$scope.y_background = 'y_background1';
			$scope.borrow="两次密码输入不一致";
			$scope.close = function(){
				$scope.y_background = 'y_background';
			}
		}else{
			$http({
				url:"http://47.90.20.200:1602/users",
				method:"post",
				data:$scope.data
			}).then(function(e){
				console.log(e)
			},function(){
				alert('用户名已存在');
//				$scope.borrow="用户名已存在!";
//				$scope.close = function(){
//					$scope.y_background = 'y_background';
//				}
			});
			
		}
	}
//	登录
	$scope.updata={};
	$scope.login = function(){
		if($scope.updata.username == '' || $scope.updata.username == null){
			$scope.y_background = 'y_background1';
			$scope.borrow="请输入正确的登录账号!";
			$scope.close = function(){
				$scope.y_background = 'y_background';
			}
		}else if($scope.updata.password == '' || $scope.updata.password == null){
			$scope.y_background = 'y_background1';
			$scope.borrow="请输入正确的密码!";
			$scope.close = function(){
				$scope.y_background = 'y_background';
			}
		}else if($scope.security == '' || $scope.security == null){
			$scope.y_background = 'y_background1';
			$scope.borrow="请输入验证码!";
			$scope.close = function(){
				$scope.y_background = 'y_background';
			}
		}else if($scope.security != code1){
			$scope.y_background = 'y_background1';
			$scope.borrow="请输入正确的验证码!";
			$scope.close = function(){
				$scope.y_background = 'y_background';
			}
		}else{
			$http({
					url:"http://47.90.20.200:1602/users/login",
					method:"post",
					data:$scope.updata
				}).then(function(e){
					console.log(e)
				},function(){
					alert('用户名或密码不正确!')
//					$scope.borrow="用户名或密码不正确!";
//					$scope.close = function(){
//						$scope.y_background = 'y_background';
//					}
				});
//			console.log($scope.updata)
//			$http({
//					url:"http://47.90.20.200:1602/users/login",
//					method:"post",
//					data:$scope.updata
//				}).then(function(e){
//					console.log(e)
//				});
		}
	}
	
	
	
	
	
	
	
}])
=======
})*/.controller('py',['$scope','$location',function($scope,$location){
	$scope.fn = function(){
		$location.path('nav')
	}
	$('#y_zhuce').click(function() {
				$('#y_nav_center_right').css('left', '100%');
				$('#y_nav_center_left').css('left', 0);
				$('#y_zhuce').className = 'active';
				$('#y_deng').className = '';
			});
			$('#y_deng').on('click', function() {
				$('#y_nav_center_left').css('left', '100%');
				$('#y_nav_center_right').css('left', 0);
				$('#y_deng').className = 'active';
				$('#y_zhuce').className = '';
			});
			var code; //在全局定义验证码   

			createCode();
			$("#change").click(function() {
				createCode();
			});
			//	document.getElementById("btn").onclick=function(){
			//		validate();
			//	};
			//产生验证码 
			function createCode() {
				code = "";
				var codeLength = 4; //验证码的长度  
				//	     var checkCode = document.getElementById("code");   
				var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
					'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
				for(var i = 0; i < codeLength; i++) { //循环操作  
					var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
					code += random[index]; //根据索引取得随机数加到code上  
				}
				$('#code').html(code); //把code值赋给验证码  
			}
			//校验验证码  
			function validate() {
				var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写        
				if(inputCode.length <= 0) { //若输入的验证码长度为0  
					alert("请输入验证码！"); //则弹出请输入验证码  
				} else if(inputCode != code) { //若输入的验证码与产生的验证码不一致时  
					alert("验证码输入错误！");
					document.getElementById("input").value = "";
					//清空文本框  
				} else { //输入正确时  
					alert("OK");
				}
			}
}])
>>>>>>> origin/master
