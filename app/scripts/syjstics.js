angular.module('syj',["chart.js"]).controller("syjCtrl", ["$scope","$http","getData",function ($scope,$http,getData) {
  	$scope.syj_server="http://47.90.20.200:1602/item?uid=";
	$scope.coo = window.localStorage.uid;
    $scope.syj_arr = []
  	getData.get("http://47.90.20.200:1602/item",{uid:window.localStorage.uid,id:window.localStorage.id},function(respose){
	  	$scope.fruit=respose.data.option;
	  	console.log($scope.fruit)
	  	var syj_arr=[];
	  	var syj_str='';
	  	$scope.colora=["red","bule","yellow"];
		$scope.syj_num=[1,2,3];
		$scope.syj_op=[1,2,3];
		$scope.syj_num1=[1,2,3];
		$scope.syj_op1=[1,2,3];
		//循环num  op
	   for(var i=0;i<$scope.fruit.length;i++){
	   	  $scope.syj_arr.push({num:[],op:[]})
	   	  for(var j=0;j<$scope.fruit[i].opt.length;j++){
	   	  	
	   	  	$scope.syj_arr[i].num.push($scope.fruit[i].opt[j].num)
	   	  	$scope.syj_arr[i].op.push($scope.fruit[i].opt[j].op)
	   	  }
	   }
	   console.log($scope.syj_arr)
	   
	})
}]).service("getData",["$http",function($http){
	return{
		get:function(url,data,callbk){
			$http({
				url:url,
				method:"get",
				params:data
			}).then(function(e){
				callbk(e)
			},function(){})
		},
		post:function(url,data,callbk){
			$http({
				url:url,
				method:"post",
				data:data
			}).then(function(e){
				callbk(e)
			},function(){})
		}
	} 
}]);




  