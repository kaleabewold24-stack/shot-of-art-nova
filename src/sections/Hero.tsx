import { useEffect, useState } from "react";
import PaintCanvas from "../components/PaintCanvas";
import { MaskLine } from "../components/Reveal";

const HERO_CHARS_TOP = "SHOT OF";
const HERO_CHARS_BOTTOM = "ART NOVA";

function CharReveal({ text, baseDelay, className }: { text: string; baseDelay: number; className?: string }) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGo(true), 150);
    return () => clearTimeout(t);
  }, []);
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            className="inline-block will-change-transform"
            style={{
              transform: go ? "translateY(0) rotate(0deg)" : "translateY(110%) rotate(6deg)",
              transition: `transform 0.9s cubic-bezier(0.15,0,0.3,1)`,
              transitionDelay: `${baseDelay + i * 45}ms`,
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      <PaintCanvas className="absolute inset-0 h-full w-full" />

      {/* corner meta */}
      <div className="pointer-events-none absolute left-5 top-24 md:left-10">
        <p className="font-mono-label text-[#989898]">Immersive art studio</p>
        <p className="font-mono-label mt-1 text-[#989898]">New York — Est. Nova</p>
      </div>
      <div className="pointer-events-none absolute right-5 top-24 hidden text-right md:right-10 md:block">
        <p className="font-mono-label text-[#989898]">No skills required</p>
        <p className="font-mono-label mt-1 text-[#edc840]">Move / click to paint ↓</p>
      </div>

      {/* headline */}
      <div className="pointer-events-none relative z-10 mt-auto px-5 pb-10 md:px-10 md:pb-14">
        <h1 className="font-display font-extrabold leading-[0.88]">
          <CharReveal
            text={HERO_CHARS_TOP}
            baseDelay={100}
            className="block text-[16vw] text-[#f4f2ee] md:text-[11vw]"
          />
          <CharReveal
            text={HERO_CHARS_BOTTOM}
            baseDelay={500}
            className="block text-[16vw] md:text-[11vw]"
          />
        </h1>
        <style>{`
          #top h1 > span:last-child { color: transparent; -webkit-text-stroke: 2px #edc840; }
        `}</style>

        <div className="pointer-events-auto mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <MaskLine delay={900} className="max-w-md">
            <p className="text-base leading-relaxed text-[#c9c7c2] md:text-lg">
              Shoot paint-filled balloons. Spin canvases. Pour, splash and glow.
              Private art experiences where you can't mess it up.
            </p>
          </MaskLine>
          <MaskLine delay={1050}>
            <div className="flex items-center gap-4">
              <a
                href="#book"
                data-cursor="Book"
                className="rounded-sm bg-[#edc840] px-8 py-4 font-mono-label text-[#0b0b0b] transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Book an experience
              </a>
              <a
                href="#experiences"
                className="rounded-sm border border-[#3a3a3a] px-8 py-4 font-mono-label text-[#f4f2ee] transition-colors duration-200 hover:border-[#edc840] hover:text-[#edc840]"
              >
                Explore ↓
              </a>
            </div>
          </MaskLine>
        </div>
      </div>
    </section>
  );
}
