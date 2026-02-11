"use client";

import {useId, useMemo, useState} from "react";

type Props = {
  width?: number;
  height?: number;
  points?: number;
  className?: string;
  plotBackground?: boolean;
};

export default function HeroFrontierGif({
  width = 520,
  height = 320,
  points = 96,
  className = "",
  plotBackground = true,
}: Props) {
  const [run, setRun] = useState(false);
  const uid = useId();

  // Геометрия
  const PAD_LEFT = 60, PAD_TOP = 20, PAD_RIGHT = 6, PAD_BOTTOM = 44;
  const VIEW_W = width, VIEW_H = height;
  const XMIN = PAD_LEFT + 20, XMAX = VIEW_W - PAD_RIGHT - 12;
  const YMIN = PAD_TOP + 24, YMAX = VIEW_H - PAD_BOTTOM - 12;

  const r01 = (i: number, k = 1) => {
    const x = Math.sin((i + 11) * 911.733 + k * 0.271) * 43758.5453;
    return x - Math.floor(x);
  };
  const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
  const hsl = (h: number, s: number, l: number, a = 1) =>
    `hsla(${h.toFixed(1)},${s.toFixed(1)}%,${l.toFixed(1)}%,${a})`;

  // ИДЕАЛЬНОЕ РАСПРЕДЕЛЕНИЕ
  const mean = 0.52;
  const std = 0.162;
  const skew = 0.10;
  const heightMultiplier = 1.18;

  const normalValue = (u: number) => {
    const x = (u - mean) / std;
    const base = Math.exp(-x * x / 2);
    const skewFactor = 1 + skew * x;
    return base * skewFactor;
  };

  const bellPath = useMemo(() => {
    let d = "M";
    const steps = 260;
    for (let i = 0; i <= steps; i++) {
      const u = i / steps;
      const density = normalValue(u);
      const x = XMIN + u * (XMAX - XMIN);
      const y = YMAX - density * heightMultiplier * (YMAX - YMIN);
      d += `${i === 0 ? "" : "L"} ${x.toFixed(1)},${y.toFixed(1)} `;
    }
    d += `L ${XMAX} ${YMAX} L ${XMIN} ${YMAX} Z`;
    return d;
  }, [XMIN, XMAX, YMIN, YMAX]);

  // Точки
  const N = points;
  const prePts = useMemo(() => Array.from({ length: N }, (_, i) => [
    XMIN + r01(i, 1) * (XMAX - XMIN),
    YMIN + r01(i, 2) * (YMAX - YMIN),
  ]), [N]);

  const endPts = useMemo(() => Array.from({ length: N }, (_, i) => {
    const u = r01(i, 5);
    const density = normalValue(u);
    const targetY = YMAX - density * heightMultiplier * (YMAX - YMIN);
    const spread = 8 + r01(i, 7) * 22;
    const jitterX = (r01(i, 8) - 0.5) * spread;
    const jitterY = (r01(i, 9) - 0.5) * 5;

    const x = clamp(XMIN + u * (XMAX - XMIN) + jitterX, XMIN, XMAX);
    const y = clamp(targetY + jitterY, YMIN + 12, YMAX - 6);
    return [x, y];
  }), [N]);

  const pointColors = useMemo(() => endPts.map(([, y], i) => {
    const t = 1 - (y - YMIN) / (YMAX - YMIN);
    const hue = 210 - t * 170;
    const sat = 38 + (1 - t) * 14;
    const light = 52 + (1 - t) * 12;
    return {
      fill: hsl(hue, sat, light, 0.62),
      stroke: hsl(hue, Math.min(75, sat + 12), light - 15, 0.92),
    };
  }), [endPts]);

  const pos = (i: number) => {
    const [sx, sy] = prePts[i];
    const [ex, ey] = endPts[i];
    const [X, Y] = run ? [ex, ey] : [sx, sy];
    return `translate(${X}px, ${Y}px)`;
  };

  // P10 / P50 / P90 координаты
  const p10u = mean - 1.28 * std;
  const p50u = mean;
  const p90u = mean + 1.28 * std;
  const p10x = XMIN + clamp(p10u, 0, 1) * (XMAX - XMIN);
  const p50x = XMIN + p50u * (XMAX - XMIN);
  const p90x = XMIN + clamp(p90u, 0, 1) * (XMAX - XMIN);

  const reducedMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={`relative rounded-[24px] overflow-hidden bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-[0_8px_30px_rgba(0,0,0,.10)] ${className}`}>
      <div className="absolute inset-0 flex items-end justify-end p-3 sm:p-4 pointer-events-none z-10">
        <button
          onClick={() => setRun(v => !v)}
          className={`pointer-events-auto rounded-full text-xs sm:text-sm px-4 sm:px-5 py-2 ring-1 ring-[#EAEAEA] shadow-sm transition ${
            run ? "bg-white/85 backdrop-blur text-[#1C1F2E] hover:bg-white" : "bg-[#1C1F2E] text-white hover:brightness-[1.06]"
          }`}
        >
          {run ? "Reset" : "Construct Distribution"}
        </button>
      </div>

      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="block w-full h-auto select-none">
        <defs>
          <linearGradient id={`grad-norm-${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3A6FA3" />
            <stop offset="50%" stopColor="#B3D0C6" />
            <stop offset="100%" stopColor="#C8A165" />
          </linearGradient>
          <filter id={`shadow-${uid}`}>
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#00000050"/>
          </filter>
        </defs>

        {/* Оси */}
        <g stroke="#E5E7EB" strokeWidth="1.2">
          <line x1={PAD_LEFT} y1={YMAX} x2={XMAX} y2={YMAX} />
          <line x1={PAD_LEFT} y1={PAD_TOP} x2={PAD_LEFT} y2={YMAX} />
          <text x={(XMAX + PAD_LEFT) / 2} y={YMAX + 36} textAnchor="middle" fontSize="11" fill="#7D9EA5" fontWeight="500">
            Enterprise Value (normalized)
          </text>
          <text x={PAD_LEFT - 48} y={(YMAX + PAD_TOP) / 2} textAnchor="middle" fontSize="11" fill="#7D9EA5" fontWeight="500"
            transform={`rotate(-90, ${PAD_LEFT - 28}, ${(YMAX + PAD_TOP) / 2})`}>
            Probability Density
          </text>
        </g>

        {/* Колокол */}
        <g opacity={run ? 1 : 0} style={{ transition: "opacity .4s ease .2s" }}>
          <path d={bellPath} fill={`url(#grad-norm-${uid})`} opacity="0.36" />
          <path d={bellPath} fill="none" stroke={`url(#grad-norm-${uid})`} strokeWidth="4" strokeLinecap="round"
            className={!reducedMotion && run ? "draw" : ""} />
        </g>


        {/* Точки */}
        {endPts.map((_, i) => (
          <g key={i} style={{
            transform: pos(i),
            transition: `${reducedMotion ? "0ms" : "960ms cubic-bezier(.22,.88,.16,1)"} ${i * 6}ms`,
          }}>
            <circle r={3.4} fill={pointColors[i].fill} stroke={pointColors[i].stroke} strokeWidth="0.9"
                    filter={`url(#shadow-${uid})`} />
          </g>
        ))}

        {/* ДЛИННЫЕ КРАСИВЫЕ ЛИНИИ P10 / P50 / P90 */}
        <g opacity={run ? 1 : 0} style={{ transition: "opacity .7s ease 1s" }}>
          {[
            { x: p10x, label: "P10", color: "#3A6FA3" },
            { x: p50x, label: "P50", color: "#C8A165", bold: true },
            { x: p90x, label: "P90", color: "#B3D0C6" },
          ].map((p, i) => {
            const u = (p.x - XMIN) / (XMAX - XMIN);
            const peakY = YMAX - normalValue(u) * heightMultiplier * (YMAX - YMIN);
            const lineTopY = peakY + 22; // чуть ниже вершины колокола

            return (
              <g key={i}>
                {/* Основная линия */}
                <line
                  x1={p.x} y1={YMAX}
                  x2={p.x} y2={lineTopY}
                  stroke={p.color}
                  strokeWidth={p.bold ? "3.4" : "2.6"}
                  strokeDasharray="7,5"
                  opacity="0.95"
                />
                {/* Тонкая белая подсветка */}
                <line
                  x1={p.x} y1={YMAX}
                  x2={p.x} y2={lineTopY}
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.25"
                />
                {/* Подпись с обводкой */}
                <text
                  x={p.x}
                  y={lineTopY - 14}
                  textAnchor="middle"
                  fontSize={p.bold ? "14" : "12.5"}
                  fontWeight={p.bold ? "800" : "700"}
                  fill={p.color}
                  stroke="#0B0C2A"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  {p.label}
                </text>
              </g>
            );
          })}
        </g>



        <style jsx>{`
          .draw {
            stroke-dasharray: 1400;
            stroke-dashoffset: 1400;
            animation: d 1.6s ease forwards .3s;
          }
          @keyframes d { to { stroke-dashoffset: 0 } }
        `}</style>
      </svg>
    </div>
  );
}