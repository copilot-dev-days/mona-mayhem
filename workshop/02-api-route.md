# Part 2: Build the API Route

## 🎯 Goal

Create a server-side API route that fetches GitHub contribution data for a given username, acting as a proxy to bypass CORS restrictions.

## Why a Proxy?

GitHub's contribution endpoint (`https://github.com/{username}.contribs`) doesn't support CORS (Cross-Origin Resource Sharing). This means the browser can't directly call it from our frontend JavaScript. The solution: create a server-side API route that fetches the data on behalf of the browser.

```
Browser → Our API Route → GitHub API → Our API Route → Browser
```

## Step 1: Create the API Route

Ask Copilot to create the API route:

> **💬 Copilot Prompt:**
> 
> Create an Astro API route at `src/pages/api/contributions/[username].ts` that:
> 1. Takes a `username` parameter from the URL
> 2. Validates that the username is provided (return 400 if missing)
> 3. Fetches contribution data from `https://github.com/${username}.contribs`
> 4. Returns the JSON data with proper Content-Type headers
> 5. Handles errors: return 404 if user not found, 500 for server errors
> 6. Adds Cache-Control header for 1-hour caching
> 7. Disables prerendering with `export const prerender = false`
> 
> Use Astro's APIRoute type for the handler.

## Step 2: Understand the Code

After Copilot creates the file, review it. The key concepts:

### Dynamic Route Parameters
The `[username]` in the filename creates a dynamic route. When someone visits `/api/contributions/octocat`, Astro provides `username = "octocat"` via `params`.

### The APIRoute Type
Astro provides the `APIRoute` type for server endpoints. The `GET` export handles HTTP GET requests.

### Prerender = false
This tells Astro this route must run on the server (not pre-built at compile time).

## Step 3: Test the API Route

With the dev server running (`npm run dev`), test the API:

```bash
curl http://localhost:4321/api/contributions/octocat
```

You should see JSON data with contribution information including:
- `total_contributions` — total number of contributions
- `weeks` — array of weekly contribution data
- `colors_full` — color palette for contribution intensity levels

Try with an invalid username to verify error handling:

```bash
curl http://localhost:4321/api/contributions/this-user-does-not-exist-12345
```

## ✅ Checkpoint

- [ ] API route created at `src/pages/api/contributions/[username].ts`
- [ ] Returns contribution data for valid usernames
- [ ] Returns appropriate error for invalid usernames
- [ ] Includes `Cache-Control` header
- [ ] Uses `export const prerender = false`

> [!TIP]
> The `https://github.com/{username}.contribs` endpoint is a public, undocumented GitHub API that requires no authentication. It returns a JSON object with contribution data including weekly breakdowns and color schemes.

> [!NOTE]
> The proxy pattern we're using here is common in web development. It's used whenever you need to call an API that doesn't support CORS, add authentication headers the client shouldn't have, or implement caching.

👉 **[Continue to Part 3: Battle Page →](03-battle-page.md)**
