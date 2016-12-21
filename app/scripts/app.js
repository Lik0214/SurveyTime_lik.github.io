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
    'py'
  ]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('login', {
			url: '/login',
			templateUrl: 'views/login.html'
		})
		$stateProvider.state('demo', {
			url: '/demo',
			views: {
				main: {
					templateUrl: 'views/demo.html'
				}
			}
		})
		$stateProvider.state('nav', {
			url: '/nav',
			views: {
				main: {
					templateUrl: 'views/nav.html'
				}
			}
		})
		$urlRouterProvider.when('','login')
	}]);
