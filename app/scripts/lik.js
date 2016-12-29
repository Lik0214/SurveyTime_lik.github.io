angular.module('lik', ['summernote'])
	.controller('likCtrl', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {
		$scope.options = {
			height: 300,
			focus: true,
			airMode: false,
			toolbar: [
				['headline', ['style']],
				['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
				['textsize', ['fontsize']],
				['fontclr', ['color']],
				['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
				['height', ['height']],
				['insert', ['picture', 'hr']],
				['view', ['fullscreen']]
			]
		};
		$scope.idNeed = window.location.hash.split('?')[1]
		$http({
			method: 'get',
			url: $rootScope.server + 'item?' + $scope.idNeed
		}).then(function(e) {
			$scope.likData = e.data
		}, function() {})
		$http({
			method: 'get',
			url: $rootScope.server + 'item?' + $scope.idNeed
		}).then(function(e) {
			$scope.lod_likai = e.data
		}, function() {})

		$scope.lik_successs = ''
			/*$scope.sumchange = function(contents) {
				var reg = /<[^<]+>/g;
				$scope.sumtext = contents.replace(reg,'')
			};*/
		$scope.lik_submit = function() {

			$scope.lik_success = []
				/*for(var i = 0; i < $scope.likData.option.length; i++) {
					if($scope.likData.option[i].type == 0) {
						if($('.liktext').eq(i).val()==''){
							$scope.lik_success1 = 0
						}else{
							$scope.likData.option[i].oop = $('.liktext').eq(i).val()
							$scope.lik_success1 = 1
						}
					} else if($scope.likData.option[i].type == 1) {
						for(var j = 0; j < $scope.likData.option[i].opt.length; j++) {
							if($('.lik_survey_question').eq(i).find('input:radio').eq(j).prop('checked') == false){
								$scope.lik_success2 = 0
							}else{
								$scope.likData.option[i].opt[j].num +=1
								$scope.lik_success2 = 1
							}
						}
					} else if($scope.likData.option[i].type == 2) {
						for(var j = 0; j < $scope.likData.option[i].opt.length; j++) {
							if($('.lik_survey_question').eq(i).find('input:checkbox').eq(j).prop('checked') == false){
								$scope.lik_success3 = 0
							}else{
								$scope.likData.option[i].opt[j].num +=1
								$scope.lik_success3 = 1
							}
						}
					} else if($scope.likData.option[i].type == 3) {
						if($('.likarea').eq(i).val()==''){
							$scope.lik_success4 = 0
						}else{
							$scope.likData.option[i].oop = $('.likarea').eq(i).val()
							$scope.lik_success4 = 1
						}
					}
				}*/

			for(var i = 0; i < $scope.likData.option.length; i++) {
				if($scope.likData.option[i].type == 0) {
					if($('.liktext').eq(i).val() == '') {} else {
						$scope.likData.option[i].oop = $('.liktext').eq(i).val()
					}
				} else if($scope.likData.option[i].type == 1) {
					for(var j = 0; j < $scope.likData.option[i].opt.length; j++) {
						if($('.lik_survey_question').eq(i).find('input:radio').eq(j).prop('checked') == false) {} else {
							$scope.likData.option[i].opt[j].num += 1
						}
					}
				} else if($scope.likData.option[i].type == 2) {
					for(var j = 0; j < $scope.likData.option[i].opt.length; j++) {
						if($('.lik_survey_question').eq(i).find('input:checkbox').eq(j).prop('checked') == false) {} else {
							$scope.likData.option[i].opt[j].num += 1
						}
					}
				} else if($scope.likData.option[i].type == 3) {
					if($('.likarea').eq(i).html() == '') {} else {
						$scope.likData.option[i].oop = $('.likarea').eq(i).html()
					}
				}
			}

			for(var i = 0; i < $scope.likData.option.length; i++) {
				if($scope.likData.option[i].type == 1 || $scope.likData.option[i].type == 2) {
					$scope.str1 = ''
					$scope.str2 = ''
					for(var j = 0; j < $scope.likData.option[i].opt.length; j++) {
						$scope.str1 += $scope.likData.option[i].opt[j].num
						$scope.str2 += $scope.lod_likai.option[i].opt[j].num
					}
					if($scope.str1 == $scope.str2) {
						$scope.lik_success.push('false')
					} else {
						$scope.lik_success.push('true')
					}
				} else {
					if($scope.likData.option[i].oop == $scope.lod_likai.option[i].oop) {
						$scope.lik_success.push('false')
					} else {
						$scope.lik_success.push('true')
					}
				}
			}
			if($scope.lik_success.indexOf('false') != -1) {
				alert('请完善调查问卷')
			} else {
				$http({
					url: $rootScope.server + 'item?' + $scope.idNeed,
					method: 'put',
					data: $scope.likData
				}).then(function() {}, function() {})
//				window.location.hash = '#!/thanks'
			}
		}
	}])
	/*.directive('liksum', function(){
		return {
			restrict:"ECMA",
			scope:{},
			template:'<summernote ng-show="x.type == 3" config="options" on-change="sumchange(contents)" ng-model="text" ng-class="summernote"></summernote>',
			link:function(s,e,a){
				$('#submitBtn').click(function(){
					console.log(s.text)
				})
			}
		}
	})
*/