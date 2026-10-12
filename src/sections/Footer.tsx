export default function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#0b0b0b]">
      <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-16 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-display text-4xl font-extrabold text-[#f4f2ee] md:text-6xl">
              Shot of Art <span className="text-[#edc840]">Nova</span>
            </p>
            <p className="font-mono-label mt-4 text-[#989898]">
              Here art meets fun and timeless memories
            </p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <span className="font-mono-label text-[#5a5a5a]">Visit</span>
              <a href="#experiences" className="text-sm text-[#c9c7c2] hover:text-[#edc840]"><span className="dbl"><span>Experiences</span><span className="text-[#edc840]">Experiences</span></span></a>
              <a href="#how" className="text-sm text-[#c9c7c2] hover:text-[#edc840]"><span className="dbl"><span>How it works</span><span className="text-[#edc840]">How it works</span></span></a>
              <a href="#faq" className="text-sm text-[#c9c7c2] hover:text-[#edc840]"><span className="dbl"><span>FAQ</span><span className="text-[#edc840]">FAQ</span></span></a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono-label text-[#5a5a5a]">Follow</span>
              <a href="#top" className="text-sm text-[#c9c7c2] hover:text-[#edc840]"><span className="dbl"><span>Instagram</span><span className="text-[#edc840]">Instagram</span></span></a>
              <a href="#top" className="text-sm text-[#c9c7c2] hover:text-[#edc840]"><span className="dbl"><span>TikTok</span><span className="text-[#edc840]">TikTok</span></span></a>
              <a href="#top" className="text-sm text-[#c9c7c2] hover:text-[#edc840]"><span className="dbl"><span>YouTube</span><span className="text-[#edc840]">YouTube</span></span></a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#262626] pt-6 md:flex-row">
          <p className="font-mono-label text-[#5a5a5a]">© 2026 Shot of Art Nova. All paint reserved.</p>
          <p className="font-mono-label text-[#5a5a5a]">28 W 36th St, Floor 10 · New York</p>
        </div>
      </div>
    </footer>
  );
}
