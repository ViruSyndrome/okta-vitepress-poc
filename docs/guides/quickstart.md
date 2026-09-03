# Quickstart Guide

This page demonstrates how Developer Documentation renders inside the VitePress framework, including native syntax highlighting and dark mode out-of-the-box.

## Automation & Tooling
To migrate thousands of legacy Markdown pages, the engineering team would utilize automated conversion scripts. A sample node script for frontmatter conversion is included in this repository at `/scripts/migrate-frontmatter.js`.

## Image Bloat & CDN Strategy
Enterprise repositories often suffer from massive `git clone` times due to thousands of high-resolution images stored directly in the repository. 

In a modernized DocOps pipeline, images are decoupled from the Git repository and served via a global CDN (e.g., AWS CloudFront). 
```markdown
<!-- Instead of a local relative path that bloats the repo -->
![Dashboard Architecture](/assets/img/heavy-diagram-v2.png)

<!-- We enforce CDN-based asset fetching -->
![Dashboard Architecture](https://cdn.acmecorp.com/docs/assets/heavy-diagram-v2.png)
```

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
