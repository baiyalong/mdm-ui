/**
 * Created by yalong on 2015/3/20.
 */
'use strict';
angular.module('mdmUi')

    .constant('MENU', [
        {
            label: '用户管理',
            //state: 'home.user',
            icon: '/assets/images/icons/1.svg',
            submenu: [
                {
                    label: '用户',
                    state: 'home.user.user',
                    submenu: true
                },
                {
                    label: '用户组',
                    state: 'home.user.userGroup',
                    submenu: true

                },
            ]
        },
        {
            label: '终端管理',
            state: 'home.terminal.terminal',
            icon: '/assets/images/icons/6.svg'
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
            state: 'home.command',
            icon: '/assets/images/icons/3.svg'
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
            label: '消息管理',
            state: 'home.command',
            icon: '/assets/images/icons/11.png'
        },
        {
            label: '应用管理',
            icon: '/assets/images/icons/2.svg',
            submenu: [
                {
                    label: '应用分类',
                    state: 'home.application.classify',
                    submenu: true

                },
                {
                    label: '我的应用',
                    state: 'home.application.application',
                    submenu: true

                },
                /*
                 {
                 label: '应用模版',
                 state: 'home.application.template',
                 submenu: true

                 }
                 */
            ]
        },
        {
            label: '策略管理',
            state: 'home.strategy.strategyGroup',
            icon: '/assets/images/icons/4.svg'
            /*
             submenu: [
             {
             label: '策略组',
             state: 'home.strategy.strategyGroup',
             submenu: true

             },

             {
             label: '策略项',
             state: 'home.strategy.strategyItem'
             },

             {
             label: '策略列表',
             state: 'home.strategy.strategy',
             submenu: true

             },
             {
             label: '惩罚列表',
             state: 'home.strategy.punishment',
             submenu: true

             }

             ]*/
        },
        {
            label: '操作记录',
            icon: '/assets/images/icons/5.svg',
            submenu: [
                {
                    label: '命令发送记录',
                    state: 'home.record.command',
                    submenu: true

                },
                {
                    label: '消息发送记录',
                    state: 'home.record.message',
                    submenu: true

                }
            ]
        }
    ]);