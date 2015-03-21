/**
 * Created by yalong on 2015/3/23.
 */
'use strict';


angular.module('mdmUi')
    .service('TerminalService', function (Restangular) {
        var self = this;
        Restangular.all('terminal').getList().then(function (res) {
            self.terminals = Restangular.stripRestangular(res);
        });
    });