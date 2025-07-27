# CLAUDE.md - Guidelines for Agentic Coding Assistants

## Build & Development Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server 
- `pnpm lint` - Run linting checks

## Code Style Guidelines
- Use `@` path aliases for imports (configured in tsconfig.json)
- Use kebab-case for files/folders (e.g., `example-component.tsx`)
- All types in `/types` directory, exported in `types/index.ts`
- Prefer interfaces over type aliases
- Always tag components with `"use client"` or `"use server"` directives
- Follow TailwindCSS conventions for styling

## Component Structure
- Route-specific components in `app/route/_components/`
- Shared components in `/components/`
- UI components in `/components/ui/`
- Utility components in `/components/utilities/`
- Fetch data in server components, pass down to client components
- Use Suspense for async data fetching in server components

## Best Practices
- Don't modify shadcn components
- Use `lucide-react` for icons
- Keep environment variables in `.env.local`
- Prefix frontend env vars with `NEXT_PUBLIC_`
- Use server actions from `/actions` for data mutations
- Handle errors with proper try/catch blocks
- Always validate user input with zod schemas