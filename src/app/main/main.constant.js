/**
 * Created by yalong on 2015/3/20.
 */
'use strict';
angular.module('mdmUi')

    .constant('MENU', [
        {
            label: '用户管理',
            //state: 'home.user',
            submenu: [
                {
                    label: '用户组',
                    state: 'home.user.userGroup'
                },
                {
                    label: '用户',
                    state: 'home.user.user'
                },
            ]
        },
        {
            label: '终端管理',
            state: 'home.terminal'
            /*
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
             */
        },
        {
            label: '命令管理',
            state: 'home.command'
            /*
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
             */
        },
        {
            label: '应用管理',
            submenu: [
                {
                    label: '应用目录',
                    state: 'home.application.classify'
                },
                {
                    label: '应用列表',
                    state: 'home.application.application'
                },
                {
                    label: '应用模版',
                    state: 'home.application.template'
                }
            ]
        },
        {
            label: '策略管理',
            submenu: [
                {
                    label: '策略组',
                    state: 'home.strategy.strategyGroup'
                },
                /*
                 {
                 label: '策略项',
                 state: 'home.strategy.strategyItem'
                 },
                 */
                {
                    label: '策略',
                    state: 'home.strategy.strategy'
                },
                {
                    label: '惩罚',
                    state: 'home.strategy.punishment'
                }
            ]
        },
        {
            label: '操作记录',
            submenu: [
                {
                    label: '命令发送记录',
                    state: 'home.record.command'
                },
                {
                    label: '消息发送记录',
                    state: 'home.record.message'
                }
            ]
        }
    ]);