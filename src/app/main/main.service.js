/**
 * Created by yalong on 2015/3/19.
 */
'use strict';

angular.module('mdmUi')
    .service('BackgroundImageService', function () {
        var self = this;

        self.addBackgroundImage = function () {
            sessionStorage.setItem('backgroundImage', true);
        };
        self.rmBackgroundImage = function () {
            sessionStorage.setItem('backgroundImage', false);
        };
        self.getBackgroundImage = function () {
            var image = sessionStorage.getItem('backgroundImage');
            return image === null ? true : image;
        }
    })


    .factory("MenuService", function ($location, $rootScope, MENU) {

        var u;
        return $rootScope.$on("$locationChangeSuccess", function () {
        }),
            u = {
                sections: MENU,
                selectSection: function (e) {
                    u.openedSection = e
                },
                toggleSelectSection: function (e) {
                    u.openedSection = u.openedSection === e ? null : e
                },
                isSectionSelected: function (e) {
                    return u.openedSection === e
                },
                selectPage: function (e, t) {
                    t && t.url && $location.path(t.url), u.currentSection = e, u.currentPage = t
                },
                isPageSelected: function (e) {
                    return u.currentPage === e
                }
            }
    });