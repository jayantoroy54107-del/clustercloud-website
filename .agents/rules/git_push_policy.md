# Git Push Policy for ClusterCloud

## Rule
- **NEVER** automatically push code to GitHub after making edits or completing features.
- All code changes, component creations, styling, and testing must remain purely local.
- **ONLY** stage, commit, and push to GitHub (`origin main`) when the user explicitly provides their trigger command:
  **`push my site`**
- When the user gives the command `"push my site"`:
  1. Verify the project builds cleanly (`npm run build`).
  2. Stage all modified and new files (`git add .`).
  3. Commit with a clear, descriptive summary of changes made.
  4. Push to `origin main`.
  5. Confirm to the user that the site has been pushed and Cloudflare Pages is updating.
