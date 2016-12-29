'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'lik',
    'wcg',
    'gyr',
    'py',
    'syj',
    'gyrmine'
  ]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('login', {
			url: '/login',
			templateUrl: 'views/login.html'
		})
		$stateProvider.state('nav', {
			url: '/nav',
			templateUrl: 'views/nav.html'
		})
		$stateProvider.state('nav.mine', {
			url: '/mine',
			views: {
				content: {
					templateUrl: 'views/mine.html'
				}
			}
			
		})
		$stateProvider.state('nav.add', {
			url: '/add',
			
			views: {
				content: {
					templateUrl: 'views/questions.html'
				}
			}
		})
		$stateProvider.state('nav.sta', {
			url: '/sta',
			views: {
				content: {
					templateUrl: 'views/statistics.html'
				}
			}
		})
		$stateProvider.state('thanks', {
			url: '/thanks',
			templateUrl: 'views/thanks.html'
		})
		$stateProvider.state('thanks.servey', {
			url: '/servey',
			views: {
				produc: {
					templateUrl: 'views/servey.html'
				}
			}
		})
		$urlRouterProvider.when('','login')
	}])
  .controller('rootCtrl', ['$rootScope', function($rootScope){
  	$rootScope.server = 'http://www.surveytime.cn:1602/'
  }]);
