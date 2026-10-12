import { useState, type FormEvent } from "react";
import { EXPERIENCES } from "../data/experiences";
import { Reveal, MaskLine } from "../components/Reveal";

const inputCls =
  "w-full border-b border-[#3a3a3a] bg-transparent py-3 text-[#f4f2ee] placeholder:text-[#5a5a5a] outline-none transition-colors duration-200 focus:border-[#edc840]";

export default function Booking() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="book" className="relative overflow-hidden border-t border-[#262626]">
      {/* giant background word */}
      <div
        className="pointer-events-none absolute inset-x-0 top-8 select-none text-center font-display text-[22vw] font-extrabold leading-none text-transparent"
        style={{ WebkitTextStroke: "1px #1e1e1e" }}
        aria-hidden="true"
      >
        BOOK NOW
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono-label mb-4 text-[#edc840]">Book now</p>
            <h2 className="font-display text-5xl font-extrabold leading-[0.95] text-[#f4f2ee] md:text-7xl">
              <MaskLine>Ready to</MaskLine>
              <MaskLine delay={120}>
                <span className="text-[#edc840]">get messy?</span>
              </MaskLine>
            </h2>
            <Reveal delay={250}>
              <div className="mt-10 space-y-4">
                <div>
                  <p className="font-mono-label text-[#989898]">Studio</p>
                  <p className="mt-1 text-[#f4f2ee]">28 W 36th St, Floor 10, New York, NY 10018</p>
                </div>
                <div>
                  <p className="font-mono-label text-[#989898]">Hours</p>
                  <p className="mt-1 text-[#f4f2ee]">Daily 10:00 — 22:00</p>
                </div>
                <div>
                  <p className="font-mono-label text-[#989898]">Contact</p>
                  <p className="mt-1 text-[#f4f2ee]">hello@shotofartnova.com</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="md:col-span-7">
            <div className="border border-[#262626] bg-[#141414] p-8 md:p-12">
              {sent ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
                    <circle cx="32" cy="32" r="30" fill="#edc840" />
                    <path d="M20 33l8 8 16-18" stroke="#0b0b0b" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="font-display mt-8 text-3xl font-extrabold text-[#f4f2ee]">Request received</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#989898]">
                    We'll confirm your slot by email within the hour. Aprons are ready — see you soon.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="font-mono-label mt-8 text-[#edc840] underline underline-offset-4"
                  >
                    Book another slot
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <label className="block">
                      <span className="font-mono-label mb-2 block text-[#989898]">Name</span>
                      <input required placeholder="Frida Basquiat" className={inputCls} />
                    </label>
                    <label className="block">
                      <span className="font-mono-label mb-2 block text-[#989898]">Email</span>
                      <input required type="email" placeholder="you@email.com" className={inputCls} />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <label className="block">
                      <span className="font-mono-label mb-2 block text-[#989898]">Experience</span>
                      <select required defaultValue="" className={`${inputCls} appearance-none bg-[#141414]`}>
                        <option value="" disabled>
                          Choose your chaos
                        </option>
                        {EXPERIENCES.map((e) => (
                          <option key={e.id} value={e.id}>
                            {e.title} — {e.price}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className="font-mono-label mb-2 block text-[#989898]">Date</span>
                      <input required type="date" className={`${inputCls} [color-scheme:dark]`} />
                    </label>
                  </div>
                  <label className="block">
                    <span className="font-mono-label mb-2 block text-[#989898]">Guests</span>
                    <input required type="number" min={1} max={30} defaultValue={2} className={inputCls} />
                  </label>
                  <button
                    type="submit"
                    data-cursor="Send"
                    className="w-full rounded-sm bg-[#edc840] py-4 font-mono-label text-[#0b0b0b] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Request my slot →
                  </button>
                  <p className="text-center font-mono-label text-[#5a5a5a]" style={{ fontSize: "0.6rem" }}>
                    No prepayment — we confirm availability first
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
