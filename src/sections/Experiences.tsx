import { EXPERIENCES, type Experience } from "../data/experiences";
import { Reveal, MaskLine } from "../components/Reveal";

function SplatterMark({ color, seed }: { color: string; seed: number }) {
  // deterministic pseudo-random splatter from seed
  const rand = (n: number) => {
    const x = Math.sin(seed * 999 + n * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  const drops = Array.from({ length: 14 }, (_, i) => {
    const angle = rand(i) * Math.PI * 2;
    const dist = 26 + rand(i + 40) * 60;
    return {
      cx: 100 + Math.cos(angle) * dist,
      cy: 100 + Math.sin(angle) * dist,
      r: 2 + rand(i + 80) * 9,
    };
  });
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="100" r="34" fill={color} />
      <ellipse cx="86" cy="92" rx="14" ry="10" fill={color} opacity="0.85" transform={`rotate(${rand(3) * 60} 86 92)`} />
      <ellipse cx="118" cy="110" rx="10" ry="16" fill={color} opacity="0.8" transform={`rotate(${rand(5) * 90} 118 110)`} />
      {drops.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={color} opacity={0.5 + rand(i + 120) * 0.5} />
      ))}
    </svg>
  );
}

function ExperienceRow({ exp, flip }: { exp: Experience; flip: boolean }) {
  return (
    <Reveal>
      <a
        href="#book"
        data-cursor="Book"
        className="group relative grid grid-cols-1 gap-6 border-t border-[#262626] py-10 transition-colors duration-300 hover:bg-[#141414] md:grid-cols-12 md:items-center md:gap-8 md:py-14"
      >
        {/* index */}
        <div className={`font-mono-label text-[#989898] md:col-span-1 ${flip ? "md:order-4 md:text-right" : ""}`}>
          /{exp.index}
        </div>

        {/* splatter visual */}
        <div
          className={`relative h-36 w-36 md:col-span-2 md:h-44 md:w-44 ${flip ? "md:order-3" : ""}`}
        >
          <div className="h-full w-full transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-hover:rotate-[8deg] group-hover:scale-110">
            <SplatterMark color={exp.color} seed={Number(exp.index)} />
          </div>
          {exp.tag && (
            <span
              className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 font-mono-label"
              style={{ background: exp.color, color: "#0b0b0b", fontSize: "0.6rem" }}
            >
              {exp.tag}
            </span>
          )}
        </div>

        {/* title + description */}
        <div className={`md:col-span-6 ${flip ? "md:order-1" : ""}`}>
          <h3 className="font-display text-3xl font-extrabold leading-[1.02] text-[#f4f2ee] transition-colors duration-300 group-hover:text-[var(--row-color)] md:text-5xl"
            style={{ "--row-color": exp.color } as React.CSSProperties}
          >
            {exp.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#989898] md:text-base">
            {exp.description}
          </p>
        </div>

        {/* meta + arrow */}
        <div className={`flex items-center justify-between gap-4 md:col-span-3 md:flex-col md:items-end md:gap-6 ${flip ? "md:order-2" : ""}`}>
          <div className="flex gap-6 md:flex-col md:items-end md:gap-1.5">
            <span className="font-mono-label text-[#989898]">{exp.duration}</span>
            <span className="font-mono-label text-[#989898]">{exp.age}</span>
            <span className="font-mono-label" style={{ color: exp.color }}>{exp.price}</span>
          </div>
          <span
            className="grid h-12 w-12 place-items-center rounded-full border border-[#3a3a3a] transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--row-color)]"
            style={{ "--row-color": exp.color } as React.CSSProperties}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 -rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:fill-[#0b0b0b]" fill="#f4f2ee" aria-hidden="true">
              <path d="M5 11h11.2l-4.6-4.6L13 5l7 7-7 7-1.4-1.4 4.6-4.6H5z" />
            </svg>
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function Experiences() {
  return (
    <section id="experiences" className="mx-auto max-w-[1600px] px-5 pb-24 pt-24 md:px-10 md:pt-36">
      <div className="mb-14 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="font-mono-label mb-4 text-[#edc840]">Individual art experiences</p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.95] text-[#f4f2ee] md:text-7xl">
            <MaskLine>Get wild.</MaskLine>
            <MaskLine delay={120}>
              <span className="text-[#989898]">Make a masterpiece.</span>
            </MaskLine>
          </h2>
        </div>
        <Reveal delay={200} className="md:col-span-4">
          <p className="max-w-sm text-sm leading-relaxed text-[#989898] md:ml-auto md:text-right">
            Nine private experiences, one rule: there are no rules. Every session is private —
            just your people, your instructor, and as much paint as you can handle.
          </p>
        </Reveal>
      </div>

      <div>
        {EXPERIENCES.map((exp, i) => (
          <ExperienceRow key={exp.id} exp={exp} flip={i % 2 === 1} />
        ))}
        <div className="border-t border-[#262626]" />
      </div>
    </section>
  );
}
