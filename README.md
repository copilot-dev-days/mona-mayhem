# Mona Mayhem

⚔️ **GitHub Contribution Battle Arena** ⚔️

A retro arcade-themed website built with Astro that allows comparing the GitHub contribution graphs of two GitHub users.

![Mona Mayhem Screenshot](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)

## Features

- 🎮 Retro arcade-style UI with glowing neon effects
- 📊 Side-by-side contribution graph comparison
- ⚡ Real-time data fetching from GitHub
- 🎨 Color-coded contribution intensity visualization
- 📱 Responsive design for mobile and desktop

## How to Use

1. Enter two GitHub usernames in the input fields
2. Click the "⚡ BATTLE! ⚡" button
3. View the contribution graphs side by side to compare activity

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:4321/`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Running the Production Server

```bash
npm run preview
```

## Technology Stack

- **Framework**: [Astro](https://astro.build/) v5
- **Runtime**: Node.js with [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) adapter
- **Font**: Press Start 2P (retro gaming font)
- **API**: GitHub's contribution graph API (`https://github.com/{username}.contribs`)

## API

The application uses GitHub's public contribution API endpoint:
- Endpoint: `https://github.com/{username}.contribs`
- No authentication required
- Returns JSON data with contribution counts and colors

## Architecture

The application uses a server-side proxy to fetch GitHub data:
- Frontend: Static page with JavaScript for interactivity
- Backend: Astro API route (`/api/contributions/[username]`) that proxies requests to GitHub
- This architecture bypasses CORS restrictions and allows caching

## Screenshots

### Comparison View
![Comparison Screenshot](https://github.com/user-attachments/assets/0be40d4d-7f98-49bb-bdab-98a9254eeed6)

## License

MIT
