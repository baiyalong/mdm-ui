/**
 * Created by yalong on 2015/3/16.
 */
'use strict';

angular.module('mdmUi')
    .controller('CommandCtrl', function ($scope, $mdDialog, Restangular) {

        var Rest = Restangular.all('command');
        var templateUrl = 'app/command/command.dialog.html';
        var refresh = function () {
            Rest.getList().then(function (res) {
                $scope.collection.content = res.filter(function (e, i, a) {
                    var re = false;
                    switch (e.description) {
                        case '获取位置信息':
                            break;
                        case '设置屏幕锁密码':
                            break;
                        case '清除屏幕锁密码':
                            break;
                        case '存储加密':
                            break;
                        case '禁止存储加密':
                            break;
                        case '擦除外部存储数据':
                            break;
                        default :
                            re = true;
                    }
                    return re;
                });
            });
        };
        refresh();

        var add = function (event) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '命令 添加',
                        state: 'add',
                        save: save
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.save = function () {
                        items.save($scope.element);
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    }
                }
            });
        };

        var detail = function (event, element) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '命令 详情',
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
        var edit = function (event, element) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '命令 编辑',
                        state: 'edit',
                        element: Restangular.copy(element),
                        save: save
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.element = items.element;
                    $scope.save = function () {
                        items.save($scope.element);
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    }
                }
            });
        };
        var remove = function (event, element) {
            $mdDialog.show({
                templateUrl: 'app/main/removeConfirm.dialog.html',
                targetEvent: event,
                locals: {
                    items: {
                        title: '命令 删除',
                        state: 'remove',
                        element: Restangular.copy(element),
                        refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.name = items.element.code;
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
        var save = function (element) {
            if (element.save !== undefined) {
                element.save().then(function () {
                    refresh();
                });
            }
            else {
                Rest.post(element).then(function () {
                    refresh();
                });
            }
        };


        $scope.collection = {
            toggleSearch: false,
            header: [
                //{name: '命令编码', field: 'code'},
                {name: '命令描述', field: 'description'},
            ],
            sortable: ['code', 'description'],
            //add: add,
            //refresh: refresh,
            //detail: detail,
            //edit: edit,
            //remove: remove,
            title: ['命令管理'],
            search: true,
            check: true
        };
    }
);
