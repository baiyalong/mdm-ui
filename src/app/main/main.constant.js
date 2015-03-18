/**
 * Created by yalong on 2015/3/20.
 */

angular.module('mdmUi')

    .constant('MENU', [
        {
            label: '用户管理',
            link: '',
            submenu: [
                {
                    label: '用户组',
                    link: ''
                },
                {
                    label: '用户',
                    link: ''
                }
            ]
        },
        {
            label: '终端管理',
            link: '',
            submenu: [
                {
                    label: '终端信息',
                    link: ''
                },
                {
                    label: '终端应用',
                    link: ''
                }
            ]
        },
        {
            label: '命令管理',
            link: '',
            submenu: [
                {
                    label: '命令发送',
                    link: ''
                },
                {
                    label: '消息发送',
                    link: ''
                },
                {
                    label: '命令列表',
                    link: ''
                }
            ]
        },
        {
            label: '应用管理',
            link: '',
            submenu: [
                {
                    label: '应用目录',
                    link: ''
                },
                {
                    label: '应用列表',
                    link: ''
                },
                {
                    label: '应用模版',
                    link: ''
                }

            ]
        },
        {
            label: '策略管理',
            link: '',
            submenu: [
                {
                    label: '策略组',
                    link: ''
                },
                {
                    label: '策略列表',
                    link: ''
                },
                {
                    label: '惩罚列表',
                    link: ''
                }
            ]
        },
        {
            label: '操作记录',
            link: '',
            submenu: [
                {
                    label: '命令发送记录',
                    link: ''
                },
                {
                    label: '消息发送记录',
                    link: ''
                }
            ]
        }
    ]);