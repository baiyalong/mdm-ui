/**
 * Created by yalong on 2015/3/13.
 */
'use strict';

angular.module('mdmUi')
    .controller('LoginCtrl', function ($scope, Restangular) {

        $scope.account = {userName: 'Admin', passWord: '123', rememberMe: 'true'};
        $scope.login = function () {
            Restangular.all('login').post($scope.account).then(function (s) {
                alert(s);
                window.location.href = '/';
            }, function (e) {
                alert(e);
            });
        };
    });
