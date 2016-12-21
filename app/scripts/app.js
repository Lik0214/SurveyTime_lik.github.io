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
    'syj'
  ]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('nav', {
			url: '/nav',
			templateUrl: 'views/nav.html'
		})
		$stateProvider.state('demo', {
			url: '/demo',
			views: {
				main: {
					templateUrl: 'views/demo.html'
				}
			}
		})
		$urlRouterProvider.when('','nav')
	}]);
