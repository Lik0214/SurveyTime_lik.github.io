angular.module('syj',["chart.js"]).controller("syjCtrl", ["$scope","$http","getData",function ($scope,$http,getData) {

  /*$scope.asd = ["body", "girl", "不男不女"];
  $scope.datas = [300, 500, 100];
  $scope.qwe = ["body", "girl", "不男不女"];
  $scope.dataa = [300, 500, 100];*/
  //$scope.server="http://47.90.20.200:1602/item";
  $scope.coo = window.localStorage.uid;
  getData.post("http://47.90.20.200:1602/item",{uid:$scope.coo},function(respose){
  	$scope.fruit=respose.data;
  	console.log($scope.fruit)
  })
	/*$http({
  		url:$scope.server,
     	method:"get"
  	}).then(function(e){
  		$scope.json2=e.data;
  		console.log($scope.json2)
  	},function(){});*/

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
  