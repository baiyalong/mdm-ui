/**
 * Created by yalong on 2015/3/16.
 */
'use strict';

angular.module('mdmUi')
    .controller('ApplicationMenuCtrl', function ($scope, Restangular, $state, $mdDialog) {
        $scope.appClassifyRest = Restangular.all('appClassify');

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
    .controller('ApplicationClassifyCtrl', function ($scope, $mdDialog, Restangular, $state) {

        var Rest = Restangular.all('appClassify');
        var templateUrl = 'app/application/application.classify.dialog.html';
        var refresh = function () {
            $scope.appClassifyRest.getList().then(function (res) {
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
                        title: '应用分类 添加',
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
                        title: '应用分类 详情',
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
                    //     $scope.subCollection.refresh = refresh;
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
                        title: '应用分类 编辑',
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
                    //        $scope.subCollection.refresh = refresh;
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
                        title: '应用分类 删除',
                        state: 'remove',
                        element: Restangular.copy(element),
                        refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.name = items.element.classifyName;
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
                {field: 'classifyName', name: '类别'},
                {field: 'description', name: '描述'},
            ],
            sortable: ['classifyName', 'description'],
            add: function (event) {
                $state.go('^.classifyAdd');
            },
            refresh: refresh,
            detail: function (event, element) {
                $state.go('^.classifyDetail', {id: element.iD})
            },
            edit: function (event, element) {
                $state.go('^.classifyEdit', {id: element.iD})
            },
            remove: remove,
            title: ['应用管理', '应用分类'],
            search: true
        };
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'appName', name: '应用名称'},
                {field: 'version', name: '版本'},
                {field: 'isMandatory', name: '强制'},
                {field: 'isRecommended', name: '推荐'},
                {field: 'classification', name: '分类'},
                {field: 'authorizedby', name: '授权'},
                {field: 'producers', name: '制作'},
                // {field: 'description', name: '描述'},
            ],
            sortable: ['appName', 'version', 'isMandatory', 'isRecommended', 'classification', 'authorizedby', 'producers', 'description']
            //add: add,
            //  refresh: refresh,
            //  detail: detail,
            //  edit: edit,
            //  remove: remove
        };
    })
    .controller('ApplicationClassifyAddCtrl', function ($scope, Restangular, $state, $stateParams) {
        $scope.title = ['应用管理', '应用分类', '添加'];
        $scope.element = {};
        $scope.save = function (element) {
            var title = '用户 添加';
            if (element.classifyName == undefined || element.classifyName.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
                $scope.alert(title, '请输入类别!');
            }
            else {
                //delete element.passwordConfirm;
                $scope.appClassifyRest.post(element).then(function (res) {
                    if (res != undefined) {
                        //$scope.alert(title, res);
                        alert(res);
                    } else {
                        $state.go('^.classify');
                    }
                });
            }
        };
        $scope.cancel = function () {
            $state.go('^.classify');
        };
    })
    .controller('ApplicationClassifyDetailCtrl', function ($scope, Restangular, $state, $stateParams) {
        $scope.title = ['应用管理', '应用分类', '详情'];
        $scope.appClassifyRest.get($stateParams.id).then(function (res) {
            $scope.element = res;
        });
        $scope.confirm = function (element) {
            $state.go('^.classify');
        };
        $scope.cancel = function () {
            $state.go('^.classify');
        };
    })
    .controller('ApplicationClassifyEditCtrl', function ($scope, Restangular, $state, $stateParams) {
        $scope.title = ['应用管理', '应用分类', '修改'];
        $scope.appClassifyRest.get($stateParams.id).then(function (res) {
            $scope.element = res;
        });
        $scope.save = function (element) {
            $scope.editConfirm('应用分类 修改', '确认要修改吗？', function () {
                element.save().then(function () {
                    $state.go('^.classify');
                });
            });
        };
        $scope.cancel = function () {
            $state.go('^.classify');
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
                    $scope.element = {};
                    $scope.items = items;
                    $scope.uploadIcon = function (files) {
                        if (files && files.length) {
                            $upload.upload({url: 'api/file', file: files})
                                .progress(function (evt) {
                                    var iconProgress = parseInt(100.0 * evt.loaded / evt.total);
                                    console.log(iconProgress);
                                })
                                .success(function (data, status, headers, config) {
                                    $scope.element.iconUrl = data[0];
                                    $scope.iconUrl = addressConf + '/mdm/' + $scope.element.iconUrl;
                                });
                        }
                    };
                    $scope.uploadImages = function (files) {
                        if (files && files.length) {
                            $upload.upload({url: 'api/file', file: files})
                                .progress(function (evt) {
                                    $scope.imagesProgress = parseInt(100.0 * evt.loaded / evt.total);
                                })
                                .success(function (data, status, headers, config) {
                                    $scope.element.appDetailImageUrl = JSON.stringify(data);
                                    $scope.imagesUrl = data.map(function (c, i, a) {
                                        return addressConf + '/mdm/' + c;
                                    });
                                });
                        }
                    };
                    $scope.uploadPkg = function (files) {
                        if (files && files.length) {
                            $upload.upload({url: 'api/file', file: files})
                                .progress(function (evt) {
                                    $scope.pkgProgress = parseInt(100.0 * evt.loaded / evt.total);
                                })
                                .success(function (data, status, headers, config) {
                                    $scope.element.downloadUrl = data[0];
                                    $scope.pkgUrl = addressConf + '/mdm/' + $scope.element.downloadUrl;
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
                    $scope.iconUrl = addressConf + '/mdm/' + $scope.element.iconUrl;
                    $scope.imagesUrl = JSON.parse($scope.element.appDetailImageUrl).map(function (c, i, a) {
                        return addressConf + '/mdm/' + c;
                    });
                    $scope.pkgUrl = addressConf + '/mdm/' + $scope.element.downloadUrl;
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
                    $scope.iconUrl = addressConf + '/mdm/' + $scope.element.iconUrl;
                    $scope.imagesUrl = JSON.parse($scope.element.appDetailImageUrl).map(function (c, i, a) {
                        return addressConf + '/mdm/' + c;
                    });
                    $scope.pkgUrl = addressConf + '/mdm/' + $scope.element.downloadUrl;
                    $scope.uploadIcon = function (files) {
                        if (files && files.length) {
                            $upload.upload({url: 'api/file', file: files})
                                .progress(function (evt) {
                                    var iconProgress = parseInt(100.0 * evt.loaded / evt.total);
                                    console.log(iconProgress);
                                })
                                .success(function (data, status, headers, config) {
                                    $scope.element.iconUrl = data[0];
                                    $scope.iconUrl = addressConf + '/mdm/' + $scope.element.iconUrl;
                                });
                        }
                    };
                    $scope.uploadImages = function (files) {
                        if (files && files.length) {
                            $upload.upload({url: 'api/file', file: files})
                                .progress(function (evt) {
                                    $scope.imagesProgress = parseInt(100.0 * evt.loaded / evt.total);
                                })
                                .success(function (data, status, headers, config) {
                                    $scope.element.appDetailImageUrl = JSON.stringify(data);
                                    $scope.imagesUrl = data.map(function (c, i, a) {
                                        return addressConf + '/mdm/' + c;
                                    });
                                });
                        }
                    };
                    $scope.uploadPkg = function (files) {
                        if (files && files.length) {
                            $upload.upload({url: 'api/file', file: files})
                                .progress(function (evt) {
                                    $scope.pkgProgress = parseInt(100.0 * evt.loaded / evt.total);
                                })
                                .success(function (data, status, headers, config) {
                                    $scope.element.downloadUrl = data[0];
                                    $scope.pkgUrl = addressConf + '/mdm/' + $scope.element.downloadUrl;
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
        var remove = function (event, element) {
            $mdDialog.show({
                templateUrl: 'app/main/removeConfirm.dialog.html',
                targetEvent: event,
                locals: {
                    items: {
                        title: '应用 删除',
                        state: 'remove',
                        element: Restangular.copy(element),
                        refresh: refresh
                    }
                },
                controller: function ($scope, $mdDialog, items) {
                    $scope.items = items;
                    $scope.name = items.element.appName;
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
        /*
         var publish = function (event, element) {
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
         $scope.iconUrl = addressConf + '/mdm/' + $scope.element.iconUrl;
         $scope.imagesUrl = JSON.parse($scope.element.appDetailImageUrl).map(function (c, i, a) {
         return addressConf + '/mdm/' + c;
         });
         $scope.pkgUrl = addressConf + '/mdm/' + $scope.element.downloadUrl;
         $scope.confirm = function () {
         $mdDialog.hide();
         };
         }
         });
         };
         */
        $scope.collection = {
            toggleSearch: false,
            header: [
                {field: 'appName', name: '名称'},
                //  {field: 'version', name: '版本'},
                //  {field: 'isMandatory', name: '强制'},
                //  {field: 'isRecommended', name: '推荐'},
                {field: 'classification', name: '类别'},
                //{field: 'authorizedby', name: '授权'},
                //{field: 'producers', name: '制作'},
                // {field: 'description', name: '描述'},
                {field: 'state', name: '状态'},
            ],
            sortable: ['appName', 'version', 'isMandatory', 'isRecommended', 'classification', 'authorizedby', 'producers', 'description', 'state'],
            add: add,
            refresh: refresh,
            detail: detail,
            edit: edit,
            publish: function () {
            },
            remove: remove,
            //publish: publish,
            title: ['应用管理', '应用列表'],
            search: true

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
                    //         $scope.subCollection.refresh = refresh;
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
                    //    $scope.subCollection.refresh = refresh;
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
        var remove = function (event, element) {
            $mdDialog.show({
                templateUrl: 'app/main/removeConfirm.dialog.html',
                targetEvent: event,
                locals: {
                    items: {
                        title: '应用模版 删除',
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
                {field: 'name', name: '模版名称'},
            ],
            sortable: ['name'],
            add: add,
            refresh: refresh,
            detail: detail,
            edit: edit,
            remove: remove,
            title: ['应用管理', '应用模版'],
            search: true
        };
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'appName', name: '名称'},
                {field: 'version', name: '版本'},
                {field: 'isMandatory', name: '强制'},
                {field: 'isRecommended', name: '推荐'},
                {field: 'classification', name: '分类'},
                {field: 'authorizedby', name: '授权'},
                {field: 'producers', name: '制作'},
                // {field: 'description', name: '描述'},
            ],
            sortable: ['appName', 'version', 'isMandatory', 'isRecommended', 'classification', 'authorizedby', 'producers', 'description']
            //add: add,
            //  refresh: refresh,
            //  detail: detail,
            //  edit: edit,
            //  remove: remove
        };
    });
