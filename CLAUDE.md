# Task-Management — Project Instructions

Root workspace rules in the parent CLAUDE.md also apply. This file adds project-specific context only.

## Overview
Task management web app with authentication, task list, filters, and a dashboard.

## Stack
React 19, TypeScript ~5.8, Vite 7, Tailwind CSS 4, React Router 7, TanStack Query 5, Firebase 11, shadcn/ui (Radix + class-variance-authority, `components.json`), date-fns, sonner, next-themes. ESLint 9. npm.

## Commands
- `npm run dev`, `npm run build` (`tsc -b` then `vite build`, doubles as type check), `npm run lint`, `npm run preview`
- No test runner. Verify with build and lint, and say so when reporting.

## Structure
- `src/firebase.ts`: Firebase initialisation
- `src/hooks/useAuth.ts`: authentication state
- `src/components/`: task UI (TaskManager, TaskList, TaskItem, TaskForm, TaskFormDialog, TaskFilters), `auth/`, `dashboard/`, `ui/` (shadcn)
- `src/pages/Index.tsx`, `src/types/task.ts`, `src/lib/utils.ts`

## Conventions
- Add UI primitives through the shadcn setup in `src/components/ui/`; reuse before creating new ones.
- Follow existing patterns; do not add dependencies without approval.

## Deployment
No deployment config in the repo. Deploy only when the owner explicitly asks; that request counts as approval.

## Repository and secrets
Own Git repo, remote `origin` on GitHub. Uses Firebase: never read, print, or commit Firebase credentials or `.env` files.
