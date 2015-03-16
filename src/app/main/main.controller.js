'use strict';

angular.module('mdmUi')
    .controller('MainCtrl', function ($scope, AccountService) {
        var self = $scope;

        self.userName = AccountService.account.userName;
        self.logout = function () {
            AccountService.logout();
            window.location.href = '/';
        };
    });
