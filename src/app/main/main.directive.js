/**
 * Created by yalong on 2015/3/19.
 */
'use strict';


angular.module('mdmUi')

    .directive("menuLink", function () {
        return {
            restrict: 'E',
            scope: {section: "="}, templateUrl: "/app/main/menu-link.tmpl.html", link: function (e, t) {
                var n = t.parent().controller();
                e.isSelected = function () {
                    return n.isSelected(e.section)
                }, e.focusSection = function () {
                    n.autoFocusContent = !0
                }
            }
        }
    })


    .directive("menuToggle", function () {
        return {
            restrict: 'E',
            scope: {section: "="}, templateUrl: "/app/main/menu-toggle.tmpl.html", link: function (e, t) {
                var n = t.parent().controller();
                e.isOpen = function () {
                    return n.isOpen(e.section)
                }, e.toggle = function () {
                    n.toggleOpen(e.section)
                };
                var a = t[0].parentNode.parentNode.parentNode;
                if (a.classList.contains("parent-list-item")) {
                    var o = a.querySelector("h2");
                    t[0].firstChild.setAttribute("aria-describedby", o.id)
                }
            }
        }
    });