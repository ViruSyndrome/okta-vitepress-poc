# Okta Documentation Architecture (PoC)

This repository contains a Proof of Concept (PoC) demonstrating a modernization strategy for Okta's documentation infrastructure, specifically evaluating a migration to VitePress.

**Live Demo:** [https://virusyndrome.github.io/okta-vitepress-poc/](https://virusyndrome.github.io/okta-vitepress-poc/)

## Purpose

The current Okta documentation ecosystem is split:
1. developer.okta.com runs on legacy VuePress 1.x.
2. help.okta.com utilizes a DITA-OT pipeline.

This PoC evaluates unifying both ecosystems into a single **Docs-as-Code** architecture powered by VitePress. 

## Key Evaluations

* **CI/CD Build Velocity:** VitePress pre-renders HTML significantly faster than Webpack-based SSGs. This repository compiles in **~2.30 seconds** locally, demonstrating a clear path to resolving CI bottlenecking.
* **Content Migration Automation:** A sample Node.js script (/scripts/migrate-frontmatter.js) is included to demonstrate how legacy VuePress frontmatter can be automatically parsed and mapped to the new VitePress schema without manual data entry.
* **Unified Toolchain:** By migrating DITA-OT content into MDX/Markdown, engineering teams can maintain a single, modern tech stack (Vue/Vite) while lowering the authoring barrier-to-entry for open-source contributors and technical writers.

## Running Locally

To test the build times locally:

\\\ash
# Install dependencies
npm install

# Start the instant dev server
npm run docs:dev

# Run the production build benchmark
npm run docs:build
\\\

---
*Disclaimer: This is an independent architectural proof-of-concept created by Vinod J Isaac for interview demonstration purposes. It is not affiliated with, maintained by, or endorsed by Okta, Inc.*
