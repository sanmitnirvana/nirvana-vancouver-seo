# Nirvana Canada — Vancouver SEO Landing Page

Next.js App Router project designed for GitHub → Vercel deployment. Navy, blue and white branding, verified-source client case-study metrics, internal links, FAQs, conversion form and JSON-LD.

## Deploy
1. Import this GitHub repository in Vercel with Framework Preset **Next.js**.
2. Under Project Settings → Environment Variables, set `RESEND_API_KEY`, `LEAD_FROM_EMAIL` (verified sender) and `LEAD_TO_EMAIL` (recipient).
3. Deploy. The form reports an error until the delivery service is configured; no leads are silently discarded.
4. Run `npm install` and `npm run dev` for local development.

**Important:** This standalone preview deliberately uses `noindex` in metadata and `robots.js` to prevent keyword cannibalization with the existing live Vancouver SEO page. When migrated to the existing URL on nirvanacanada.com, change robots to allow indexing and preserve the canonical there. Do not publish two indexable versions.

## Before launching
- Confirm reporting dates, permission and attribution for Vortex Restaurant Equipment and Hari Stones case studies.
- Confirm services, pricing and SEO-assessment scope with the Nirvana team.
- Add GA4/CRM conversion measurement after the form is connected.
- Replace the lightweight branded wordmark with the approved original PNG as needed; avoid altering the brand.
- Review Web Vitals, structured-data validation and accessibility.

## Links
Internal links point back to real sections at https://www.nirvanacanada.com/ including digital marketing, buyer guides, case studies, conversion optimization, FAQ, testimonials, and contact page.
