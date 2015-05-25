/**
 * Created by yalong on 2015/3/16.
 */
'use strict';

angular.module('mdmUi')
    .controller('MessageCtrl', function ($scope, $mdDialog, Restangular, $log) {

        $scope.messageRest = Restangular.all('message');
        var templateUrl = 'app/command/command.dialog.html';
        var refresh = function () {
            $scope.messageRest.getList().then(function (res) {
                $scope.collection.content = res;
            });
        };
        //  refresh();

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
            //  header: [
            //{name: '命令编码', field: 'code'},
            //     {name: '命令描述', field: 'description'},
            // ],
            //   sortable: ['code', 'description'],
            //add: add,
            //refresh: refresh,
            //detail: detail,
            //edit: edit,
            //remove: remove,
            title: ['消息管理'],
            //    search: true,
            check: false
        };

        $scope.title = ['消息管理'];
        $scope.element = {};

        $scope.save = function (element) {
            var title = '消息管理';
            if (element.name == undefined || element.name.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
                $scope.alert(title, '请输入消息标题!');
            }
            else {
                $scope.messageRest.post(element).then(function (res) {
                    if (res != undefined) {
                        alert(res);
                    } else {
                        $state.go('^.message');
                    }
                });
            }
        };
        $scope.cancel = function () {
            $state.go('^.message');
        };

//--------------------------------tree view-----------------------------------------------------------
        $scope.vm = {};
        var vm = $scope.vm;
        vm.treeInstance = {};

        var newId = 1;
        vm.ignoreChanges = false;
        vm.newNode = {};
        vm.originalData = [
            {id: 'ajson1', parent: '#', text: 'Simple root node', state: {opened: true}},
            {id: 'ajson2', parent: '#', text: 'Root node 2', state: {opened: true}},
            {id: 'ajson3', parent: 'ajson2', text: 'Child 1', state: {opened: true}},
            {id: 'ajson4', parent: 'ajson2', text: 'Child 2', state: {opened: true}}
        ];
        vm.treeData = [];
        angular.copy(vm.originalData, vm.treeData);
        vm.treeConfig = {
            core: {
                multiple: false,
                animation: true,
                error: function (error) {
                    $log.error('treeCtrl: error from js tree - ' + angular.toJson(error));
                },
                check_callback: true,
                worker: true
            },
            types: {
                default: {
                    icon: 'glyphicon glyphicon-flash'
                },
                star: {
                    icon: 'glyphicon glyphicon-star'
                },
                cloud: {
                    icon: 'glyphicon glyphicon-cloud'
                }
            },
            version: 1,
            plugins: ['types', 'checkbox']
        };


        vm.reCreateTree = function () {
            vm.ignoreChanges = true;
            angular.copy(this.originalData, this.treeData);
            vm.treeConfig.version++;
        };

        vm.simulateAsyncData = function () {
            vm.promise = $timeout(function () {
                vm.treeData.push({id: (newId++).toString(), parent: vm.treeData[0].id, text: 'Async Loaded'})
            }, 3000);
        };

        vm.addNewNode = function () {
            vm.treeData.push({id: (newId++).toString(), parent: vm.newNode.parent, text: vm.newNode.text});
        };


        vm.treeInstanceDemo = function () {
            var selectedNode = vm.treeInstance.jstree(true).get_selected();
            // toaster.pop('info', 'Tree Instance Method Called', selectedNode.length > 0 ? 'Selected node id is ' + selectedNode : 'None of the nodes are selected');
        };

        vm.setNodeType = function () {
            var item = _.findWhere(this.treeData, {id: this.selectedNode});
            item.type = this.newType;
            //  toaster.pop('success', 'Node Type Changed', 'Changed the type of node ' + this.selectedNode);
        };

        vm.readyCB = function () {
            $timeout(function () {
                vm.ignoreChanges = false;
                // toaster.pop('success', 'JS Tree Ready', 'Js Tree issued the ready event')
            });
        };

        $scope.createCB = function (e, item) {
            $timeout(function () {
                // toaster.pop('success', 'Node Added', 'Added new node with the text ' + item.node.text)
            });
        };

        $scope.applyModelChanges = function () {
            return !vm.ignoreChanges;
        };
    }
);
