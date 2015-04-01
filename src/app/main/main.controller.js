'use strict';

angular.module('mdmUi')
    .controller('MainCtrl', function ($rootScope, $scope, $mdSidenav, AccountService, BackgroundImageService, MenuService, $location, $timeout) {

        var redirect = function () {
            if (window.location.hash == '#/home') {
                window.location.hash = '#/home/user/user';
            }
        };
        redirect();
        var self = $scope;
        var e = $scope;
        var menu = MenuService;
        var i = menu;
        var y = document.querySelector("[role='main']");

        $rootScope.$on("$locationChangeSuccess", function () {
            self.closeMenu(), this && this.autoFocusContent && (self.focusMainContent(), this.autoFocusContent = false)
        });

        self.userName = AccountService.userName();
        self.logout = function () {
            AccountService.logout();
            BackgroundImageService.addBackgroundImage();
            window.location.href = '/';
        };

        this.isSelected = function (e) {
            return menu.isPageSelected(e);
        };
        this.select = function (e) {
            menu.pageSelect(e);
        };
        self.isSectionSelected = function (e) {
            var t = false, n = i.openedSection;
            return n === e ? t = true : e.children && e.children.forEach(function (e) {
                e === n && (t = true)
            }), t
        };

        this.isOpen = function (e) {
            return menu.isSectionSelected(e);
        };

        this.toggleOpen = function (e) {
            return menu.toggleSelectSection(e);
        };


        self.focusMainContent = function (e) {
            e && e.preventDefault(), o(function () {
                y.focus()
            }, 90)
        };

        self.goHome = function () {
            menu.selectPage(null, null), $location.path("/")
        };

        self.openMenu = function () {
            $timeout(function () {
                $mdSidenav("left").open()
            })
        };

        self.closeMenu = function () {
            $timeout(function () {
                $mdSidenav("left").close()
            })
        };

        this.autoFocusContent = false;
        self.menu = menu;
        self.path = $location.path();
        // self.sections = SidenavService.sections;
        /*
         self.openLeftMenu = function () {
         $mdSidenav('left').toggle();
         };
         */
    })


    .controller('BackgroundImageCtrl', function ($scope, BackgroundImageService) {
        var self = $scope;

        self.backgroundImage = BackgroundImageService.getBackgroundImage();
    });
