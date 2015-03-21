'use strict';

angular.module('mdmUi', ['ui.router', 'restangular', 'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                // abstract: true,
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                onEnter: function ($state, AccountService) {
                    if (AccountService.isLogin()) {
                        AccountService.userName();
                    } else {
                        $state.go('login');
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/account/login.html',
                controller: 'LoginCtrl',
                onEnter: function ($state, AccountService) {
                    if (AccountService.isLogin()) {
                        $state.go('home');
                    } else {
                        AccountService.remember();
                    }
                }
            })
            .state('home.user', {
                abstract: true,
                url: '/user',
                templateUrl: 'app/user/user.html'
                // controller: 'UserCtrl'
            })
            .state('home.user.user', {
                url: '/user',
                templateUrl: 'app/user/user.user.html',
                controller: 'UserCtrl'
            })
            .state('home.user.userGroup', {
                url: '/userGroup',
                templateUrl: 'app/user/user.userGroup.html',
                controller: 'UserGroupCtrl'
            })
            .state('home.terminal', {
                url: '/terminal',
                templateUrl: 'app/terminal/terminal.html',
                controller: 'TerminalCtrl'
            })
            .state('home.command', {
                url: '/command',
                templateUrl: 'app/command/command.html',
                controller: 'CommandCtrl'
            })
            .state('home.application', {
                url: '/application',
                templateUrl: 'app/application/application.html',
                controller: 'ApplicationCtrl'
            })
            .state('home.strategy', {
                url: '/strategy',
                templateUrl: 'app/strategy/strategy.html',
                controller: 'StrategyCtrl'
            })
            .state('home.record', {
                url: '/record',
                templateUrl: 'app/record/record.html',
                controller: 'RecordCtrl'
            });

        $urlRouterProvider.otherwise('/home');
    })
    .config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('/api');
        // RestangularProvider.setDefaultHeaders({'Access-Control-Allow-Origin': '*'});
    });
