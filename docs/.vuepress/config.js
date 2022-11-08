module.exports = {
    title: 'BudWk V7',
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
    themeConfig: {
        repo: 'budwk/budwk',
        docsDir: 'docs',
        editLinks: false,
        editLinkText: '编辑此页面！',
        nav: [
            {text: '开发指南', link: '/guide/base/preface'},
            {text: 'V5演示', link: 'https://nutzwk.wizzer.cn'},
            {text: 'V7演示', link: 'https://demo.budwk.com'},
            {
                text: '生态系统',
                items: [
                    {
                        text: "项目", items: [
                            {text: '代码生成器(IDEA插件)', link: 'https://github.com/budwk/budwk-codegenerator'},
                            {text: 'OpenAPI V3.0查看器', link: 'https://github.com/budwk/budwk-openapi-viewer'}
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
            {text: 'Gitee', link: 'https://gitee.com/budwk/budwk'}
        ],
        sidebar: {
            '/guide': [
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
                        '/guide/feature/openapi'
                    ]
                },
                {
                    title: '进阶',
                    collapsable: false,
                    children: [
                        '/guide/action/cache',
                        '/guide/action/validator',
                        '/guide/action/snowflake',
                        '/guide/action/develop',
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

    }
}