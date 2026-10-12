export type Experience = {
  id: string;
  index: string;
  title: string;
  tag?: string;
  description: string;
  duration: string;
  price: string;
  age: string;
  color: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "shooting-spinning",
    index: "01",
    title: "Shooting & Spinning®",
    tag: "Bestseller",
    description:
      "A splash of fun with a dash of mischief — and a blast of color. Take aim with a BB gun, pop paint-filled balloons onto your canvas, then let our spinning machine blend the explosion into a one-of-a-kind masterpiece.",
    duration: "60 min",
    price: "from $99",
    age: "18+",
    color: "#e6a2e4",
  },
  {
    id: "neon-shooting",
    index: "02",
    title: "Shooting & Spinning® in Neon",
    tag: "Glow",
    description:
      "Same pop, under black light. Fluorescent paint bursts onto canvas while UV lamps turn every splatter electric. The spin machine blends neon shades into art that literally glows.",
    duration: "75 min",
    price: "from $119",
    age: "18+",
    color: "#d85da7",
  },
  {
    id: "splatter-room",
    index: "03",
    title: "Splatter Room",
    tag: "Go wild",
    description:
      "Leave the outside world behind. Every wall, floor and canvas is yours to transform — throw, drip, flick and pour with the people you enjoy most. Zero rules, maximum freedom.",
    duration: "60 min",
    price: "from $89",
    age: "All ages",
    color: "#edc840",
  },
  {
    id: "fluid-bear",
    index: "04",
    title: "Fluid Bear",
    description:
      "Personalize your own 11-inch bear figurine with hypnotic paint-pouring techniques. Our instructors guide every tilt and swirl until your far-out pattern comes to life.",
    duration: "60 min",
    price: "from $79",
    age: "3+",
    color: "#78c9db",
  },
  {
    id: "spin-art",
    index: "05",
    title: "Spin Art",
    description:
      "Pick 3–5 colors, then pour and splash them onto a canvas whirling on our spin machine. Use brushes, use syringes — centrifugal force does the rest.",
    duration: "45 min",
    price: "from $69",
    age: "3+",
    color: "#5dcb9a",
  },
  {
    id: "fluid-art",
    index: "06",
    title: "Fluid Art Class",
    tag: "Group or private",
    description:
      "A meditative paint-pouring session that turns your canvas into a marble-effect dream. Relaxing, unexpectedly beautiful, and impossible to mess up — bring the family or the whole crew.",
    duration: "90 min",
    price: "from $89",
    age: "All ages",
    color: "#cbd34b",
  },
  {
    id: "paint-therapy",
    index: "07",
    title: "Paint Therapy in Neon",
    tag: "18+",
    description:
      "Darkness, neon light, glowing paint, water guns and protective gear. Paint the walls, the floor, and yes — each other. Pure, chaotic joy in a room that glows back.",
    duration: "60 min",
    price: "from $99",
    age: "18+",
    color: "#d85da7",
  },
  {
    id: "romantic-date",
    index: "08",
    title: "Romantic Date",
    tag: "Couples",
    description:
      "First date, anniversary or parents' night out — shoot paint bombs together, spin your artwork, pour fluid art side by side, then splash the room. You take home a masterpiece made by the two of you.",
    duration: "120 min",
    price: "from $189",
    age: "18+",
    color: "#e6a2e4",
  },
  {
    id: "art-boom",
    index: "09",
    title: "Art Boom — 3 in 1",
    tag: "Full blast",
    description:
      "Everything, all at once: shoot paint balloons, spin the splashed canvas, pour your own fluid painting, and finish by painting the room itself. The complete Nova experience.",
    duration: "150 min",
    price: "from $149",
    age: "18+",
    color: "#edc840",
  },
];

export const FAQS = [
  {
    q: "I've never done art before. Is this for me?",
    a: "That's the whole point — no skills required. Our instructors guide you step by step. It's about experimenting, laughing, and going home with something you made. The best part? You can't mess it up.",
  },
  {
    q: "What should I wear?",
    a: "We provide aprons, shoe covers and protective gear for the messier sessions — but leave your favorite outfit at home. Paint has a mind of its own.",
  },
  {
    q: "What does a private experience mean?",
    a: "You never share your room with strangers. An art instructor is with you the entire time, and the space belongs only to the people you came with.",
  },
  {
    q: "Which experiences work for kids?",
    a: "Spin Art, Fluid Art, Fluid Bear and the Splatter Room are perfect for young artists. Kids need a chaperone — and yes, count yourself into the booking.",
  },
  {
    q: "Can we book last minute?",
    a: "Yes. Check real-time availability through the Book Now button and grab any open slot — same-day sessions are common on weekdays.",
  },
  {
    q: "Do you host birthdays, team events or big groups?",
    a: "Absolutely. We run private events beyond our regular schedule — tell us your date and group size in the booking form and we'll make it happen.",
  },
];
