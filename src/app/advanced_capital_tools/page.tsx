import Link from "next/link";


export const metadata = {
  title: "ADVANCED CAPITAL TOOLS",
  description:
    "Quant-driven models: market risk, credit risk, liquidity risk, and also portoflio construction & optimization and derivatives modeling",
};

import HeroFrontierGif from "./HeroFrontierGif";

export default function PortfolioLab() {
  return (
    <main>

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


<section className="relative overflow-hidden bg-transparent">
  {/* Video */}
  <div className="absolute inset-0 z-0">
    <video
      className="h-full w-full object-cover motion-reduce:hidden"
      autoPlay
      muted
      loop
      playsInline
      // @ts-ignore
      webkit-playsinline="true"
      preload="metadata"
      aria-hidden="true"
    >
      <source src="/portfolio-hero.mp4" type="video/mp4" />
    </video>
  </div>

  {/* Dark veil (делает текст читабельным) */}
  <div className="absolute inset-0 z-10 bg-black/40" />

  {/* Overlay: мягкие градиенты + сетка поверх вуали */}
  <div
    className="pointer-events-none absolute inset-0 z-20"
    style={{
      backgroundImage: `
        radial-gradient(700px 480px at 25% 0%, rgba(200,161,101,0.14), transparent 70%),
        radial-gradient(900px 600px at 90% 100%, rgba(58,111,163,0.12), transparent 70%),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23FFFFFF1A' stroke-width='0.35' d='M20 0H0M0 20V0'/%3E%3C/svg%3E")
      `,
      backgroundBlendMode: "overlay, overlay, normal",
      backgroundSize: "cover, cover, 20px 20px",
      backgroundPosition: "center",
    }}
  />

  {/* Content (центр) */}
  <div className="relative z-30 mx-auto max-w-6xl px-4 py-16 md:py-24 min-h-[520px] md:min-h-[620px] flex flex-col items-center text-center">




    <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.01em] leading-tight text-white">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A165] via-[#B3D0C6] to-[#3A6FA3]">
        Advanced capital tools
      </span>
    </h1>

    {/* График строго под заголовком, по центру */}
  <div className="mt-8 w-full max-w-[560px] md:max-w-[560px]">
  <HeroFrontierGif
    width={520}
    height={320}
    className="w-full"
  />
</div>

    <p className="mt-6 max-w-2xl text-[17px] leading-7 text-white/90">
      Quant-driven models: market risk, credit risk, liquidity risk, and also portoflio construction & optimization and derivatives modeling
    </p>


  </div>

{/* bottom fade – на всю ширину секции */}
<div
  className="pointer-events-none absolute left-0 right-0 bottom-0 z-20
             bg-gradient-to-b from-transparent via-[#0B0C2A80] to-[#0B0C2A]"
  style={{ height: "820px" }}
/>

</section>







   {/* ===== WORKFLOW + TECH SPECS (LIGHT, COMBINED) ===== */}
<section
  className="relative isolate overflow-hidden border-t border-[#EAEAEA]"
  style={{
    backgroundColor: "#F4F1EC",
    backgroundImage: `
      radial-gradient(700px 420px at 18% 10%, rgba(200,161,101,.10), transparent 40%),
      radial-gradient(900px 520px at 100% 100%, rgba(58,111,163,.10), transparent 40%),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'%3E%3Cpath fill='none' stroke='%23E0E0E0' stroke-width='0.5' d='M22 0H0M0 22V0'/%3E%3C/svg%3E")
    `,
    backgroundBlendMode: "overlay, overlay, normal",
    backgroundSize: "auto, auto, 22px 22px",
    backgroundPosition: "center, center, center",
  }}
>




  {/* === CONTENT === */}
  <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* LEFT — Workflow timeline */}
      <div>
        <h2 className="text-3xl font-semibold flex items-center gap-2 text-[#101015]">
          <span className="material-symbols-outlined text-[#3A6FA3] text-[30px]">route</span>
          Few words about quant-models
        </h2>
        <ol className="mt-8 relative space-y-6">
        <li>Why advanced quantitative tools matter?</li>
        <p>One number works for presentations. Distributions win in real life.
In modern capital markets, point estimates hide risk, distort incentives, and fail under stress. We replace static outputs with probability-driven decision engines that map downside, recovery, and upside across realistic paths.
Our approach answers not “what is the value?”, but:“What can happen, how likely it is, and who wins or loses under each outcome.”
</p>
        <li>Where advanced capital tools are applied</li>
        <p>Advanced Capital Tools are used across:
Portfolio construction and optimization
Credit risk and capital structure analysis
Market risk and tail-risk management
Complex derivatives and structured products valuation
Enterprise- and transaction-level risk assessment
</p>
        </ol>
      </div>

      {/* RIGHT — Tech Specs cards (split style) */}
      <div>
        <h2 className="text-3xl font-semibold flex items-center gap-2 text-[#101015]">
          <span className="material-symbols-outlined text-[#C8A165] text-[30px]">tune</span>
          Technicals Stack
        </h2>

        <div className="mt-8 grid gap-6">
          {[
            {
              icon: "input_circle",
              title: "Core inputs",
              bullets: [
                "Financials, contracts, creditor claims, market comparables",
                "Macro regimes: rates, inflation, FX, liquidity cycles",
                "Custom PD / recovery assumptions for distressed cases",
              ],
              rail: "#3A6FA3",
            },
            {
              icon: "rule_settings",
              title: "Modeling & constraints",
              bullets: [
                "Stochastic drivers",
                "Monte Carlo engine, scenario switching, regime filters",
                "Illiquid asset handling, waterfall mechanics, earn-out modelling",
              ],
              rail: "#C8A165",
            },
 
          ].map((c) => (
            <div key={c.title} className="relative rounded-3xl bg-white shadow-sm border border-[#EAEAEA]">
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-1.5 rounded-l-3xl"
                style={{ background: c.rail }}
              />
              <div className="p-6 pl-7">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-2xl" style={{ color: c.rail }}>
                    {c.icon}
                  </span>
                  <h3 className="font-semibold text-[#101015]">{c.title}</h3>
                </div>
                <ul className="mt-3 space-y-2 text-[#1C1F2E] text-sm">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full" style={{ background: c.rail }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* bottom info row */}

  </div>
</section>

{/* СРАВНЕНИЕ: TRADITIONAL vs QUANT-DRIVEN — В СТИЛЕ ТВОЕЙ СТРАНИЦЫ */}
<section className="relative py-32 overflow-hidden bg-[#0B0C2A]">
  {/* Тёмный фон с мягкими градиентами — как в "Why" секции */}
  <div
    aria-hidden
    className="absolute inset-0 -z-10"
    style={{
      background: `
        radial-gradient(1000px 600px at 20% 10%, rgba(200,161,101,.16), transparent 60%),
        radial-gradient(1200px 800px at 90% 90%, rgba(58,111,163,.18), transparent 65%),
        linear-gradient(135deg, #0B0C2A 0%, #1C1F2E 50%, #0B0C2A 100%)
      `,
    }}
  />

  <div className="relative mx-auto max-w-7xl px-6">
    {/* Заголовок */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
        <span className="bg-gradient-to-r from-[#C8A165] via-[#B3D0C6] to-[#3A6FA3] bg-clip-text text-transparent">
          Where quant tools solve real problems
        </span>
      </h2>
    </div>

    {/* ТАБЛИЦА — тёмная, контрастная, в твоём стиле */}
    <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
      <table className="w-full min-w-[900px] text-left">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            <th className="py-6 px-8 text-lg font-medium text-white">Types</th>
            <th className="py-6 px-8 text-center text-lg font-medium text-[#B3D0C6]">
              What it tracks
            </th>
            <th className="py-6 px-8 text-center text-lg font-medium text-[#C8A165]">
              Outcomes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">

  

          <tr className="hover:bg-white/[0.04] transition">
            <td className="py-5 px-8 font-medium text-white">1. Portoflio construction and optimization</td>
            <td className="py-5 px-8 text-[#EAEAEA]/80"><ul>
              <li>Mean-Variance Optimization (MVO)</li>
              <li>Monte Carlo simulations</li>
              <li>VaR / CVaR and tail-risk metrics</li>
              </ul>
</td>
            <td className="py-5 px-8 text-[#C8A165] font-semibold">
      <ul>
<li>Strategic Asset Allocation under uncertainty</li>
<li>Explicit trade-off between return, risk, and drawdowns</li>
<li>Capital allocation that survives regime shift</li>
      </ul>


            </td>
          </tr>

          <tr className="hover:bg-white/[0.04] transition">
            <td className="py-5 px-8 font-medium text-white">2. Credit risk models</td>
            <td className="py-5 px-8 text-[#EAEAEA]/80">
            <ul>
              <li>Default probability models (Merton, hazard models)</li>
              <li>Debt shortfall and recovery distributions</li>
            </ul></td>
            <td className="py-5 px-8 text-[#C8A165] font-semibold">
              <ul>
<li>Scoring models for credit and counterparties</li>
<li>Defensible valuation ranges under leverage</li>
<li>Pricing corridors for negotiations</li>
<li>Scenario-aware capital structure decisions</li>
              </ul>




            </td>
          </tr>

          <tr className="hover:bg-white/[0.04] transition">
            <td className="py-5 px-8 font-medium text-white">3. Market risk models</td>
            <td className="py-5 px-8 text-[#EAEAEA]/80">
            <ul>
                <li>Historical VAR</li>
                <li>Monte Carlo VAR</li>
                <li>Parametric VAR</li>
            </ul>
            
            
            
            </td>
            <td className="py-5 px-8 text-[#C8A165] font-semibold">
            <ul>
              <li>Quantified downside exposure across market regimes</li>
              <li>Risk-adjusted limits for leverage and positioning</li>
              <li>Early warning signals for capital stress</li>
            </ul>



            </td>
          </tr>

          <tr className="hover:bg-white/[0.04] transition">
            <td className="py-5 px-8 font-medium text-white">4. Stress-testing and Scenario analysis models</td>
            <td className="py-5 px-8 text-[#EAEAEA]/80">
            <ul>
              <li>Market craches</li>
              <li>Interest rate hikes</li>
              <li>Economic recession</li>


            </ul>
            
            
            </td>
            <td className="py-5 px-8 text-[#C8A165] font-semibold">
              <ul>
                <li>Visibility into breakpoints of the business model</li>
                <li>Capital adequacy under extreme but plausible scenarios</li>
                <li>Informed contingency and capital protection decisions</li>
              </ul>




            </td>
          </tr>

          <tr className="hover:bg-white/[0.04] transition">
            <td className="py-5 px-8 font-medium text-white">5. Liquidity risk models</td>
            <td className="py-5 px-8 text-[#EAEAEA]/80">
            <ul>
<li>Funding gaps</li>
<li>Liquidity Coverage Ratio (LCR)</li>
<li>Cash runway under stress</li>

            </ul>
            
            </td>
            <td className="py-5 px-8 text-[#C8A165] font-semibold">
            <ul>
<li>Early detection of liquidity shortfalls</li>
<li>Optimal liquidity buffers vs return drag</li>
<li>Control over survival risk, not just profitability</li>
            </ul>



            </td>
          </tr>

          <tr className="hover:bg-white/[0.04] transition">
            <td className="py-5 px-8 font-medium text-white">6. Derivatives (options, swaps, swaptions)</td>
            <td className="py-5 px-8 text-[#EAEAEA]/80 ">
            <ul>
<li>Option pricing (Monte Carlo, Heston, SABR, local volatility)</li>
<li>Volatility smiles and path dependency analysis</li>
<li>Dynamic hedging simulations</li>


            </ul>
            
            </td>
            <td className="py-5 px-8 font-bold text-[#C8A165]">
<ul>
  <li>Fair valuation of complex, nonlinear payoffs
</li>
  <li>Distribution of hedging costs, not just expected cost
</li>
  <li>Full visibility into asymmetric and tail risks
</li>
</ul>


            </td>
          </tr>


        </tbody>
      </table>
    </div>


  </div>
</section>






    </main>
  );
}
