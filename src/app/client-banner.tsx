"use client";

import { useEffect } from "react";

export default function ClientBanner() {
  useEffect(() => {
    const cyan = "color:#06b6d4; font-weight:700;";
    const blue = "color:#0ea5e9; font-weight:700;";
    const gray = "color:#64748b;";
    const white = "color:#fff; background:#0b1220; padding:4px 6px; border-radius:4px;";

    console.log("%cN&K FinLab", white);
    console.log(
      "%cM&A | FinTech | Advisory",
      gray
    );
    console.log(
      "%cRunning on%c Next.js 16%c + %cTailwind CSS 4%c  ⚡️ Turbopack",
      gray, cyan, gray, blue, gray
    );
    console.log("%c––––––––––––––––––––––––––––––––––––––––––", gray);
  }, []);

  return null;
}
