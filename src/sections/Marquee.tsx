const ITEMS = [
  "Shooting & Spinning®",
  "Splatter Room",
  "Fluid Bear",
  "Paint Therapy in Neon",
  "Romantic Date",
  "Spin Art",
  "Fluid Art",
  "Art Boom 3-in-1",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-[#262626] bg-[#0b0b0b] py-4">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8">
                <span className="font-display text-xl font-bold text-[#f4f2ee]">{item}</span>
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="#edc840" aria-hidden="true">
                  <path d="M8 0l1.8 6.2L16 8l-6.2 1.8L8 16 6.2 9.8 0 8l6.2-1.8z" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
