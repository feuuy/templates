# Content Site Template

A content-focused website template using Next.js and Payload 3.0 CMS.

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4
- **CMS**: Payload 3.0 (PostgreSQL)
- **UI**: shadcn/ui, Radix UI, Lucide icons

## Getting Started

Use `create-feuy-app` to scaffold a new project with this template:

```bash
npx create-feuy-app@latest
```

Select **Content site** when prompted.

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

3. Add your database connection string:

```env
DATABASE_URI=postgresql://user:password@localhost:5432/mydb
```

4. Start the development server:

```bash
pnpm run dev
```

Visit:
- **Frontend**: http://localhost:3000
- **Admin UI**: http://localhost:3000/admin

## Project Structure

```
├── app/                    # Next.js App Router
├── components/             # UI components
│   ├── ui/               # shadcn/ui components
│   └── tutorial/        # Tutorial components
├── emails/               # Email templates (React Email)
├── payload/              # Payload configuration
│   ├── collections/      # Collection definitions
│   └── globals/         # Global configurations
```

## License

[ISC](https://github.com/feuuy/templates/blob/main/LICENSE)