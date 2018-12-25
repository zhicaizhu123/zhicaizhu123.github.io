module.exports = {
  title: 'PeterCoder',
  description: '积累学习的一点一滴',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    // add jquert and fancybox
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '博客',
        link: '/index/'
      },
      { text: 'Github', link: 'https://github.com/zhicaizhu123/' },
    ],
    sidebar: [],
    sidebarDepth: 2,
  },
}