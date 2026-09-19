# Approved Tech Stack for Cluster Cloud Website Development

All future website development, page creation, and component architecture for Cluster Cloud must adhere to this official technology stack:

| Technology | Purpose & Role |
| :--- | :--- |
| **Next.js 16** | Main React framework, routing, SSR/SSG, SEO optimization, and peak performance |
| **React 19** | Core UI component building and state management |
| **TypeScript** | Strict type safety, scalable interfaces, and robust maintainability |
| **Tailwind CSS** | Complete responsive styling system, layout tokens, and utility classes |
| **Shadcn UI** | Premium, accessible, reusable UI component foundations |
| **Framer Motion** | Micro-interactions, page transitions, and smooth entrance/exit animations |
| **GSAP** | Advanced timeline animations, interactive scroll effects, and complex canvas dynamics |
| **Lucide React** | Modern, unified, clean SVG icon library |

---

## Guidelines for Future Development
1. **Framework & Architecture**:
   - Use Next.js 16 with React 19 and App Router for all new routes, layouts, and pages.
   - Leverage Server Components for data fetching and SEO, using Client Components (`'use client'`) only where user interactivity (animations, modals, event listeners) is required.
2. **Styling & UI**:
   - Build UI components using Tailwind CSS and Shadcn UI primitives.
   - Strictly avoid arbitrary unlayered CSS resets that clash with Tailwind's `@layer` system.
3. **Animations**:
   - Use Framer Motion for component-level UI interactions, hover elevations, and modal dialogs.
   - Use GSAP (ScrollTrigger, Timeline) for immersive storytelling, pinned scroll transitions, and hero canvas animations.
4. **Icons**:
   - Exclusively import icons from `lucide-react` to maintain visual consistency across all pages.
