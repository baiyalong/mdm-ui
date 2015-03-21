/**
 * Created by yalong on 2015/3/23.
 */
'use strict';

angular.module('mdmUi')
    .service('CommandService', function (Restangular) {
        var self = this;
        Restangular.all('command').getList().then(function (res) {
            self.commands = Restangular.stripRestangular(res);
        });
    });