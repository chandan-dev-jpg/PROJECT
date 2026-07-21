# Code Vault

A premium, LeetCode/HackerRank/Codeforces-inspired coding platform. Built with React 19, Tailwind CSS, React Router, Framer Motion, Recharts, Lucide Icons, and Monaco Editor.

**Tagline:** Practice. Compete. Get Hired.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## What's inside

- **Auth**: `/login`, `/register` — client-side demo auth (no backend). Logging in or registering with any values will sign you in.
- **App shell**: collapsible sidebar + topbar with search, dark mode toggle, notifications, and user menu — visible on every page after login.
- **Dashboard** (`/dashboard`): welcome banner, stat cards, daily challenge, progress chart, recent submissions, upcoming contests, mini leaderboard, badges.
- **Problems** (`/problems`): searchable, filterable, paginated problems table.
- **Problem Detail** (`/problems/:id`): split-pane problem statement + Monaco code editor with language switcher, run/submit actions, test case tabs, console output, and an AI hint modal.
- **Contests** (`/contests`): live contest with countdown timer, upcoming contests, live rankings.
- **Leaderboard** (`/leaderboard`): podium for top 3 + full ranking table with weekly/monthly/all-time toggle.
- **Profile** (`/profile`): profile header with progress ring, activity calendar heatmap, achievements grid, recent submissions.
- **Admin Panel** (`/admin`): only visible in the sidebar when the signed-in role is Admin (choose "Admin" on the Register page). Analytics, manage users/problems/contests, live submissions feed.

## Design system

- Primary color: `#2563EB` (brand-500), with a violet/emerald/amber/rose accent set for status and badges.
- Typography: Space Grotesk (display), Inter (body), JetBrains Mono (code/stats).
- Glassmorphism cards (`glass-card`), soft shadows, rounded-2xl corners, subtle grid background, dark mode via Tailwind's `class` strategy.
- Toasts via `react-hot-toast`; all major actions (login, register, submit code) trigger a toast.

## Project structure

```
src/
  components/
    ui/        # Button, Card, Badge, Input, Modal, Avatar, ProgressRing, Skeleton
    layout/    # Sidebar, Topbar, AppShell, AuthIllustration
    dashboard/ contest/ problems/ problem/ leaderboard/ profile/ admin/
  context/     # ThemeContext, AuthContext
  data/        # mockData.js — swap with real API calls
  pages/       # one file per route
  App.jsx      # router setup
```

## Wiring up a real backend

Every page reads from `src/data/mockData.js`. Replace those imports with API calls (e.g. React Query or fetch) — the component props and shapes already match what a REST API for this domain would typically return, so most components won't need structural changes.
