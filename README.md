# create-feuy-app

A CLI to scaffold modern Next.js + Payload CMS projects.

[![npm version](https://img.shields.io/npm/v/create-feuy-app)](https://www.npmjs.com/package/create-feuy-app)
[![License](https://img.shields.io/npm/l/create-feuy-app)](https://github.com/feuuy/templates/blob/main/LICENSE)

## Quick Start

```bash
npx create-feuy-app@latest
```

## Installation

```bash
# npm
npm create feuy-app@latest

# pnpm
pnpm create feuy-app

# bun
bunx create-feuy-app
```

## Usage

The CLI will guide you through project setup:

```
? What is your project name? › my-new-site

? Which template would you like to use?
  > Content site (Blog, company website, docs — Next.js + Payload)

? Which package manager? › pnpm
  > pnpm (recommended)
  > npm
  > bun

? Install dependencies now? › Yes / No
```

After scaffolding:

```bash
cd my-new-site
cp .env.example .env.local
pnpm run dev
```

Then visit:
- **Frontend**: http://localhost:3000
- **Admin UI**: http://localhost:3000/admin

## Available Templates

| Template | Description |
|----------|-------------|
| `content-site` | Blog, company website, or docs — Next.js + Payload 3.0 CMS |
| `web-application` | Server-authoritative, stateful web application — Next.js + Supabase |

More templates coming soon.

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4
- **CMS**: Payload 3.0 (PostgreSQL)
- **UI**: shadcn/ui, Radix UI, Lucide icons

## License

[ISC](https://github.com/feuuy/templates/blob/main/LICENSE)

## Contact

- GitHub: https://github.com/feuuy/templates
- Email: github@feuuy