angular.module('syj',["chart.js"]).controller("syjCtrl", ["$scope","$http","getData",function ($scope,$http,getData) {
  	$scope.syj_server="http://47.90.20.200:1602/item?uid=";
	$scope.coo = window.localStorage.uid;
  	getData.get("http://47.90.20.200:1602/item?uid="+$scope.coo,function(respose){
	  	$scope.fruit=respose.data[0];
	  	console.log($scope.fruit)
	  	var syj_str = '<h1 style="font-size:1rem;text-align:center;margin-bottom:0.3rem;">'+$scope.fruit.title+'</h1>'
		$scope.syj_num=[1,2,3];
		$scope.syj_op=["qwe","asd","zxc"];
		/*for(i in $scope.fruit){
			//console.log($scope.fruit[i])
			$scope.asd=$scope.fruit[i];

			for(j in $scope.fruit[i].option){
				
				console.log($scope.fruit[i].option[j])
				$scope.das=$scope.fruit[i].option[j];
				//console.log($scope.das)
				for(k in $scope.fruit[i].option[j].opt){
					//console.log($scope.fruit[i].option[j].opt[k])
					$scope._num.push($scope.fruit[i].option[j].opt[k].num);
					$scope._op.push($scope.fruit[i].option[j].opt[k].op);
				}
			}
		}*/
		for(var i=0;i<$scope.fruit.option.length;i++){
            if($scope.fruit.option[i].type == 1){
            	//console.log($scope.fruit.option[i].opt)
            	$scope.syj_opt=$scope.fruit.option[i].opt;
            	// console.log($scope.syj_opt)
            	//for(var j=0;j<$scope.syj_opt.length;j++){
            		//console.log($scope.syj_opt[j].num);
     				//$scope._num.push($scope.syj_opt[j].num);
					//syj_op.push($scope.syj_opt[j].op);
            	//}
                syj_str+='<div class="panel panel-default" ><div class="panel-heading" ><h3 class="panel-title">'+$scope.fruit.option[i].title+'</h3></div><div class="panel-body"><canvas id="bar" class="chart chart-bar" chart-data='+$scope.syj_num+' chart-labels='+$scope.syj_op+'> chart-series="series"</canvas></div></div>';
			}else if($scope.fruit.option[i].type == 2){
	            syj_str+='<div>'+$scope.fruit.option[i].title+'2<div>'
			}else{
	            syj_str+='<div>'+$scope.fruit.option[i].title+'0<div>'
		   }6
		}
		
        syj_texts.innerHTML = syj_str
	})
}]).service("getData",["$http",function($http){
	return{
		get:function(url,callbk){
			$http({
				url:url,
				method:"get"
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





/*.controller("syjCtrl",["$scope","$http","getData",function($scope,$http,getData){
	 getData.get("http://47.90.20.200:1602/news2/",function(e){
      $scope.data=e.data;
      console.log($scope.data);
    })
}]).service("getData",["$http",function($http){
	return{
		get:function(url,callbk){
			$http({
				url:url,
				method:"get"
			}).then(function(e){
				callbk(e)
			},function(){
				alert("失败了")
			})
		}
	} 
}])*/
  