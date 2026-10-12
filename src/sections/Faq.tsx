import { useState } from "react";
import { FAQS } from "../data/experiences";
import { Reveal, MaskLine } from "../components/Reveal";

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="border-t border-[#262626]">
      <button
        className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-8"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="flex items-baseline gap-5">
          <span className="font-mono-label text-[#989898]">{String(i + 1).padStart(2, "0")}</span>
          <span className="font-display text-xl font-bold text-[#f4f2ee] md:text-2xl">{q}</span>
        </span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
            open ? "rotate-45 border-[#edc840] text-[#edc840]" : "border-[#3a3a3a] text-[#f4f2ee]"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-500 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-8 pl-12 text-sm leading-relaxed text-[#989898] md:pl-14 md:text-base">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="border-t border-[#262626] bg-[#141414]">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono-label mb-4 text-[#cbd34b]">FAQ</p>
            <h2 className="font-display text-5xl font-extrabold leading-[0.95] text-[#f4f2ee] md:text-6xl">
              <MaskLine>Before</MaskLine>
              <MaskLine delay={120}>
                <span className="text-[#989898]">you pop in</span>
              </MaskLine>
            </h2>
            <Reveal delay={250}>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#989898]">
                Still curious? Write to us at{" "}
                <a href="mailto:hello@shotofartnova.com" className="text-[#edc840] underline underline-offset-4">
                  hello@shotofartnova.com
                </a>
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <div>
                {FAQS.map((f, i) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} i={i} />
                ))}
                <div className="border-t border-[#262626]" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
