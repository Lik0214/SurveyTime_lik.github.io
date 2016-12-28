angular.module('syj',["chart.js"]).controller("syjCtrl", ["$rootScope","$scope","$http","getData",function ($rootScope,$scope,$http,getData) {
  	$scope.syj_server=$rootScope.server + "/item?uid=";
	$scope.coo = window.localStorage.uid;
    $scope.syj_arr = []
  	getData.get($rootScope.server + "/item",{uid:window.localStorage.uid,id:window.localStorage.id},function(respose){
	  	$scope.fruit=respose.data.option;
	  	console.log($scope.fruit)
	  	var syj_arr=[];
	  	var syj_str='';
		//循环num  op
	   for(var i=0;i<$scope.fruit.length;i++){
	   	  $scope.syj_arr.push({num:[],op:[]})
	   	  for(var j=0;j<$scope.fruit[i].opt.length;j++){
	   	  	$scope.syj_arr[i].num.push($scope.fruit[i].opt[j].num)
	   	  	$scope.syj_arr[i].op.push($scope.fruit[i].opt[j].op)
	   	  }
	   }
	   //console.log($scope.syj_arr)
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




  