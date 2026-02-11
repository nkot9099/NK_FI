"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ru">("en");
  const toggleLang = () => setLang(lang === "en" ? "ru" : "en");

  return (
    <main className="min-h-screen text-[#101015] bg-[#F4F1EC]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F4F1EC]/80 backdrop-blur-sm border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg bg-gradient-to-r from-[#C8A165] via-[#3A6FA3] to-[#B3D0C6] bg-clip-text text-transparent animate-[hue_12s_linear_infinite]">
           NKFI
          </div>
          <nav className="flex gap-6 text-sm text-[#1C1F2E] items-center">
            <a href="/architecture" className="hover:opacity-70 transition">Financial architecture</a>
            <a href="/m&a" className="hover:opacity-70 transition">Transaction support</a>
            <a href="/advanced_capital_tools" className="hover:opacity-70 transition">Capital intelligence</a>
            <a href="https://t.me/nk_finlab" className="hover:opacity-70 transition">Telegram</a>
          </nav>
        </div>
        <style>{`
          @keyframes hue {
            0%,100% { filter: hue-rotate(0deg); }
            50% { filter: hue-rotate(20deg); }
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-[hue_12s_linear_infinite] { animation: none !important; }
          }
        `}</style>
      </header>



        <section className="relative flex flex-col items-center justify-center overflow-hidden py-40">
  {/* Фон */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"

  />

  <div className="relative max-w-6xl mx-auto px-6 text-center z-10 flex flex-col items-center">

    {/* Логотип */}
    <img 
      src="/logo.bmp"
      alt="NKFI Logo"
      className="h-16 md:h-20 mb-8 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
    />

    {/* H1 с блеском и shimmer */}
    <div className="relative inline-block mb-2">
      {/* Glow под текстом */}
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#3A6FA3] via-[#C8A165] to-[#B3D0C6] blur-2xl opacity-40"></span>

      {/* Основной текст */}
      <h1 className="relative inline-block text-5xl md:text-5xl lg:text-5xl font-medium text-transparent bg-clip-text
                     bg-gradient-to-r from-[#3A6FA3] via-[#C8A165] to-[#B3D0C6] animate-textReveal overflow-hidden">
        NK FINANCIAL INTELLIGENCE
        {/* Shine */}
        <span className="absolute top-0 left-[-100%] w-[60%] h-full bg-white/50 transform rotate-12 blur-md animate-shine pointer-events-none"></span>
      </h1>
    </div>

    {/* Подзаголовок */}
    <p className="text-lg md:text-xl text-[#6F8F96] max-w-3xl leading-relaxed mb-10">
      External strategic finance brain for companies and capital owners
    </p>


<div className="flex flex-col sm:flex-row gap-4">
  <a
    href="#contact"
    className="
      inline-flex items-center justify-center 
      rounded-2xl 
      px-5 py-4 md:px-8 md:py-2 
      text-sm md:text-base font-semibold text-white 
      bg-gradient-to-r from-[#3A6FA3] via-[#B3D0C6] to-[#C8A165] 
      shadow-lg shadow-[#3A6FA3]/40 
      transition-all duration-300 ease-out 
      transform hover:scale-105 hover:brightness-110
      relative overflow-hidden
    "
  >
    Discuss the Project
    {/* subtle shine animation */}
    <span className="absolute -top-1 left-0 w-1/2 h-full bg-white opacity-10 rotate-12 animate-shine pointer-events-none"></span>
  </a>
</div>



  </div>
</section>


     








      {/* About / Services */}
<section
  id="Services"
  className="relative isolate overflow-hidden reveal"
>
  {/* Динамический фон */}
  <div
    aria-hidden
    className="absolute inset-0 -z-10 animate-[luxuryShift_20s_ease-in-out_infinite]"
    style={{
      background: `
        radial-gradient(900px 600px at 10% 0%, rgba(200,161,101,.20), transparent 60%),
        radial-gradient(800px 520px at 95% 100%, rgba(179,208,198,.22), transparent 55%),
        conic-gradient(from 210deg at 70% 10%, rgba(58,111,163,.18), rgba(125,158,165,.18), rgba(58,111,163,.18)),
        linear-gradient(180deg, #0B0C2A 0%, #1C1F2E 45%, #0B0C2A 100%)
      `,
      maskImage:
        "radial-gradient(1200px 600px at 50% -10%, #000 55%, transparent 65%), linear-gradient(#000,#000)",
      WebkitMaskComposite: "source-over",
      maskComposite: "add",
    }}
  />

  {/* Акценты света */}
  <div
    aria-hidden
    className="absolute -top-24 -left-24 h-[420px] w-[420px] -z-10 blur-3xl opacity-25"
    style={{ background: "radial-gradient(closest-side, rgba(200,161,101,.30), transparent)" }}
  />
  <div
    aria-hidden
    className="absolute -bottom-20 -right-20 h-[520px] w-[520px] -z-10 blur-3xl opacity-20"
    style={{ background: "radial-gradient(closest-side, rgba(58,111,163,.35), transparent)" }}
  />

  <style>{`
    @keyframes luxuryShift {
      0%, 100% { filter: hue-rotate(0deg) brightness(1); }
      50% { filter: hue-rotate(12deg) brightness(1.06); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-[luxuryShift_20s_ease-in-out_infinite] { animation: none !important; }
    }
  `}</style>

  {/* Контейнер */}
  <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-24 md:py-32 grid md:grid-cols-2 gap-12 lg:gap-16">

    {/* LEFT: текст + фичи */}
    <div>
      <h2 className="text-[#B3D0C6] text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
        <span className="material-symbols-outlined text-[#C8A165] text-[22px]">lightbulb</span>
        About
      </h2>
      <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
        Strategic Finance Mindset
      </h3>
      <p className="mt-4 text-[#EAEAEA]/90 leading-relaxed text-[15px]">
        N&K Financial Intelligence is an independent boutique advisory practice providing strategic finance support to mid-market companies, family offices, and professional investors facing complex capital and ownership decisions.
        <br />
        The firm focuses on the design of robust financial architecture, advanced financial modelling, transaction structuring, and selective support in complex capital situations where standard corporate finance solutions are insufficient.
        Services are provided on a strictly advisory and non-executional basis.
      </p>

      {/* Фичи */}
      <ul className="mt-6 grid sm:grid-cols-2 gap-4">
        {[
          { t: "Senior-level advisory", s: "Engagements led by a CFA charterholder with hands-on experience in strategic finance and capital allocation." },
          { t: "Independent thinking", s: "No product sales, no execution incentives, advice aligned solely with client objectives."},
          { t: "Decision-oriented output", s: "Clear financial logic, transparent models, actionable recommendations for owners and boards." },
          { t: "Boutique focus", s: "Selective client base, deep involvement in each mandate." },
        ].map((b, i) => (
          <li key={i} className="group rounded-2xl bg-white/[.03] ring-1 ring-white/10 p-4 hover:bg-white/[.05] hover:ring-[#C8A165]/30 transition">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                style={{ background: "conic-gradient(from 140deg, rgba(200,161,101,.85), rgba(58,111,163,.85))" }}
              >
                <span className="material-symbols-outlined text-white text-[16px]">check</span>
              </span>
              <div>
                <p className="text-[#EAEAEA] text-[15px] font-medium">{b.t}</p>
                <p className="text-[#7D9EA5] text-[12px] mt-0.5">{b.s}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT: карточка с секторами */}
    <div className="rounded-3xl bg-white/[.05] ring-1 ring-white/10 p-6 md:p-8 backdrop-blur-sm relative max-w-lg mx-auto md:mx-0">
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl" style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.06), 0 0 0 1px rgba(255,255,255,.06)" }} />

      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="material-symbols-outlined text-[#C8A165] text-2xl">account_tree</span>
          Cost-efficient alternative to large advisory platforms
        </h3>
        <span className="text-[11px] text-[#7D9EA5] uppercase tracking-wide">
          sectors we work in
        </span>
      </div>

      <p className="mt-2 text-[#7D9EA5] text-sm">
        Mid & big-sized companies, Family offices, Financial institutions
      </p>

      <div className="mt-5 grid sm:grid-cols-2 gap-3">
        {[
          { icon: "store", name: "Consumer & Retail" },
          { icon: "construction", name: "Industrial & Manufacturing" },
          { icon: "local_shipping", name: "Logistics & Transportation" },
          { icon: "medical_services", name: "Healthcare & Pharma" },
          { icon: "energy_savings_leaf", name: "Energy & Utilities" },
          { icon: "science", name: "Technology & Software" },
          { icon: "agriculture", name: "Agriculture & Food" },
          { icon: "apartment", name: "Real Estate & Construction" },
          { icon: "finance", name: "Financial Services & Insurance" },
          { icon: "eco", name: "Environmental & Cleantech" }
        ].map((s) => (
          <div key={s.name} className="group relative flex items-center gap-3 rounded-2xl px-3 py-3 bg-white/[.06] ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/[.09] hover:ring-[#3A6FA3]/30 transition">
            <span className="material-symbols-outlined text-[#B3D0C6] text-[20px] group-hover:text-white transition-transform group-hover:scale-110">{s.icon}</span>
            <span className="text-[13px] text-[#EAEAEA] group-hover:text-white font-medium">{s.name}</span>
            <span aria-hidden className="absolute inset-y-1 left-1 w-[2px] rounded-full opacity-50 group-hover:opacity-80 transition" style={{ background: "linear-gradient(180deg, rgba(200,161,101,.70), rgba(58,111,163,.70))" }} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-4 text-[12px] text-[#7D9EA5]">
        <span className="inline-flex items-center gap-1">
          <span className="material-symbols-outlined text-[#C8A165] text-[18px]">bolt</span>
          fast structuring
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="material-symbols-outlined text-[#C8A165] text-[18px]">verified</span>
          institutional quality
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="material-symbols-outlined text-[#C8A165] text-[18px]">handshake</span>
          aligned incentives
        </span>
      </div>
    </div>

  </div>
</section>

    {/* Services */}
<section
  id="services"
  className="relative isolate overflow-hidden border-t border-[#EAEAEA] bg-gradient-to-b from-[#F4F1EC] via-[#EAEAEA] to-[#F4F1EC] reveal"
>
  {/* Фон */}
  <div
    aria-hidden
    className="absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(700px 400px at 5% 10%, rgba(200,161,101,.10), transparent 60%), radial-gradient(700px 400px at 95% 100%, rgba(58,111,163,.10), transparent 60%)",
    }}
  />

  <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
    {/* Заголовок */}
    <div className="flex items-center justify-between gap-6 flex-wrap">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#101015] flex items-center gap-2">
        <span className="material-symbols-outlined text-[#C8A165] text-[30px]">work</span>
        Three core products
      </h2>
      <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-white shadow-sm ring-1 ring-[#EAEAEA] px-3 py-1.5 text-[12px] text-[#1C1F2E]">
        <span className="material-symbols-outlined text-[#3A6FA3] text-[18px]">verified</span>
        Institutional quality
      </span>
    </div>

    <p className="mt-3 max-w-3xl text-[#7D9EA5]">
      We span our services from financial architecture readiness to deal execution and complex quantitative solutions.
    </p>

    {/* Карточки */}
    <div className="mt-10 grid md:grid-cols-3 gap-8">
      {/* Financial architecture card */}
      <a
        href="/m&a"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative rounded-3xl border border-[#EAEAEA] bg-white shadow-sm p-6 md:p-7 transition-all duration-300
                   hover:shadow-2xl hover:-translate-y-2 hover:border-[#C8A165]/50"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#C8A165] text-[28px]">bar_chart</span>
            <h3 className="text-lg md:text-xl font-semibold text-[#101015]">Financial architecture</h3>
          </div>
          <span className="text-[11px] uppercase tracking-wide text-[#7D9EA5]">Tier 1</span>
        </div>
        <p className="text-[#1C1F2E] mb-4">
          A foundational layer that makes the business investable and manageable
        </p>
        <ul className="list-disc list-inside text-[#1C1F2E] space-y-1 text-sm">
          <li>ERP-data systematization and automatization</li>
          <li>Management reporting with proper consolidation and ICO-margin recognition based on IFRS-principles</li>
          <li>Vendor-side financial due diligence</li>
          <li>Advanced financial modeling (granular, driver-based, working capital and inventory roll-forwards)</li>
          <li>Valuation (DCF, comps, scenario-based)</li>
          <li>Investment memo, strategy and feasibility study (only financial part)</li>
          <li>Financial oversight through NED position</li>
        </ul>
      </a>

      {/* Transaction Advisory card */}
      <a
        href="/m&a"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative rounded-3xl border border-[#EAEAEA] bg-white shadow-sm p-6 md:p-7 transition-all duration-300
                   hover:shadow-2xl hover:-translate-y-2 hover:border-[#3A6FA3]/40"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#3A6FA3] text-[28px]">analytics</span>
            <h3 className="text-lg md:text-xl font-semibold text-[#101015]">Transaction Advisory</h3>
          </div>
          <span className="text-[11px] uppercase tracking-wide text-[#7D9EA5]">Tier 2</span>
        </div>
        <p className="text-[#1C1F2E] mb-4">End-to-end transaction execution support</p>
        <ul className="list-disc list-inside text-[#1C1F2E] space-y-1 text-sm">
          <li>Support in TS / SPA / SHA negotiations</li>
          <li>Buy-side and sell-side due diligence support</li>
          <li>Data room structuring and diligence process management</li>
        </ul>
      </a>

      {/* Advanced capital tools card */}
      <a
        href="/advanced_capital_tools"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative rounded-3xl border border-[#EAEAEA] bg-white shadow-sm p-6 md:p-7 transition-all duration-300
                   hover:shadow-2xl hover:-translate-y-2 hover:border-[#C8A165]/50"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#C8A165] text-[28px]">insights</span>
            <h3 className="text-lg md:text-xl font-semibold text-[#101015]">Advanced capital tools</h3>
          </div>
          <span className="text-[11px] uppercase tracking-wide text-[#7D9EA5]">Tier 3</span>
        </div>
        <p className="text-[#1C1F2E] mb-4">Quant engines for volatile world</p>
        <ul className="list-disc list-inside text-[#1C1F2E] space-y-1 text-sm">
          <li>Portfolio construction and optimization</li>
          <li>Credit risk models</li>
          <li>Market risk models</li>
          <li>Derivatives valuations</li>
          <li>Hedging strategies</li>
        </ul>
      </a>
    </div>
  </div>
</section>






{/* Contact */}
      <section id="contact" className="relative isolate overflow-hidden reveal">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 400px at 10% 20%, rgba(200,161,101,0.14), transparent 60%), radial-gradient(900px 600px at 90% 100%, rgba(58,111,163,0.18), transparent 55%), linear-gradient(180deg, #0B0C2A 0%, #1C1F2E 100%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Title + pitch */}
            <div className="md:col-span-2">
              <h2 className="text-[#B3D0C6] text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C8A165] text-[22px]">mail</span>
                Contact
              </h2>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
                Let’s build real value
              </h3>
              <p className="mt-3 text-[#EAEAEA]/90 leading-relaxed">
                Nikita Katiev, CFA is a strategic finance advisor and investment banker with over 12 years of experience across investment banking, M&A advisory, capital markets, and financial analysis.
                <br></br>Cyprus, Limassol, adress
              </p>
              NK Financial Architecture LTD, Cyprus
            </div>

            {/* Contact card */}
            <div className="md:col-span-3 rounded-3xl bg-white/[.05] ring-1 ring-white/10 p-5 md:p-6 backdrop-blur-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="rounded-2xl bg-white/[.05] ring-1 ring-white/10 p-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#B3D0C6] text-[20px]">alternate_email</span>
                    <span className="text-[#EAEAEA] text-sm font-medium">Personal E-mail</span>
                  </div>
                  <a
                    href="mailto:nkot9099@gmail.com"
                    className="mt-1 inline-block text-[13px] text-[#EAEAEA] hover:text-white hover:underline"
                  >
                    nkot9099@gmail.com
                  </a>
                </div>

                {/* Telegram DM */}
                <div className="rounded-2xl bg-white/[.05] ring-1 ring-white/10 p-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#B3D0C6] text-[20px]">send</span>
                    <span className="text-[#EAEAEA] text-sm font-medium">Personal Telegram</span>
                  </div>
                  <a
                    href="https://t.me/nkg909"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-[13px] text-[#B3D0C6] hover:text-white hover:underline"
                  >
                    @nkg909
                  </a>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:nkot9099@gmail.com?subject=N%26K%20FinLab%20—%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full text-white text-sm px-5 py-2.5 transition
                             bg-[#3A6FA3] hover:brightness-[1.06] shadow-[0_10px_24px_rgba(58,111,163,0.25)]
                             ring-1 ring-[#3A6FA3]/30"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  Email me
                </a>
                <a
                  href="https://t.me/nkg909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border text-sm px-5 py-2.5 transition
                             border-[#B3D0C6]/40 bg-white/[.02] text-[#B3D0C6] hover:text-white hover:bg-white/[.06]"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  DM on Telegram
                </a>
                <a
                  href="https://t.me/nk_finlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border text-sm px-5 py-2.5 transition
                             border-white/10 bg-white/[.02] text-[#EAEAEA] hover:text-white hover:bg-white/[.06]"
                >
                  <span className="material-symbols-outlined text-[18px]">forum</span>
                  @nk_finlab channel
                </a>
              </div>
            </div>
          </div>

          {/* Ethics + copyright */}
          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-2 text-[12px] leading-relaxed text-[#7D9EA5]">
              <span className="material-symbols-outlined text-[#C8A165] text-[18px] mt-[1px]">verified_user</span>
              <p>
                We adhere to the{" "}
                <a
                  href="https://www.cfainstitute.org/en/ethics/codes/ethics-code-standards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B3D0C6] hover:text-white hover:underline"
                >
                  CFA Institute Code of Ethics and Standards of Professional Conduct
                </a>
                . Integrity, transparency, and professionalism guide our work.
              </p>
            </div>

            <div className="text-[12px] text-[#7D9EA5]">
              © {new Date().getFullYear()} N&K FinLab. All rights reserved.
            </div>
          </div>
        </div>
      </section>





    </main>
  );
}
