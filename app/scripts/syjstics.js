angular.module('syj',["chart.js"]).controller("syjCtrl", ["$scope","$http","getData",function ($scope,$http,getData) {
  	$scope.syj_server="http://47.90.20.200:1602/item?uid=";
	$scope.coo = window.localStorage.uid;

  	getData.get("http://47.90.20.200:1602/item",{uid:window.localStorage.uid,id:window.localStorage.id},function(respose){
	  	$scope.fruit=respose.data;

	  	console.log($scope.fruit)
	  	var syj_arr=[];
	  	var syj_str='';
		$scope.syj_num=[];
		$scope.syj_op=[];
		$scope.syj_a=true;
		$scope.syj_b=false;
		for(var i=0;i<$scope.fruit.option.length;i++){
			console.log($scope.fruit.option[i].type)
			if($scope.fruit.option[i].type == 0){
				for(var h=0;h<$scope.fruit.option[i].opt.length;h++){
					/*if(){

					}*/
				}
				$scope.syj_qus1=$scope.fruit.option[0];
			}else if($scope.fruit.option[i].type == 1){
				$scope.syj_qus2=$scope.fruit.option[1];
			}else if($scope.fruit.option[i].type == 2){
				$scope.syj_qus3=$scope.fruit.option[2];
			}else{
				$scope.syj_qus4=$scope.fruit.option[3];
			}
			for(var j=0;j<$scope.fruit.option[i].opt.length;j++){
				//console.log($scope.fruit.option[i].opt[j].op)
				
				if($scope.fruit.option[i].opt[j].num == 0){
					$scope.syj_num=[2,2,2];
					$scope.syj_op=["none","none","none"]
				}
				//$scope.syj_op.push($scope.fruit.option[i].opt[j].op);
			}
		}
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
			},function(){
			})
		},
		post:function(url,data,callbk){
			$http({
				url:url,
				method:"post",
				data:data
			}).then(function(e){
				callbk(e)
			},function(){
			})
		}
	} 
}]);




  