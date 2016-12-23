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
    'syj'
  ]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('login', {
			url: '/login',
			templateUrl: 'views/login.html'
		})
		$stateProvider.state('nav', {
			url: '/nav',
			templateUrl: 'views/nav.html'
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
		$stateProvider.state('nav.share', {
			url: '/share',
			views: {
				main: {
					templateUrl: 'views/production.html'
				}
			}
		})
		$stateProvider.state('nav.share.demo', {
			url: '/demo',
			views: {
				produc: {
					templateUrl: 'views/demo.html'
				}
			}
		})
		/*$stateProvider.state('nav.list', {
			url: '/list',
			views: {
				content: {
					templateUrl: 'views/list.html'
				}
			}
		})*/
		$urlRouterProvider.when('','login')
	}]);
