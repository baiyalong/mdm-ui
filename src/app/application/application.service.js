/**
 * Created by yalong on 2015/3/23.
 */
'use strict';


angular.module('mdmUi')

    .service('ApplicationService', function (Restangular) {
        var self = this;

        Restangular.all('appClassify').getList().then(function (res) {
            self.applicationClassifies = Restangular.stripRestangular(res);
        });

        Restangular.all('app').getList().then(function (res) {
            self.applications = Restangular.stripRestangular(res);
        });

        Restangular.all('appTemplate').getList().then(function (res) {
            self.applicationTemplates = Restangular.stripRestangular(res);
        });
    });