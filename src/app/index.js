'use strict';
var addressConf = 'http://10.192.17.95:8089';
angular.module('mdmUi', ['ui.router', 'restangular', 'ngMaterial', 'angularFileUpload'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                //abstract: true,
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
                templateUrl: 'app/terminal/terminal.html',
                controller: 'TerminalCtrl'
            })
            /*
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
             */
            .state('home.command', {
                url: '/command',
                templateUrl: 'app/command/command.html',
                controller: 'CommandCtrl'
            })
            .state('home.application', {
                abstract: true,
                url: '/application',
                templateUrl: 'app/application/application.html'
                //controller: 'ApplicationCtrl'
            })
            .state('home.application.classify', {
                url: '/classify',
                templateUrl: 'app/application/application.classify.html',
                controller: 'ApplicationClassifyCtrl'
            })
            .state('home.application.application', {
                url: '/application',
                templateUrl: 'app/application/application.application.html',
                controller: 'ApplicationCtrl'
            })
            .state('home.application.template', {
                url: '/template',
                templateUrl: 'app/application/application.template.html',
                controller: 'ApplicationTemplateCtrl'
            })
            .state('home.strategy', {
                abstract: true,
                url: '/strategy',
                templateUrl: 'app/strategy/strategy.html'
                // controller: 'StrategyCtrl'
            })
            .state('home.strategy.strategyGroup', {
                url: '/strategyGroup',
                templateUrl: 'app/strategy/strategy.strategyGroup.html',
                controller: 'StrategyGroupCtrl'
            })
            .state('home.strategy.strategyItem', {
                url: '/strategyItem',
                templateUrl: 'app/strategy/strategy.strategyItem.html',
                controller: 'StrategyItemCtrl'
            })
            .state('home.strategy.strategy', {
                url: '/strategy',
                templateUrl: 'app/strategy/strategy.strategy.html',
                controller: 'StrategyCtrl'
            })
            .state('home.strategy.punishment', {
                url: '/punishment',
                templateUrl: 'app/strategy/strategy.punishment.html',
                controller: 'StrategyPunishmentCtrl'
            })
            .state('home.record', {
                abstract: true,
                url: '/record',
                templateUrl: 'app/record/record.html',
                controller: 'RecordCtrl'
            })
            .state('home.record.command', {
                url: '/command',
                templateUrl: 'app/record/record.command.html',
                controller: 'RecordCommandCtrl'
            })
            .state('home.record.message', {
                url: '/message',
                templateUrl: 'app/record/record.message.html',
                controller: 'RecordMessageCtrl'
            });

        $urlRouterProvider.otherwise('/home');
    })


    .config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('/api');
        RestangularProvider.setDefaultHeaders({Authorization: "Token " + sessionStorage.getItem('token')});
        RestangularProvider.setRestangularFields({
            id: "iD"
            //route: "restangularRoute",
            //selfLink: "self.href"
        });
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

    })


    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .warnPalette('red', {
                //  'default': '400', // by default use shade 400 from the pink palette for primary intentions
                'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '900', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
            })
    });
