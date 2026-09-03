import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Okta Unified Docs (PoC)",
  description: "Unifying Help & Developer Docs in VitePress",
  base: '/okta-vitepress-poc/',
  
  // Localization Routing Strategy
  locales: {
    root: { label: 'English', lang: 'en' },
    fr: {
      label: 'Français', lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Docs Développeur', link: '/fr/guides/quickstart' },
          { text: 'Centre d\'Aide', link: '/fr/help/user-management' }
        ],
        sidebar: [
          {
            text: 'Docs Développeur (ex-VuePress)',
            items: [{ text: 'Démarrage Auth', link: '/fr/guides/quickstart' }]
          },
          {
            text: 'Centre d\'Aide (ex-DITA-OT)',
            items: [{ text: 'Gestion des Utilisateurs', link: '/fr/help/user-management' }]
          }
        ]
      }
    },
    de: {
      label: 'Deutsch', lang: 'de',
      themeConfig: {
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Entwickler-Docs', link: '/de/guides/quickstart' },
          { text: 'Hilfe-Center', link: '/de/help/user-management' }
        ],
        sidebar: [
          {
            text: 'Entwickler-Docs (ex-VuePress)',
            items: [{ text: 'Auth Schnellstart', link: '/de/guides/quickstart' }]
          },
          {
            text: 'Hilfe-Center (ex-DITA-OT)',
            items: [{ text: 'Benutzerverwaltung', link: '/de/help/user-management' }]
          }
        ]
      }
    }
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Developer Docs', link: '/guides/quickstart' },
      { text: 'Help Center', link: '/help/user-management' }
    ],
    sidebar: [
      {
        text: 'Developer Docs (ex-VuePress)',
        items: [{ text: 'Auth Quickstart', link: '/guides/quickstart' }]
      },
      {
        text: 'Help Center (ex-DITA-OT)',
        items: [{ text: 'User Management', link: '/help/user-management' }]
      }
    ]
  }
})
