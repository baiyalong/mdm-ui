'use strict';

angular.module('mdmUi', ['ui.router', 'restangular', 'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                onEnter: function ($state) {
                    if (true) {
                        $state.go('login');
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/account/login.html',
                controller: 'LoginCtrl',
                onEnter: function ($state) {

                }
            })
            .state('user', {
                url: '/user',
                templateUrl: 'app/user/user.html',
                controller: 'UserCtrl'
            });

        $urlRouterProvider.otherwise('/');
    })
    .config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('http://10.192.17.95/api');
    })
;
