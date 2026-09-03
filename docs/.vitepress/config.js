import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Okta Developer (PoC)",
  description: "VitePress Migration Proof of Concept",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/quickstart' }
    ],
    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Quickstart', link: '/guides/quickstart' }
        ]
      }
    ]
  }
})