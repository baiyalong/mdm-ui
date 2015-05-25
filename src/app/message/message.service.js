/**
 * Created by yalong on 2015/3/23.
 */
'use strict';

angular.module('mdmUi')
    .service('MessageService', function (Restangular) {
        var self = this;
        Restangular.all('message').getList().then(function (res) {
            self.message = Restangular.stripRestangular(res);
        });
    });