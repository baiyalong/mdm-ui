/**
 * Created by yalong on 2015/3/16.
 */
'use strict';

angular.module('mdmUi')
    .controller('TerminalMenuCtrl', function ($scope, $mdDialog, Restangular, $state, $stateParams) {
        $scope.terminalRest = Restangular.all('terminal');
    })
    .controller('TerminalCtrl', function ($scope, $mdDialog, Restangular, $state) {

        var Rest = Restangular.all('terminal');
        var templateUrl = 'app/terminal/terminal.dialog.html';
        var refresh = function () {
            $scope.terminalRest.getList().then(function (res) {
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
                        title: '终端信息 详情',
                        state: 'detail',
                        element: Restangular.copy(element),
                        subCollection: $scope.appRecordCollection
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    var getStrategyName = function () {
                        Restangular.one('strategyGroup', items.element.policyID).get().then(
                            function (res) {
                                $scope.element.strategyGroupName = res.name;
                            }
                        );
                    };
                    getStrategyName();
                    $scope.items = items;
                    $scope.element = items.element;
                    $scope.subCollection = items.subCollection;
                    var refresh = function () {
                        items.element.getList('terminalapp').then(function (res) {
                            $scope.subCollection.content = res;
                        });
                    };
                    refresh();
                    // $scope.subCollection.refresh = refresh;
                    $scope.subCollection.check = false;
                    $scope.confirm = function () {
                        $mdDialog.hide();
                    };
                }
            });
        };
        var remove = function (event, element) {
            $mdDialog.show({
                templateUrl: 'app/main/removeConfirm.dialog.html',
                targetEvent: event,
                locals: {
                    items: {
                        title: '终端 删除',
                        state: 'remove',
                        element: Restangular.copy(element),
                        refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.name = items.element.iMEI;
                    $scope.confirm = function () {
                        element.remove().then(function () {
                            items.refresh();
                        });
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    }
                }
            });
        };
        var sendCommand = function (event, collection) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '发命令',
                        state: 'sendCommand',
                        collection: $scope.collection,
                        subCollection: $scope.subCollection
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.subCollection = items.subCollection;
                    $scope.subCollection.content = items.collection.content.filter(function (v) {
                        return v.check;
                    });
                    var RestCommand = Restangular.all('Command');
                    var getCommand = function () {
                        RestCommand.getList().then(function (res) {
                            $scope.command = res;
                        });
                    };
                    getCommand();
                    $scope.confirm = function () {
                        var cid = $scope.items.selectCommand;
                        var arr = [];
                        $scope.subCollection.content.forEach(function (v) {
                            arr.push(v.iD);
                        });
                        RestCommand.customPOST(arr, cid);
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    }
                }
            });
        };
        var sendMessage = function (event, collection) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '发消息',
                        state: 'sendMessage',
                        collection: $scope.collection,
                        subCollection: $scope.subCollection
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.subCollection = items.subCollection;
                    $scope.subCollection.content = items.collection.content.filter(function (v) {
                        return v.check;
                    });
                    $scope.confirm = function () {
                        var arr = [];
                        $scope.subCollection.content.forEach(function (v) {
                            arr.push(v.iD);
                        });
                        var payLoad = {title: $scope.items.header, content: $scope.items.content, terminals: arr};
                        Restangular.all('message').customPOST(payLoad, $scope.items.header);
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    }
                }
            });
        };
        $scope.collection = {
            toggleSearch: false,
            header: [
                {field: 'deviceName', name: '设备名'},
                {field: 'iMEI', name: 'IMEI'},
                {field: 'user', name: '用户名'},
//                {field: 'phoneNumber', name: '手机号'},
                {field: 'operator', name: '运营商'},
                //{field: 'appID', name: '应用ID'},
                //{field: 'deviceSN', name: '设备号'},
                // {field: 'oSType', name: '操作系统'},
                //  {field: 'oSVersion', name: '操作系统版本'},
                //   {field: 'kernelVersion', name: '内核版本'},
                // {field: 'deviceType', name: '设备型号'},
                // {field: 'wifiMac', name: 'Wifi Mac地址'},
                //  {field: 'blueTooth', name: '蓝牙地址'},
                // {field: 'power', name: '电量'},
                //{field: 'availRomSpace', name: '手机剩余内存'},
                // {field: 'totalRomSpace', name: '手机总内存'},
                // {field: 'availSDSpace', name: 'SD卡剩余内存'},
                // {field: 'totalSDSpace', name: 'SD卡总内存'},
                //{field: 'location', name: '坐标'},
                //{field: 'policyID', name: '策略'},
            ],
            sortable: ['user', 'iMEI', 'phoneNumber', 'deviceSN', 'deviceName', 'deviceType', 'operator'],
            refresh: refresh,
            detail: function (event, element) {
                $state.go('^.terminalDetail', {id: element.iD});
            },
            remove: remove,
            sendCommand: sendCommand,
            sendMessage: sendMessage,
            check: true,
            title: ['终端管理', '终端'],
            search: true
        };
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'user', name: '用户名'},
                {field: 'iMEI', name: 'IMEI'},
                {field: 'phoneNumber', name: '手机号'},
                {field: 'operator', name: '运营商'},
                //{field: 'appID', name: '应用ID'},
                //{field: 'deviceSN', name: '设备号'},
                // {field: 'oSType', name: '操作系统'},
                //  {field: 'oSVersion', name: '操作系统版本'},
                //   {field: 'kernelVersion', name: '内核版本'},
                {field: 'deviceName', name: '设备名'},
                // {field: 'deviceType', name: '设备型号'},
                // {field: 'wifiMac', name: 'Wifi Mac地址'},
                //  {field: 'blueTooth', name: '蓝牙地址'},
                // {field: 'power', name: '电量'},
                //{field: 'availRomSpace', name: '手机剩余内存'},
                // {field: 'totalRomSpace', name: '手机总内存'},
                // {field: 'availSDSpace', name: 'SD卡剩余内存'},
                // {field: 'totalSDSpace', name: 'SD卡总内存'},
                //{field: 'location', name: '坐标'},
                //{field: 'policyID', name: '策略'},
            ],
            sortable: ['user', 'iMEI', 'phoneNumber', 'deviceSN', 'deviceName', 'deviceType', 'operator'],
            //refresh: refresh,
            detail: detail,
            //remove: remove
            //sendCommand: sendCommand,
            //sendMessage: sendMessage,
            check: false
        };
        $scope.appRecordCollection = {
            toggleSearch: false,
            header: [
                {field: 'appName', name: '应用'},
                {field: 'appVersionName', name: '版本'},
                {field: 'firstInstallTime', name: '初始安装时间'},
                {field: 'lastUpdateTime', name: '最后更新时间'},
                {field: 'packageName', name: '软件包'},
            ],
            sortable: ['appName', 'appVersionName', 'firstInstallTime', 'lastUpdateTime', 'packageName'],
            check: false
        };
    })
    .controller('TerminalDetailCtrl', function ($scope, $mdDialog, Restangular, $state, $stateParams) {
        $scope.title = ['终端管理', '终端', '详情'];
        $scope.terminalRest.get($stateParams.id).then(function (res) {
            $scope.element = res;
        });
        $scope.confirm = function (element) {
            $state.go('^.terminal');
        };
        $scope.cancel = function () {
            $state.go('^.terminal');
        };

    });
