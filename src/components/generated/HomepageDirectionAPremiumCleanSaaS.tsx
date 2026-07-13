import { useState } from "react";
const proofPoints = [["Under 60 seconds", "Call, text, and email response can begin within the first minute."], ["3 coordinated agents", "AI Call, AI SMS, and AI Email work from the same lead context."], ["6-month nurture", "Quiet leads keep receiving local, personalized follow-up."], ["Live on day one", "The Home Evaluation system, funnel, CRM, and booking flow are pre-built."]];
const problemCards = [["New leads cool off fast", "A buyer or seller has the most intent right after they opt in. If you are in a showing, on the road, or with a client, that window can close before you reply."], ["Most CRMs still leave the work to you", "A blank dashboard stores the lead, but it does not call, text, email, qualify, remind, nurture, or book the appointment."], ["Follow-up gets scattered", "CRM in one tab, SMS in another, email somewhere else, and calendar booking in a different tool. Real estate teams lose momentum when nothing works together."], ["Not-ready leads disappear", "Leads that do not convert in the first 48 hours often sit untouched. Months later, they can be buying or selling with someone else."], ["Agents are busy when leads arrive", "You are showing homes, negotiating offers, and closing deals. Follow-up should not depend on you being available at the exact second a lead comes in."], ["The system never gets built", "Most agents know they need better automations. The hard part is building the funnel, messages, pipeline, reminders, routing, and nurture from scratch."]];
const steps = [["Capture", "A lead opts in through a pre-built funnel or form. FollowUpHub opens the pipeline record and queues the right response sequence immediately."], ["Respond", "AI Call, AI SMS, and AI Email can start within 60 seconds, using the context the lead already gave you."], ["Nurture", "If the lead goes quiet, the 6-month Smart Nurture AI keeps following up with local, personalized messages instead of letting the contact sit cold."], ["Book", "When intent comes back, FollowUpHub routes the lead to booking, creates the calendar event, and sends appointment reminders."]];
const platformFeatures = [["Pre-built seller funnels", "Capture key details up front, including property condition, urgency, and timeline."], ["Conversational SMS and email AI", "AI agents respond across SMS, WhatsApp, and Email, using the lead's funnel context."], ["Voice AI Engine", "Native Voice AI initiates contact, handles objections, and uses 6-attempt retry logic during respectful calling windows."], ["Appointment reminders", "After a meeting is booked, FollowUpHub sends 24-hour, 1-hour, and 5-minute reminders."], ["Agent accountability loops", "After appointments, the system texts agents to log the outcome and follows up again at 12 and 24 hours if needed."], ["Visual pipeline management", "A Kanban-style pipeline tracks leads from new contact to appointment, proposal, and close."], ["Omni-channel inbox", "SMS, Email, Webchat, Facebook Messenger, Instagram DMs, and WhatsApp live in one contact thread."], ["Native calendar sync", "Google and Outlook sync support self-booking without calendar conflicts."]];
const promotedPlatformFeatures = [platformFeatures[1], platformFeatures[2]];
const remainingPlatformFeatures = [platformFeatures[0], ...platformFeatures.slice(3)];
const platformCardDetails = [["Condition", "Urgency", "Timeline"], ["24-hour", "1-hour", "5-minute"], ["Outcome log", "12-hour", "24-hour"], ["New", "Appointment", "Proposal", "Close"], ["SMS", "Email", "Messenger", "WhatsApp"], ["Google", "Outlook", "Self-booking"]];
const blankComparisonItems = ["Stores the lead after capture.", "Depends on you to build the funnel, automations, and nurture.", "Keeps SMS, email, calling, calendar, and pipeline work scattered.", "Leaves old leads sitting until someone remembers to follow up."];
const hubComparisonItems = ["Starts with a done-for-you Home Evaluation system.", "Runs AI call, SMS, email, nurture, booking, and reminders.", "Keeps conversations and lead history in one contact thread.", "Gives you visibility, control, and room to build custom workflows."];
const basicPricingFeatures = ["Pre-Built Home Evaluation Funnel", "Conversational SMS and Email AI Agents", "Anti-Ghosting Appointment Reminders", "Agent Accountability Loops", "Dynamic Deal Routing and Proposal Tracking", "Visual Pipeline Management", "Omni-Channel Inbox", "Website and Funnel Builder", "Email Campaigns and Social Media Planner"];
const advancedPricingFeatures = ["Everything in Basic", "Voice AI Engine with 6-attempt retry, 10 AM-9 PM", "6-Month Smart Nurture AI with 24 touchpoints", "Visual Workflow Builder", "Build Your Own AI Agents", "Reviews AI on auto-pilot", "AI Studio prompt-to-build", "White-glove onboarding and A2P handled for you"];
const faqItems = [["Is this just another CRM?", "No. A typical CRM gives you a place to store leads. FollowUpHub comes with real estate follow-up systems already built, tested, and mapped to how buyer and seller leads behave."], ["Will I lose control over my follow-up?", "No. You can see what the system is doing, review sequences, adjust timing, and override the automation. FollowUpHub handles execution while you stay in control."], ["Can I build custom workflows?", "Yes. The pre-built systems give you a head start, but FollowUpHub is built on an all-in-one CRM platform with room for custom automations and AI agents."], ["What happens to my existing CRM data?", "The FollowUpHub team handles migration at no additional charge, including contacts, pipelines, and history."], ["Will I still need my other tools?", "FollowUpHub is built to replace your CRM, automations, calendar systems, AI communication stack, SMS, and email platform in one place."], ["What happens after I request early access?", "The team reaches out directly to understand your lead types, current setup, and how FollowUpHub should fit your workflow."]];
const finalCtaSteps = ["Lead captured", "AI responds", "Nurture runs", "Appointment booked"];
const footerCompanyName = "AI Vaani Technology Corp.";
const footerEmail = "info@followuphub.ai";
const footerLegal = "\u00A9 2026 AI Vaani Technology Corp. \u00B7 Follow Up Hub Real Estate CRM \u00B7 All Rights Reserved.";
const paymentLinks = {
  advancedMonthly: "https://api.followuphub.ai/payment-link/6a50b8cdc981f3feae6e866c",
  advancedAnnual: "https://api.followuphub.ai/payment-link/6a50ecbba655fa0b802a3a0a",
  basicMonthly: "https://api.followuphub.ai/payment-link/6a50ecd6a655fa0b802a3a0b",
  basicAnnual: "https://api.followuphub.ai/payment-link/6a50ecf6a655fa0b802a3a0c"
};
export const HomepageDirectionAPremiumCleanSaaS = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [openFaq, setOpenFaq] = useState(0);
  const displayPrice = billing === "annual" ? "$499.90" : "$49.99";
  const displayPeriod = billing === "annual" ? "/year" : "/month";
  const billingNote = billing === "annual" ? "14-day free trial - yearly billing includes 2 months free" : "14-day free trial - monthly billing";
  const advancedBillingNote = billing === "annual" ? "14-day free trial - yearly billing includes 2 months free - $299 one-time setup - white-glove onboarding" : "14-day free trial - $299 one-time setup - white-glove onboarding";
  return <div className="min-h-screen w-full bg-[#FAFAF7] text-[#0E1116]">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6">
        <img className="h-10 w-auto object-contain" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/413863639787921408/415333103943446528/cc7cbfdae14a23b26f2da7b04f45028c60b97f5f22767597aea446dc5226a510.jpg" alt="FollowUpHub" />
        <div className="hidden items-center gap-8 text-sm font-medium text-[#5B6470] md:flex">
          <span>The Gap</span><span>How It Works</span><span>Features</span><span>Pricing</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://app.followuphub.ai/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#ECEBE6] bg-white px-5 py-3 text-sm font-semibold text-[#0E1116] transition hover:border-[#BFD0FF] hover:text-[#1F5FFF] active:scale-[0.98]">Sign In</a>
          <a href={paymentLinks.basicMonthly} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#1F5FFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1749CC] active:scale-[0.98]">Get Started</a>
        </div>
      </nav>

      <header className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#ECEBE6] bg-white px-4 py-2 text-sm font-semibold text-[#1F5FFF] shadow-sm">Early bird access now open</div>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-tight text-[#0E1116] md:text-7xl">Real estate follow-up, built before the lead goes cold.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5B6470] md:text-xl">FollowUpHub is an AI-powered CRM for agents who want a working follow-up system, not another empty database. It can call, text, email, nurture, and book buyer and seller leads using pre-built real estate workflows.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={paymentLinks.basicMonthly} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#1F5FFF] px-7 py-4 font-bold text-white shadow-[0_16px_48px_rgba(14,17,22,0.08)] transition hover:-translate-y-0.5 hover:bg-[#1749CC] active:scale-[0.98]">Get Started</a>
            <button className="rounded-full border border-[#ECEBE6] bg-white px-7 py-4 font-bold text-[#1F5FFF] transition hover:-translate-y-0.5 active:scale-[0.98]">See the system</button>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-3 gap-5 text-sm text-[#5B6470]">
            <div><strong className="block text-2xl text-[#1F5FFF]">&lt; 60s</strong><span>response time</span></div>
            <div><strong className="block text-2xl text-[#1F5FFF]">3</strong><span>AI channels coordinated</span></div>
            <div><strong className="block text-2xl text-[#1F5FFF]">6+ mo</strong><span>smart nurture</span></div>
          </div>
        </div>
        <div className="relative min-h-[660px]">
          <div className="absolute right-0 top-0 h-[570px] w-[88%] overflow-hidden rounded-[32px] bg-[#E8EEFF] shadow-[0_16px_48px_rgba(14,17,22,0.08)]">
            <img className="h-full w-full object-cover object-[52%_50%]" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/413863639787921408/413915435000549376/4df35ab504e007df31b3cc324153bdf908c0130758a2a5c63b4f3b01ad60a130.png" alt="Male and female real estate agents interacting with FollowUpHub AI product interface" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(250,250,247,0.04),rgba(31,95,255,0.10))]" />
          </div>
          <div className="absolute bottom-0 left-0 w-[46%] rounded-[24px] border border-[#ECEBE6] bg-white p-4 shadow-[0_16px_48px_rgba(14,17,22,0.08)]">
            <div className="mb-3 flex items-center justify-between"><span className="text-sm font-bold">Home Valuation lead</span><span className="rounded-full bg-[#E8FF5C] px-3 py-1 text-xs font-bold text-[#0E1116]">System active</span></div>
            {["Lead captured", "AI response queued", "Booking flow ready"].map((item, i) => <div key={item} className="mb-2 flex items-center gap-3 rounded-2xl bg-[#FAFAF7] p-3">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-[#1F5FFF] text-xs font-bold text-white">{i + 1}</div>
                <span className="text-sm font-semibold text-[#0E1116]">{item}</span>
              </div>)}
          </div>
        </div>
      </header>

      <main>
        <section className="border-y border-[#ECEBE6] bg-white py-6">
          <div className="mx-auto grid max-w-7xl gap-3 px-5 md:grid-cols-4">
            {proofPoints.map(([metric, label], index) => <div key={metric} className="group relative min-h-[112px] overflow-hidden rounded-2xl border border-[#ECEBE6] bg-white p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-[#BFD0FF] hover:shadow-[0_16px_48px_rgba(14,17,22,0.08)]">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#E8EEFF] opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#E8FF5C]" style={{
                animation: index === 3 ? "proofPulse 2s ease-in-out infinite" : undefined
              }} />
                  <strong className="font-bold text-[#1F5FFF]">{metric}</strong>
                </div>
                <p className="relative mt-2 text-sm leading-6 text-[#5B6470]">{label}</p>
              </div>)}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="font-bold text-[#1F5FFF]">The follow-up gap</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">The lead is not lost at capture. It is lost in the minutes and months after.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5B6470]">Real estate leads do not need more places to sit. They need fast contact, consistent nurture, and a clear path to booking.</p>
            <div className="relative mt-8 space-y-3 overflow-hidden rounded-[24px] bg-white p-4 shadow-[0_4px_16px_rgba(14,17,22,0.06)]">
              <div className="absolute bottom-4 left-8 top-4 w-px bg-[#ECEBE6]" />
              <div className="absolute left-8 top-4 h-24 w-px bg-[#1F5FFF]" style={{
              animation: "lineSweep 4s cubic-bezier(0.22,1,0.36,1) infinite"
            }} />
              {problemCards.map(([title, body], i) => <div key={title} className="relative grid grid-cols-[48px_1fr] gap-3 rounded-2xl bg-[#FAFAF7] p-3 transition duration-300 hover:-translate-y-1 hover:bg-[#E8EEFF]">
                  <div className="z-10 grid h-8 w-8 place-items-center rounded-full bg-[#1F5FFF] text-xs font-bold text-white">{i + 1}</div>
                  <p className="text-sm leading-6 text-[#5B6470]"><strong className="font-bold text-[#0E1116]">{title}</strong> {body}</p>
                </div>)}
            </div>
          </div>
          <div className="relative min-h-[620px] overflow-hidden rounded-[28px] bg-[#E8EEFF] shadow-[0_16px_48px_rgba(14,17,22,0.08)]">
            <img className="absolute inset-0 h-full w-full object-cover object-[50%_34%]" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/413863639787921408/414101247084339200/eab5f3214938fbd62a4774aca296f2980f6b99a8e7dcd1ce5f378da0dfee4e0f.png" alt="Two professional real estate agents looking at the viewer" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,247,0),rgba(31,95,255,0.10))]" />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_4px_16px_rgba(14,17,22,0.06)] backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5B6470]">While agents are with clients</p>
              <p className="mt-1 text-sm font-bold text-[#0E1116]">New leads still get a fast first touch.</p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#FAFAF7] py-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#E8EEFF,rgba(250,250,247,0))]" />
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-bold text-[#1F5FFF]">How it works</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0E1116] md:text-5xl">From a form fill to a <span className="relative inline-block">booked appointment<span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[#E8FF5C]" /></span>, without waiting on manual follow-up.</h2>
            </div>
            <div className="relative mt-12 overflow-hidden rounded-[32px] border border-white/70 bg-white/70 p-5 shadow-[0_16px_48px_rgba(14,17,22,0.08)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,238,255,0.78),rgba(250,250,247,0.78))]" />
              <div className="absolute left-6 top-6 rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1F5FFF] backdrop-blur-md">Human conversation</div>
              <div className="relative grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
                <div className="min-h-[320px] overflow-hidden rounded-[28px] bg-[#E8EEFF]">
                  <div className="relative h-full min-h-[320px]">
                    <img className="absolute inset-0 h-full w-full scale-105 object-cover object-[42%_58%] blur-[1px]" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/413863639787921408/414180657904898048/d0cbd8a635c992e2311fda3d7150d745fc21d6f18c99bdc6d32568548d97f8e1.png" alt="Real estate team smiling and working together" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,250,247,0.18),rgba(232,238,255,0.38))]" />
                    <div className="absolute bottom-6 left-6 rounded-2xl bg-white/82 px-4 py-3 shadow-[0_4px_16px_rgba(14,17,22,0.06)] backdrop-blur-xl">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5B6470]">While the team stays focused</p>
                      <p className="mt-1 text-sm font-bold text-[#0E1116]">FollowUpHub works the next step.</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[28px] bg-[#FAFAF7]/80 p-5">
                  <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-24 bg-[linear-gradient(90deg,#FAFAF7,rgba(250,250,247,0))] z-10" />
                  <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-24 bg-[linear-gradient(270deg,#FAFAF7,rgba(250,250,247,0))] z-10" />
                  <div className="flex w-max gap-3" style={{
                  animation: "processMarquee 42s linear infinite"
                }}>
                    {[...steps, ...steps].map(([step, body], i) => <div key={`${step}-${i}`} className="min-w-[228px] max-w-[228px] rounded-2xl bg-white p-5 shadow-[0_4px_16px_rgba(14,17,22,0.06)]">
                        <span className="text-xs font-bold text-[#1F5FFF]">0{i % steps.length + 1}</span>
                        <h3 className="mt-10 text-xl font-bold text-[#0E1116]">{step}</h3>
                        <p className="mt-3 text-sm leading-6 text-[#5B6470]">{body}</p>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="scroll-reveal">
            <p className="font-bold text-[#1F5FFF]">What you'll get</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">A working Home Evaluation system, not a blank CRM setup.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5B6470]">FollowUpHub includes the funnel, pipeline, AI follow-up, booking flow, reminders, and nurture needed to move a seller lead from form fill to appointment.</p>
          </div>
          <div className="scroll-reveal scroll-reveal-delay-1 rounded-[32px] border border-[#ECEBE6] bg-white p-5 shadow-[0_16px_48px_rgba(14,17,22,0.08)]">
            <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
              <div className="scroll-reveal scroll-reveal-delay-1 rounded-3xl bg-[#E8EEFF] p-5">
                <div className="mb-4 flex items-center justify-between"><span className="font-bold">Seller lead workflow</span><span className="rounded-full bg-[#E8FF5C] px-3 py-1 text-xs font-bold text-[#0E1116]">Live now</span></div>
                {["Home Valuation form submitted", "Pipeline record opened", "3-agent response sequence queued", "Voice AI attempt 1 of 6", "SMS and email thread created"].map(lead => <div key={lead} className="mb-3 rounded-2xl bg-white p-4 font-semibold">{lead}<div className="mt-2 h-2 w-2/3 rounded-full bg-[#BFD0FF]" /></div>)}
              </div>
              <div className="scroll-reveal scroll-reveal-delay-2 rounded-3xl bg-[linear-gradient(135deg,#1F5FFF,#3E7BFF)] p-5 text-white">
                <p className="text-sm font-bold text-white/75">Booked outcome</p>
                <h3 className="mt-12 text-3xl font-bold">Listing consultation</h3>
                <p className="mt-3 text-white/70">Calendar event created. Reminder sequence active. Agent outcome logging follows after the appointment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <img className="absolute inset-0 h-full w-full scale-105 object-cover object-[64%_48%] opacity-[0.58] blur-[0.5px]" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/413863639787921408/414756121023234048/23c8b7a80340e453ecd7eb239ebfca88834d3a92b44e71a41d1b15ab1b913faf.png" alt="Real estate team reviewing work together in a bright office" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF7]/92 via-[#FAFAF7]/72 to-[#FAFAF7]/42" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF7]/85 via-transparent to-[#FAFAF7]/82" />
          <div className="relative mx-auto max-w-7xl px-5">
            <p className="font-bold text-[#1F5FFF]">Platform</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">The CRM, communication stack, funnels, and booking flow in one place.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5B6470]">Use the pre-built system immediately, then expand with workflows, AI agents, reviews, campaigns, funnels, and your own automations as your operation grows.</p>
            <div className="mt-10 grid min-w-0 gap-4 md:grid-cols-2">
              {promotedPlatformFeatures.map(([title, body], index) => <div key={title} className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_24px_70px_-48px_rgba(14,17,22,0.45)] backdrop-blur">
                <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#1F5FFF]">{index === 0 ? "Written follow-up" : "Voice follow-up"}</p>
                    <h3 className="mt-5 max-w-full break-words text-2xl font-bold leading-tight text-[#0E1116] md:text-3xl">{title}</h3>
                    <p className="mt-4 max-w-xl break-words text-sm leading-6 text-[#5B6470] md:text-base md:leading-7">{body}</p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full bg-[#E8FF5C] px-3 py-1 text-xs font-bold text-[#0E1116]">{index === 0 ? "Same lead context" : "6-attempt logic"}</span>
                </div>
                {index === 0 ? <div className="mt-8 rounded-[18px] border border-[#ECEBE6] bg-[#FAFAF7] p-4">
                    <div className="flex items-center justify-between gap-3 border-b border-[#ECEBE6] pb-3">
                      <p className="text-sm font-bold">Lead context attached</p>
                      <span className="rounded-full bg-[#E8EEFF] px-3 py-1 text-xs font-bold text-[#1F5FFF]">SMS + Email + WhatsApp</span>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-[0.82fr_1.18fr]">
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#5B6470]">Funnel details</p>
                        <div className="mt-4 space-y-2">
                          {["Intent", "Timeline", "Property notes"].map(item => <div key={item} className="flex items-center justify-between gap-3">
                              <span className="text-xs font-bold text-[#0E1116]">{item}</span>
                              <span className="h-1.5 w-16 rounded-full bg-[#1F5FFF]" />
                            </div>)}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-4/5 rounded-2xl bg-white px-4 py-3 text-xs font-bold text-[#0E1116]">Response queued from the same lead record</div>
                        <div className="ml-auto w-4/5 rounded-2xl bg-[#1F5FFF] px-4 py-3 text-xs font-bold text-white">Follow-up stays coordinated across channels</div>
                      </div>
                    </div>
                  </div> : <div className="mt-8 rounded-[18px] border border-[#ECEBE6] bg-[#FAFAF7] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ECEBE6] pb-3">
                      <p className="text-sm font-bold">Respectful calling sequence</p>
                      <span className="rounded-full bg-[#E8EEFF] px-3 py-1 text-xs font-bold text-[#1F5FFF]">Retry logic active</span>
                    </div>
                    <div className="mt-5 flex items-center gap-2">
                      {[1, 2, 3, 4, 5, 6].map(step => <div key={step} className="min-w-0 flex-1">
                          <span className={`block h-2 rounded-full ${step <= 3 ? "bg-[#1F5FFF]" : "bg-[#D9DEEA]"}`} />
                          <p className="mt-2 text-center font-mono text-[10px] font-bold text-[#5B6470]">{step}</p>
                        </div>)}
                    </div>
                    <div className="mt-5 grid gap-2 sm:grid-cols-3">
                      {["Initiates contact", "Handles objections", "Calling windows"].map(item => <div key={item} className="rounded-xl bg-white px-3 py-3 text-xs font-bold text-[#0E1116]">{item}</div>)}
                    </div>
                  </div>}
                </div>)}
            </div>
            <div className="mt-4 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {remainingPlatformFeatures.map(([title, body], index) => <div key={title} className="group rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_18px_55px_-48px_rgba(14,17,22,0.42)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#C9D6FF] hover:bg-white hover:shadow-[0_22px_55px_-42px_rgba(31,95,255,0.65)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs font-bold text-[#1F5FFF]">0{index + 1}</span>
                  <span className="h-2 w-2 rounded-full bg-[#E8FF5C] ring-4 ring-[#F4FFC4]" />
                </div>
                <h3 className="mt-5 break-words font-bold leading-snug text-[#0E1116]">{title}</h3>
                <p className="mt-3 min-h-[4.5rem] break-words text-sm leading-6 text-[#5B6470]">{body}</p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-[#ECEBE6] pt-4">
                  {platformCardDetails[index].map(item => <span key={item} className="rounded-full bg-[#FAFAF7] px-3 py-1 text-xs font-bold text-[#1F5FFF]">{item}</span>)}
                </div>
                </div>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold text-[#1F5FFF]">Blank CRM vs FollowUpHub</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">A CRM stores the lead. FollowUpHub runs the follow-up.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5B6470]">A blank CRM gives you a place to keep the lead. FollowUpHub gives you the real estate follow-up system around it: AI call, SMS, email, nurture, booking, reminders, and one contact thread.</p>
          </div>
          <div className="relative mt-12 overflow-hidden rounded-[30px] border border-[#ECEBE6] bg-white shadow-[0_28px_90px_-62px_rgba(14,17,22,0.55)]">
            <div className="comparison-scan absolute inset-x-0 top-0 h-1 bg-[#E8FF5C]" />
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-[#ECEBE6] bg-[#FAFAF7] p-6 md:border-b-0 md:border-r md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold">Blank CRM</h3>
                  <span className="rounded-full border border-[#ECEBE6] bg-white px-3 py-1 text-xs font-bold text-[#5B6470]">Stores</span>
                </div>
                <div className="mt-7 space-y-3">
                  {blankComparisonItems.map((item, index) => <div key={item} className="comparison-muted-row flex gap-3 rounded-2xl border border-[#ECEBE6] bg-white p-4" style={{
                  animationDelay: `${index * 110}ms`
                }}>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F3EE] font-mono text-xs font-bold text-[#5B6470]">0{index + 1}</span>
                      <p className="text-sm leading-6 text-[#5B6470]">{item}</p>
                    </div>)}
                </div>
              </div>
              <div className="relative overflow-hidden bg-[#E8EEFF] p-6 md:p-8">
                <div className="absolute right-[-90px] top-[-120px] h-72 w-72 rounded-full bg-white/60" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold text-[#1F5FFF]">FollowUpHub</h3>
                    <span className="rounded-full bg-[#E8FF5C] px-3 py-1 text-xs font-bold text-[#0E1116]">Runs follow-up</span>
                  </div>
                  <div className="mt-7 space-y-3">
                    {hubComparisonItems.map((item, index) => <div key={item} className="comparison-active-row flex gap-3 rounded-2xl border border-[#BFD0FF] bg-white p-4 shadow-[0_18px_50px_-42px_rgba(31,95,255,0.75)]" style={{
                    animationDelay: `${index * 130}ms`
                  }}>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1F5FFF] font-mono text-xs font-bold text-white">0{index + 1}</span>
                        <p className="font-semibold leading-6 text-[#0E1116]">{item}</p>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-24">
          <div className="absolute inset-0 bg-[#E8EEFF]" />
          <div className="pricing-beam absolute left-1/2 top-0 h-full w-[42rem] -translate-x-1/2 bg-white/60" />
          <div className="relative mx-auto max-w-7xl text-center">
            <p className="font-bold text-[#1F5FFF]">Pricing</p>
            <h2 className="mx-auto mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">Start with the system agents usually have to build themselves.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5B6470]">Both plans include a 14-day free trial. Basic gives you the Complete Agent System. Advanced adds the full AI engine, 6-month Smart Nurture AI, and white-glove setup.</p>
            <div className="mt-8 inline-flex rounded-full border border-[#DCE4FF] bg-white p-1 shadow-[0_14px_45px_-36px_rgba(31,95,255,0.7)]">
              <button onClick={() => setBilling("monthly")} className={`rounded-full px-5 py-2 text-sm font-bold transition active:scale-[0.98] ${billing === "monthly" ? "bg-[#1F5FFF] text-white" : "text-[#5B6470] hover:text-[#1F5FFF]"}`}>Monthly</button>
              <button onClick={() => setBilling("annual")} className={`rounded-full px-5 py-2 text-sm font-bold transition active:scale-[0.98] ${billing === "annual" ? "bg-[#1F5FFF] text-white" : "text-[#5B6470] hover:text-[#1F5FFF]"}`}>Yearly - 2 months free</button>
            </div>
            <div className="mt-10 grid gap-5 text-left lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-w-0 rounded-[28px] border border-[#ECEBE6] bg-white p-7 shadow-[0_24px_80px_-62px_rgba(14,17,22,0.48)] transition duration-300 hover:-translate-y-1">
                <p className="font-bold text-[#1F5FFF]">Basic Plan</p>
                <h3 className="mt-3 text-2xl font-bold">Complete Agent System</h3>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight">{displayPrice}</span>
                  <span className="pb-2 text-base font-semibold text-[#5B6470]">{displayPeriod}</span>
                </div>
                <p className="mt-4 min-h-[3rem] text-sm leading-6 text-[#5B6470]">{billingNote} - self-serve onboarding</p>
                <div className="mt-6 space-y-4">
                  {basicPricingFeatures.map(item => <div key={item} className="flex gap-3 border-t border-[#ECEBE6] pt-4">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E8FF5C] ring-4 ring-[#F4FFC4]" />
                      <p className="font-semibold leading-6 text-[#0E1116]">{item}</p>
                    </div>)}
                </div>
                <a href={billing === "annual" ? paymentLinks.basicAnnual : paymentLinks.basicMonthly} target="_blank" rel="noopener noreferrer" className="mt-7 block w-full rounded-full bg-[#1F5FFF] py-4 text-center font-bold text-white transition hover:bg-[#1749CC] active:scale-[0.98]">Get started</a>
              </div>
              <div className="relative min-w-0 rounded-[28px] border-2 border-[#1F5FFF] bg-white p-7 shadow-[0_30px_90px_-54px_rgba(31,95,255,0.75)] transition duration-300 hover:-translate-y-1">
                <div className="pricing-orbit absolute right-5 top-5 h-14 w-14 rounded-full border border-[#C9D6FF]" />
                <div className="relative inline-flex rounded-full bg-[#E8FF5C] px-3 py-1 text-xs font-bold text-[#0E1116]">Recommended</div>
                <p className="mt-4 font-bold text-[#1F5FFF]">Advanced Plan</p>
                <h3 className="mt-3 text-2xl font-bold">Full AI Engine</h3>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight">{displayPrice}</span>
                  <span className="pb-2 text-base font-semibold text-[#5B6470]">{displayPeriod}</span>
                </div>
                <p className="mt-4 min-h-[3rem] text-sm leading-6 text-[#5B6470]">{advancedBillingNote}</p>
                <div className="mt-6 space-y-4">
                  {advancedPricingFeatures.map((item, index) => <div key={item} className="flex gap-3 border-t border-[#ECEBE6] pt-4">
                      <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${index < 3 ? "bg-[#1F5FFF] ring-4 ring-[#E8EEFF]" : "bg-[#E8FF5C] ring-4 ring-[#F4FFC4]"}`} />
                      <p className="font-semibold leading-6 text-[#0E1116]">{item}</p>
                    </div>)}
                </div>
                <a href={billing === "annual" ? paymentLinks.advancedAnnual : paymentLinks.advancedMonthly} target="_blank" rel="noopener noreferrer" className="mt-7 block w-full rounded-full bg-[#E8FF5C] py-4 text-center font-bold text-[#0E1116] transition hover:bg-[#DDF352] active:scale-[0.98]">Get Started</a>
              </div>
            </div>
            <p className="mt-8 text-center font-semibold text-[#5B6470]">Early access is limited and closes once we hit capacity.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold text-[#1F5FFF]">FAQ</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Questions agents ask before switching.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5B6470]">Clear answers for agents comparing FollowUpHub to a blank CRM, scattered tools, or a follow-up system they still have to build themselves.</p>
          </div>
          <div className="faq-glow relative mt-10 overflow-hidden rounded-[32px] border border-[#ECEBE6] bg-white p-3 shadow-[0_28px_90px_-64px_rgba(14,17,22,0.52)]">
            <div className="absolute right-[-140px] top-[-160px] h-80 w-80 rounded-full bg-[#E8EEFF]" />
            <div className="relative divide-y divide-[#ECEBE6] overflow-hidden rounded-[24px] border border-[#ECEBE6] bg-white">
              {faqItems.map(([q, answer], i) => {
              const active = openFaq === i;
              return <button key={q} onClick={() => setOpenFaq(active ? -1 : i)} className={`block w-full p-6 text-left transition duration-300 ${active ? "bg-[#FAFAF7]" : "bg-white hover:bg-[#FAFAF7]"}`}>
                    <div className="flex items-start justify-between gap-5">
                      <div className="min-w-0">
                        <p className="font-mono text-xs font-bold text-[#1F5FFF]">0{i + 1}</p>
                        <h3 className="mt-3 break-words text-xl font-bold text-[#0E1116]">{q}</h3>
                      </div>
                      <span className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${active ? "bg-[#1F5FFF]" : "bg-[#E8EEFF]"}`}>
                        <span className={`absolute h-0.5 w-4 rounded-full transition ${active ? "bg-white" : "bg-[#1F5FFF]"}`} />
                        <span className={`absolute h-4 w-0.5 rounded-full transition ${active ? "scale-y-0 bg-white" : "bg-[#1F5FFF]"}`} />
                      </span>
                    </div>
                    <div className={`grid transition-all duration-500 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="mt-5 max-w-3xl leading-7 text-[#5B6470]">{answer}</p>
                      </div>
                    </div>
                  </button>;
            })}
            </div>
          </div>
        </section>

        <section className="px-5 pb-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[36px] border border-[#17243A] bg-[#071120] px-6 py-16 text-center text-white shadow-[0_34px_110px_-70px_rgba(7,17,32,0.92)] md:px-10">
              <img className="absolute inset-0 h-full w-full object-cover object-[58%_48%] opacity-[0.34] grayscale" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/413863639787921408/415236987721781248/23c8b7a80340e453ecd7eb239ebfca88834d3a92b44e71a41d1b15ab1b913faf.png" alt="Real estate team in a dark follow-up scene" />
              <img className="absolute bottom-0 left-[-8%] hidden h-[76%] w-[36%] object-cover object-left opacity-[0.28] mix-blend-screen blur-[0.5px] md:block" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/413863639787921408/415236987721781248/4df35ab504e007df31b3cc324153bdf908c0130758a2a5c63b4f3b01ad60a130.png" alt="Real estate agent silhouette on the left" />
              <img className="absolute bottom-0 right-[-10%] hidden h-[76%] w-[38%] scale-x-[-1] object-cover object-right opacity-[0.26] mix-blend-screen blur-[0.5px] md:block" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/413863639787921408/415236987721781248/4df35ab504e007df31b3cc324153bdf908c0130758a2a5c63b4f3b01ad60a130.png" alt="Real estate agent silhouette on the right" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,95,255,0.28),transparent_34%),linear-gradient(90deg,rgba(7,17,32,0.96),rgba(7,17,32,0.8)_28%,rgba(7,17,32,0.72)_50%,rgba(7,17,32,0.82)_72%,rgba(7,17,32,0.96))]" />
              <div className="relative mx-auto max-w-5xl">
                <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                  {finalCtaSteps.map((step, index) => <div key={step} className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur">
                        <span className={`h-2 w-2 rounded-full ${index === 0 ? "bg-[#16A34A]" : index === 3 ? "bg-[#8CC63F]" : "bg-[#1F5FFF]"}`} />
                        {step}
                      </span>
                      {index < finalCtaSteps.length - 1 && <span className="hidden text-white/30 sm:inline">-&gt;</span>}
                    </div>)}
                </div>
                <h2 className="mx-auto mt-12 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                  The follow-up gap is real.<br />
                  <span className="text-[#1F5FFF]">The fix is here.</span>
                </h2>
                <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/66">Stop letting leads die between capture and conversation. Plug into the system built to keep them moving - automatically.</p>
                <a href={paymentLinks.basicMonthly} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block rounded-xl bg-[#1F5FFF] px-8 py-5 font-bold text-white shadow-[0_16px_46px_rgba(31,95,255,0.34)] transition hover:bg-[#1749CC] active:scale-[0.98]">Get Started <span className="ml-2">-&gt;</span></a>
                <p className="mt-6 text-sm font-semibold text-white/40">14-day free trial - Live on day one</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-5 pb-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[34px] border border-[#ECEBE6] bg-white px-6 py-9 text-[#0E1116] shadow-[0_24px_80px_-66px_rgba(14,17,22,0.45)]">
              <div className="absolute right-[-7rem] top-[-9rem] h-72 w-72 rounded-full bg-[#E8EEFF]" />
              <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <img className="h-10 w-auto object-contain" src="https://storage.googleapis.com/storage.magicpath.ai/component-assets/413863639787921408/415333103943446528/cc7cbfdae14a23b26f2da7b04f45028c60b97f5f22767597aea446dc5226a510.jpg" alt="FollowUpHub" />
                    <div>
                      <p className="text-sm font-semibold text-[#5B6470]">{footerCompanyName}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <a href={`mailto:${footerEmail}`} className="font-semibold text-[#1F5FFF] transition hover:text-[#1749CC]">{footerEmail}</a>
                    <a href="/privacy-policy" className="text-sm font-semibold text-[#5B6470] transition hover:text-[#1F5FFF]">Privacy Policy</a>
                    <a href="/terms-of-service" className="text-sm font-semibold text-[#5B6470] transition hover:text-[#1F5FFF]">Terms of Service</a>
                  </div>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-[#5B6470] md:text-right">{footerLegal}</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>;
};