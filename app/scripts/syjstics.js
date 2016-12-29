angular.module('syj',["chart.js"]).controller("syjCtrl", ["$rootScope","$scope","$http","getData",function ($rootScope,$scope,$http,getData) {
  	//ajax获取图形的数据
  	$scope.syj_server=$rootScope.server + "item?uid=";
	$scope.coo = window.localStorage.uid;
	$scope.syj_id=window.localStorage.id;
    $scope.syj_arr = [];
    $scope.colors=["Red","Blue","Yellow"];
  	getData.get($rootScope.server + "item",{uid:$scope.coo,id:$scope.syj_id},function(respose){
  		$scope.fruit_title=respose.data;
	  	$scope.fruit=respose.data.option;
	  	//console.log($scope.fruit)
	  	var syj_arr=[];
	  	var syj_str='';
		//循环num  op
	   for(var i=0;i<$scope.fruit.length;i++){
	   	  $scope.syj_arr.push({num:[],op:[]})
	   	  for(var j=0;j<$scope.fruit[i].opt.length;j++){
	   	  	$scope.syj_arr[i].num.push($scope.fruit[i].opt[j].num)
	   	  	$scope.syj_arr[i].op.push($scope.fruit[i].opt[j].op)
	   	  }
	   		//console.log($scope.syj_arr)
	   	  	$scope.syj_arr.push({num:[],op:[]})
			if($scope.fruit[i].type==1){
	   	  		for(var j=0;j<$scope.fruit[i].opt.length;j++){
	   	  		//判断选择多选有没有数据
		   	  		if($scope.fruit[i].opt[j].num == 0){
		   	  			$scope.fruit[i].opt[j].num = 1;
		   	  			$scope.fruit[i].opt[j].op = "还没有任何回答";
		   	  			//console.log($scope.fruit[i].opt[j]);
		   	  			$scope.syj_arr[i].num.push($scope.fruit[i].opt[j].num);
		   	  			$scope.syj_arr[i].op.push($scope.fruit[i].opt[j].op);
		   	  		}
	   	  		}
	   	  	}
	   	}
	   	  //console.log($scope.fruit[i].oop)
	   //console.log($scope.syj_arr)
	})
}]).service("getData",["$http",function($http){
	//封装的请求方式
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




  