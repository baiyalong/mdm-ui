/**
 * Created by yalong on 2015/3/18.
 */
angular.module('mdmUi')
    .service('AccountService', function () {
        var self = this;
        self.account = {};

        self.login = function (account) {
            sessionStorage.clear();
            sessionStorage.setItem('userName', account.userName);
            sessionStorage.setItem('password', account.password);
            sessionStorage.setItem('token', account.token);

            if (account.remember) {
                localStorage.setItem('userName', account.userName);
                localStorage.setItem('password', account.password);
            } else {
                localStorage.clear();
            }
        };
        self.logout = function () {
            sessionStorage.clear();
            this.account = {};
        };
        self.isLogin = function () {
            return sessionStorage.length;
        };
        self.remember = function () {
            self.account = {
                userName: localStorage.getItem('userName'),
                password: localStorage.getItem('password')
            }
        };
        self.userName = function () {
            self.account = {userName: sessionStorage.getItem('userName')}
        }
    });