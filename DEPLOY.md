# Deploying BitCraft Studio to Cloudflare Workers

This project is configured for one-command deployment to Cloudflare Workers.

---

## Prerequisites

1. **Cloudflare account** — Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI** — Already installed as a dev dependency (`bun install` handles this)
3. **Authentication** — Log in to Cloudflare via Wrangler (see below)

---

## Quick Start (One Command)

```bash
# Deploy to default environment
bun run deploy
```

That's it! The command builds the app and deploys to Cloudflare Workers.

---

## Authentication

Before your first deploy, authenticate with Cloudflare:

```bash
npx wrangler login
```

Or set an API token as an environment variable:

```bash
export CLOUDFLARE_API_TOKEN=your_api_token_here
```

---

## Deployment Options

### Option 1: npm Script (Recommended)

```bash
# Default environment
bun run deploy

# Production environment
bun run deploy:prod

# Preview environment
bun run deploy:preview
```

### Option 2: Shell Script

```bash
# Make executable (one time)
chmod +x scripts/deploy.sh

# Deploy
./scripts/deploy.sh

# With environment
./scripts/deploy.sh --prod
./scripts/deploy.sh --preview
```

### Option 3: Manual Steps

```bash
# 1. Build
bun run build

# 2. Deploy
npx wrangler deploy
```

---

## Configuration

### Worker Name

Edit `wrangler.jsonc` to change the Worker name:

```jsonc
{
  "name": "bitcraft-studio"  // Change this
}
```

### Environments

Add environment-specific configs in `wrangler.jsonc`:

```jsonc
{
  "env": {
    "production": {
      "routes": [{"pattern": "bitcraft.studio/*", "zone_name": "bitcraft.studio"}]
    },
    "preview": {
      "name": "bitcraft-studio-preview"
    }
  }
}
```

### Custom Domain

After first deploy, add a custom domain in the Cloudflare dashboard:

**Workers & Pages → Your Worker → Triggers → Custom Domains**

---

## Environment Variables & Secrets

### Public Variables (in wrangler.jsonc)

```jsonc
{
  "vars": {
    "MY_PUBLIC_KEY": "value"
  }
}
```

### Secrets (via CLI)

```bash
npx wrangler secret put MY_SECRET_NAME
```

---

## Troubleshooting

### "Not authenticated"

Run `npx wrangler login` or set `CLOUDFLARE_API_TOKEN`.

### "Build fails"

Make sure all dependencies are installed:

```bash
bun install
```

### "Worker not found"

The Worker name in `wrangler.jsonc` must be unique across your Cloudflare account.

### Large bundle size

The Worker bundle includes all server dependencies. This is normal for TanStack Start apps. Cloudflare Workers supports up to **~1 MB** (gzip) for the free plan and **~5 MB** for paid plans.

---

## What Gets Deployed?

| Asset | Location | Purpose |
|-------|----------|---------|
| Server bundle | `dist/server/` | SSR/ISR logic, API routes, server functions |
| Client assets | `dist/client/` | Static JS, CSS, images |

The server bundle runs on Cloudflare's edge network (300+ cities worldwide) for ultra-low latency.

---

## Useful Commands

```bash
# Preview locally before deploying
bun run preview

# View Worker logs
npx wrangler tail

# View Worker info
npx wrangler info

# Delete Worker
npx wrangler delete
```

---

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [TanStack Start Docs](https://tanstack.com/start/latest/docs/framework/react/overview)
