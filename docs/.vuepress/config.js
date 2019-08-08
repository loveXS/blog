module.exports = {
  base: "/loveXS.github.io/",
  title: "超界",
  description: "一个神奇的地方",
  head: [
    [
      [
        "link",
        {
          // 增加一个自定义的 favicon(网页标签的图标)
          rel: "icon",
          type: "image/x-icon",
          href: "./favicon.ico"
        }
      ],
      ["link", { rel: "apple-touch-icon", href: "./favicon.ico" }]
    ]
  ],
  dest: "./docs/.vuepress/dist",
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: "https://github.com/loveXS",
    // 自定义仓库链接文字。
    repoLabel: "GitHub",
    nav: [
      { text: "Home", link: "/" },
      { text: "我的博客", link: "/blog/javaScriptone/" },
      {
        text: "Space",
        link: "/space/poetryAndDistance"
      }
    ],
    sidebar: {
      "/blog/": ["/blog/vuepressBlog", "/blog/javaScriptone"],
      "/space/": ["/space/happy", "/space/poetryAndDistance"]
    },
    sidebarDepth: 3,
    lastUpdated: "Last Updated"
  }
};
