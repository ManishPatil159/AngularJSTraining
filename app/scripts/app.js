'use strict';

/**
 * @ngdoc overview
 * @name generatorAngularApp
 * @description
 * # generatorAngularApp
 *
 * Main module of the application.
 */
angular
    .module('generatorAngularApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .constant('apiEndpoint','http://jsonplaceholder.typicode.com/')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/my/route', {
                templateUrl: 'views/myroute.html',
                controller: 'MyrouteCtrl',
                controllerAs: 'myRoute'
            })
            .when('/twoWayBinding', {
                templateUrl: 'src/features/two-way-binding/two-way-binding.html',
            })
            .when('/scope', {
                templateUrl: 'src/features/scope/scope.html',
                controller: 'ScopeCtrl',
            })
            .when('/services', {
                templateUrl: 'src/features/services/services.html',
                controller: 'ServicesCtrl',
                controllerAs: 'vm'
            })
            .when('/filters', {
                templateUrl: 'src/features/filters/filters.html',
                controller: 'FiltersCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
