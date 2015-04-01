/**
 * Created by yalong on 2015/3/16.
 */
'use strict';

angular.module('mdmUi')
    .controller('RecordCtrl', function ($scope) {

    })

    .controller('RecordCommandCtrl', function ($scope, $mdDialog, Restangular) {

        var Rest = Restangular.all('commandRecord');
        var templateUrl = 'app/record/record.command.dialog.html';
        var refresh = function () {
            Rest.getList().then(function (res) {
                $scope.collection.content = res;
            });
        };
        refresh();

        var detail = function (event, element) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '命令发送记录 详情',
                        state: 'detail',
                        element: Restangular.copy(element)
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.element = items.element;
                    $scope.confirm = function () {
                        $mdDialog.hide();
                    };
                }
            });
        };
        var remove = function (element) {
            element.remove().then(function () {
                refresh();
            });
        };

        $scope.collection = {
            toggleSearch: false,
            header: [
                // {field: 'commandId', name: '命令编码'},
                {field: 'commandName', name: '命令'},
                {field: 'user', name: '用户名'},
                // {field: 'phoneNumber', name: '手机号'},
                {field: 'deviceName', name: '终端'},
                {field: 'imei', name: 'IMEI'},
                {field: 'sendTime', name: '发送时间'},
                //{field: 'updateTime', name: '更新时间'},
                //       {field: 'statusName', name: '状态'},
            ],
            sortable: ['commandId', 'commandName', 'user', 'phoneNumber', 'deviceName', 'imei', 'sendTime', 'updateTime', 'statusName'],
            refresh: refresh,
            detail: detail,
            // remove: remove
            title: ['操作记录', '命令发送记录']
        };
    })

    .controller('RecordMessageCtrl', function ($scope, $mdDialog, Restangular) {

        var Rest = Restangular.all('message');
        var templateUrl = 'app/record/record.message.dialog.html';
        var refresh = function () {
            Rest.getList().then(function (res) {
                $scope.collection.content = res;
            });
        };
        refresh();

        var detail = function (event, element) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '消息发送记录 详情',
                        state: 'detail',
                        element: Restangular.copy(element)
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.element = items.element;
                    $scope.confirm = function () {
                        $mdDialog.hide();
                    };
                }
            });
        };

        var remove = function (element) {
            element.remove().then(function () {
                refresh();
            });
        };

        $scope.collection = {
            toggleSearch: false,
            header: [
                {field: 'title', name: '消息标题'},
                //{field: 'messageContent', name: '内容'},
                {field: 'user', name: '用户名'},
                //   {field: 'phoneNumber', name: '手机号'},
                {field: 'deviceName', name: '终端'},
                {field: 'imei', name: 'IMEI'},
                {field: 'sendTime', name: '发送时间'},
                //{field: 'updateTime', name: '更新时间'},
                //     {field: 'statusName', name: '状态'},
            ],
            sortable: ['title', 'messageContent', 'user', 'phoneNumber', 'deviceName', 'imei', 'sendTime', 'updateTime', 'statusName'],
            refresh: refresh,
            detail: detail,
            // remove: remove
            title: ['操作记录', '消息发送记录']
        };
    });
