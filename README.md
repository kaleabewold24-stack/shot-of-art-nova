# Shot of Art Nova

Immersive art experience studio website — inspired by Shot of Art in NYC, rebranded as **Shot of Art Nova**.

Shoot paint-filled balloons with a BB gun, spin canvases, pour fluid art, and paint the walls in neon. This site presents nine private experiences with a generative paint aesthetic.

## Stack

- React + TypeScript + Vite
- Tailwind CSS 3
- Custom canvas generative paint engine (no WebGL dependency)
- IntersectionObserver-driven reveal animations

## Highlights

- **Generative paint hero** — `src/components/PaintCanvas.tsx`: drifting blend blobs + pointer-driven splatter bursts with gravity and fading trails
- **Custom cursor** — `src/components/Cursor.tsx`: blend-mode ring with contextual labels ("Book", "Send")
- **Masked line reveals & staggered character entrance** — `src/components/Reveal.tsx` + hero char sequencer
- **Nine experiences** — data-driven from `src/data/experiences.ts`
- **Booking request form** — client-side demo flow with confirmation state

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview
```

## Structure

```
src/
  components/   PaintCanvas, Cursor, Reveal
  data/         experiences.ts (experiences + FAQ content)
  pages/        Home.tsx
  sections/     Header, Hero, Marquee, Experiences, HowItWorks, Stats, Faq, Booking, Footer
```

## Palette

Near-black studio canvas `#0b0b0b` with a paint set: gold `#edc840`, plum `#e6a2e4`, aqua `#5dcb9a`, sky `#78c9db`, lime `#cbd34b`, pink `#d85da7`.

> Note: the booking form is a front-end demo — submissions are not sent to a server.
