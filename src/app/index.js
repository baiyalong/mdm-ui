'use strict';
var addressConf = 'http://10.192.17.95:8088';
angular.module('mdmUi', ['ui.router', 'restangular', 'ngMaterial', 'angularFileUpload', 'ngJsTree'])
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
                templateUrl: 'app/user/user.html',
                controller: 'UserMenuCtrl'
            })
            .state('home.user.user', {
                url: '/user',
                templateUrl: 'app/user/user.user.html',
                controller: 'UserCtrl'
            })
            .state('home.user.userAdd', {
                url: '/userAdd',
                templateUrl: 'app/user/user.user.detail.html',
                controller: 'UserAddCtrl'
            })
            .state('home.user.userDetail', {
                url: '/userDetail/:id',
                templateUrl: 'app/user/user.user.detail.html',
                controller: 'UserDetailCtrl'
            })
            .state('home.user.userEdit', {
                url: '/userEdit/:id',
                templateUrl: 'app/user/user.user.detail.html',
                controller: 'UserEditCtrl'
            })
            .state('home.user.userGroup', {
                url: '/userGroup',
                templateUrl: 'app/user/user.userGroup.html',
                controller: 'UserGroupCtrl'
            })
            .state('home.user.userGroupAdd', {
                url: '/userGroupAdd',
                templateUrl: 'app/user/user.userGroup.detail.html',
                controller: 'UserGroupAddCtrl'
            })
            .state('home.user.userGroupDetail', {
                url: '/userGroupDetail/:id',
                templateUrl: 'app/user/user.userGroup.detail.html',
                controller: 'UserGroupDetailCtrl'
            })
            .state('home.user.userGroupEdit', {
                url: '/userGroupEdit/:id',
                templateUrl: 'app/user/user.userGroup.detail.html',
                controller: 'UserGroupEditCtrl'
            })
            .state('home.terminal', {
                abstract: true,
                url: '/terminal',
                template: '<ui-view></ui-view>',
                controller: 'TerminalMenuCtrl'
            })
            .state('home.terminal.terminal', {
                url: '/terminal',
                templateUrl: 'app/terminal/terminal.html',
                controller: 'TerminalCtrl'
            })
            .state('home.terminal.terminalDetail', {
                url: '/terminalDetail/:id',
                templateUrl: 'app/terminal/terminal.detail.html',
                controller: 'TerminalDetailCtrl'
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
            .state('home.message', {
                url: '/message',
                templateUrl: 'app/message/message.html',
                controller: 'MessageCtrl'
            })
            .state('home.application', {
                abstract: true,
                url: '/application',
                templateUrl: 'app/application/application.html',
                controller: 'ApplicationMenuCtrl'
            })
            .state('home.application.classify', {
                url: '/classify',
                templateUrl: 'app/application/application.classify.html',
                controller: 'ApplicationClassifyCtrl'
            })
            .state('home.application.classifyAdd', {
                url: '/classifyAdd',
                templateUrl: 'app/application/application.classify.detail.html',
                controller: 'ApplicationClassifyAddCtrl'
            })
            .state('home.application.classifyDetail', {
                url: '/classifyDetail/:id',
                templateUrl: 'app/application/application.classify.detail.html',
                controller: 'ApplicationClassifyDetailCtrl'
            })
            .state('home.application.classifyEdit', {
                url: '/classifyEdit/:id',
                templateUrl: 'app/application/application.classify.detail.html',
                controller: 'ApplicationClassifyEditCtrl'
            })
            .state('home.application.application', {
                url: '/application',
                templateUrl: 'app/application/application.application.html',
                controller: 'ApplicationCtrl'
            })
            .state('home.application.applicationAdd', {
                url: '/applicationAdd',
                templateUrl: 'app/application/application.application.detail.html',
                controller: 'ApplicationAddCtrl'
            })
            .state('home.application.applicationDetail', {
                url: '/applicationDetail/:id',
                templateUrl: 'app/application/application.application.detail.html',
                controller: 'ApplicationDetailCtrl'
            })
            .state('home.application.applicationEdit', {
                url: '/applicationEdit/:id',
                templateUrl: 'app/application/application.application.detail.html',
                controller: 'ApplicationEditCtrl'
            })
            .state('home.application.applicationPublish', {
                url: '/applicationPublish/:id',
                templateUrl: 'app/application/application.application.detail.html',
                controller: 'ApplicationPublishCtrl'
            })
            .state('home.application.template', {
                url: '/template',
                templateUrl: 'app/application/application.template.html',
                controller: 'ApplicationTemplateCtrl'
            })
            .state('home.strategy', {
                abstract: true,
                url: '/strategy',
                templateUrl: 'app/strategy/strategy.html',
                controller: 'StrategyMenuCtrl'
            })
            .state('home.strategy.strategyGroup', {
                url: '/strategyGroup',
                templateUrl: 'app/strategy/strategy.strategyGroup.html',
                controller: 'StrategyGroupCtrl'
            })
            .state('home.strategy.strategyGroupAdd', {
                url: '/strategyGroupAdd',
                templateUrl: 'app/strategy/strategy.strategyGroup.detail.html',
                controller: 'StrategyGroupAddCtrl'
            })
            .state('home.strategy.strategyGroupDetail', {
                url: '/strategyGroupDetail/:id',
                templateUrl: 'app/strategy/strategy.strategyGroup.detail.html',
                controller: 'StrategyGroupDetailCtrl'
            })
            .state('home.strategy.strategyGroupEdit', {
                url: '/strategyGroupEdit/:id',
                templateUrl: 'app/strategy/strategy.strategyGroup.detail.html',
                controller: 'StrategyGroupEditCtrl'
            })
            .state('home.strategy.strategyGroupPublish', {
                url: '/strategyGroupPublish/:id',
                templateUrl: 'app/strategy/strategy.strategyGroup.detail.html',
                controller: 'StrategyGroupPublishCtrl'
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
                templateUrl: 'app/record/record.message.html',
                controller: 'RecordCommandCtrl'
            })
            .state('home.record.commandDetail', {
                url: '/commandDetail/:id',
                templateUrl: 'app/record/record.command.detail.html',
                controller: 'RecordCommandDetailCtrl'
            })
            .state('home.record.message', {
                url: '/message',
                templateUrl: 'app/record/record.message.html',
                controller: 'RecordMessageCtrl'
            })
            .state('home.record.messageDetail', {
                url: '/messageDetail/:id',
                templateUrl: 'app/record/record.message.detail.html',
                controller: 'RecordMessageDetailCtrl'
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
    })

    .run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
