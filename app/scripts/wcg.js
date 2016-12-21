angular
  .module('yeomanApp', []).controller('wcg_ju',['$scope',function($scope){
	$scope.wcg_arr_1=[{id:0,arr:[0]}]
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
    console.log($scope.wcg_chaun[0])
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
	}
	$scope.sex3 = function(a,b,c){
		var ax = document.getElementById(a)
		var adiv = ax.getElementsByTagName('div')
		for(var i=0;i<adiv.length;i++){
			adiv[i].className="wcg_show"
		}
		adiv[b].className='wcg_show_yes'
    $scope.wcg_chaun[0].option[c].opt = []
    console.log($scope.wcg_chaun[0])
	}
   //循环模块
   //添加
   var a = 0
   var b = 0
   $scope.btn = function(){
   	   a++
   	   b++
       $scope.wcg_arr_1.push({id:b,arr:[0]})
       
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
  }])
  .directive('wcg', function(){
  	return {
  		restrict:'ECMA',
  		templateUrl:'views/quesTmp.html'
  	}
  })
