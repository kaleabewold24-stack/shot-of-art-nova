import { useEffect, useRef, useState } from "react";

/** Custom cursor: blend-mode circle that scales and shows a label on interactive targets. */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const target = (e.target as HTMLElement)?.closest?.(
        "a, button, [role='button'], [data-cursor]"
      ) as HTMLElement | null;
      if (target) {
        setActive(true);
        setLabel(target.dataset.cursor || "");
      } else {
        setActive(false);
        setLabel("");
      }
    };

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color] duration-300"
        style={{
          width: active ? (label ? 84 : 56) : 36,
          height: active ? (label ? 84 : 56) : 36,
          mixBlendMode: "difference",
          borderColor: "#f4f2ee",
          backgroundColor: active ? "rgba(244,242,238,0.95)" : "transparent",
        }}
      >
        {label && (
          <span className="font-mono-label text-[#0b0b0b]" style={{ fontSize: "0.6rem" }}>
            {label}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-[#edc840]"
        style={{ opacity: active ? 0 : 1, transition: "opacity 200ms" }}
      />
    </div>
  );
}
