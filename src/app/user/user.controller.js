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
        var md5 = function (string) {
            function md5_RotateLeft(lValue, iShiftBits) {
                return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
            }

            function md5_AddUnsigned(lX, lY) {
                var lX4, lY4, lX8, lY8, lResult;
                lX8 = (lX & 0x80000000);
                lY8 = (lY & 0x80000000);
                lX4 = (lX & 0x40000000);
                lY4 = (lY & 0x40000000);
                lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
                if (lX4 & lY4) {
                    return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
                }
                if (lX4 | lY4) {
                    if (lResult & 0x40000000) {
                        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                    } else {
                        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                    }
                } else {
                    return (lResult ^ lX8 ^ lY8);
                }
            }

            function md5_F(x, y, z) {
                return (x & y) | ((~x) & z);
            }

            function md5_G(x, y, z) {
                return (x & z) | (y & (~z));
            }

            function md5_H(x, y, z) {
                return (x ^ y ^ z);
            }

            function md5_I(x, y, z) {
                return (y ^ (x | (~z)));
            }

            function md5_FF(a, b, c, d, x, s, ac) {
                a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
                return md5_AddUnsigned(md5_RotateLeft(a, s), b);
            }

            function md5_GG(a, b, c, d, x, s, ac) {
                a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
                return md5_AddUnsigned(md5_RotateLeft(a, s), b);
            }

            function md5_HH(a, b, c, d, x, s, ac) {
                a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
                return md5_AddUnsigned(md5_RotateLeft(a, s), b);
            }

            function md5_II(a, b, c, d, x, s, ac) {
                a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
                return md5_AddUnsigned(md5_RotateLeft(a, s), b);
            }

            function md5_ConvertToWordArray(string) {
                var lWordCount;
                var lMessageLength = string.length;
                var lNumberOfWords_temp1 = lMessageLength + 8;
                var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
                var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
                var lWordArray = Array(lNumberOfWords - 1);
                var lBytePosition = 0;
                var lByteCount = 0;
                while (lByteCount < lMessageLength) {
                    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                    lBytePosition = (lByteCount % 4) * 8;
                    lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
                    lByteCount++;
                }
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
                lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
                lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
                return lWordArray;
            }

            function md5_WordToHex(lValue) {
                var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
                for (lCount = 0; lCount <= 3; lCount++) {
                    lByte = (lValue >>> (lCount * 8)) & 255;
                    WordToHexValue_temp = "0" + lByte.toString(16);
                    WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
                }
                return WordToHexValue;
            }

            function md5_Utf8Encode(string) {
                string = string.replace(/\r\n/g, "\n");
                var utftext = "";
                for (var n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n);
                    if (c < 128) {
                        utftext += String.fromCharCode(c);
                    } else if ((c > 127) && (c < 2048)) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                    } else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                }
                return utftext;
            }

            var x = Array();
            var k, AA, BB, CC, DD, a, b, c, d;
            var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
            var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
            var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
            var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
            string = md5_Utf8Encode(string);
            x = md5_ConvertToWordArray(string);
            a = 0x67452301;
            b = 0xEFCDAB89;
            c = 0x98BADCFE;
            d = 0x10325476;
            for (k = 0; k < x.length; k += 16) {
                AA = a;
                BB = b;
                CC = c;
                DD = d;
                a = md5_FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
                d = md5_FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
                c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
                b = md5_FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
                a = md5_FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
                d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
                c = md5_FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
                b = md5_FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
                a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
                d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
                c = md5_FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
                b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
                a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
                d = md5_FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
                c = md5_FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
                b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
                a = md5_GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
                d = md5_GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
                c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
                b = md5_GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
                a = md5_GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
                d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
                c = md5_GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
                b = md5_GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
                a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
                d = md5_GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
                c = md5_GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
                b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
                a = md5_GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
                d = md5_GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
                c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
                b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
                a = md5_HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
                d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
                c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
                b = md5_HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
                a = md5_HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
                d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
                c = md5_HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
                b = md5_HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
                a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
                d = md5_HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
                c = md5_HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
                b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
                a = md5_HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
                d = md5_HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
                c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
                b = md5_HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
                a = md5_II(a, b, c, d, x[k + 0], S41, 0xF4292244);
                d = md5_II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
                c = md5_II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
                b = md5_II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
                a = md5_II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
                d = md5_II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
                c = md5_II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
                b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
                a = md5_II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
                d = md5_II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
                c = md5_II(c, d, a, b, x[k + 6], S43, 0xA3014314);
                b = md5_II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
                a = md5_II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
                d = md5_II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
                c = md5_II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
                b = md5_II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
                a = md5_AddUnsigned(a, AA);
                b = md5_AddUnsigned(b, BB);
                c = md5_AddUnsigned(c, CC);
                d = md5_AddUnsigned(d, DD);
            }
            return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
        };
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
                element.name = element.name.toLowerCase();
                delete element.passwordConfirm;
                element.password = md5(element.password);
                $scope.userRest.post(element).then(function (res) {
                    if (res != undefined && res.length < 24) {
                        //$scope.alert(title, res);
                        alert(res);
                    } else {
                        var userID = res;
                        $scope.userGroupRest.getList().then(function (res) {
                            var userGroupD = '';
                            if (res != undefined && res != null && res.length != 0) {
                                res.forEach(function (e) {
                                    if (e.name == '默认分组') {
                                        userGroupD = e;
                                    }
                                });
                                $scope.userGroupRest.customPOST(null, userGroupD.iD + '/user/' + userID);
                            }

                        });
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
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'deviceName', name: '设备名'},
                {field: 'deviceType', name: '设备型号'},
                {field: 'oSType', name: '操作系统'},
                {field: 'phoneNumber', name: '手机号'},
            ],
            sortable: ['deviceName', 'deviceType', 'oSType', 'phoneNumber']
            //check: true
            //add: add,
            //refresh: refresh
            //detail: detail,
            //edit: edit,
            //remove: remove
        };
        Restangular.all('userGroup').customGETLIST('/' + $stateParams.id + '/usergroup').then(function (res) {
            var g = '';
            res.forEach(function (e, i, a) {
                g += e.name + '  ';
            });
            $scope.userGroup = g;
        });
        Restangular.all('terminal').customGETLIST('/' + $stateParams.id + '/userterminal').then(function (res) {
            $scope.subCollection.content = res;
            $scope.hasTerminal = res.length == 0 ? false : true;
        });

        $scope.subCollection.check = false;
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
                        delete element.usersHelper;
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
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'name', name: '用户名'},
                {field: 'phoneNumber', name: '联系电话'},
                {field: 'email', name: '电子邮箱'},
            ],
            sortable: ['name', 'phoneNumber', 'email'],
            check: true
            //add: add,
            //refresh: refresh
            //detail: detail,
            //edit: edit,
            //remove: remove
        };
        $scope.userRest.getList().then(function (res) {
            $scope.subCollection.content = res;
            $scope.hasUser = res.length == 0 ? false : true;
        });
        $scope.save = function (element) {
            var title = '用户组 添加';
            if (element.name == undefined || element.name.replace(/(^\s*)|(\s*$)/g, "").length == 0) {
                $scope.alert(title, '请输入用户组名!');
            }
            else {
                $scope.userGroupRest.post(element).then(function (res) {
                    if (res == '当前用户组名称已存在！') {
                        alert(res);
                    } else {
                        var id = res;
                        $scope.subCollection.content.forEach(function (v) {
                            if (v.check) {
                                $scope.userGroupRest.customPOST(null, id + '/user/' + v.iD);
                            }
                        });
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
            $scope.element.getList('user').then(function (res) {
                $scope.subCollection.content = res;
                $scope.hasUser = res.length == 0 ? false : true;
            });
        });
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'name', name: '用户名'},
                {field: 'phoneNumber', name: '联系电话'},
                {field: 'email', name: '电子邮箱'},
            ],
            sortable: ['name', 'phoneNumber', 'email'],
            check: false
            //add: add,
            //refresh: refresh
            //detail: detail,
            //edit: edit,
            //remove: remove
        };
        $scope.confirm = function (element) {
            $state.go('^.userGroup');
        };
        $scope.cancel = function () {
            $state.go('^.userGroup');
        };
    })
    .controller('UserGroupEditCtrl', function ($scope, Restangular, $state, $stateParams) {
        $scope.title = ['用户管理', '用户组', '修改'];
        $scope.subCollection = {
            toggleSearch: false,
            header: [
                {field: 'name', name: '用户名'},
                {field: 'phoneNumber', name: '联系电话'},
                {field: 'email', name: '电子邮箱'},
            ],
            sortable: ['name', 'phoneNumber', 'email'],
            check: true
            //add: add,
            //refresh: refresh
            //detail: detail,
            //edit: edit,
            //remove: remove
        };
        var refresh = function () {
            var all, some;
            Restangular.all('user').getList().then(function (res) {
                all = res;
                $scope.hasUser = res.length == 0 ? false : true;
                $scope.element.getList('user').then(function (res) {
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
        $scope.userGroupRest.get($stateParams.id).then(function (res) {
            $scope.element = res;
            refresh();
        });
        $scope.save = function (element) {
            $scope.editConfirm('用户组 修改', '确认要修改吗？', function () {
                delete element.usersHelper;
                element.save().then(function () {
                    var id = $stateParams.id;
                    var arr1 = [];
                    var arr2 = [];
                    $scope.element.getList('user').then(function (res) {
                        res.forEach(function (v) {
                            arr1.push(v.iD);
                        });
                        $scope.subCollection.content.forEach(function (v) {
                            if (v.check) {
                                arr2.push(v.iD);
                            }
                        });
                        arr1.forEach(function (v) {
                            var r = arr2.some(function (vv) {
                                return vv == v;
                            });
                            if (!r) {
                                $scope.userGroupRest.customDELETE(id + '/user/' + v);
                            }
                        });
                        arr2.forEach(function (v) {
                            var r = arr1.some(function (vv) {
                                return vv == v;
                            });
                            if (!r) {
                                $scope.userGroupRest.customPOST(null, id + '/user/' + v);
                            }
                        });
                        $state.go('^.userGroup');
                    });
                });
            });
        };
        $scope.cancel = function () {
            $state.go('^.userGroup');
        };
    });

