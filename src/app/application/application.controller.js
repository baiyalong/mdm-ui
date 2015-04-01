/**
 * Created by yalong on 2015/3/16.
 */
'use strict';

angular.module('mdmUi')

    .controller('ApplicationClassifyCtrl', function ($scope, $mdDialog, Restangular) {

        var Rest = Restangular.all('appClassify');
        var templateUrl = 'app/application/application.classify.dialog.html';
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
                        title: '应用目录 添加',
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
                        title: '应用目录 详情',
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
                        Restangular.all('app').customGETLIST('classify/' + items.element.iD).then(function (res) {
                            $scope.subCollection.content = res;
                        });
                    };
                    refresh();
                    $scope.subCollection.refresh = refresh;
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
                        title: '应用目录 编辑',
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
                        Restangular.all('app').customGETLIST('classify/' + items.element.iD).then(function (res) {
                            $scope.subCollection.content = res;
                        });
                    };
                    refresh();
                    $scope.subCollection.refresh = refresh;
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
        var remove = function (element) {
            element.remove().then(function () {
                refresh();
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
                {field: 'classifyName', name: '应用目录名称'},
                {field: 'classifyID', name: '编码'},
            ],
            sortable: ['classifyName', 'classifyID'],
            add: add,
            refresh: refresh,
            detail: detail,
            edit: edit,
            remove: remove,
            title: ['应用管理', '应用目录']
        };
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'appName', name: '应用名称'},
                {field: 'version', name: '版本'},
                {field: 'isMandatory', name: '强制'},
                {field: 'isRecommended', name: '推荐'},
                {field: 'classification', name: '目录'},
                {field: 'authorizedby', name: '授权'},
                {field: 'producers', name: '制作'},
                // {field: 'description', name: '描述'},
            ],
            sortable: ['appName', 'version', 'isMandatory', 'isRecommended', 'classification', 'authorizedby', 'producers', 'description'],
            //add: add,
            //  refresh: refresh,
            //  detail: detail,
            //  edit: edit,
            //  remove: remove
        };
    })

    .controller('ApplicationCtrl', function ($scope, $upload, $mdDialog, Restangular) {

        var Rest = Restangular.all('app');
        var RestClassification = Restangular.all('appClassify');
        var classification;
        var templateUrl = 'app/application/application.application.dialog.html';
        var refresh = function () {
            Rest.getList().then(function (res) {
                $scope.collection.content = res;
            });
            RestClassification.getList().then(function (res) {
                classification = res;
            });
        };
        refresh();

        var add = function (event) {
            $mdDialog.show({
                templateUrl: templateUrl,
                targetEvent: event,
                locals: {
                    items: {
                        title: '应用 添加',
                        state: 'add',
                        save: save,
                        classification: classification
                        // upload: upload
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.iconProgress = 0;
                    $scope.$watch('icon', function () {
                        //$scope.upload($scope.icon);
                        var files = $scope.icon;
                        $upload.upload({url: 'api/files', file: files})
                            .progress(function (evt) {
                                $scope.iconProgress = parseInt(100.0 * evt.loaded / evt.total);
                            })
                            .success(function (data, status, headers, config) {
                                $scope.element.iconId = data;


                            });
                    });
                    $scope.$watch('images', function () {
                        $scope.upload($scope.images);
                    });
                    $scope.$watch('pkg', function () {
                        $scope.upload($scope.pkg);
                    });
                    $scope.upload = function (files) {
                        if (files && files.length) {
                            $upload.upload({url: 'api/files', file: files})
                                .progress(function (evt) {
                                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                                })
                                .success(function (data, status, headers, config) {
                                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                                });
                        }
                    };
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
                        title: '应用 详情',
                        state: 'detail',
                        element: Restangular.copy(element),
                        classification: classification
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
                        title: '应用 编辑',
                        state: 'edit',
                        element: Restangular.copy(element),
                        save: save,
                        classification: classification
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
        var remove = function (element) {
            element.remove().then(function () {
                refresh();
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
                {field: 'appName', name: '应用名称'},
                //  {field: 'version', name: '版本'},
                //  {field: 'isMandatory', name: '强制'},
                //  {field: 'isRecommended', name: '推荐'},
                {field: 'classification', name: '目录'},
                {field: 'authorizedby', name: '授权'},
                {field: 'producers', name: '制作'},
                // {field: 'description', name: '描述'},
            ],
            sortable: ['appName', 'version', 'isMandatory', 'isRecommended', 'classification', 'authorizedby', 'producers', 'description'],
            add: add,
            refresh: refresh,
            detail: detail,
            edit: edit,
            remove: remove,
            title: ['应用管理', '应用列表']

        };
    })

    .controller('ApplicationTemplateCtrl', function ($scope, $mdDialog, Restangular) {


        var Rest = Restangular.all('appTemplate');
        var templateUrl = 'app/application/application.template.dialog.html';
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
                        title: '应用模版 添加',
                        state: 'add',
                        subCollection: $scope.subCollection,
                        save: save,
                        refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.subCollection = items.subCollection;
                    var refresh = function () {
                        Restangular.all('app').getList().then(function (res) {
                            $scope.subCollection.content = res;
                        });
                    };
                    refresh();
                    $scope.subCollection.refresh = refresh;
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
                        title: '应用模版 详情',
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
                        Restangular.all('appTemplate').customGETLIST(items.element.iD + '/app').then(function (res) {
                            $scope.subCollection.content = res;
                        });
                    };
                    refresh();
                    $scope.subCollection.refresh = refresh;
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
                        title: '应用模版 编辑',
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
                        Restangular.all('app').getList().then(function (res) {
                            all = res;
                            Restangular.all('appTemplate').customGETLIST(items.element.iD + '/app').then(function (res) {
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
                    $scope.subCollection.refresh = refresh;
                    $scope.subCollection.check = true;
                    $scope.save = function () {
                        var e = $scope.element;
                        var arr = [];
                        $scope.subCollection.content.forEach(function (v) {
                            if (v.check) {
                                arr.push(v.iD);
                            }
                        });
                        e.appsHelper = arr;
                        items.save(e);
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    }
                }
            });
        };
        var remove = function (element) {
            element.remove().then(function () {
                refresh();
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
                {field: 'name', name: '模版名称'},
            ],
            sortable: ['name'],
            add: add,
            refresh: refresh,
            detail: detail,
            edit: edit,
            remove: remove,
            title: ['应用管理', '应用模版']
        };
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'appName', name: '应用名称'},
                {field: 'version', name: '版本'},
                {field: 'isMandatory', name: '强制'},
                {field: 'isRecommended', name: '推荐'},
                {field: 'classification', name: '目录'},
                {field: 'authorizedby', name: '授权'},
                {field: 'producers', name: '制作'},
                // {field: 'description', name: '描述'},
            ],
            sortable: ['appName', 'version', 'isMandatory', 'isRecommended', 'classification', 'authorizedby', 'producers', 'description'],
            //add: add,
            //  refresh: refresh,
            //  detail: detail,
            //  edit: edit,
            //  remove: remove
        };
    });
