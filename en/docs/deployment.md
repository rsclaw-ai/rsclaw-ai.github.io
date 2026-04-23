---
description: Website Deployment Process
---

# Website Deployment Process

This document records the complete deployment process for rsclaw.ai website. Follow this workflow every time you update the documentation.

---

## Key Information

| Item | Value |
|------|-------|
| Source Code | `~/git/rsclaw-ai.github.io` |
| Build Tool | VitePress |
| Production Servers | ai-fast (port 12222), ai-new (port 22) |
| Sync Script | `~/git/sync_rsclaw_ai.sh` |
| Production URL | https://rsclaw.ai |
| Local Preview | http://localhost:5173 |

---

## Deployment Workflow (4 Steps)

### Step 1: Build Check

Ensure the local build has no errors and the preview looks correct in the browser.

```bash
cd ~/git/rsclaw-ai.github.io

# Build check (no errors)
npx vitepress build

# Start local preview server (background)
npx vitepress dev &
```

**Checklist:**
- [ ] `vitepress build` succeeds (0 errors)
- [ ] http://localhost:5173 homepage loads correctly
- [ ] Chinese sidebar is complete (with Advanced/Help groups)
- [ ] English sidebar is complete
- [ ] Spot-check 2-3 random doc pages render correctly
- [ ] Config examples use JSON5 format

### Step 2: Commit & Push

Once confirmed, commit and push to GitHub.

```bash
cd ~/git/rsclaw-ai.github.io

git status
git diff

git add .
git commit -m "docs: describe your changes"

git push origin main
```

**Checklist:**
- [ ] All changes staged in `git status`
- [ ] Commit message is clear and descriptive
- [ ] `git push` succeeds without errors

### Step 3: Sync to Production Servers

Run the sync script to deploy to both production servers.

```bash
~/git/sync_rsclaw_ai.sh
```

**Checklist:**
- [ ] ai-fast server synced successfully (224+ files)
- [ ] ai-new server synced successfully (224+ files)
- [ ] No errors from sync script

### Step 4: Production Verification

Visit the production site to confirm changes are live.

**Checklist:**
- [ ] https://rsclaw.ai homepage loads (HTTP 200)
- [ ] https://rsclaw.ai/docs/getting-started (Chinese) works
- [ ] https://rsclaw.ai/en/docs/getting-started (English) works
- [ ] Updated content is visible
- [ ] Sidebar groups are complete
- [ ] Chinese and English docs match

---

## Troubleshooting

### SSH Key Not Loaded

If push fails with `Could not open a connection to your authentication agent`:

```bash
ssh-add ~/.ssh/id_ed25519
```

### Host Key Verification Failed

First-time connection to GitHub may require accepting the Host Key:

```bash
ssh -T git@github.com
```

### Build Errors

If `vitepress build` fails, check:
1. Sidebar config brackets/braces are balanced
2. Markdown syntax is correct
3. File reference paths are valid

---

## Notes

1. **Always preview before publishing** — verify all pages locally before pushing
2. **Commit message format** — use `docs: description` convention
3. **Verify after sync** — always check production after syncing
4. **Keep CN/EN in sync** — update both Chinese and English versions together
5. **Config examples** — always use JSON5 format, reference `~/git/rsclaw/examples/default.rsclaw.json5` as the source of truth
