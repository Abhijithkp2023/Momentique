/**
 * Marketing landing page hero copy only.
 * For guest-facing wedding templates, use `/templates` + backend JSON instead.
 */

export const LANDING_MAIN_BANNER = {
  eyebrow: "Wedora Digital Atelier",
  headline: "Wedding invitations your guests remember.",
  supporting:
    "Design a refined digital experience—beautiful typography, timelines, RSVP, maps, and your story—all in one place.",
  highlights: [
    { text: "Launch in minutes, no code" },
    { text: "Multi-language typography" },
    { text: "Looks flawless on phones" },
  ],
  primaryCta: {
    label: "Start designing",
    href: "/signup",
    external: false,
  },
  secondaryCta: {
    label: "Explore features",
    href: "#features",
    external: false,
  },
  media: {
    imageSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=2200&auto=format&fit=crop",
    imageAlt: "",
  },
} as const;
