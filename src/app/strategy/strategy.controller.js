/**
 * Created by yalong on 2015/3/16.
 */
'use strict';

angular.module('mdmUi')

    .controller('StrategyGroupCtrl', function ($scope, $mdDialog, Restangular, $state) {

        var Rest = Restangular.all('strategyGroup');
        $scope.strategyGroupRest = Rest;
        var strategyGroup;
        var RestStrategy = Restangular.all('strategy');
        $scope.strategyRest = RestStrategy;
        var strategy;
        var RestPunishment = Restangular.all('punishment');
        $scope.punishmentRest = RestPunishment;
        var punishment;
        var templateUrl = 'app/strategy/strategy.strategyGroup.dialog.html';
        var refresh = function () {
            Rest.getList().then(function (res) {
                res.forEach(function (e, i, a) {
                    e.state = e.status == 0 ? '已发布' : '待发布';
                });
                $scope.collection.content = res;
                strategyGroup = res;
            });
            RestStrategy.getList().then(function (res) {
                strategy = res;
            });
            RestPunishment.getList().then(function (res) {
                punishment = res;
            });
        };
        refresh();

        var add = function (event) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '策略组 添加',
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
                        title: '策略组 详情',
                        state: 'detail',
                        element: Restangular.copy(element),
                        subCollection: $scope.subCollection
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    var templateUrl = 'app/strategy/strategy.strategyItem.dialog.html';
                    $scope.items = items;
                    $scope.element = items.element;
                    $scope.subCollection = items.subCollection;
                    var refresh = function () {
                        Restangular.all('strategyItem').customGETLIST('strategyGroup/' + element.iD).then(function (res) {
                            $scope.subCollection.content = res.forEach(function (v) {
                                v.strategyName = strategy.filter(function (vv) {
                                    return v.strategyID == vv.iD;
                                })[0].name;
                                v.punishmentName = punishment.filter(function (vv) {
                                    return v.punishmentID == vv.iD;
                                })[0].name;
                            });
                            $scope.subCollection.content = res;
                        });
                    };
                    refresh();
                    var detail = function (event, element) {
                        $mdDialog.show({
                            templateUrl: templateUrl,
                            targetEvent: event,
                            locals: {
                                items: {
                                    title: '策略项 详情',
                                    state: 'detail',
                                    element: Restangular.copy(element),
                                    strategy: strategy,
                                    punishment: punishment,
                                    strategyGroup: strategyGroup
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
                    //      $scope.subCollection.refresh = refresh;
                    $scope.subCollection.detail = detail;
                    $scope.subCollection.check = false;
                    $scope.subCollection.edit = undefined;
                    $scope.subCollection.remove = undefined;
                    $scope.subCollection.add = undefined;
                    $scope.subCollection.addItem = undefined;
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
                        title: '策略组 编辑',
                        state: 'edit',
                        element: Restangular.copy(element),
                        subCollection: $scope.subCollection,
                        save: save
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    var templateUrl = 'app/strategy/strategy.strategyItem.dialog.html';
                    $scope.items = items;
                    $scope.element = items.element;
                    $scope.subCollection = items.subCollection;
                    var refresh = function () {
                        Restangular.all('strategyItem').customGETLIST('strategyGroup/' + element.iD).then(function (res) {
                            $scope.subCollection.content = res.forEach(function (v) {
                                v.strategyName = strategy.filter(function (vv) {
                                    return v.strategyID == vv.iD;
                                })[0].name;
                                v.punishmentName = punishment.filter(function (vv) {
                                    return v.punishmentID == vv.iD;
                                })[0].name;
                            });
                            $scope.subCollection.content = res;
                        });
                    };
                    refresh();
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
                    var add = function (event) {
                        $mdDialog.show({
                            templateUrl: templateUrl,
                            targetEvent: event,
                            locals: {
                                items: {
                                    title: '策略项 添加',
                                    state: 'add',
                                    save: save,
                                    strategy: strategy,
                                    punishment: punishment,
                                    strategyGroup: strategyGroup
                                }
                            },
                            controller: function ($scope, $mdDialog, items) {
                                $scope.items = items;
                                $scope.save = function () {
                                    var element = $scope.element;
                                    items.save(element);
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
                                    title: '策略项 详情',
                                    state: 'detail',
                                    element: Restangular.copy(element),
                                    strategy: strategy,
                                    punishment: punishment,
                                    strategyGroup: strategyGroup
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
                                    title: '策略项 编辑',
                                    state: 'edit',
                                    element: Restangular.copy(element),
                                    save: save,
                                    strategy: strategy,
                                    punishment: punishment,
                                    strategyGroup: strategyGroup
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
                        element.remove().then(function () {
                            refresh();
                        });
                    };

                    //     $scope.subCollection.refresh = refresh;
                    $scope.subCollection.addItem = add;
                    $scope.subCollection.detail = detail;
                    $scope.subCollection.edit = edit;
                    $scope.subCollection.remove = remove;
                    $scope.subCollection.check = false;
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
                        title: '策略组 删除',
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
        var off = function (event, element) {
            $mdDialog.show({
                templateUrl: 'app/main/removeConfirm.dialog.html',
                targetEvent: event,
                locals: {
                    items: {
                        title: '策略组 禁用',
                        state: 'remove',
                        element: Restangular.copy(element),
                        refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.name = items.element.name;
                    $scope.alert = true;
                    $scope.msg = '确认要禁用' + ' "' + $scope.name + '" ' + '吗？';
                    $scope.confirm = function () {
                        // element.remove().then(function () {
                        items.refresh();
                        // });
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    }
                }
            });
        };
        var on = function (event, element) {
            $mdDialog.show({
                templateUrl: 'app/main/removeConfirm.dialog.html',
                targetEvent: event,
                locals: {
                    items: {
                        title: '策略组 开启',
                        state: 'remove',
                        element: Restangular.copy(element),
                        refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.name = items.element.name;
                    $scope.alert = true;
                    $scope.msg = '确认要开启' + ' "' + $scope.name + '" ' + '吗？';
                    $scope.confirm = function () {
                        //    element.remove().then(function () {
                        items.refresh();
                        //  });
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
                {field: 'name', name: '策略组'},
                {field: 'description', name: '描述'},
                {field: 'state', name: '状态'},
            ],
            sortable: ['name', 'description', 'state'],
            add: function (event) {
                $state.go('^.strategyGroupAdd');
            },
            refresh: refresh,
            detail: function (event, element) {
                $state.go('^.strategyGroupDetail', {id: element.iD})
            },
            edit: function (event, element) {
                $state.go('^.strategyGroupEdit', {id: element.iD})
            },
            remove: remove,
            off: off,
            on: on,
            title: ['策略管理', '策略组'],
            search: true
        };
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'startTime', name: '开始时间'},
                {field: 'endTime', name: '结束时间'},
                {field: 'reginalInterval', name: '地理围栏'},
                {field: 'parameters', name: '参数'},
                //{field: 'groupName', name: '策略组'},
                {field: 'strategyName', name: '策略'},
                {field: 'punishmentName', name: '惩罚'},
            ],
            sortable: ['startTime', 'endTime', 'reginalInterval', 'parameters', 'strategyName', 'punishmentName']
            // add: add,
            //refresh: refresh,
            //detail: detail,
            //edit: edit,
            //remove: remove
        };
    })
    .controller('StrategyGroupAddCtrl', function ($scope, $mdDialog, Restangular, $state, $stateParams) {
        $scope.title = ['策略管理', '策略组', '添加'];
        $scope.element = {};
        Restangular.all('strategy').getList().then(function (res) {
            $scope.strategy = res;
        });
        Restangular.all('punishment').getList().then(function (res) {
            $scope.punishment = res;
        });
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'timeInterval', name: '时间围栏'},
                {field: 'reginalInterval', name: '地理围栏'},
                {field: 'parameters', name: '参数'},
                //{field: 'groupName', name: '策略组'},
                {field: 'strategyName', name: '策略'},
                {field: 'punishmentName', name: '惩罚'},
            ],
            sortable: ['startTime', 'endTime', 'reginalInterval', 'parameters', 'strategyName', 'punishmentName', 'timeInterval']
            // add: add,
            //refresh: refresh,
            //detail: detail,
            //edit: edit,
            //remove: remove
        };
        $scope.showItem = false;
        $scope.addItem = function () {
            $scope.showItem = true;
        };
        $scope.saveItem = function () {
            $scope.showItem = false;
        };
        $scope.save = function (element) {
            var title = '策略组 添加';
            if (element.name == undefined || element.name.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
                $scope.alert(title, '请输入策略组名!');
            }
            else {
                //delete element.passwordConfirm;
                $scope.strategyGroupRest.post(element).then(function (res) {
                    if (res != undefined) {
                        //$scope.alert(title, res);
                        alert(res);
                    } else {
                        $state.go('^.strategyGroup');
                    }
                });
            }
        };
        $scope.cancel = function () {
            $state.go('^.strategyGroup');
        };
    })
    .controller('StrategyGroupDetailCtrl', function ($scope, $mdDialog, Restangular, $state, $stateParams) {
        $scope.title = ['策略管理', '策略组', '详情'];
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'timeInterval', name: '时间围栏'},
                {field: 'reginalInterval', name: '地理围栏'},
                {field: 'parameters', name: '参数'},
                //{field: 'groupName', name: '策略组'},
                {field: 'strategyName', name: '策略'},
                {field: 'punishmentName', name: '惩罚'},
            ],
            sortable: ['startTime', 'endTime', 'reginalInterval', 'parameters', 'strategyName', 'punishmentName', 'timeInterval']
            // add: add,
            //refresh: refresh,
            //detail: detail,
            //edit: edit,
            //remove: remove
        };
        Restangular.all('strategyGroup').get($stateParams.id).then(function (res) {
            $scope.element = res;
        });
        Restangular.all('strategy').getList().then(function (res) {
            $scope.strategy = res;
        });
        Restangular.all('punishment').getList().then(function (res) {
            $scope.punishment = res;
        });
        Restangular.all('strategyItem').customGETLIST('strategyGroup/' + $stateParams.id).then(function (res) {
            $scope.subCollection.content = res.forEach(function (v) {
                v.timeInterval = v.startTime + ' - ' + v.endTime;
                v.strategyName = $scope.strategy.filter(function (vv) {
                    return v.strategyID == vv.iD;
                })[0].name;
                v.punishmentName = $scope.punishment.filter(function (vv) {
                    return v.punishmentID == vv.iD;
                })[0].name;
            });
            $scope.subCollection.content = res;
        });
        $scope.confirm = function (element) {
            $state.go('^.strategyGroup');
        };
        $scope.cancel = function () {
            $state.go('^.strategyGroup');
        };
    })
    .controller('StrategyGroupEditCtrl', function ($scope, $mdDialog, Restangular, $state, $stateParams) {
        $scope.title = ['策略管理', '策略组', '修改'];
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'timeInterval', name: '时间围栏'},
                {field: 'reginalInterval', name: '地理围栏'},
                {field: 'parameters', name: '参数'},
                //{field: 'groupName', name: '策略组'},
                {field: 'strategyName', name: '策略'},
                {field: 'punishmentName', name: '惩罚'},
            ],
            sortable: ['startTime', 'endTime', 'reginalInterval', 'parameters', 'strategyName', 'punishmentName', 'timeInterval']
            // add: add,
            //refresh: refresh,
            //detail: detail,
            //edit: edit,
            //remove: remove
        };
        Restangular.all('strategyGroup').get($stateParams.id).then(function (res) {
            $scope.element = res;
        });
        Restangular.all('strategy').getList().then(function (res) {
            $scope.strategy = res;
        });
        Restangular.all('punishment').getList().then(function (res) {
            $scope.punishment = res;
        });
        Restangular.all('strategyItem').customGETLIST('strategyGroup/' + $stateParams.id).then(function (res) {
            $scope.subCollection.content = res.forEach(function (v) {
                v.timeInterval = v.startTime + ' - ' + v.endTime;
                v.strategyName = $scope.strategy.filter(function (vv) {
                    return v.strategyID == vv.iD;
                })[0].name;
                v.punishmentName = $scope.punishment.filter(function (vv) {
                    return v.punishmentID == vv.iD;
                })[0].name;
            });
            $scope.subCollection.content = res;
        });
        $scope.showItem = false;
        $scope.addItem = function () {
            $scope.showItem = true;
        };
        $scope.saveItem = function () {
            $scope.showItem = false;
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
        };
        $scope.save = function (element) {
            var title = '策略组 修改';
            $scope.editConfirm('策略组 修改', '确认要修改吗？', function () {
                element.save().then(function () {
                    $state.go('^.strategyGroup');
                });
            });
        };
        $scope.cancel = function () {
            $state.go('^.strategyGroup');
        };
    })
    .controller('StrategyGroupPublishCtrl', function ($scope, $mdDialog, Restangular, $state, $stateParams) {
    })
    .controller('StrategyItemCtrl', function ($scope, $mdDialog, Restangular) {


        var Rest = Restangular.all('strategyItem');
        var templateUrl = 'app/strategy/strategy.strategyItem.dialog.html';
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
                        title: '策略项 添加',
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
                        title: '策略项 详情',
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
                        title: '策略项 编辑',
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
                        title: '用户项 删除',
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
                {field: 'startTime', name: '开始时间'},
                {field: 'endTime', name: '结束时间'},
                {field: 'reginalInterval', name: '地理围栏'},
                {field: 'parameters', name: '参数'},
                {field: 'groupID', name: '策略组'},
                {field: 'strategyID', name: '策略'},
                {field: 'punishmentID', name: '惩罚'},
            ],
            sortable: ['startTime', 'endTime', 'reginalInterval', 'parameters', 'groupID', 'strategyID', 'punishmentID'],
            add: add,
            refresh: refresh,
            detail: detail,
            edit: edit,
            remove: remove
        };

    })
    .controller('StrategyCtrl', function ($scope, $mdDialog, Restangular) {

        var Rest = Restangular.all('strategy');
        var templateUrl = 'app/strategy/strategy.strategy.dialog.html';
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
                        title: '策略 添加',
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
                        title: '策略 详情',
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
                        title: '策略 编辑',
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
                        title: '策略 删除',
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
                {field: 'name', name: '策略名称'},
                //  {field: 'code', name: '编码'},
            ],
            sortable: ['name', 'code'],
            add: add,
            refresh: refresh,
            detail: detail,
            edit: edit,
            remove: remove,
            title: ['策略管理', '策略列表'],
            search: true
        };
    })
    .controller('StrategyPunishmentCtrl', function ($scope, $mdDialog, Restangular) {

        var Rest = Restangular.all('punishment');
        var templateUrl = 'app/strategy/strategy.punishment.dialog.html';
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
                        title: '惩罚 添加',
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
                        title: '惩罚 详情',
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
                        title: '惩罚 编辑',
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
                        title: '惩罚 删除',
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
                {field: 'name', name: '惩罚名称'},
                // {field: 'code', name: '编码'},
            ],
            sortable: ['name', 'code'],
            add: add,
            refresh: refresh,
            detail: detail,
            edit: edit,
            remove: remove,
            title: ['策略管理', '惩罚列表'],
            search: true
        };
    });

