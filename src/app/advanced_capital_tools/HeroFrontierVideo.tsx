"use client";

import { useRef, useState } from "react";

export default function HeroFrontierVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);

  const onStart = () => {
    const v = ref.current;
    if (!v) return;
    setStarted(true);
    // перезапускаем с начала и играем
    v.currentTime = 0;
    v.play().catch(() => {
      // если авто-плей заблокирован — снимаем overlay, показываем нативные controls
      v.controls = true;
    });
  };

  const onReset = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setStarted(false);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-indigo-100 shadow-sm bg-white/70 backdrop-blur">
      {/* видео */}
      <video
        ref={ref}
        className="block w-full h-full"
        poster="/videos/frontier-poster.jpg"
        preload="metadata"
        playsInline
        muted
      >
        <source src="/videos/frontier-demo.webm" type="video/webm" />
        <source src="/videos/frontier-demo.mp4" type="video/mp4" />
        {/* Фолбэк-текст для очень старых браузеров */}
        Your browser does not support the video tag.
      </video>

      {/* overlay с кнопками */}
      {!started && (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-sm">
          <button onClick={onStart} className="btn btn-primary px-6 py-3">
            Optimize
          </button>
        </div>
      )}

      {started && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={onReset}
            className="btn btn-outline bg-white/70 backdrop-blur px-3 py-1 text-xs"
            title="Reset"
          >
            Reset
          </button>
        </div>
      )}

      {/* подпись */}
      <div className="absolute left-3 bottom-3 text-[11px] text-gray-500 bg-white/70 backdrop-blur px-2 py-1 rounded-md border border-gray-200">
        Efficient Frontier demo
      </div>
    </div>
  );
}
