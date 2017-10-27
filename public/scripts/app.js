'use strict';

/**
 * @ngdoc overview
 * @name exelonApp
 * @description
 * # exelonApp
 *
 * Main module of the application.
 */
angular
    .module('fcaApp', [
        'ui.router',
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: '../views/main.html',
                controller: 'MainCtrl'
            })
            .state('main.navigatin', {
                url: '/nav',
                templateUrl: '../views/nav.html',
                controller: 'navCtrl'
            })
            .state('main.tilesDetails', {
                url: '/tilesDetails/:tilesId?tileActiveInd',
                templateUrl: '../views/tilesDetails.html',
                controller: 'tilesDetailsController'
            })
            .state('main.analytics', {
                url: '/analytics',
                templateUrl: '../views/analytics.html',
                controller: 'analyticsCtrl'
            })
    });
