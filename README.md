# Nirvana Canada — Vancouver SEO landing page

A responsive, single-page, Vercel-ready site with semantic HTML, accessible FAQs, case studies, internal links, SEO metadata, JSON-LD, mobile navigation, and a contact endpoint.

## Deploy
1. Upload the files to a GitHub repository (the `index.html`, `api` folder and `vercel.json` must be at the repository root).
2. In Vercel, import the repository and select **Other** as the framework preset. No build command is required. Output directory can remain the project root.
3. Configure environment variables: `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (e.g. `success@nirvanacanada.com`) and `CONTACT_FROM_EMAIL` (an address from a domain verified with Resend). Redeploy.
4. Test the contact form and ensure the emails arrive. Without those variables the form correctly reports that it cannot send; it does not pretend to submit.
5. Verify all case-study metrics and measurement periods, office details, internal URLs, and marketing claims before publishing.
6. Replace the text-based wordmark with the approved brand logo if desired.

## SEO and production notes
- The canonical URL points to the **existing** Vancouver SEO service page. A Vercel preview is for design review, not a separate competing indexable page. If hosting permanently elsewhere, adjust canonical and redirect strategy.
- The FAQ content uses native HTML `details` and `summary` for accessibility; do not assume Google FAQ rich results.
- Organization, Service and BreadcrumbList structured data is included. Add accurate LocalBusiness address/hours only after verifying details.
- The contact form uses Resend via a Vercel function. Configure domain authentication and add spam/rate-limiting protections for production use.
- The illustrative dashboard is explicitly labeled as example data.
- Verify privacy/consent wording with your published privacy policy before launch.