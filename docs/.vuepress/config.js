module.exports = {
    title: '临战',
    description: '临战的笔记',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Group1', items: [{ text: 'Chinese', link: '/language/chinese/' }] },
                    { text: 'Group2', items: [{ text: 'Japanese', link: '/language/japanese/' }] },
                ],
            },
        ],
    },
}
