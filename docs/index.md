---
layout: home

hero:
  name: "Okta Unified Docs"
  text: "VitePress Architecture PoC"
  tagline: "Unifying DITA-OT (Help) and VuePress (Developer) into a single, blazing-fast SSG."
  actions:
    - theme: brand
      text: View Developer Docs
      link: /guides/quickstart
    - theme: alt
      text: View Help Center
      link: /help/user-management
---

## The Unification Strategy
This Proof of Concept demonstrates the long-term architectural vision for Okta's Documentation Tools.
* **Kill the Silos:** Instead of maintaining two entirely separate toolchains (DITA-OT for help.okta.com and VuePress for developer.okta.com), this PoC unifies both into a single Markdown-based architecture.
* **Blazing Fast Builds:** Powered by Vite, pre-rendered HTML is generated significantly faster than Webpack-based SSGs or XML pipelines.
* **Developer & Writer Velocity:** Engineers can maintain one modern tech stack, while writers gain the velocity of Markdown over complex XML authoring.
