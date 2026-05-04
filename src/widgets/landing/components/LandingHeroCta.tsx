import Link from "next/link";

import { landingBodyFontClass } from "./landingHeroTokens";

export type LandingHeroCtaVariant = "primary" | "secondary";

export type LandingHeroCtaProps = Readonly<{
  label: string;
  href: string;
  external: boolean;
  variant: LandingHeroCtaVariant;
}>;

export function LandingHeroCta({ label, href, external, variant }: LandingHeroCtaProps) {
  const base =
    "inline-flex min-h-11 min-w-[11rem] items-center justify-center rounded-full px-7 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-rose-100/70";
  const skin =
    variant === "primary"
      ? "bg-white text-zinc-900 shadow-[0_18px_45px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(0,0,0,0.28)]"
      : "border border-white/40 bg-white/6 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/11";

  const classes = `${base} ${skin} ${landingBodyFontClass}`;

  if (external) {
    return (
      <a className={classes} href={href} rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {label}
    </Link>
  );
}
