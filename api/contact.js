// Vercel serverless contact endpoint. Requires RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.
module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.setHeader('Allow','POST'); return res.status(405).json({error:'Method not allowed'}); }
  const { name, email, website, goal, message, company_fax } = req.body || {};
  if (company_fax) return res.status(200).json({ok:true});
  if (![name,email,website].every(x=>typeof x==='string' && x.trim()) ||
      name.length>120 || email.length>200 || website.length>500 || (message||'').length>1500 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({error:'Invalid form fields'});
  try { const url=new URL(website); if (!['http:','https:'].includes(url.protocol)) throw Error(); }
  catch { return res.status(400).json({error:'Please enter a valid website URL'}); }
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL }=process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) return res.status(503).json({error:'Contact form email service is not configured'});
  const safe=s=>String(s||'').replace(/[<>]/g,'').slice(0,1500);
  try {
    const result=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:CONTACT_FROM_EMAIL,to:[CONTACT_TO_EMAIL],reply_to:email,subject:'Vancouver SEO assessment inquiry',text:`Name: ${safe(name)}\nEmail: ${safe(email)}\nWebsite: ${safe(website)}\nGoal: ${safe(goal)}\nMessage: ${safe(message)}`})});
    if(!result.ok) return res.status(502).json({error:'Email provider failed'});
    return res.status(200).json({ok:true});
  } catch { return res.status(502).json({error:'Email service unavailable'}); }
};