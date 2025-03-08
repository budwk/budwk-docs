module.exports = {
    title: 'BudWk V8',
    description: '微服务分布式+API网关+前后端分离开发框架',
    base: '/',
    head: [
        ['keywords', {content: 'Java,BudWk,微服务,分布式,开源,Nutz,NutzWk,框架'}],
        ['description', {content: '开源免费的微服务分布式Java开发框架，众多项目案例，开发文档完善'}]
    ],
    evergreen: true,
    editLinkText: '编辑此页面',
    port: 8081,
    ga: 'UA-71886989-13',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'BudWk V8',
            description: '微服务分布式+API网关+前后端分离开发框架'
        },
        '/en/': {
            lang: 'en-US',
            title: 'BudWk V8',
            description: 'Microservice Distributed + API Gateway + Front-end and Back-end Separation Development Framework'
        }
    },
    themeConfig: {
        docsDir: 'docs',
        editLinks: false,
        editLinkText: '编辑此页面！',
        locales: {
            '/': {
                selectText: '语言',
                label: '简体中文',
                nav: [
                    {text: '开发指南', link: '/guide/base/preface'},
                    {text: 'V8演示', link: 'https://demo.budwk.com'},
                    {text: 'IOT平台', link: 'https://budiot.com'},
                    {
                        text: '生态系统',
                        items: [
                            {
                                text: "项目", items: [
                                    {text: '代码生成器(IDEA插件)', link: 'https://github.com/budwk/budwk-codegenerator'},
                                    {text: 'OpenAPI V3.0查看器', link: 'https://github.com/budwk/budwk-openapi-viewer'},
                                    {text: 'Vue3表单设计器', link: 'https://github.com/budwk/budwk-vform3'}
                                ]
                            },                    {
                                text: "其他源码", items: [
                                    {text: 'NutzWk(V1-V5)', link: 'https://github.com/Wizzercn/NutzWk'},
                                    {text: 'MqttWk', link: 'https://github.com/Wizzercn/MqttWk'},
                                    {text: 'Swagger V3 Viewer', link: 'https://github.com/budwk/budwk-openapi-viewer'},
                                    {text: 'Demo集', link: 'https://github.com/Wizzercn/Demo'}
                                ]
                            },
                            {
                                text: '帮助', items: [
                                    {text: 'Nutz基础', link: 'https://nutzam.com/core/nutz_preface.html'},
                                    {text: '问答社区', link: 'https://nutz.cn'},
                                    {
                                        text: 'QQ群(24457628)',
                                        link: 'https://qm.qq.com/cgi-bin/qm/qr?k=XSPZU4N5BCqZMwtEtNRlkykQCOGgiA7B&jump_from=webapi'
                                    }]
                            },

                        ]
                    },
                    {text: '捐赠', link: 'https://budwk.com/donation'},
                    {text: 'Gitee', link: 'https://gitee.com/budwk/budwk'},
                    {text: 'Github', link: 'https://github.com/budwk/budwk'}                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: '准备工作',
                            collapsable: false,
                            children: [
                                '/guide/base/preface',
                                '/guide/base/environment'
                            ]
                        },
                        {
                            title: '快速开始',
                            collapsable: false,
                            children: [
                                '/guide/quickstart/quick',
                                '/guide/quickstart/clone',
                                '/guide/quickstart/init',
                                '/guide/quickstart/install',
                                '/guide/quickstart/idea',
                                '/guide/quickstart/start'
                            ]
                        },
                        {
                            title: '基础',
                            collapsable: false,
                            children: [
                                '/guide/feature/directory',
                                '/guide/feature/permission',
                                '/guide/feature/log',
                                '/guide/feature/msg',
                                '/guide/feature/task',
                                '/guide/feature/sms',
                                '/guide/feature/email',
                                '/guide/feature/file',
                                '/guide/feature/openapi',
                                '/guide/feature/validation'
                            ]
                        },
                        {
                            title: '进阶',
                            collapsable: false,
                            children: [
                                '/guide/action/cache',
                                '/guide/action/snowflake',
                                '/guide/action/deploy',
                                '/guide/action/starter'
                            ]
                        },
                        {
                            title: '其他',
                            collapsable: false,
                            children: [
                                '/guide/other/faq',
                            ]
                        }
                    ]
                }
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    {text: 'Developer Guide', link: '/en/guide/base/preface'},
                    {text: 'V8 Demo', link: 'https://demo.budwk.com'},
                    {text: 'IOT Platform', link: 'https://budiot.com'},
                    {
                        text: 'Ecosystem',
                        items: [
                            {
                                text: "Projects", items: [
                                    {text: 'Code Generator (IDEA Plugin)', link: 'https://github.com/budwk/budwk-codegenerator'},
                                    {text: 'OpenAPI V3.0 Viewer', link: 'https://github.com/budwk/budwk-openapi-viewer'},
                                    {text: 'Vue3 Form Designer', link: 'https://github.com/budwk/budwk-vform3'}
                                ]
                            },                    {
                                text: "Other Source Code", items: [
                                    {text: 'NutzWk(V1-V5)', link: 'https://github.com/Wizzercn/NutzWk'},
                                    {text: 'MqttWk', link: 'https://github.com/Wizzercn/MqttWk'},
                                    {text: 'Swagger V3 Viewer', link: 'https://github.com/budwk/budwk-openapi-viewer'},
                                    {text: 'Demo Collection', link: 'https://github.com/Wizzercn/Demo'}
                                ]
                            },
                            {
                                text: 'Help', items: [
                                    {text: 'Nutz Basics', link: 'https://nutzam.com/core/nutz_preface.html'},
                                    {text: 'Q&A Community', link: 'https://nutz.cn'},
                                    {
                                        text: 'QQ Group(24457628)',
                                        link: 'https://qm.qq.com/cgi-bin/qm/qr?k=XSPZU4N5BCqZMwtEtNRlkykQCOGgiA7B&jump_from=webapi'
                                    }]
                            },

                        ]
                    },
                    {text: 'Donation', link: 'https://budwk.com/donation'},
                    {text: 'Gitee', link: 'https://gitee.com/budwk/budwk'},
                    {text: 'Github', link: 'https://github.com/budwk/budwk'}  
                ],
                sidebar: {
                    '/en/guide/': [
                        {
                            title: 'Preparation',
                            collapsable: false,
                            children: [
                                '/en/guide/base/preface',
                                '/en/guide/base/environment'
                            ]
                        },
                        {
                            title: 'Quick Start',
                            collapsable: false,
                            children: [
                                '/en/guide/quickstart/quick',
                                '/en/guide/quickstart/clone',
                                '/en/guide/quickstart/init',
                                '/en/guide/quickstart/install',
                                '/en/guide/quickstart/idea',
                                '/en/guide/quickstart/start'
                            ]
                        },
                        {
                            title: 'Basics',
                            collapsable: false,
                            children: [
                                '/en/guide/feature/directory',
                                '/en/guide/feature/permission',
                                '/en/guide/feature/log',
                                '/en/guide/feature/msg',
                                '/en/guide/feature/task',
                                '/en/guide/feature/sms',
                                '/en/guide/feature/email',
                                '/en/guide/feature/file',
                                '/en/guide/feature/openapi',
                                '/en/guide/feature/validation'
                            ]
                        },
                        {
                            title: 'Advanced',
                            collapsable: false,
                            children: [
                                '/en/guide/action/cache',
                                '/en/guide/action/snowflake',
                                '/en/guide/action/deploy',
                                '/en/guide/action/starter'
                            ]
                        },
                        {
                            title: 'Others',
                            collapsable: false,
                            children: [
                                '/en/guide/other/faq',
                            ]
                        }
                    ]
                }
            }
        }
    }
}