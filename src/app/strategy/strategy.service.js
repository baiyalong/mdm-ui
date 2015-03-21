/**
 * Created by yalong on 2015/3/23.
 */
'use strict';


angular.module('mdmUi')
    .service('StrategyService', function (Restangular) {
        var self = this;
        Restangular.all('strategyGroup').getList().then(function (res) {
            self.strategyGroups = Restangular.stripRestangular(res);
        });
        Restangular.all('strategy').getList().then(function (res) {
            self.strategys = Restangular.stripRestangular(res);
        });
        Restangular.all('punishment').getList().then(function (res) {
            self.strategyPunishments = Restangular.stripRestangular(res);
        });
    });