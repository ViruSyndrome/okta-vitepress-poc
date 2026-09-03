import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Okta Unified Docs (PoC)",
  description: "Unifying Help & Developer Docs in VitePress",
  base: '/okta-vitepress-poc/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Developer Docs', link: '/guides/quickstart' },
      { text: 'Help Center', link: '/help/user-management' }
    ],
    sidebar: [
      {
        text: 'Developer Docs (ex-VuePress)',
        items: [
          { text: 'Auth Quickstart', link: '/guides/quickstart' }
        ]
      },
      {
        text: 'Help Center (ex-DITA-OT)',
        items: [
          { text: 'User Management', link: '/help/user-management' }
        ]
      }
    ]
  }
})
