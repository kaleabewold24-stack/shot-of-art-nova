import { useEffect, useState } from "react";

const LINKS = [
  { label: "Experiences", href: "#experiences" },
  { label: "How it works", href: "#how" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="absolute inset-0 transition-all duration-700 [transition-timing-function:cubic-bezier(0.28,0,0,1)]"
        style={{
          background: "rgba(11,11,11,0.72)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid #262626",
          opacity: scrolled ? 1 : 0,
          transform: scrolled ? "scaleX(1)" : "scaleX(0.6)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3" data-cursor>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#edc840]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#0b0b0b" aria-hidden="true">
              <path d="M12 2c1.8 3.2 1.2 5.6-.4 7.6 2.4-1.2 4.6-.8 6.4 1-2.8 1.2-3.8 3.2-3.2 6-1.8-2.4-4-3-6.6-1.8.8-2.8-.4-4.8-3.2-6.2 2.8-.6 4.4-2.4 5-5.6C10.6 3 11.2 2.4 12 2z" />
              <circle cx="12" cy="12" r="2.4" />
            </svg>
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Shot of Art <span className="text-[#edc840]">Nova</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="font-mono-label text-[#989898] transition-colors duration-200 hover:text-[#f4f2ee]">
              <span className="dbl">
                <span>{l.label}</span>
                <span className="text-[#edc840]">{l.label}</span>
              </span>
            </a>
          ))}
          <a
            href="#book"
            data-cursor="Book"
            className="rounded-sm bg-[#edc840] px-5 py-2.5 font-mono-label text-[#0b0b0b] transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Book now
          </a>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`h-px w-6 bg-[#f4f2ee] transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-[#f4f2ee] transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="relative border-t border-[#262626] bg-[#0b0b0b]/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 font-mono-label text-[#989898]">
                {l.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="mt-2 rounded-sm bg-[#edc840] px-5 py-3 text-center font-mono-label text-[#0b0b0b]">
              Book now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
