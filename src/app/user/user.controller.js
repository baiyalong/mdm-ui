/**
 * Created by yalong on 2015/3/13.
 */
'use strict';

angular.module('mdmUi')
    .controller('UserMenuCtrl', function ($scope, Restangular, $state, $mdDialog) {
        $scope.userRest = Restangular.all('user');
        $scope.userGroupRest = Restangular.all('userGroup');
        $scope.terminalRest = Restangular.all('terminal');
        $scope.alert = function (title, msg) {
            $mdDialog.show({
                templateUrl: 'app/main/removeConfirm.dialog.html',
                targetEvent: event,
                locals: {
                    items: {
                        title: title
                        //  state: 'alert',
                        // element: Restangular.copy(element)
                        // refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.alert = true;
                    $scope.msg = msg;
                    $scope.confirm = function () {
                        $mdDialog.cancel();
                    };
                }
            });
        };
        $scope.editConfirm = function (title, msg, fn) {
            $mdDialog.show({
                templateUrl: 'app/main/removeConfirm.dialog.html',
                targetEvent: event,
                locals: {
                    items: {
                        title: title
                        //  state: 'alert',
                        // element: Restangular.copy(element)
                        // refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.alert = true;
                    $scope.msg = msg;
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    };
                    $scope.confirm = function () {
                        fn();
                        $mdDialog.hide();
                    };
                }
            });
        }
    })
    .controller('UserCtrl', function ($scope, $mdDialog, Restangular, $state) {


        var Rest = Restangular.all('user');
        var templateUrl = 'app/user/user.user.dialog.html';
        var refresh = function () {
            $scope.userRest.getList().then(function (res) {
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
                {field: 'phoneNumber', name: '联系电话'},
                {field: 'email', name: '电子邮箱'},
            ],
            sortable: ['name', 'phoneNumber', 'email'],
            add: function (event) {
                $state.go('^.userAdd');
            },
            refresh: refresh,
            detail: function (event, element) {
                $state.go('^.userDetail', {id: element.iD})
            },
            edit: function (event, element) {
                $state.go('^.userEdit', {id: element.iD})
            },
            remove: remove,
            title: ['用户管理', '用户'],
            search: true
        };
    })
    .controller('UserAddCtrl', function ($scope, Restangular, $state, $mdDialog) {
        $scope.title = ['用户管理', '用户', '添加'];
        $scope.element = {};
        $scope.save = function (element) {
            var title = '用户 添加';
            if (element.name == undefined || element.name.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
                $scope.alert(title, '请输入用户名!');
            }
            else if (element.password == undefined || element.password.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
                $scope.alert(title, '请输入密码!');
            }
            else if (element.password != element.passwordConfirm) {
                $scope.alert(title, '两次输入密码不一致!');
            } else {
                //delete element.passwordConfirm;
                $scope.userRest.post(element).then(function (res) {
                    if (res != undefined) {
                        //$scope.alert(title, res);
                        alert(res);
                    } else {
                        $state.go('^.user');
                    }
                });
            }
        };
        $scope.cancel = function () {
            $state.go('^.user');
        };
    })
    .controller('UserDetailCtrl', function ($scope, Restangular, $state, $stateParams) {
        $scope.title = ['用户管理', '用户', '详情'];
        $scope.userRest.get($stateParams.id).then(function (res) {
            $scope.element = res;
        });
        $scope.confirm = function (element) {
            $state.go('^.user');
        };
        $scope.cancel = function () {
            $state.go('^.user');
        };
    })
    .controller('UserEditCtrl', function ($scope, Restangular, $state, $stateParams) {
        $scope.title = ['用户管理', '用户', '修改'];
        $scope.userRest.get($stateParams.id).then(function (res) {
            $scope.element = res;
        });
        $scope.save = function (element) {
            $scope.editConfirm('用户 修改', '确认要修改吗？', function () {
                element.save().then(function () {
                    $state.go('^.user');
                });
            });
        };
        $scope.cancel = function () {
            $state.go('^.user');
        };
    })
    .controller('UserGroupCtrl', function ($scope, $mdDialog, Restangular, $state) {

        var Rest = Restangular.all('userGroup');
        var templateUrl = 'app/user/user.userGroup.dialog.html';
        var refresh = function () {
            $scope.userGroupRest.getList().then(function (res) {
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
            add: function (event) {
                $state.go('^.userGroupAdd');
            },
            refresh: refresh,
            detail: function (event, element) {
                $state.go('^.userGroupDetail', {id: element.iD})
            },
            edit: function (event, element) {
                $state.go('^.userGroupEdit', {id: element.iD})
            },
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
    })
    .controller('UserGroupAddCtrl', function ($scope, Restangular, $state) {
        $scope.title = ['用户管理', '用户组', '添加'];
        $scope.element = {};
        $scope.save = function (element) {
            var title = '用户组 添加';
            if (element.name == undefined || element.name.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
                $scope.alert(title, '请输入用户组名!');
            }
            else {
                $scope.userGroupRest.post(element).then(function (res) {
                    if (res != undefined) {
                        alert(res);
                    } else {
                        $state.go('^.userGroup');
                    }
                });
            }
        };
        $scope.cancel = function () {
            $state.go('^.userGroup');
        };
    })
    .controller('UserGroupDetailCtrl', function ($scope, Restangular, $state, $stateParams) {
        $scope.title = ['用户管理', '用户组', '详情'];
        $scope.userGroupRest.get($stateParams.id).then(function (res) {
            $scope.element = res;
        });
        $scope.confirm = function (element) {
            $state.go('^.userGroup');
        };
        $scope.cancel = function () {
            $state.go('^.userGroup');
        };
    })
    .controller('UserGroupEditCtrl', function ($scope, Restangular, $state, $stateParams) {
        $scope.title = ['用户管理', '用户组', '修改'];
        $scope.userGroupRest.get($stateParams.id).then(function (res) {
            $scope.element = res;
        });
        $scope.save = function (element) {
            $scope.editConfirm('用户组 修改', '确认要修改吗？', function () {
                element.save().then(function () {
                    $state.go('^.userGroup');
                });
            });
        };
        $scope.cancel = function () {
            $state.go('^.userGroup');
        };
    });

