import { useEffect, useRef } from "react";

const PALETTE = ["#e6a2e4", "#edc840", "#5dcb9a", "#78c9db", "#cbd34b", "#d85da7"];

type Blob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  wobble: number;
  wobbleSpeed: number;
};

type Drop = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  life: number;
  maxLife: number;
};

/** Generative paint canvas: drifting blend blobs + pointer-driven splatter bursts. */
export default function PaintCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#0b0b0b";
      ctx.fillRect(0, 0, w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

    const blobs: Blob[] = Array.from({ length: 7 }, () => ({
      x: rand(0, w),
      y: rand(0, h),
      vx: rand(-0.18, 0.18),
      vy: rand(-0.14, 0.14),
      r: rand(120, 260),
      color: pick(PALETTE),
      wobble: rand(0, Math.PI * 2),
      wobbleSpeed: rand(0.002, 0.006),
    }));

    const drops: Drop[] = [];

    const splatter = (x: number, y: number, power = 1) => {
      const color = pick(PALETTE);
      const n = Math.floor(rand(10, 18) * power);
      for (let i = 0; i < n; i++) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(0.4, 3.6) * power;
        drops.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: rand(1.2, 7) * power,
          color: Math.random() < 0.7 ? color : pick(PALETTE),
          life: 0,
          maxLife: rand(40, 110),
        });
      }
      // occasional big central blob
      drops.push({
        x,
        y,
        vx: 0,
        vy: 0,
        r: rand(10, 26) * power,
        color,
        life: 0,
        maxLife: rand(60, 120),
      });
    };

    // seed a few bursts so the hero is alive on load
    for (let i = 0; i < 6; i++) splatter(rand(0, w), rand(0, h), rand(0.8, 1.6));

    const autoInterval = window.setInterval(() => {
      splatter(rand(w * 0.08, w * 0.92), rand(h * 0.1, h * 0.9), rand(0.5, 1.1));
    }, 2600);

    let lastMove = 0;
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastMove < 90) return;
      lastMove = now;
      const rect = canvas.getBoundingClientRect();
      splatter(e.clientX - rect.left, e.clientY - rect.top, 0.55);
    };
    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      splatter(e.clientX - rect.left, e.clientY - rect.top, 2.2);
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", onDown);

    const tick = () => {
      // fading trail
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(11,11,11,0.055)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";

      // drifting ambient blobs (very low alpha = soft glow)
      for (const b of blobs) {
        b.wobble += b.wobbleSpeed;
        b.x += b.vx + Math.cos(b.wobble) * 0.3;
        b.y += b.vy + Math.sin(b.wobble * 0.8) * 0.25;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.color + "14");
        g.addColorStop(1, b.color + "00");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // splatter drops
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.life++;
        d.x += d.vx;
        d.y += d.vy;
        d.vx *= 0.965;
        d.vy = d.vy * 0.965 + 0.045; // gravity pulls paint down
        const t = 1 - d.life / d.maxLife;
        if (t <= 0) {
          drops.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = Math.min(1, t * 1.4) * 0.9;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(0.4, d.r * (0.55 + t * 0.45)), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(autoInterval);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
