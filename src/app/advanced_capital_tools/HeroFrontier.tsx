"use client";

import { useState } from "react";

export default function HeroFrontier() {
  const [run, setRun] = useState(false);

  return (
    <div className="card bg-white/80 border-indigo-100 p-5 md:p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-gray-500">Efficient Frontier (demo)</div>
        <button
          onClick={() => setRun((v) => !v)}
          className={`btn ${run ? "btn-outline" : "btn-primary"} py-2 px-4`}
        >
          {run ? "Reset" : "Optimize"}
        </button>
      </div>

      {/* Chart */}
      <div className="relative">
        <svg viewBox="0 0 520 320" className="w-full h-auto">
          {/* axes */}
          <line x1="48" y1="280" x2="500" y2="280" stroke="#E5E7EB" strokeWidth="1.5" />
          <line x1="48" y1="20"  x2="48"  y2="280" stroke="#E5E7EB" strokeWidth="1.5" />
          <text x="6" y="26"  fontSize="10" fill="#9CA3AF">Return</text>
          <text x="472" y="310" fontSize="10" fill="#9CA3AF">Risk</text>

          {/* gradient for frontier */}
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="#6366F1"/>
              <stop offset="100%" stopColor="#06B6D4"/>
            </linearGradient>
          </defs>

          {/* efficient frontier curve */}
          <path
            d="M60,260 C160,210 220,150 300,120 C360,100 430,110 490,60"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="3"
            className={run ? "animate-frontier" : "opacity-30"}
          />

          {/* candidate portfolios (appear after run) */}
          {[
            [110,235],[170,210],[215,182],[260,160],[305,142],[355,130],[405,118]
          ].map(([x,y], i) => (
            <circle
              key={i}
              cx={x} cy={y} r="5"
              className={run ? "fade-in-up" : "opacity-0"}
              style={{ animationDelay: `${0.4 + i * 0.08}s` }}
              fill="#fff" stroke="#A5B4FC" strokeWidth="2"
            />
          ))}

          {/* max-Sharpe marker */}
          <g className={run ? "fade-in-up" : "opacity-0"} style={{ animationDelay: "0.35s" }}>
            <circle cx="260" cy="160" r="7" fill="#0EA5E9" />
            <text x="270" y="156" fontSize="11" fill="#0EA5E9">Max-Sharpe</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
