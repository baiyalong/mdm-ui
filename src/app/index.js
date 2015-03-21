'use strict';

angular.module('mdmUi', ['ui.router', 'restangular', 'ngMaterial', 'ui.grid', 'ui.grid.autoResize'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                // abstract: true,
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                onEnter: function ($state, AccountService) {
                    if (AccountService.isLogin()) {
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
                templateUrl: 'app/terminal/terminal.html'
                //controller: 'TerminalCtrl'
            })
            .state('home.terminal.info', {
                url: '/info',
                templateUrl: 'app/terminal/terminal.info.html',
                controller: 'TerminalInfoCtrl'
            })
            .state('home.terminal.app', {
                url: '/app',
                templateUrl: 'app/terminal/terminal.app.html',
                controller: 'TerminalAppCtrl'
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
        RestangularProvider.setDefaultHeaders({Authorization: "Token " + sessionStorage.getItem('token')});
        // RestangularProvider.setDefaultHeaders({'Access-Control-Allow-Origin': '*'});

        /*
         RestangularProvider.setResponseExtractor(function (response) {
         var newResponse = response;
         if (angular.isArray(response)) {
         angular.forEach(newResponse, function (value, key) {
         newResponse[key].originalElement = angular.copy(value);
         });
         } else {
         newResponse.originalElement = angular.copy(response);
         }

         return newResponse;
         });
         */

    });
