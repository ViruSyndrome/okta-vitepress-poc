# Quickstart Guide

This is a sample markdown page pulled from the Okta Developer documentation structure.

## Overview
In a real migration, we would use a conversion script to adapt the existing VuePress frontmatter to VitePress.

```javascript
// Example Okta Auth script
import { OktaAuth } from '@okta/okta-auth-js';

const authClient = new OktaAuth({
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{clientId}',
  redirectUri: window.location.origin + '/login/callback'
});
```
