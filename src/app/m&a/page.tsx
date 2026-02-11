"use client";

import { useState } from "react";

export default function TransactionSupportPage() {
  const [lang, setLang] = useState<"en" | "ru">("ru");
  const toggleLang = () => setLang(lang === "en" ? "ru" : "en");

  const steps = [
    {
      title: "Step 1 — Diligence Process Support",
      objective: "control information flow and interpretation",
      details: [
        "Buy-side and sell-side diligence support",
        "Management assistance during Q&A sessions",
        "Financial issues contextualization",
        "Coordination with legal and tax advisors",
      ],
      outcome: "Findings are explained, not weaponized",
    },
    {
      title: "Step 2 — Transaction Mechanics & Economics",
      objective: "protect value in deal mechanics",
      details: [
        "Working capital mechanisms and targets",
        "Net debt definitions and adjustments",
        "EBITDA normalization logic",
        "Earn-outs, escrows and holdbacks economics",
      ],
      outcome: "Management understands what drives cash at closing",
    },
    {
      title: "Step 3 — TS / SPA / SHA Financial Support",
      objective: "align documents with deal economics",
      details: [
        "Support during TS / SPA / SHA negotiations",
        "Review of financial definitions and schedules",
        "Consistency between model, diligence and legal docs",
        "Identification of economically adverse clauses",
      ],
      outcome: "No surprises hidden in the fine print",
    },
    {
      title: "Step 4 — Process & Closing Support",
      objective: "ensure smooth execution",
      details: [
        "Data room structuring and management",
        "Support through signing and closing",
        "Final economics reconciliation",
        "Closing deliverables review",
      ],
      outcome: "Faster closing, fewer last-minute concessions",
    },
  ];

  return (
    <main className="min-h-screen text-[#101015] bg-[#F4F1EC]">
      {/* Header — тот же стиль */}
      <header className="sticky top-0 z-50 bg-[#F4F1EC]/80 backdrop-blur-sm border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg bg-gradient-to-r from-[#C8A165] via-[#3A6FA3] to-[#B3D0C6] bg-clip-text text-transparent animate-[hue_12s_linear_infinite]">
            N&K
          </div>
          <nav className="flex gap-6 text-sm text-[#1C1F2E] items-center">
            <a href="/" className="hover:opacity-70 transition">Main Page</a>
            <a href="/architecture" className="hover:opacity-70 transition">Financial architecture</a>
            <a href="/m&a" className="hover:opacity-70 transition font-medium text-[#3A6FA3]">
              Transaction support
            </a>
            <a href="/advanced_capital_tools" className="hover:opacity-70 transition">Advanced capital tools</a>
            <a href="https://t.me/nk_finlab" className="hover:opacity-70 transition">Telegram</a>
            <button
              onClick={toggleLang}
              className="ml-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-[#EAEAEA] text-xs font-medium hover:bg-white/80 transition"
            >
              {lang === "en" ? "RU" : "EN"}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(1200px 600px at 60% 10%, rgba(58,111,163,0.13), transparent 60%), radial-gradient(900px 500px at 20% 80%, rgba(200,161,101,0.11), transparent 60%), #F4F1EC",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#3A6FA3] via-[#C8A165] to-[#B3D0C6] bg-clip-text text-transparent">
              Transaction Advisory
            </span>
            <br className="hidden md:block mt-2" />
            <span className="text-3xl md:text-4xl opacity-90 block">Protecting Value & Execution</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-[#6F8F96] max-w-3xl mx-auto">
            Supporting execution, protecting value and reducing deal risk
          </p>
        </div>
      </section>

      {/* Problem block */}
      <section className="relative py-16 border-t border-[#EAEAEA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-white shadow-sm border border-[#EAEAEA] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#101015]">
              Even well-prepared deals lose value during execution
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                "Terms shift late in the process",
                "Diligence findings are used to reprice the deal",
                "Working capital mechanisms are misunderstood",
                "Management loses control of the process",
                "Advisors focus on documents, not economics",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#C8A165] text-xl mt-0.5">×</span>
                  <p className="text-[#1C1F2E] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xl font-medium text-[#3A6FA3] flex items-center gap-2">
              <span className="material-symbols-outlined">trending_down</span>
              Результат: valuation leakage, delayed closing, unfavorable terms
            </p>
          </div>
        </div>
      </section>

      {/* What is Transaction Advisory */}
      <section className="relative py-20 bg-gradient-to-b from-[#F4F1EC] via-[#EAEAEA]/30 to-[#F4F1EC]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-[#EAEAEA] bg-white shadow-sm p-8 md:p-10">
            <h2 className="text-3xl font-semibold text-[#101015] mb-6">
              What is Transaction Advisory
            </h2>

            <p className="text-lg leading-relaxed text-[#1C1F2E] mb-8">
              Transaction Advisory bridges the gap between deal preparation and deal closing.
            </p>

            <div className="space-y-4">
              {[
                "Economic intent survives legal documentation",
                "Diligence findings are properly contextualized",
                "Financial mechanics are fully understood by management",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#C8A165] text-2xl">•</span>
                  <p className="text-[#1C1F2E] text-lg">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-xl font-medium text-[#3A6FA3] flex items-center gap-2">
              <span className="material-symbols-outlined">gavel</span>
              The goal is not documentation. The goal is <span className="text-[#101015]">economic outcome</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-[#101015]">
            Transaction Advisory Process
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative rounded-3xl border border-[#EAEAEA] bg-white shadow-sm p-8 hover:border-[#C8A165]/40 hover:shadow-md transition-all group"
              >
                <div className="absolute -top-5 -left-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C8A165] to-[#3A6FA3] flex items-center justify-center text-white font-bold text-2xl shadow-md">
                  {i + 1}
                </div>

                <h3 className="text-2xl font-semibold text-[#101015] mb-4 mt-4">{step.title}</h3>

                <p className="text-[#6F8F96] italic mb-6">Objective: {step.objective}</p>

                <ul className="space-y-3 text-[#1C1F2E]">
                  {step.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-[#C8A165] mt-1">→</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[#EAEAEA]">
                  <p className="text-[#3A6FA3] font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Outcome: {step.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-20 bg-gradient-to-b from-[#F4F1EC] via-[#EAEAEA]/20 to-[#F4F1EC] border-t border-[#EAEAEA]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[#101015]">
            What the client ultimately receives
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Full visibility into deal economics",
              "Confidence in financial mechanics",
              "Reduced risk of valuation leakage",
              "Advisors aligned with economic outcomes",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-[#EAEAEA] p-7 flex items-start gap-4 hover:border-[#C8A165]/40 transition-all"
              >
                <span className="text-[#C8A165] text-3xl">✓</span>
                <p className="text-lg text-[#1C1F2E]">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-2xl font-medium text-[#3A6FA3]">
            This is not “support”.<br />
            This is <span className="text-[#101015]">deal protection</span>.
          </p>
        </div>
      </section>

      {/* When it's critical */}
      <section className="relative py-20 border-t border-[#EAEAEA]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#101015]">
            When Transaction Advisory is especially critical
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Deals are complex or competitive",
              "Working capital is material",
              "Earn-outs or deferred consideration exist",
              "Management has limited transaction experience",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-[#EAEAEA] p-6 text-center hover:border-[#C8A165]/40 transition-all"
              >
                <p className="text-[#1C1F2E] font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}