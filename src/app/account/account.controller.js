/**
 * Created by yalong on 2015/3/13.
 */
'use strict';

angular.module('mdmUi')
    .controller('AccountCtrl', function ($scope, Restangular) {
        var self = $scope;
        self.account = {userName: 'Admin', passWord: '123', rememberMe: 'true'};
        self.login = function () {
            Restangular.all('login').post(self.account).then(function (s) {
                alert(s);
                window.location.href = '/';
            }, function (e) {
                alert(e);
            });
        };
        self.isLogin = function () {
            return sessionStorage.getItem(token);
        };
    });
