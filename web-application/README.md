# Web Application Template

A server-authoritative, stateful web application template using Next.js and Supabase.

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS 3
- **Database & Auth**: Supabase
- **UI**: shadcn/ui, Radix UI, Lucide icons

## Getting Started

Use `create-feuy-app` to scaffold a new project with this template:

```bash
npx create-feuy-app@latest
```

Select **Web application** when prompted.

## Manual Setup

If you already have this template:

1. Install dependencies:

```bash
pnpm install
```

2. Copy the example environment file:

```bash
cp .env.example .env.local
```

3. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=[INSERT SUPABASE PUBLISHABLE KEY]
```

Find these in your [Supabase project's API settings](https://supabase.com/dashboard/project/_?showConnect=true).

4. Start the development server:

```bash
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   └── protected/        # Protected routes
├── components/           # UI components
│   ├── ui/              # shadcn/ui components
│   └── tutorial/       # Tutorial components
├── lib/                 # Utilities
│   └── supabase/        # Supabase client/server
└── emails/              # Transactional emails
```

## License

[ISC](https://github.com/feuuy/templates/blob/main/LICENSE)