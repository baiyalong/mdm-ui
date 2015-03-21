/**
 * Created by yalong on 2015/3/13.
 */
'use strict';

angular.module('mdmUi')

    .controller('UserCtrl', function ($scope, UserService) {
        $scope.userGrid = {
            data: UserService.users,
            columnDefs: [
                {field: 'name', displayName: '用户名'},
                {field: 'password', displayName: '密码'},
                {field: 'phoneNumber', displayName: '手机号'},
                {field: 'email', displayName: '电子邮箱'},
            ]
        };
    })


    .controller('UserGroupCtrl', function ($scope, UserService) {
        $scope.userGroupGrid = {};
        $scope.userGroupGrid.data = UserService.userGroups;
    });

