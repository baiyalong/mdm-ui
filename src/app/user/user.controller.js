/**
 * Created by yalong on 2015/3/13.
 */
'use strict';

angular.module('mdmUi')
    .controller('UserCtrl', function ($scope, UserService) {

        $scope.msg = 'user';
    })
    .controller('UserGroupCtrl', function ($scope, UserService) {

        $scope.msg = 'userGroup';
    });

