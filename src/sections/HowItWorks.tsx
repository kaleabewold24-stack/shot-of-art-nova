import { Reveal, MaskLine } from "../components/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Pick your chaos",
    body: "Choose from nine private experiences — shooting, spinning, pouring, splattering or all of the above. Book a slot online in under a minute.",
    color: "#edc840",
  },
  {
    n: "2",
    title: "Suit up",
    body: "Arrive 10 minutes early. We hand you an apron, shoe covers and protective gear. Your instructor walks you through everything — zero experience needed.",
    color: "#78c9db",
  },
  {
    n: "3",
    title: "Make a mess",
    body: "Pop balloons, spin canvases, pour neon rivers, paint the walls. This is your room and your rules for the next hour or two.",
    color: "#e6a2e4",
  },
  {
    n: "4",
    title: "Take it home",
    body: "Your artwork dries while you clean up. Leave with a one-of-a-kind masterpiece — and probably paint in places you didn't expect.",
    color: "#5dcb9a",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-[#262626] bg-[#141414]">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <p className="font-mono-label mb-4 text-[#78c9db]">How it works</p>
        <h2 className="font-display mb-16 text-5xl font-extrabold leading-[0.95] text-[#f4f2ee] md:mb-24 md:text-7xl">
          <MaskLine>Four steps to</MaskLine>
          <MaskLine delay={120}>
            <span className="text-[#989898]">beautiful chaos</span>
          </MaskLine>
        </h2>

        <div className="grid grid-cols-1 gap-px bg-[#262626] md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="bg-[#141414]">
              <div className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-[#0b0b0b] md:p-10">
                <span
                  className="font-display text-7xl font-extrabold leading-none transition-transform duration-500 group-hover:-translate-y-2 md:text-8xl"
                  style={{ color: s.color }}
                >
                  {s.n}
                </span>
                <h3 className="font-display mt-8 text-2xl font-bold text-[#f4f2ee]">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#989898]">{s.body}</p>
                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-[#262626] transition-colors duration-300 group-hover:bg-[var(--step-color)]" style={{ "--step-color": s.color } as React.CSSProperties} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
