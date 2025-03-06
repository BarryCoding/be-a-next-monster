# Be A Next Monster

- HuXn GitHub: https://github.com/huxn-webdev
- Original Repo: https://github.com/HuXn-WebDev/Next.js-15-Masterclass

## Intro

- Next.js
- Prisma
- Drizzle
- Auth.js
- Clerk
- Motion
- GraphQL
- Stripe
- tRPC
- Uint Testing
- MSW
- Next.js  Testing
- Cypress
- Next.js Architectures
- Next.js Design System in Figma
- Useful Packages for Design System
- Complete Design System from Scratch
- Complete Component Library
- 50+ Projects
- 100+ Challenges

- Heart Soul Time Money(Animation)
- In the end, I will Be a Next Monster
- [ ] Support HuXn

## Requirements / Prerequisites 

- Be a React Monster 50 hrs
- React Courses Part 1

## What is Next.js?

- React Framework
- fast 
- scalable 
- SSR 
- SSG 
- automatic code splitting
- performance
- SEO

## Problems With React.js

- 🚫 routing
- 🚫 compiler
- 🚫 SEO
- 🚫 SSR
- 🚫 SSG
- 🚫 full-stack
- 🚫 structure
- 🚫 api integration

## Next.js The Problem Solver

- ✅ hot reloading
- ✅ compiler
- ✅ SEO
- ✅ SSR
- ✅ SSG
- ✅ Full-Stack
- ✅ Routing
- ✅ Performance

## Next.js Installation

```bash
bunx create-next-app@latest

✔ What is your project named? … next-monster
✔ Would you like to use TypeScript? …  Yes
✔ Would you like to use ESLint? …  Yes
✔ Would you like to use Tailwind CSS? …  Yes
✔ Would you like your code inside a `src/` directory? …  Yes
✔ Would you like to use App Router? (recommended) …  Yes
✔ Would you like to use Turbopack for `next dev`? … No 
✔ Would you like to customize the import alias (`@/*` by default)? … No 

cd next-monster
code .

# clean up project

bun dev
```

## 🏎️ Folder Structure

## Special Files

- page.tsx
- layout.tsx
- template.tsx
- not-found.tsx
- loading.tsx
- error.tsx

## Basic Routing In Action

- src/app/about/page.tsx http://localhost:3000/about ✅
- src/app/login/page.tsx http://localhost:3000/login ✅
- src/app/login/login.tsx http://localhost:3000/login 🚫

### Basic Routing Challenge 001

- [x] create a new next.js project
- [x] 2 basic routes for /about and /contact
- [x] navigate between this 2 pages 
  - http://localhost:3000/challenges/001-basic-routing/about
  - http://localhost:3000/challenges/001-basic-routing/contact

## Nested Routes In Action

- [src/app/users/page.tsx](http://localhost:3000/users)  ✅
- [src/app/users/about/page.tsx](http://localhost:3000/users/about) ✅
- src/app/users/about/project/page.tsx http://localhost:3000/users/about/project ✅

### 🏎️ Dashboard Project 01

### Nested Routes Challenge 002

- [x] Create a "products" route and inside that same folder create two more folders name "all" & "specific"
- [x] Inside the "all" folder create a component which will show this text: "(1220) products in the store"
  - http://localhost:3000/challenges/002-nested-routes/products/all
- [x] Inside the "specific" folder create a component which will show this text: "Here is my one & only product"
  - http://localhost:3000/challenges/002-nested-routes/products/specific

## Linking In Action

```tsx
import Link from 'next/link'

<Link href='/'>Home<Link>
<Link href='/portfolio'>Portfolio<Link>
```

### Linking Challenge 003

- [x] Create two routes "home" and "dashboard"
- [x] In the "home" page, create a simple landing page with a welcoming message and some content.
- [x] In the "dashboard" page, create a dashboard with various components, such as a navigation menu, user profile, and other related information.
- [x] In the "dashboard" page, implement a navigation menu that includes links to the "home" page and other sections within the dashboard.
- [x] Use Next.js's `<Link>` component to create these navigation links. Ensure that clicking on these links navigates the user to the corresponding pages within the application without a full page refresh.

## useRouter In Action

```tsx
'use client'
import { useRouter } from 'next/navigation'

const router = useRouter()

<button onClick={() => router.push('/portfolio')}> Portfolio </button>
```

### useRouter Challenge 004

- [x] Create two routes: "page1" and "page2".
- [x] In the "page1" route, create a simple landing page with a message and a button.
- [x] In the "page2" route, create a second page with information or content.
- [x] Implement a programmatic navigation from "page1" to "page2" using the useRouter hook from Next. When the user clicks a button on "page1," they should be navigated to "page2."
- [x] Verify that programmatic navigation from "page1" to "page2" works as expected, and that the route information is displayed on "page2."
- http://localhost:3000/challenges/004-use-router/page1

## Private Pages

- public: src/app/users/page.tsx 
  - http://localhost:3000/users ✅
- private: src/app/_users/page.tsx
  - http://localhost:3000/users  🚫
  - http://localhost:3000/_users 🚫

## Route Groups In Action

- src/app/(auth)/login/page.tsx
- src/app/(auth)/register/page.tsx

### Route Groups Challenge 005

- [x] Create the "users" folder (but it shouldn't be a route).
- [x] Inside the "users" folder create a "userinfo" route.
  - http://localhost:3000/challenges/005-route-groups/userinfo
- [x] Inside the "app" directory create another folder name "auth" but it (shouldn't be a route).
- [x] Inside the "auth" folder create a login route which will only print (Please Login To See The Content)
  - http://localhost:3000/challenges/005-route-groups/login

## Dynamic Routes In Action

- `src/app/games/[id]/page.tsx`

```tsx
interface Props {
  params: Promise<{ id: string }>
}
export default async function Page({ params }: Props) {
  const { id } = await params
  return <div>Game: {id}</div>
}
```

### Movies Project 02

- http://localhost:3000/projects/02-movies

```zsh
bun add react-icons
```

### Dynamic Routes Challenge 006

- [x] If you visit /users/1, the page should display "User Profile: 1".
- [x] If you visit /users/2, the page should display "User Profile: 2".
- [x] The page should dynamically change based on the ID in the URL.
- http://localhost:3000/challenges/006-dynamic-routes/users/1
- http://localhost:3000/challenges/006-dynamic-routes/users/2

## Catch All Route Segments In Action

- from: src/app/games/series/page.tsx
- from: src/app/games/series/gta/page.tsx
- from: src/app/games/series/gta/gta-5/page.tsx
- from: src/app/games/series/gta/gta-5/reviews/page.tsx
- from: src/app/games/series/gta/gta-5/reviews/comment-123/page.tsx
- to: `src/app/games/[...all]/page.tsx`

```tsx
interface Props {
  params: Promise<{ all: string[] }>
}
export default async function Page({ params }: Props) {
  const { all } = await params
  return <div>Game: {all.join(" ")}</div>
}
```

### Gaming Website Project 03

- http://localhost:3000/projects/03-games

2:49:30 - Catch All Route Segments Challenge

2:52:47 - Layouts
2:54:41 - Layouts In Action
3:00:59 - Layouts 

3:20:40 - Templates
3:22:18 - Templates in Action

3:27:45 - Not Found
3:28:29 - Not Found In Action
3:30:17 - Not Found 

3:32:26 - Redirects
3:35:12 - Redirects 

3:39:09 - Loading
3:39:44 - Loading In Action

3:41:57 - Errors
3:42:26 - Errors in Action

3:44:20 - Images

3:50:12 - Welcome To The Backend
3:50:54 - GET Method
3:56:22 - POST Method
4:00:37 - Backend Dynamic Routes
4:06:08 - PATCH Method
4:13:15 - DELETE Method
4:17:44 - URL Query Parameters
4:23:40 - Middlewares

4:24:38 - Fonts

4:27:34 - Metadata

4:34:38 - CSS Modules
4:38:19 - UI Verse
4:44:45 - TailwindCSS
4:49:15 - UI Lukacho
4:56:59 - Shadcn UI
5:06:28 - Magic UI
5:11:17 - HeroUI / NextUI
5:19:01 - Aceternity UI

5:25:56 - Outro