module.exports = {
    title: '晋沐南风',
    description: '晋沐南风支教官网——山西学子回乡筑梦',
    head: [
        ['link', { rel: 'icon', href: '/img/logo/logo-without-name.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['script', { src: '/js/jump.js' }]
    ],
    themeConfig: {
        nav: [
            { text: '支教详情', link: '/details/summary' },
            { text: '课程设置', link: '/courses/' },
            { text: '活动掠影', link: '/glimpses/' }
        ],
        sidebar: [
            {
                title: '支教详情',
                path: '/details/summary',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/details/summary',
                    '/details/team',
                    '/details/commonweal',
                    '/details/entrepreneurship',
                    '/details/practicality'
                ]
            },
            {
                title: '课程设置',
                path: '/courses/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/courses/biology',
                    '/courses/computer',
                    '/courses/debate',
                    '/courses/earth',
                    '/courses/economics',
                    '/courses/game',
                    '/courses/korean',
                    '/courses/math',
                    '/courses/physics',
                    '/courses/read-and-write',
                    '/courses/russia',
                    '/courses/science-fiction'
                ]
            },
            {
                title: '活动掠影',
                path: '/glimpses/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                ]
            }
        ],
        lastUpdated: '编辑时间',
    },
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/medium-zoom': {},
        '@vuepress/nprogress': {},
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: '发现支教新动态～',
                buttonText: '刷新一下',
            }
        }
    }
};
