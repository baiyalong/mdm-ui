/**
 * Created by yalong on 2015/3/16.
 */
'use strict';

angular.module('mdmUi')

    .service('RecordService', function (Restangular) {
        var self = this;
        Restangular.all('commandRecord').getList().then(function (res) {
            self.recordCommands = Restangular.stripRestangular(res);
        });
        Restangular.all('message').getList().then(function (res) {
            self.recordMessages = Restangular.stripRestangular(res);
        });
    });