/**
 * Created by yalong on 2015/3/13.
 */
'use strict';

angular.module('mdmUi')
    .controller('LoginCtrl', function ($scope, Restangular, AccountService, BackgroundImageService) {
        var self = $scope;
        self.account = AccountService.account;
        self.remember = true;
        self.login = function () {
            Restangular.all('login').post(self.account).then(function (res) {
                self.account.token = res.token;
                self.account.remember = self.remember;
                AccountService.login(self.account);
                BackgroundImageService.rmBackgroundImage();
                window.location.href = '/';
            }, function (e) {
                alert("error");
            });
        };
    });
