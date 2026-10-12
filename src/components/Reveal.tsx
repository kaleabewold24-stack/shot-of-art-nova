import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

/** Scroll-triggered reveal: fade + rise, staggered via `delay`. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

/** Masked line reveal for headline text. */
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("is-in"), delay);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <span ref={ref} className={`mask-line ${className}`}>
      <span>{children}</span>
    </span>
  );
}
