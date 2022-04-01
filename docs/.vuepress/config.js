module.exports = {
    title: '临战',
    description: '临战的笔记',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            {
                text: '前端',
                ariaLabel: '前端 菜单',
                items: [
                    { text: 'CSS', link: '/css/' },
                    { text: 'JavaScript', link: '/javascript/' },
                    { text: 'Vue', link: '/vue/' },
                ],
            },
            // { text: 'CSS', link: '/css/' },
            // { text: 'JavaScript', link: '/javascript/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {
                        text: 'Group1',
                        items: [{ text: 'Chinese', link: '/language/chinese/' }],
                    },
                    { text: 'Group2', items: [{ text: 'Japanese', link: '/language/japanese/' }] },
                ],
            },
        ],
        sidebar: {
            // '/css/': [
            //     '技巧', '动画',
            // ], '/javascript/': [
            //     'this问题', '数据类型',
            // ],
        },
    },
    plugins: {
        "vuepress-plugin-auto-sidebar": {
            sort: {
                mode: "asc",
                readmeFirst: true,
                readmeFirstForce: false,
            },
            title: {
                mode: "titlecase",
                map: {},
            },
            sidebarDepth: 2,
            collapse: {
                open: true,
                collapseList: [],
                uncollapseList: [],
            },
            ignore: [],
            removeEmptyGroup: false,
            git: {
                trackStatus: 'all',
            },
        },
    },
}
