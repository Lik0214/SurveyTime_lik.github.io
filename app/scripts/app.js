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
    'gyr'
  ]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('pro', {
			url: '/pro',
			templateUrl: 'views/production.html'
		})
		$stateProvider.state('pro.demo', {
			url: '/demo',
			views: {
				main: {
					templateUrl: 'views/demo.html'
				}
			}
		})
		$urlRouterProvider.when('','pro')
	}]);
