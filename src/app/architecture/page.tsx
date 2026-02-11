"use client";

import { useState } from "react";

export default function FinancialArchitecturePage() {
  const [lang, setLang] = useState<"en" | "ru">("ru");
  const toggleLang = () => setLang(lang === "en" ? "ru" : "en");

  const steps = [
    {
      title: "1. ERP-data systematization and automatization",
      objective: "establish a robust source for reporting",
      details: [
        "Data mapping",
        "Control points",
        "Automation logic",
      ],
      outcome: "all data is accurate, transparent, relevant. All process are automated",
    },
    {
      title: "2. Management Reporting",
      objective: "establish a single source of truth",
      details: [
        "IFRS / US GAAP-based management reporting",
        "Clean historicals with clear bridges (from stand-alone US GAAP to Consolidated Figures)",
        "Revenue, margin and cost drivers fully reconciled",
        "Working capital and inventory fully mapped",
      ],
      outcome: "Numbers that do not change under diligence pressure",
    },
    {
      title: "3. Budgeting and cash-control systems",
      objective: "prevent cash surprises under growth and stress",
      details: [
        "Integrated P&L / Cash / Balance Sheet budgeting",
        "Rolling forecast with scenario overlays",
        "Cash runway, covenant and liquidity thresholds",
        "Early warning signals for funding and working capital gaps",
      ],
      outcome: "reliable and realistic goals, cash is under control",
    },
    {
      title: "4. Financial Modelling",
      objective: "digitalised plans for the company",
      details: [
        "Granular, driver-based financial model",
        "Inventory and working capital roll-forwards",
        "Scenario and sensitivity analysis",
        "Clear link between operations and cash flows",
      ],
      outcome: "Management can defend forecasts, not “hope” for them",
    },
    {
      title: "5. Valuation & Scenario Analysis",
      objective: "understand the valuation range",
      details: [
        "DCF, trading and transaction comps",
        "Scenario-based valuation outcomes",
        "Downside and upside framing",
        "Valuation sensitivity to key assumptions",
      ],
      outcome: "informed negotiation instead of reactive pricing",
    },
    {
      title: "6. Investment memo / Growth Strategy",
      objective: "control the narrative",
      details: [
        "Coherent investment thesis",
        "Clear articulation of value drivers",
        "Risks framed, not hidden",
        "Strategy aligned with numbers",
      ],
      outcome: "Buyers focus on opportunity, not uncertainty",
    },
    {
      title: "7. Financial oversight through the position of Non-Executive Director",
      objective: "Maintain the system alive",
      details: [
        "Non-Executive position",
      ],
      outcome: "internal users dont fail the system",
    },
  ];

  return (
    <main className="min-h-screen text-[#101015] bg-[#F4F1EC]">
      {/* Header — почти идентичен главной */}
      <header className="sticky top-0 z-50 bg-[#F4F1EC]/80 backdrop-blur-sm border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg bg-gradient-to-r from-[#C8A165] via-[#3A6FA3] to-[#B3D0C6] bg-clip-text text-transparent animate-[hue_12s_linear_infinite]">
            NKFI
          </div>
          <nav className="flex gap-6 text-sm text-[#1C1F2E] items-center">
            <a href="/" className="hover:opacity-70 transition">Main Page</a>
            <a href="/architecture" className="hover:opacity-70 transition font-medium text-[#3A6FA3]">
              Financial architecture
            </a>
            <a href="/m&a" className="hover:opacity-70 transition">Transaction support</a>
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

      {/* Hero — стиль главной */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 15%, rgba(58,111,163,0.14), transparent 60%), radial-gradient(900px 500px at 80% 70%, rgba(200,161,101,0.10), transparent 60%), #F4F1EC",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#3A6FA3] via-[#C8A165] to-[#B3D0C6] bg-clip-text text-transparent">
              Financial Architecture <span className="text-[#C8A165]/70 text-sm font-medium align-super tracking-wide">Tier 1</span>
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-[#6F8F96] max-w-4xl mx-auto">
            Financial architecture is crucial if the founder or management follow the 2 goals:
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white/60 backdrop-blur-sm border border-[#EAEAEA]/80 rounded-2xl p-8 hover:border-[#C8A165]/30 transition-all">
              <h2 className="text-2xl font-semibold mb-4">Deal Readiness</h2>
              <p className="text-[#6F8F96] leading-relaxed">
                Most businesses are not deal-ready not because they are weak, but because their financials collapse under diligence pressure.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-[#EAEAEA]/80 rounded-2xl p-8 hover:border-[#3A6FA3]/30 transition-all">
              <h2 className="text-2xl font-semibold mb-4">Robust Governance</h2>
              <p className="text-[#6F8F96] leading-relaxed">
                Even fast-growing and highly profitable companies need a transparent financial system that ensures transparency, accuracy and proper governance. Otherwise it is very easy to lose control — and lose everything.
              </p>
            </div>
          </div>
        </div>
      </section>

<section className="relative isolate overflow-hidden py-20 md:py-24 border-t border-[#EAEAEA]">
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

        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
            Typical problems in the finance architecture:
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Accounting data is inaccurate: intercompany turnover is not fully reconciled, and intercompany margins are either partially or not accounted for at all — resulting in numbers that change dramatically during due diligence.",
              "Financial results are blurred by a mix of core business operations and founder’s personal or family expenses — making true EBITDA a black box.",
              "Poor accounting quality and biased management reporting lead directly to valuation discounts",
              "Reported financials do not reflect the founder’s actual view of the business, resulting in loss of control and weak decision-making.",
              "Forecasts and financial models exist only in the founder’s or management’s heads, with no digital, auditable formalization of the growth strategy.",
              "Accounts receivable and payable are distorted by intercompany balances, leading to a biased and unreliable net working capital position.",
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white/[.04] ring-1 ring-white/10 p-6 hover:bg-white/[.06] hover:ring-[#C8A165]/30 transition"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#C8A165] text-xl mt-1">×</span>
                  <p className="text-[#EAEAEA] leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* Steps — теперь сеточка, как карточки услуг на главной */}
<section className="py-20 bg-gradient-to-b from-[#F4F1EC] via-[#EAEAEA]/30 to-[#F4F1EC]">
  <div className="mx-auto max-w-6xl px-6">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
      Typical Financial steps to build a solid financial system
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {steps.map((step, i) => (
        <div
          key={i}
          className="group relative rounded-2xl border border-[#EAEAEA] bg-white p-7 md:p-8 hover:border-[#C8A165]/40 hover:shadow-md transition-all"
        >
          {/* Номер шага теперь внутри карточки, в углу */}
          <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-gradient-to-br from-[#C8A165] to-[#3A6FA3] flex items-center justify-center text-white font-semibold text-xl shadow">
            {i + 1}
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-2">{step.title}</h3>
          <p className="text-[#6F8F96] italic mb-5">Objective: {step.objective}</p>

          <ul className="space-y-2.5 text-[#1C1F2E]">
            {step.details.map((d, j) => (
              <li key={j} className="flex items-start gap-2.5">
                <span className="text-[#C8A165] mt-1">•</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-5 border-t border-[#EAEAEA]">
            <p className="text-[#3A6FA3] font-medium flex items-center gap-2">
              <span className="material-symbols-outlined">trending_up</span>
              Outcome: {step.outcome}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}