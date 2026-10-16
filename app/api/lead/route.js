import {NextResponse} from 'next/server';
export async function POST(request){
try{
const {name,email,website,goal,company_fax}=await request.json();
if(company_fax)return NextResponse.json({ok:true});
if(!name||!email||!website||!/^\S+@\S+\.\S+$/.test(email)||name.length>120||email.length>254)return NextResponse.json({error:'Please enter your name, valid email and website.'},{status:400});
if(!process.env.RESEND_API_KEY||!process.env.LEAD_FROM_EMAIL||!process.env.LEAD_TO_EMAIL)return NextResponse.json({error:'Form email delivery is not yet configured.'},{status:503});
const clean=s=>String(s||'').replace(/[<>]/g,'').slice(0,500);
const result=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+process.env.RESEND_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({from:process.env.LEAD_FROM_EMAIL,to:[process.env.LEAD_TO_EMAIL],subject:'Vancouver SEO assessment inquiry',text:['Name: '+clean(name),'Email: '+clean(email),'Website: '+clean(website),'Goal: '+clean(goal)].join('\n'),reply_to:email})});
if(!result.ok)return NextResponse.json({error:'Unable to deliver request. Please email us directly.'},{status:502});
return NextResponse.json({ok:true});
}catch{return NextResponse.json({error:'Could not process request.'},{status:400});}
}
