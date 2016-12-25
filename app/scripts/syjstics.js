angular.module('syj',["chart.js"]).controller("syjCtrl", ["$scope","$http","getData",function ($scope,$http,getData) {

  /*$scope.asd = ["body", "girl", "不男不女"];
  $scope.datas = [300, 500, 100];
  $scope.qwe = ["body", "girl", "不男不女"];
  $scope.dataa = [300, 500, 100];*/
  //$scope.server="http://47.90.20.200:1602/item";
  $scope.coo = window.localStorage.uid;
  getData.get("http://47.90.20.200:1602/item?uid="+$scope.coo,function(respose){
  	$scope.fruit=respose.data;
	/*console.log($scope.fruit);
	console.log($scope.fruit[0]);
	console.log($scope.fruit[0].option);
	console.log($scope.fruit[0].option[0].opt);
	console.log($scope.fruit[0].option[0].opt[0]);
	console.log($scope.fruit[0].option[0].opt[0].op);*/
	$scope._num=[1,1,1,1];
	$scope._op=[];
	for(i in $scope.fruit){
		console.log($scope.fruit[i])
		$scope.asd=$scope.fruit[i];
		for(j in $scope.fruit[i].option){
			//console.log($scope.fruit[i].option[j])
			$scope.das=$scope.fruit[i].option[j];
			//console.log($scope.das)
			for(k in $scope.fruit[i].option[j].opt){
				console.log($scope.fruit[i].option[j].opt[k])
				//$scope._num.push($scope.fruit[i].option[j].opt[k].num);
				$scope._op.push($scope.fruit[i].option[j].opt[k].op);
			}
		}
	}
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
		},
		post:function(url,data,callbk){
			$http({
				url:url,
				method:"post",
				data:data
			}).then(function(e){
				callbk(e)
			},function(){
				alert("失败了")
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
  