module.exports = {
  title: "아주작은습관의힘",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: '/blog-ah/',
  // dest: "./dist",

  themeConfig: {
    repo: 'choijinwon/blog-ah',
    docsRepo: 'choijinwon/blog-ah',
    docsDir: 'docs',
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Guide", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/choijinwon/" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

