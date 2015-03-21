/**
 * Created by yalong on 2015/3/21.
 */
'use strict';


angular.module('mdmUi')
    .service('UserService', function (Restangular) {
        var self = this;

        Restangular.all('user').getList().then(function (res) {
            self.users = Restangular.stripRestangular(res);
        });

        Restangular.all('userGroup').getList().then(function (res) {
            self.userGroups = Restangular.stripRestangular(res);
        });
    });