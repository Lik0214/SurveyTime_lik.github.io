angular.module('syj',["chart.js"]).directive("song",function(){
	return {
		restrict:"ECMA",
		templateUrl:"views/statistics.html",
		//template:"<div>wo shi ling yi ge ye mian</div>",
		scope:true,
		replace:true,
		link:function(s,e,a){
			
		}
	}
}).controller("syjCtrl", ["$scope",function ($scope) {
  $scope.asd = ["body", "girl", "不男不女"];
  $scope.datas = [300, 500, 100];
  $scope.qwe = ["body", "girl", "不男不女"];
  $scope.dataa = [300, 500, 100];
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
  