# Quickstart Guide

This page demonstrates how Developer Documentation renders inside the VitePress framework, including native syntax highlighting and dark mode out-of-the-box.

## Automation & Tooling
To migrate thousands of legacy Markdown pages, the engineering team would utilize automated conversion scripts. A sample node script for frontmatter conversion is included in this repository at `/scripts/migrate-frontmatter.js`.

## Example Code Snippet

```javascript
// Example Authentication logic
import { AuthClient } from '@acme-corp/auth-js';

const client = new AuthClient({
  issuer: 'https://auth.acmecorp.com/oauth2/default',
  clientId: '{clientId}',
  redirectUri: window.location.origin + '/login/callback'
});
```
