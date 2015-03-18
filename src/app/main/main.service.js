/**
 * Created by yalong on 2015/3/19.
 */
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
    .service('SidenavService', function () {
        var self = this;

        self.sectionss = [
            {
                name: '用户管理',
                children: [
                    {
                        name: '用户组'
                    },
                    {
                        name: '用户'
                    }
                ]
            },
            {
                name: '终端管理',
                children: [
                    {
                        name: '终端信息'
                    },
                    {
                        name: '终端应用'
                    },
                    {
                        name: '终端策略'
                    }
                ]
            },
            {
                name: '命令管理',
                children: [
                    {
                        name: '发送命令'
                    },
                    {
                        name: '发送消息'
                    },
                    {
                        name: '命令列表'
                    }
                ]
            },
            {
                name: '应用管理',
                children: [
                    {
                        name: '应用目录'
                    },
                    {
                        name: '应用列表'
                    },
                    {
                        name: '应用模版'
                    }
                ]
            },
            {
                name: '策略管理',
                children: [
                    {
                        name: '策略组'
                    },
                    {
                        name: '策略列表'
                    },
                    {
                        name: '惩罚措施'
                    }
                ]
            },
            {
                name: '操作记录',
                children: [
                    {
                        name: '命令发送记录'
                    },
                    {
                        name: '消息发送记录'
                    }
                ]
            }
        ];


        self.sections = [
            {
                name: "Theming",
                type: "toggle",
                pages: [{
                    name: "Introduction and Terms",
                    url: "/Theming/01_introduction",
                    type: "link"
                }, {
                    name: "Declarative Syntax",
                    url: "/Theming/02_declarative_syntax",
                    type: "link"
                }, {
                    name: "Configuring a Theme",
                    url: "/Theming/03_configuring_a_theme",
                    type: "link"
                }, {name: "Multiple Themes", url: "/Theming/04_multiple_themes", type: "link"}
                ]
            }
        ];
    })


    .factory("menu", function (SERVICES, COMPONENTS, DEMOS, PAGES, $location, $rootScope) {

        var e = SERVICES, t = COMPONENTS, n = DEMOS, a = PAGES, o = $location, r = $rootScope;

        function i(e, t) {
            return e.name < t.name ? -1 : 1
        }

        function l() {
            var e = o.path(), t = function (t, n) {
                e === n.url && (u.selectSection(t), u.selectPage(t, n))
            };
            s.forEach(function (e) {
                e.children ? e.children.forEach(function (e) {
                    e.pages && e.pages.forEach(function (n) {
                        t(e, n)
                    })
                }) : e.pages ? e.pages.forEach(function (n) {
                    t(e, n)
                }) : "link" === e.type && t(e, e)
            })
        }

        var s = [{name: "Getting Started", url: "/getting-started", type: "link"}], d = [];
        angular.forEach(n, function (e) {
            d.push({name: e.label, url: e.url})
        }), s.push({name: "Demos", pages: d.sort(i), type: "toggle"}), s.push(), s.push({
            name: "Customization",
            type: "heading",
            children: [{
                name: "Theming",
                type: "toggle",
                pages: [{
                    name: "Introduction and Terms",
                    url: "/Theming/01_introduction",
                    type: "link"
                }, {
                    name: "Declarative Syntax",
                    url: "/Theming/02_declarative_syntax",
                    type: "link"
                }, {
                    name: "Configuring a Theme",
                    url: "/Theming/03_configuring_a_theme",
                    type: "link"
                }, {name: "Multiple Themes", url: "/Theming/04_multiple_themes", type: "link"}]
            }]
        });
        var c = {}, m = {};
        t.forEach(function (e) {
            e.docs.forEach(function (e) {
                angular.isDefined(e.private) || (m[e.type] = m[e.type] || [], m[e.type].push(e), c[e.module] = c[e.module] || [], c[e.module].push(e))
            })
        }), e.forEach(function (e) {
            angular.isDefined(e.private) || (m[e.type] = m[e.type] || [], m[e.type].push(e), c[e.module] = c[e.module] || [], c[e.module].push(e))
        }), s.push({
            name: "API Reference",
            type: "heading",
            children: [{
                name: "Layout",
                type: "toggle",
                pages: [{
                    name: "Container Elements",
                    id: "layoutContainers",
                    url: "/layout/container"
                }, {name: "Grid System", id: "layoutGrid", url: "/layout/grid"}, {
                    name: "Child Alignment",
                    id: "layoutAlign",
                    url: "/layout/alignment"
                }, {name: "Options", id: "layoutOptions", url: "/layout/options"}]
            }, {name: "Services", pages: m.service.sort(i), type: "toggle"}, {
                name: "Directives",
                pages: m.directive.sort(i),
                type: "toggle"
            }]
        });
        var u;
        return r.$on("$locationChangeSuccess", l), u = {
            sections: s,
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
                t && t.url && o.path(t.url), u.currentSection = e, u.currentPage = t
            },
            isPageSelected: function (e) {
                return u.currentPage === e
            }
        }
    });