# Cluster Cloud Agent Rules & Standards

## 1. Approved Technology Stack
For all future website development, the following technologies are strictly required:

- **Next.js 16**: Main React framework, routing, SEO, and performance
- **React 19**: UI building
- **TypeScript**: Type safety and scalable code
- **Tailwind CSS**: Complete styling system
- **Shadcn UI**: Premium reusable UI components
- **Framer Motion**: Modern animations
- **GSAP**: Advanced animations and scroll effects
- **Lucide React**: Modern icon library

Detailed specification: [tech_stack.md](file:///.agents/rules/tech_stack.md)

---

## 2. Git Push Policy
- **NEVER** automatically push code to GitHub after making edits or completing features.
- All code changes, component creations, styling, and testing must remain purely local.
- **ONLY** stage, commit, and push to GitHub (`origin main`) when the user explicitly provides their trigger command:
  **`push my site`**

Detailed specification: [git_push_policy.md](file:///.agents/rules/git_push_policy.md)
