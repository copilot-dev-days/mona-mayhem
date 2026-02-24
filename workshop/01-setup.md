# Part 1: Project Setup

## 🎯 Goal

Create a new Astro project configured for server-side rendering with the Node.js adapter.

## Step 1: Create the Astro Project

Open your terminal and create a new Astro project:

```bash
npm create astro@latest mona-mayhem -- --template minimal --install --git --typescript strict
```

This creates a minimal Astro project with TypeScript support.

## Step 2: Navigate to the Project

```bash
cd mona-mayhem
```

Open the project in VS Code:

```bash
code .
```

## Step 3: Add the Node.js Adapter

We need server-side rendering for our API route. Ask Copilot to help:

> **💬 Copilot Prompt:**
> 
> Add the `@astrojs/node` adapter to this Astro project. Configure it for server-side rendering in standalone mode. Update astro.config.mjs accordingly.

After Copilot makes the changes, verify your `astro.config.mjs` looks like this:

```javascript
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
    output: 'server',
    adapter: node({
        mode: 'standalone'
    })
});
```

Install the adapter if Copilot didn't already:

```bash
npx astro add node
```

## Step 4: Verify the Setup

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` — you should see the default Astro page.

## ✅ Checkpoint

- [ ] Astro project created with TypeScript
- [ ] `@astrojs/node` adapter installed and configured
- [ ] `output: 'server'` set in `astro.config.mjs`
- [ ] Dev server runs successfully at `http://localhost:4321`

> [!TIP]
> The `output: 'server'` configuration tells Astro to render pages on the server instead of at build time. This is required for our API route that proxies GitHub data.

👉 **[Continue to Part 2: API Route →](02-api-route.md)**
