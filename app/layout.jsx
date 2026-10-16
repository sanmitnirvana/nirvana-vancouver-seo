import './globals.css';
const origin='https://www.nirvanacanada.com';
const canonical=origin+'/our-services/digital-marketing/vancouver-seo/';
export const metadata={
metadataBase:new URL(origin),
title:'Vancouver SEO Agency & SEO Services | Nirvana Canada',
description:'Grow with Vancouver SEO services from Nirvana Canada. Local SEO, technical optimization, helpful content and measurable organic leads. Request an assessment.',
alternates:{canonical},
openGraph:{title:'Vancouver SEO Agency | Nirvana Canada',description:'Vancouver SEO services focused on visibility, leads and measurable growth.',url:canonical,siteName:'Nirvana Canada',type:'website'},
robots:{index:false,follow:true}
};
export default function RootLayout({children}){return <html lang="en-CA"><body>{children}</body></html>}
