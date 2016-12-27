angular.module('syj',["chart.js"]).controller("syjCtrl", ["$scope","$http","getData",function ($scope,$http,getData) {
  	$scope.syj_server="http://47.90.20.200:1602/item?uid=";
	$scope.coo = window.localStorage.uid;

  	getData.get("http://47.90.20.200:1602/item",{uid:window.localStorage.uid,id:window.localStorage.id},function(respose){
	  	$scope.fruit=respose.data;

	  	console.log($scope.fruit)
	  	var syj_arr=[];
	  	var syj_str='';
		$scope.syj_num=[1,2,3,4];
		$scope.syj_op=[4,5,4,6];
		$scope.syj_num1=[];
		$scope.syj_op1=[];
		$scope.syj_a=[
			{class:'chart-bar', done:true},
			{class:'chart-doughnut', done:true}
		];
		$scope.syj_b=[
            {class:'chart-doughnut', done:true},
            {class:'chart-bar', done:true}
        ];
		
		$scope.syj_qus1=respose.data.option;
		//console.log($scope.syj_qus1)
		for(var i=0;i<$scope.syj_qus1.length;i++){
			$scope.syj_qus2=$scope.syj_qus1[i].opt;
			for(var j=0;j<$scope.syj_qus2.length;j++){
				$scope.syj_num1.push($scope.syj_qus2[j].num);
				$scope.syj_op1.push($scope.syj_qus2[j].op);
			}
		}
		console.log($scope.syj_op1);
		console.log($scope.syj_num1);
		//$scope.colorw=['red','blue','yellow'];
		//for(var i=0;i<$scope.fruit.option.length;i++){
			//console.log($scope.fruit.option[i].type)
			//if($scope.fruit.option[i].type == 1){
//				$scope.syj_qus1=$scope.fruit.option[i];
				/*for(var j=0;j<$scope.fruit.option[i].opt.length;j++){
					$scope.syj_op.push($scope.fruit.option[i].opt[j].op);
					$scope.syj_num.push($scope.fruit.option[i].opt[j].num);
				}*/
				//console.log($scope.syj_qus1.title)
				//console.log($scope.syj_qus1);
			//}else if($scope.fruit.option[i].type == 2){

				//$scope.syj_qus2=$scope.fruit.option[i];
				//console.log($scope.syj_qus2);
				
			//}else if($scope.fruit.option[i].type == 3){
				
				//$scope.syj_qus3=$scope.fruit.option[i];
				//console.log($scope.syj_qus3);
				
			//}else if($scope.fruit.option[i].type == 0){
				//$scope.syj_qus4=$scope.fruit.option[i];
				//console.log($scope.syj_qus4);
			//}
			//for(var j=0;j<$scope.fruit.option[i].opt.length;j++){
				//console.log($scope.fruit.option[i].opt[j].op)
				/*if($scope.fruit.option[i].opt[j].num == 0){
					$scope.syj_num=[0,0,0];
					$scope.syj_op=["暂无数据","暂无数据","暂无数据"];
					$scope.syj_num1=[2,2,2];
					$scope.syj_op1=["暂无数据","暂无数据","暂无数据"]
				}else{
					
				}*/
				//$scope.syj_op.push($scope.fruit.option[i].opt[j].op);
				//$scope.syj_num.push($scope.fruit.option[i].opt[j].num);
			//}
		//}
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




  