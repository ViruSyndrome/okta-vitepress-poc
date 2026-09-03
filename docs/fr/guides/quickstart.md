# Guide de Démarrage

Cette page démontre comment la documentation développeur est rendue dans le framework VitePress.

## Automatisation
Un script node d'exemple pour la conversion du frontmatter est inclus dans ce dépôt.

## Stratégie CDN
Dans un pipeline DocOps modernisé, les images sont découplées du dépôt Git et servies via un CDN global (ex: AWS CloudFront).

```javascript
// Logique d'authentification
import { AuthClient } from '@acme-corp/auth-js';

const client = new AuthClient({
  issuer: 'https://auth.acmecorp.com/oauth2/default',
  clientId: '{clientId}',
  redirectUri: window.location.origin + '/login/callback'
});
```
