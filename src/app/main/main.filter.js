/**
 * Created by yalong on 2015/3/20.
 */
angular.module('mdmUi')
    .filter("nospace", function () {
        return function (e) {
            return e ? e.replace(/ /g, "") : ""
        }
    })


    .filter("humanizeDoc", function () {
        return function (e) {
            return e ? "directive" === e.type ? e.name.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            }) : e.label || e.name : void 0
        }
    })


    .filter("directiveBrackets", function () {
        return function (e) {
            return e.indexOf("-") > -1 ? "<" + e + ">" : e
        }
    });