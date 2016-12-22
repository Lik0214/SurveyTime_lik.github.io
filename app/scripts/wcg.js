angular
  .module('wcg', []).controller('wcg_ju',['$scope',function($scope){

	$scope.wcg_arr_1=[{id:0,arr:[0],da1:'',da2:'',da3:''}]
  $scope.wcg_chaun=[{
  	            'option':[{
  	            	'title':'',
  	            	'opt':[],
  	            	'type':'',
  	            	'oop':""
  	            }],
  	            'uid':'',
  	            'title':''
  
  }]
  //四个问题类型
	$scope.sex0 = function(a,b,c){
//      alert(a)
		var ax = document.getElementById(a)
		var adiv = ax.getElementsByTagName('div')
//		alert(adiv.length)
		for(var i=0;i<adiv.length;i++){
			adiv[i].className="wcg_show"
		}
		adiv[b].className='wcg_show_yes'
    $scope.wcg_chaun[0].option[c].opt = []
    $scope.wcg_arr_1[c].arr = [0]
    console.log($scope.wcg_chaun[0])
    for(var i=0;i<$scope.wcg_arr_1.length;i++){
    	$scope.wcg_arr_1[i].da2 = ''
    }
	}
	$scope.sex1 = function(a,b,c){
		var ax = document.getElementById(a)
		var adiv = ax.getElementsByTagName('div')
		for(var i=0;i<adiv.length;i++){
			adiv[i].className="wcg_show"
		}
		adiv[b].className='wcg_show_yes'
       $scope.wcg_chaun[0].option[c].opt = [{'op':'','num':0}]
       console.log($scope.wcg_chaun[0])
       for(var i=0;i<$scope.wcg_arr_1.length;i++){
    	$scope.wcg_arr_1[i].da2 = ''
    }
	}
	$scope.sex2 = function(a,b,c){
		var ax = document.getElementById(a)
		var adiv = ax.getElementsByTagName('div')
		for(var i=0;i<adiv.length;i++){
			adiv[i].className="wcg_show"
		}
		adiv[b].className='wcg_show_yes'
     $scope.wcg_chaun[0].option[c].opt = [{'op':'','num':0}]
     console.log($scope.wcg_chaun[0])
     for(var i=0;i<$scope.wcg_arr_1.length;i++){
    	$scope.wcg_arr_1[i].da2 = ''
    }
	}
	$scope.sex3 = function(a,b,c){
		var ax = document.getElementById(a)
		var adiv = ax.getElementsByTagName('div')
		for(var i=0;i<adiv.length;i++){
			adiv[i].className="wcg_show"
		}
		adiv[b].className='wcg_show_yes'
    $scope.wcg_chaun[0].option[c].opt = []
    $scope.wcg_arr_1[c].arr = [0]
    console.log($scope.wcg_chaun[0])
    for(var i=0;i<$scope.wcg_arr_1.length;i++){
    	$scope.wcg_arr_1[i].da2 = ''
    }
	}
   //循环模块
   //添加
   var a = 0
   var b = 0
   $scope.btn = function(){
   	
   	   a++
   	   b++
       $scope.wcg_arr_1.push({id:b,arr:[0],da1:'',da2:'',da3:''})
       
       $scope.wcg_chaun[0].option.push({
  	            	'title':'',
  	            	'opt':[],
  	            	'type':'',
  	            	'oop':""
  	            })
       console.log($scope.wcg_chaun[0])
   }
   $scope.btn2 = function(c){
      a++
       $scope.wcg_arr_1[c].arr.push(a)
       $scope.wcg_chaun[0].option[c].opt.push({'op':'','num':0})
       console.log($scope.wcg_chaun[0])
   }
   $scope.btn3 = function(c){
       a++
       $scope.wcg_arr_1[c].arr.push(a)
       $scope.wcg_chaun[0].option[c].opt.push({'op':'','num':0})
       console.log($scope.wcg_chaun[0])
   }
   //删除
   $scope.dians = function(e){
   	if($scope.wcg_arr_1.length == 1){}else{
   		$scope.wcg_arr_1.splice(e,1)
   		$scope.wcg_chaun[0].option.splice(e,1)
   		console.log($scope.wcg_chaun[0].option)
   	}
   	
   }
   $scope.dians2 = function(e,d){
  
   	if($scope.wcg_arr_1[d].arr.length == 1){}else{
   		$scope.wcg_arr_1[d].arr.splice(e,1)
   		$scope.wcg_chaun[0].option[d].opt.splice(e,1)
   		console.log($scope.wcg_chaun[0])
   	}

   }
   $scope.dians3 = function(e,d){
   if($scope.wcg_arr_1[d].arr.length == 1){}else{
   		$scope.wcg_arr_1[d].arr.splice(e,1)
   		$scope.wcg_chaun[0].option[d].opt.splice(e,1)
   		console.log($scope.wcg_chaun[0])
   	}

   }
   $scope.wcg_yesanno = false
   $scope.wcg_title = ''
   $scope.wcg_xinz =[]
   $scope.wcg_over = function(){
// 	alert(1)
 
   	if($scope.wcg_chaun[0].title == ''){
   		  $scope.wcg_title = '请输入标题'
   		  $scope.wcg_yesanno = false
   	}else{
   		$scope.wcg_title = ''
   		for(var i=0;i<$scope.wcg_chaun[0].option.length;i++){
   	 	   if($scope.wcg_chaun[0].option[i].title == ''){
   	 	   	  $scope.wcg_arr_1[i].da1 = '请输入问题标题'
   	 	     $scope.wcg_yesanno = false
   	 	   }else if($scope.wcg_chaun[0].option[i].type == ''){
   	 	   	$scope.wcg_arr_1[i].da1 = ''
   	 	   	$scope.wcg_arr_1[i].da2 = '请选择问题回答类型'
   	 	    $scope.wcg_yesanno = false
   	 	   }else{
   	 	   		$scope.wcg_arr_1[i].da2 = ''
   	 	   	if($scope.wcg_chaun[0].option[i].opt[0] == undefined){
   	 	   	   	  	
                   $scope.wcg_xinz.push='0'
   	 	   	   	  		$scope.wcg_yesanno = true
   	 	   	   	  	$scope.wcg_arr_1[i].da3 = ''
   	 	   	   	    $scope.wcg_arr_1[i].da1 = ''
   	 	   	   	    $scope.wcg_arr_1[i].da2 = ''

   	 	   	   	  	
   	 	   	   	  	
   	 	   	   }else{
     	 	   	   for(var j=0;j<$scope.wcg_chaun[0].option[i].opt.length;j++){
     	 	   	   
   	 	   	   	    if($scope.wcg_chaun[0].option[i].opt[j].op == ''){
   	 	   	   	    	 $scope.wcg_arr_1[i].da3 = '请完善选项内容'
   	 	   	   	     $scope.wcg_yesanno = false
   	 	   	   	    }else{
                   $scope.wcg_xinz.push='0'
   	 	   	   	  		$scope.wcg_yesanno = true
   	 	   	   	  	 
   	 	   	   	  	$scope.wcg_arr_1[i].da3 = ''
   	 	   	   	    $scope.wcg_arr_1[i].da1 = ''
   	 	   	   	    $scope.wcg_arr_1[i].da2 = ''

   	 	   	   	    }
   	 	   	     }
   	 	   	   }
   	 	   }
   	 }
   	}
   	
   	 if($scope.wcg_yesanno == true){
   	 	alert('成功')
   	 }
   }
  }])
  .directive('wcg', function(){
  	return {
  		restrict:'ECMA',
  		replace:true,
  		templateUrl:'views/quesTmp.html'
  	}
  })
