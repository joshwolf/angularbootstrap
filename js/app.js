'use strict';

var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'myAppControllers']);

myApp.config(['$routeProvider',
    function($routeProvider) {
    	$routeProvider
    		.when('/', {
    			templateUrl: '/partials/index.html',
    			controller: 'MyAppCtrl'
    		})
        .otherwise({ redirectTo: '/'});
      }
    ]);

