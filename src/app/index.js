'use strict';

angular.module('mdmUi', ['ui.router', 'restangular', 'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                onEnter: function ($state) {
                    if (false) {
                        $state.go('login');
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/account/login.html',
                controller: 'AccountCtrl',
                onEnter: function ($state) {

                }
            })
            .state('home.user', {
                url: '/user',
                templateUrl: 'app/user/user.html',
                controller: 'UserCtrl'
            })
            .state('home.terminal', {
                url: '/terminal',
                templateUrl: 'app/terminal/terminal.html',
                controller: 'TerminalCtrl'
            });

        $urlRouterProvider.otherwise('/');
    })
    .config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('/api');
        RestangularProvider.setDefaultHeaders({'Access-Control-Allow-Origin': '*'});
    })
;
