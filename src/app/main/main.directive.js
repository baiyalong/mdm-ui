/**
 * Created by yalong on 2015/3/19.
 */
'use strict';


angular.module('mdmUi')

    .directive("menuLink", function () {
        return {
            restrict: 'E',
            scope: {section: "="},
            templateUrl: "/app/main/menu-link.tmpl.html",
            link: function (e, t) {
                var n = t.parent().controller();
                e.isSelected = function () {
                    return n.isSelected(e.section)
                },
                    e.focusSection = function () {
                        n.select(e.section);
                        n.autoFocusContent = true;
                    },
                    e.isSubmenu = function () {
                        return e.section.submenu;
                    },
                    e.menuIcon = function () {
                        return e.section.icon !== undefined
                    },
                    e.selectedColor = function () {
                        if (n.isSelected(e.section)) {
                            return {'background-color': '#b63745'}
                        }
                    }
            }
        }
    })


    .directive("menuToggle", function () {
        return {
            restrict: 'E',
            scope: {section: "="},
            templateUrl: "/app/main/menu-toggle.tmpl.html",
            link: function (e, t) {
                var n = t.parent().controller();
                e.isOpen = function () {
                    return n.isOpen(e.section)
                }, e.toggle = function () {
                    n.toggleOpen(e.section)
                }, e.menuIcon = function () {
                    return e.section.icon !== undefined
                };
                var a = t[0].parentNode.parentNode.parentNode;
                if (a.classList.contains("parent-list-item")) {
                    var o = a.querySelector("h2");
                    t[0].firstChild.setAttribute("aria-describedby", o.id)
                }
            }
        }
    })

    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    })


    .directive('mdTable', function () {
        return {
            restrict: 'E',
            scope: {
                collection: '='
            },
            controller: function ($scope, $filter, $window) {
                $scope.collection.count = $scope.collection.count || 12;
                $scope.search = {};
                var orderBy = $filter('orderBy');
                $scope.tablePage = 0;
                $scope.nbOfPages = function () {
                    $scope.collection.content = $scope.collection.content || [];
                    return Math.ceil($scope.collection.content.length / $scope.collection.count);
                },
                    $scope.handleSort = function (field) {
                        if ($scope.collection.sortable.indexOf(field) > -1) {
                            return true;
                        } else {
                            return false;
                        }
                    };
                $scope.order = function (predicate, reverse) {
                    $scope.collection.content = orderBy($scope.collection.content, predicate, reverse);
                    $scope.predicate = predicate;
                };
                $scope.order($scope.collection.sortable[0], false);
                $scope.getNumber = function (num) {
                    return new Array(num);
                };
                $scope.goToPage = function (page) {
                    $scope.tablePage = page;
                };
                $scope.checkChange = function (c, check) {
                    //--check one
                    if (c) {
                        $scope.checkAll = $scope.collection.content.every(function (v) {
                            return v.check === true;
                        });
                    }
                    //--check all
                    else {
                        if (check) {
                            $scope.collection.content.forEach(function (v) {
                                v.check = true;
                            });
                        } else {
                            $scope.collection.content.forEach(function (v) {
                                v.check = false;
                            });
                        }
                    }
                };
                $scope.dialogCheck = function (title) {
                    if (title === undefined) {
                        return {'margin-top': '-12px'};
                    }
                };
            },
            templateUrl: '/app/main/md-table.tmpl.html'
        }
    })

    /*
     .directive('mdColresize', function ($timeout) {
     return {
     restrict: 'A',
     link: function (scope, element, attrs) {
     scope.$evalAsync(function () {
     $timeout(function () {
     element.colResizable({
     liveDrag: true,
     fixed: true

     });
     }, 100);
     });
     }
     }
     })
     */

    .filter('startFrom', function () {
        return function (input, start) {
            input = input || [];
            start = +start;
            return input.slice(start);
        }
    });
