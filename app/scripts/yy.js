angular.module('py', []).controller("pyan", ["$rootScope", "$scope", "$http", "$location", function($rootScope, $scope, $http, $location) {
	$('#y_zhuce').click(function() {
		$('#y_nav_center_right').css('left', '100%');
		$('#y_nav_center_left').css('left', 0);
		$('#y_zhuce').addClass('active');
		$('#y_deng').removeClass('active');
	});
	$('#y_deng').on('click', function() {
		$('#y_nav_center_left').css('left', '100%');
		$('#y_nav_center_right').css('left', 0);
		$('#y_deng').addClass('active');
		$('#y_zhuce').removeClass('active');
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
	var code1;

	function createCode() {
		code1 = "";
		var codeLength = 4; //验证码的长度  
		//	     var checkCode = document.getElementById("code");   
		var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
		for(var i = 0; i < codeLength; i++) { //循环操作  
			var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
			code1 += random[index]; //根据索引取得随机数加到code上  
		}
		$('#code').html(code1); //把code值赋给验证码  
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

	//	注册
	$scope.data = {};
	$scope.signin = function() {
			var str = $scope.data.username;
			var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g;
			if(reg.test(str)) {
				if($scope.data.username == '' || $scope.data.username == null) {
					$scope.y_background = 'y_background1';
					$scope.borrow = "请输入正确账号!";
					$scope.close = function() {
						$scope.y_background = 'y_background';
//						$scope.data.username = '';
					}
				} else if($scope.data.password == '' || $scope.data.password == null) {
					$scope.y_background = 'y_background1';
					$scope.borrow = "请输入密码!";
					$scope.close = function() {
						$scope.y_background = 'y_background';
					}
				} else if($scope.data.password.length < 6 || $scope.data.password.length > 14) {
					$scope.y_background = 'y_background1';
					$scope.borrow = "密码必须是6~14位!";
					$scope.close = function() {
//						$scope.data.password = '';
						$scope.y_background = 'y_background';
					}
				} else if($scope.data.word == '' || $scope.data.word == null) {
					$scope.y_background = 'y_background1';
					$scope.borrow = "请再一次输入密码!";
					$scope.close = function() {
						$scope.y_background = 'y_background';
//						$scope.data.word = '';
					}
				} else if($scope.data.word != $scope.data.password) {
					$scope.y_background = 'y_background1';
					$scope.borrow = "两次密码输入不一致";
					$scope.close = function() {
						$scope.y_background = 'y_background';
//						$scope.data.password = '';
//						$scope.data.word = '';
					}
				} else {
					$http({
						url: $rootScope.server + "users",
						method: "post",
						data: $scope.data
					}).then(function(e) {
						$scope.y_background = 'y_background1';
						$scope.borrow = "注册成功，请登录";
						$scope.data.password = '';
						$scope.data.word = '';
						$scope.data.username = '';
						$scope.close = function() {
							$scope.y_background = 'y_background';
						}
						$scope.y_name = data.username;
						$scope.updata.username = $scope.data.username
							//				$('#y_dl_phone').html($scope.data.username)
					}, function() {
						$scope.y_background = 'y_background1';
						$scope.close = function() {
							$scope.y_background = 'y_background';
						}
						$scope.borrow = "用户名已存在!";
					});
				}
			} else {
				$scope.y_background = 'y_background1';
				$scope.borrow = "请输入正确邮箱";
				$scope.close = function() {
					$scope.y_background = 'y_background';
//					$scope.data.username = '';
				}
			}

		}
		//	登录
	$scope.check = false;
	$scope.updata = {};
	//		获取cookie函数
	function getcookie(objname) {
		var str = document.cookie.split("; ");
		for(var i = 0; i < str.length; i++) {
			var arr = str[i].split("=");
			if(arr[0] == objname) return unescape(arr[1]);
		}
	}
	//	获取username，password
	var cookuser = getcookie('username');
	var cookpass = getcookie('password');

	//	如果有则填写
	if(cookuser && cookpass) {
		$scope.updata.username = cookuser;
		$scope.updata.password = cookpass;
		$scope.check = true;
	}
	$scope.login = function() {

		if($scope.updata.username == '' || $scope.updata.username == null) {
			createCode();
			$scope.y_background = 'y_background1';
			$scope.borrow = "请输入正确的登录账号!";
			$scope.close = function() {
				$scope.y_background = 'y_background';
				$scope.deng = 'kkk';
			}
		} else if($scope.updata.password == '' || $scope.updata.password == null) {
			createCode();
			$scope.y_background = 'y_background1';
			$scope.borrow = "请输入正确的密码!";
			$scope.close = function() {
				$scope.y_background = 'y_background';
			}
		} else if($scope.security == '' || $scope.security == null) {
			createCode();
			$scope.y_background = 'y_background1';
			$scope.borrow = "请输入验证码!";
			$scope.close = function() {
				$scope.y_background = 'y_background';
			}
		} else if($scope.security.toUpperCase() != code1.toUpperCase()) {
			createCode();
			$scope.y_background = 'y_background1';
			$scope.borrow = "请输入正确的验证码!";
			$scope.close = function() {
				$scope.y_background = 'y_background';
				$scope.yzm = '';
			}
		} else {  // 登录
			$http({
				url: $rootScope.server + "users/login",
				method: "post",
				data: $scope.updata
			}).then(function(e) {
				if($scope.check == true) {
					//						cookie过期时间
					function setCookie(cookie_name, value, Path, timeout) {
						var date = new Date();
						date.setDate(date.getDate() + timeout)
						document.cookie = cookie_name + "=" + escape(value) + ";path" + "=" + Path +
							';expires=' + date.toGMTString()
					}
					setCookie('username', $scope.updata.username, '/', 7);
					setCookie('password', $scope.updata.password, '/', 7);
				}
				
				window.localStorage.uid = e.data.uid;
				window.localStorage.id=e.data.id;
				window.localStorage.username=$scope.updata.username;
				window.localStorage.password=$scope.updata.password;
				$location.path('nav');
			}, function() {
				$scope.y_background = 'y_background1';
				$scope.borrow = "用户名和密码不一致 !";
				$scope.close = function() {
					$scope.y_background = 'y_background';
				}
			});
		}

		if($('#inputCheck').prop('checked') == true) {
			//		alert(1)
		} else {
			//		alert(2)
			if($scope.updata.password) {
				setCookie('username', $scope.updata.username, '/', -1);
				//					$scope.updata.username = window.localStorage.username
				setCookie('password', $scope.updata.password, '/', -1);
				//					localStorage.clear();
				//					sessionStorage.clear();
				//设置Cookie
				function setCookie(cookie_name, value, Path, timeout) {
					var date = new Date();
					date.setDate(date.getDate() + timeout)
					document.cookie = cookie_name + "=" + escape(value) + ";path" + "=" + Path +
						';expires=' + date.toGMTString()
				}
			}
		}
	}

}])