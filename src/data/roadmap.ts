import type { Phase } from '@/types';

export const ROADMAP_DATA: Phase[] = [
  {
    id: 'js',
    title: 'JavaScript Advanced',
    dur: 'Week 1–3',
    pl: 'https://www.youtube.com/playlist?list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-',
    c: ['#f59e0b', '#f97316'],
    week: '1–3',
    desc: 'Fondasi JS yang dalam: scope, closure, async, OOP, hingga design pattern.',
    videos: [
      { id: 'js01', title: '#01 – Pengenalan JavaScript Advanced', url: 'https://www.youtube.com/watch?v=RwT41El778A' },
      { id: 'js02', title: '#02 – Execution Context & Call Stack', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=2' },
      { id: 'js03', title: '#03 – Scope & Lexical Environment', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=3' },
      { id: 'js04', title: '#04 – Hoisting', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=4' },
      { id: 'js05', title: '#05 – Closure', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=5' },
      { id: 'js06', title: '#06 – Immediately Invoked Function Expression (IIFE)', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=6' },
      { id: 'js07', title: '#07 – Prototype & Prototype Chain', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=7' },
      { id: 'js08', title: '#08 – Class & OOP', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=8' },
      { id: 'js09', title: '#09 – Inheritance & Polymorphism', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=9' },
      { id: 'js10', title: '#10 – Symbol & Iterator', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=10' },
      { id: 'js11', title: '#11 – Generator', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=11' },
      { id: 'js12', title: '#12 – Promise', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=12' },
      { id: 'js13', title: '#13 – Async / Await', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=13' },
      { id: 'js14', title: '#14 – Event Loop & Concurrency', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=14' },
      { id: 'js15', title: '#15 – Fetch API & Axios', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=15' },
      { id: 'js16', title: '#16 – Error Handling & Custom Error', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=16' },
      { id: 'js17', title: '#17 – Module System (ESM)', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=17' },
      { id: 'js18', title: '#18 – Proxy & Reflect', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=18' },
      { id: 'js19', title: '#19 – WeakMap, WeakSet & WeakRef', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=19' },
      { id: 'js20', title: '#20 – Design Pattern: Singleton & Observer', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=20' },
      { id: 'js21', title: '#21 – Design Pattern: Factory & Strategy', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=21' },
      { id: 'js22', title: '#22 – Functional Programming: Pure Function & Immutability', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=22' },
      { id: 'js23', title: '#23 – Functional Programming: Higher-Order Function', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=23' },
      { id: 'js24', title: '#24 – Currying & Composition', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=24' },
      { id: 'js25', title: '#25 – Memoization & Performance Optimization', url: 'https://www.youtube.com/watch?v=RwT41El778A&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=25' },
    ],
    casestudies: [
      { id: 'jscs1', title: 'Case Study 1 – Membuat Event Emitter dari scratch', desc: 'Implementasikan Observer pattern: subscribe, emit, unsubscribe.' },
      { id: 'jscs2', title: 'Case Study 2 – Promise Chain & Async Waterfall', desc: 'Buat pipeline async: fetch → transform → display dengan error handling.' },
      { id: 'jscs3', title: 'Case Study 3 – Mini State Manager (Redux-like)', desc: 'Buat store sederhana dengan reducer, dispatch, dan subscribe.' },
      { id: 'jscs4', title: 'Case Study 4 – Lazy Loading Module', desc: 'Implementasi dynamic import dan code splitting.' },
      { id: 'jscs5', title: 'Case Study 5 – Build Utility Library (Lodash-mini)', desc: 'Buat library: debounce, throttle, deepClone, groupBy.' },
    ]
  },
  {
    id: 'tw',
    title: 'Tailwind CSS Mastery',
    dur: 'Week 4–5',
    pl: 'https://www.youtube.com/playlist?list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h',
    c: ['#06b6d4', '#3b82f6'],
    week: '4–5',
    desc: 'Kuasai utility-first CSS untuk membangun UI modern dan responsif.',
    videos: [
      { id: 'tw01', title: '#01 – Pengenalan Tailwind CSS', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0' },
      { id: 'tw02', title: '#02 – Instalasi & Konfigurasi Tailwind', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=2' },
      { id: 'tw03', title: '#03 – Typography & Text Utility', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=3' },
      { id: 'tw04', title: '#04 – Color & Background', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=4' },
      { id: 'tw05', title: '#05 – Spacing: Padding & Margin', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=5' },
      { id: 'tw06', title: '#06 – Flexbox dengan Tailwind', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=6' },
      { id: 'tw07', title: '#07 – Grid Layout dengan Tailwind', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=7' },
      { id: 'tw08', title: '#08 – Responsive Design & Breakpoints', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=8' },
      { id: 'tw09', title: '#09 – Hover, Focus & State Variant', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=9' },
      { id: 'tw10', title: '#10 – Dark Mode', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=10' },
      { id: 'tw11', title: '#11 – Animation & Transition', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=11' },
      { id: 'tw12', title: '#12 – Custom Config & Extend Theme', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=12' },
      { id: 'tw13', title: '#13 – Component: Button & Badge', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=13' },
      { id: 'tw14', title: '#14 – Component: Card & Modal', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=14' },
      { id: 'tw15', title: '#15 – Component: Navbar & Sidebar', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=15' },
      { id: 'tw16', title: '#16 – Component: Form & Input', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=16' },
      { id: 'tw17', title: '#17 – Tailwind Plugin & @apply', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=17' },
      { id: 'tw18', title: '#18 – JIT Mode & Arbitrary Values', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=18' },
      { id: 'tw19', title: '#19 – Optimasi Produksi: Purge CSS', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=19' },
      { id: 'tw20', title: '#20 – Integrasi dengan Vite & PostCSS', url: 'https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h&index=20' },
    ],
    casestudies: [
      { id: 'twcs1', title: 'Case Study 1 – Landing Page Produk', desc: 'Build responsive product landing page with hero, features, pricing section.' },
      { id: 'twcs2', title: 'Case Study 2 – Admin Dashboard Layout', desc: 'Sidebar, topbar, card grid, data table — full responsive.' },
      { id: 'twcs3', title: 'Case Study 3 – Dark Mode Portfolio', desc: 'Personal portfolio dengan toggle dark/light mode.' },
      { id: 'twcs4', title: 'Case Study 4 – E-Commerce Product Page', desc: 'Product grid, filter sidebar, cart badge, modal detail.' },
      { id: 'twcs5', title: 'Case Study 5 – Mobile App UI Clone', desc: 'Clone salah satu mobile UI ke web menggunakan Tailwind.' },
    ]
  },
  {
    id: 'rt',
    title: 'React.js Ecosystem',
    dur: 'Week 6–7',
    pl: 'https://www.youtube.com/playlist?list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1',
    c: ['#8b5cf6', '#6366f1'],
    week: '6–7',
    desc: 'Build dynamic SPA: hooks, context, routing, state management, dan API integration.',
    videos: [
      { id: 'rt01', title: '#01 – Pengenalan React.js', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA' },
      { id: 'rt02', title: '#02 – JSX & Component', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=2' },
      { id: 'rt03', title: '#03 – Props & State', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=3' },
      { id: 'rt04', title: '#04 – useState Hook', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=4' },
      { id: 'rt05', title: '#05 – useEffect Hook', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=5' },
      { id: 'rt06', title: '#06 – useRef & useMemo', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=6' },
      { id: 'rt07', title: '#07 – useCallback & useReducer', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=7' },
      { id: 'rt08', title: '#08 – Context API', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=8' },
      { id: 'rt09', title: '#09 – Custom Hook', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=9' },
      { id: 'rt10', title: '#10 – React Router v6', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=10' },
      { id: 'rt11', title: '#11 – Nested Route & Protected Route', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=11' },
      { id: 'rt12', title: '#12 – Fetch API & Axios di React', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=12' },
      { id: 'rt13', title: '#13 – Error Boundary & Suspense', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=13' },
      { id: 'rt14', title: '#14 – Form Handling & Validasi', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=14' },
      { id: 'rt15', title: '#15 – Zustand / State Management', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=15' },
      { id: 'rt16', title: '#16 – React Query (TanStack Query)', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=16' },
      { id: 'rt17', title: '#17 – Performance Optimization', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=17' },
      { id: 'rt18', title: '#18 – Testing di React (Vitest)', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=18' },
      { id: 'rt19', title: '#19 – Build & Deploy ke Vercel', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=19' },
      { id: 'rt20', title: '#20 – TypeScript + React Dasar', url: 'https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1&index=20' },
    ],
    casestudies: [
      { id: 'rtcs1', title: 'Case Study 1 – Todo App dengan Context + useReducer', desc: 'Full CRUD, filter, persistent ke localStorage.' },
      { id: 'rtcs2', title: 'Case Study 2 – Movie Search App (API Integration)', desc: 'Fetch dari public API, pagination, skeleton loading.' },
      { id: 'rtcs3', title: 'Case Study 3 – Auth Flow (Login/Register/Protected)', desc: 'JWT simulation, protected routes, redirect logic.' },
      { id: 'rtcs4', title: 'Case Study 4 – E-Commerce Mini (Cart & Checkout)', desc: 'Product list, cart state, quantity control, total.' },
      { id: 'rtcs5', title: 'Case Study 5 – Real-time Chat UI (Firebase)', desc: 'Firestore listener, message display, send message.' },
    ]
  },
  {
    id: 'nd',
    title: 'Node.js Backend',
    dur: 'Week 8',
    pl: 'https://www.youtube.com/playlist?list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD',
    c: ['#10b981', '#059669'],
    week: '8',
    desc: 'Build REST API: Express, Prisma/Mongoose, auth JWT, middleware, dan deploy.',
    videos: [
      { id: 'nd01', title: '#01 – Pengenalan Node.js', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4' },
      { id: 'nd02', title: '#02 – NPM & Package Management', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=2' },
      { id: 'nd03', title: '#03 – Module System (CommonJS & ESM)', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=3' },
      { id: 'nd04', title: '#04 – File System (fs module)', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=4' },
      { id: 'nd05', title: '#05 – HTTP Server dengan http module', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=5' },
      { id: 'nd06', title: '#06 – Express.js Dasar', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=6' },
      { id: 'nd07', title: '#07 – Routing & Controller', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=7' },
      { id: 'nd08', title: '#08 – Middleware', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=8' },
      { id: 'nd09', title: '#09 – REST API Design', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=9' },
      { id: 'nd10', title: '#10 – Koneksi Database (MongoDB/MySQL)', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=10' },
      { id: 'nd11', title: '#11 – Mongoose / Prisma ORM', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=11' },
      { id: 'nd12', title: '#12 – CRUD Operation dengan Database', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=12' },
      { id: 'nd13', title: '#13 – Authentication: JWT', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=13' },
      { id: 'nd14', title: '#14 – Authorization & Role-based Access', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=14' },
      { id: 'nd15', title: '#15 – Validasi Input (Joi / Zod)', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=15' },
      { id: 'nd16', title: '#16 – Upload File dengan Multer', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=16' },
      { id: 'nd17', title: '#17 – Error Handling Middleware', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=17' },
      { id: 'nd18', title: '#18 – Environment Variable & dotenv', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=18' },
      { id: 'nd19', title: '#19 – Testing API dengan Jest / Supertest', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=19' },
      { id: 'nd20', title: '#20 – Deploy ke Railway / Render', url: 'https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD&index=20' },
    ],
    casestudies: [
      { id: 'ndcs1', title: 'Case Study 1 – REST API: Blog (CRUD + Auth)', desc: 'Endpoint: register, login, CRUD posts, JWT middleware.' },
      { id: 'ndcs2', title: 'Case Study 2 – User Management API', desc: 'Role admin/user, pagination, search, sort endpoint.' },
      { id: 'ndcs3', title: 'Case Study 3 – File Upload Service', desc: 'Upload gambar, resize, store ke cloud/local.' },
      { id: 'ndcs4', title: 'Case Study 4 – Real-time Notification (Socket.io)', desc: 'WebSocket dasar, event emit, broadcast ke room.' },
      { id: 'ndcs5', title: 'Case Study 5 – Fullstack Integration (React + Node)', desc: 'Connect React frontend ke Express API, full auth flow.' },
    ]
  }
];

// Get all items count
export const getTotalItems = () => {
  return ROADMAP_DATA.reduce((acc, phase) => acc + phase.videos.length + phase.casestudies.length, 0);
};

// Get all video and case study IDs
export const getAllItemIds = () => {
  return ROADMAP_DATA.flatMap(phase => [
    ...phase.videos.map(v => v.id),
    ...phase.casestudies.map(cs => cs.id)
  ]);
};

// Get recommended items for a specific day (2 videos + optional case study)
export const getRecommendedItems = (dayIndex: number) => {
  const allItems: Array<{ id: string; title: string; phase: string; phaseId: string; type: 'video' | 'case'; url?: string; desc?: string }> = [];
  
  ROADMAP_DATA.forEach(phase => {
    phase.videos.forEach(v => allItems.push({ ...v, phase: phase.title, phaseId: phase.id, type: 'video' }));
    phase.casestudies.forEach(cs => allItems.push({ ...cs, phase: phase.title, phaseId: phase.id, type: 'case' }));
  });

  const dayMissions = [];
  const startIdx = dayIndex * 2;
  
  // Add 2 videos per day
  const videos = allItems.filter(item => item.type === 'video');
  for (let i = 0; i < 2; i++) {
    if (videos[startIdx + i]) {
      dayMissions.push(videos[startIdx + i]);
    }
  }
  
  // Add case study every 5 days
  if ((dayIndex + 1) % 5 === 0) {
    const cases = allItems.filter(item => item.type === 'case');
    const caseIndex = Math.floor(dayIndex / 5);
    if (cases[caseIndex]) {
      dayMissions.push(cases[caseIndex]);
    }
  }
  
  return dayMissions;
};
