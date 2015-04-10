/**
 * Created by yalong on 2015/3/13.
 */
'use strict';

angular.module('mdmUi')

    .controller('UserCtrl', function ($scope, $mdDialog, Restangular) {


        var Rest = Restangular.all('user');
        var templateUrl = 'app/user/user.user.dialog.html';
        var refresh = function () {
            Rest.getList().then(function (res) {
                $scope.collection.content = res;
            });
        };
        refresh();

        var add = function (event) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '用户 添加',
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
                        title: '用户 详情',
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
                        title: '用户 编辑',
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
                        title: '用户 删除',
                        state: 'remove',
                        element: Restangular.copy(element),
                        refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.name = items.element.name;
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
                {field: 'name', name: '用户名'},
                {field: 'phoneNumber', name: '手机号'},
                {field: 'email', name: '电子邮箱'},
            ],
            sortable: ['name', 'phoneNumber', 'email'],
            add: add,
            refresh: refresh,
            detail: detail,
            edit: edit,
            remove: remove,
            title: ['用户管理', '用户'],
            search: true
        };
    }
)


    .
    controller('UserGroupCtrl', function ($scope, $mdDialog, Restangular) {

        var Rest = Restangular.all('userGroup');
        var templateUrl = 'app/user/user.userGroup.dialog.html';
        var refresh = function () {
            Rest.getList().then(function (res) {
                $scope.collection.content = res;
            });
        };
        refresh();

        var add = function (event) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '用户组 添加',
                        state: 'add',
                        subCollection: $scope.subCollection,
                        refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.subCollection = items.subCollection;
                    var refresh = function () {
                        Restangular.all('user').getList().then(function (res) {
                            $scope.subCollection.content = res;
                        });
                    };
                    refresh();
                    // $scope.subCollection.refresh = refresh;
                    $scope.subCollection.check = true;
                    $scope.save = function () {
                        var e = $scope.element;
                        var arr = [];
                        $scope.subCollection.content.forEach(function (v) {
                            if (v.check) {
                                arr.push(v.iD);
                            }
                        });
                        e.usersHelper = arr;
                        Rest.post(e).then(function (res) {
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
        var detail = function (event, element) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '用户组 详情',
                        state: 'detail',
                        element: Restangular.copy(element),
                        subCollection: $scope.subCollection
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.element = items.element;
                    $scope.subCollection = items.subCollection;
                    var refresh = function () {
                        items.element.getList('user').then(function (res) {
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
        var edit = function (event, element) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '用户组 编辑',
                        state: 'edit',
                        element: Restangular.copy(element),
                        subCollection: $scope.subCollection,
                        save: save
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.element = items.element;
                    $scope.subCollection = items.subCollection;
                    var refresh = function () {
                        var all, some;
                        Restangular.all('user').getList().then(function (res) {
                            all = res;
                            items.element.getList('user').then(function (res) {
                                some = res;
                                all.forEach(function (v) {
                                    v.check = some.some(function (vv) {
                                        return v.iD === vv.iD;
                                    }) ? true : false;
                                });
                                $scope.subCollection.content = all;
                            });
                        });
                    };
                    refresh();
                    //   $scope.subCollection.refresh = refresh;
                    $scope.subCollection.check = true;
                    $scope.save = function () {
                        var e = $scope.element;
                        var arr = [];
                        $scope.subCollection.content.forEach(function (v) {
                            if (v.check) {
                                arr.push(v.iD);
                            }
                        });
                        e.usersHelper = arr;
                        items.save(e);
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
                        title: '用户组 删除',
                        state: 'remove',
                        element: Restangular.copy(element),
                        refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.name = items.element.name;
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
                {field: 'name', name: '用户组名'},
                {field: 'description', name: '描述'}
            ],
            sortable: ['name', 'description'],
            add: add,
            refresh: refresh,
            detail: detail,
            edit: edit,
            remove: remove,
            title: ['用户管理', '用户组'],
            search: true
        };
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'name', name: '用户名'},
                {field: 'phoneNumber', name: '手机号'},
                {field: 'email', name: '电子邮箱'},
            ],
            sortable: ['name', 'phoneNumber', 'email']
            //check: true
            //add: add,
            //refresh: refresh
            //detail: detail,
            //edit: edit,
            //remove: remove
        };
    });

