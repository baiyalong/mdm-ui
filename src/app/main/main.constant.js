/**
 * Created by yalong on 2015/3/20.
 */
'use strict';
angular.module('mdmUi')

    .constant('MENU', [
        {
            label: '用户管理',
            submenu: [
                {
                    label: '用户',
                    state: 'home.user.user'
                },
                {
                    label: '用户组',
                    state: 'home.user.userGroup'
                }
            ]
        },
        {
            label: '终端管理',
            submenu: [
                {
                    label: '终端信息',
                    state: 'home.terminal.info'
                },
                {
                    label: '终端应用',
                    state: 'home.terminal.app'
                }
            ]
        },
        {
            label: '命令管理',
            submenu: [
                {
                    label: '命令发送',
                    state: 'home.command.sendCommand'
                },
                {
                    label: '消息发送',
                    state: 'home.command.sendMessage'
                },
                {
                    label: '命令列表',
                    state: 'home.command.commandInfo'
                }
            ]
        },
        {
            label: '应用管理',
            submenu: [
                {
                    label: '应用目录',
                    state: 'home.application.1'
                },
                {
                    label: '应用列表',
                    state: 'home.application.12'
                },
                {
                    label: '应用模版',
                    state: 'home.application.13'
                }

            ]
        },
        {
            label: '策略管理',
            submenu: [
                {
                    label: '策略组',
                    state: 'home.application.1'
                },
                {
                    label: '策略列表',
                    state: 'home.application.1'
                },
                {
                    label: '惩罚列表',
                    state: 'home.application.1'
                }
            ]
        },
        {
            label: '操作记录',
            submenu: [
                {
                    label: '命令发送记录',
                    state: 'home.application.1'
                },
                {
                    label: '消息发送记录',
                    state: 'home.application.1'
                }
            ]
        }
    ]);