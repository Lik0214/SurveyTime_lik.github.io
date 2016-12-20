angular
  .module('yeomanApp', []).controller('wcg_ju',['$scope',function($scope){
	$scope.wcg_arr_1=[{id:0,arr:[0]}]
    
	$scope.sex0 = function(a,b){
//      alert(a)
		var ax = document.getElementById(a)
		var adiv = ax.getElementsByTagName('div')
//		alert(adiv.length)
		for(var i=0;i<adiv.length;i++){
			adiv[i].className="wcg_show"
		}
		adiv[b].className='wcg_show_yes'

	}
	$scope.sex1 = function(a,b){
		var ax = document.getElementById(a)
		var adiv = ax.getElementsByTagName('div')
		for(var i=0;i<adiv.length;i++){
			adiv[i].className="wcg_show"
		}
		adiv[b].className='wcg_show_yes'
//		alert(b)

	}
	$scope.sex2 = function(a,b){
		var ax = document.getElementById(a)
		var adiv = ax.getElementsByTagName('div')
		for(var i=0;i<adiv.length;i++){
			adiv[i].className="wcg_show"
		}
		adiv[b].className='wcg_show_yes'
//      alert(b)
	}
	$scope.sex3 = function(a,b){
		var ax = document.getElementById(a)
		var adiv = ax.getElementsByTagName('div')
		for(var i=0;i<adiv.length;i++){
			adiv[i].className="wcg_show"
		}
		adiv[b].className='wcg_show_yes'
//      alert(b)
	}
   
   var a = 0
   var b = 0
   $scope.btn = function(){
   	   a++
   	   b++
       $scope.wcg_arr_1.push({id:b,arr:[0]})
       console.log($scope.wcg_arr_1)
       
   }
   $scope.btn2 = function(c){
      a++
       $scope.wcg_arr_1[c].arr.push(a)
       console.log($scope.wcg_arr_1)
   }
   $scope.btn3 = function(c){
       a++
       $scope.wcg_arr_1[c].arr.push(a)
       console.log($scope.wcg_arr_1)
   }
   $scope.dians = function(e){
   	$scope.wcg_arr_1.splice(e,1)
   	console.log($scope.wcg_arr_1)
   }
   $scope.dians2 = function(e,d){
   	$scope.wcg_arr_1[d].arr.splice(e,1)
   	console.log($scope.wcg_arr_2)
   }
   $scope.dians3 = function(e,d){
   	$scope.wcg_arr_1[d].arr.splice(e,1)
   	console.log($scope.wcg_arr_3)
   }
  }])
  .directive('wcg', function(){
  	return {
  		restrict:'ECMA',
  		templateUrl:'views/quesTmp.html'
  	}
  })
