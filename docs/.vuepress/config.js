module.exports = {
  title: 'PeterCoder',
  description: '积累学习的一点一滴',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '博文',
        link: '/index/'
      },
      { text: 'Github', link: 'https://github.com/zhicaizhu123/' },
    ],
    sidebar: {
      '/android/': [
        "",
        "android1",
      ],
      "/ios/": [
        "",
        "ios1",
      ],
      "/web/": [
        "",
        "web1",
      ],
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  },
}