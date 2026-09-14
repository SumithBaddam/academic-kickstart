# sumithbaddam.com — rebuild

A plain static site (HTML/CSS/JS, no build step, no framework) — drops straight
into your existing Netlify + GitHub setup.

## Files
- `index.html` — all page content
- `styles.css` — all styling
- `script.js` — nav-highlighting and the "show more projects" toggle
- `files/cv.pdf` — **you need to add your résumé PDF here** (path referenced by the "Download résumé" button)

## What changed from the old site
- Title updated to **Senior Applied Scientist**, location updated to **Seattle, WA**
- Fixed the Contact section: Email/LinkedIn/GitHub/ResearchGate now link to the
  correct real destinations (the old site pointed "Email" and "GitHub" both at
  the homepage)
- Removed the street address and phone number from the public Contact section
  for privacy — add them back in `index.html` under `<footer class="contact-section">`
  if you want them visible
- Added proper meta description / Open Graph tags for link previews
- Trimmed the Projects grid to 4 featured projects with a "Show more" toggle
  for the remaining 7, so the page reads cleaner for a first-time visitor

## Deploying on Netlify (two options)

**Option A — replace your existing repo's content (recommended, keeps your current Netlify project/domain):**
1. In your GitHub repo (the one connected to your Netlify project), delete the old Hugo site files, or better, create this as a fresh branch first so you can compare.
2. Copy `index.html`, `styles.css`, `script.js`, and the `files/` folder into the repo root.
3. Since this is a plain static site (no build command needed), go to Netlify → Site settings → Build & deploy → Build settings, and clear out any Hugo build command; set the **Publish directory** to the repo root (or wherever you place these files).
4. Commit and push — Netlify will redeploy automatically.

**Option B — quick preview without touching your repo yet:**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this whole folder in — Netlify gives you a temporary live URL instantly so you can review it before committing to your main site.

## Next steps you'll want to do
- Add a real headshot photo and swap the "SB" avatar placeholder for an `<img>`
- Add your actual `files/cv.pdf`
- Consider a custom Open Graph banner image (1200×630px) instead of relying on the small avatar icon
- Double-check all external links (Amazon Ads, AWS, Cisco, publication PDFs, etc.)
