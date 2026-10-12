import { useEffect, useRef, useState } from "react";
import { Reveal, MaskLine } from "../components/Reveal";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 56, suffix: "k+", label: "Guests painted with us" },
  { value: 9, suffix: "", label: "Private experiences" },
  { value: 4, suffix: ".9", label: "Average guest rating", display: "4.9" },
  { value: 0, suffix: "", label: "Skills required", display: "0" },
];

export default function Stats() {
  return (
    <section className="border-t border-[#262626]">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono-label mb-6 text-[#e6a2e4]">Word on the street</p>
            <blockquote className="font-display text-4xl font-extrabold leading-[1.05] text-[#f4f2ee] md:text-6xl">
              <MaskLine>“The best part about it is</MaskLine>
              <MaskLine delay={150}>
                <span className="text-[#edc840]">you can't mess it up,</span>
              </MaskLine>
              <MaskLine delay={300}>you know what I mean?”</MaskLine>
            </blockquote>
            <Reveal delay={450}>
              <p className="font-mono-label mt-8 text-[#989898]">— Every guest, ever</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:col-span-5">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="border-l border-[#262626] pl-5">
                  <div className="font-display text-4xl font-extrabold text-[#f4f2ee] md:text-5xl">
                    {s.display ? s.display : <Counter target={s.value} suffix={s.suffix} />}
                  </div>
                  <div className="font-mono-label mt-2 text-[#989898]">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
