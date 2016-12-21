
$(function(){
//	注册,登录切换
	/*var Ozhuce = document.querySelector('#y_zhuce');
	var Odeng =document.querySelector('#y_deng');
	var Oleft = document.querySelector('.y_nav_center_left');
	var Oright =document.querySelector('.y_nav_center_right');*/
	$('#y_zhuce').on('click',function(){
		$('#y_nav_center_right').css('left','100%');
		$('#y_nav_center_left').css('left',0);
		$('#y_zhuce').className = 'active';
		$('#y_deng').className = '';
	})
	$('#y_deng').on('click',function(){
		$('#y_nav_center_left').css('left','100%');
		$('#y_nav_center_right').css('left',0);
		$('#y_deng').className = 'active';
		$('#y_zhuce').className = '';
	})
//验证码	
	var code ; //在全局定义验证码   
	 
	createCode();
	$("#change").click(function(){
		createCode();
	});
//	document.getElementById("btn").onclick=function(){
//		validate();
//	};
	//产生验证码 
	function createCode(){  
	     code = "";   
	     var codeLength = 4;//验证码的长度  
//	     var checkCode = document.getElementById("code");   
	     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
	     'S','T','U','V','W','X','Y','Z');//随机数  
	     for(var i = 0; i < codeLength; i++) {//循环操作  
	        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
	        code += random[index];//根据索引取得随机数加到code上  
	    }  
	    $('#code').html(code);//把code值赋给验证码  
	}  
	//校验验证码  
	function validate(){  
	    var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写        
	    if(inputCode.length <= 0) { //若输入的验证码长度为0  
	        alert("请输入验证码！"); //则弹出请输入验证码  
	    }         
	    else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时  
	        alert("验证码输入错误！"); 
	        document.getElementById("input").value = "";
	        //清空文本框  
	    }         
	    else { //输入正确时  
	        alert("OK");
	    }             
	} 
	//登录ajax
	/*var Oy_zcan = document.querySelector('#y_zcan');
	var Oy_dlan = document.querySelector('#y_dlan');
//	var Oy_nav_center_left = document.querySelector('#y_nav_center_left');
//	var Oy_nav_center_right = document.querySelector('#y_nav_center_right');
//	var aBtn = Oy_nav_center_right.getElementsByTagName('input');
	var Oy_dl_phone = document.querySelector('#y_dl_phone');
	var Oy_dl_pass = document.querySelector('#y_dl_pass');
	var Oinput = document.querySelector('#input');
//	alert(aBtn.length)
	Oy_dlan.onclick = function(){
		if(Oy_dl_phone.value == ''){
			
		}else if(Oy_dl_pass.value == ''){
			
		}else if(Oinput.value == ''){
			
		}else{
			
		}
	}*/
	
})
