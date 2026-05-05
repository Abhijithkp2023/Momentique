import Image from "next/image";

import { LANDING_MAIN_BANNER } from "@/src/data/landing/mainBanner";

import {
  landingAosAttrs,
  landingBodyFontClass,
  landingHeadingFontClass,
  LandingHeroCta,
  LandingHeroEyebrow,
  LandingHeroHighlights,
  LandingHeroPhoneMockup,
} from "./components";

export type LandingMainBannerProps = {
  className?: string;
};

export function LandingMainBanner({ className = "" }: LandingMainBannerProps) {
  const c = LANDING_MAIN_BANNER;

  return (
    <section
      className={`mt-14 pt-14 sm:mt-16 sm:pt-16 relative isolate flex min-h-[min(100svh,56rem)] w-full flex-col justify-center overflow-hidden bg-zinc-950 px-5 py-[clamp(4rem,11vw,6.5rem)] sm:px-10 md:px-14 lg:px-16 ${className}`}
      aria-labelledby="landing-hero-heading"
    >
      <div
        className="-z-10 pointer-events-none absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-950 to-neutral-950"
        aria-hidden
      />
      <div
        className="-z-10 pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_-8%,rgba(244,226,219,0.22),transparent_46%)] mix-blend-screen"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-s-[-20%] top-[6%] z-[-8] size-152 max-w-none rounded-full bg-rose-200/22 blur-[4.25rem]"
        {...landingAosAttrs("fade-right", { duration: 900, delay: 0 })}
        aria-hidden
      />

      <div className="-z-[6] absolute inset-0 wedora-banner-drift">
        <Image
          src={c.media.imageSrc}
          alt={c.media.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.38]"
          unoptimized
        />
      </div>
      <div
        aria-hidden
        className="z-[-4] absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/88 to-zinc-950/25"
      />
      <div
        aria-hidden
        className="z-[-5] absolute inset-x-0 top-[6%] h-52 bg-linear-to-b from-white/12 to-transparent opacity-65 blur-[90px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
        <div className="flex flex-col text-center lg:text-start">
          <div {...landingAosAttrs("fade-down", { duration: 800, delay: 80 })}>
            <LandingHeroEyebrow label={c.eyebrow} />
          </div>

          <h1
            id="landing-hero-heading"
            {...landingAosAttrs("fade-up", { duration: 900, delay: 160 })}
            className={`${landingHeadingFontClass} mt-8 text-[2.125rem] leading-[1.12] tracking-tight text-balance text-white sm:text-[2.5rem] md:text-5xl lg:mt-9 lg:text-[3.125rem]`}
          >
            {c.headline}
          </h1>

          <div
            {...landingAosAttrs("fade-up", { duration: 820, delay: 260 })}
            className={`${landingBodyFontClass} mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/76 lg:mx-0 lg:mt-7 lg:max-w-lg lg:text-[1.125rem]`}
          >
            {c.supporting}
          </div>

          <div
            {...landingAosAttrs("fade-up", { duration: 800, delay: 360 })}
            className={`${landingBodyFontClass} mx-auto mt-9 flex flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start`}
          >
            <LandingHeroHighlights items={c.highlights} />
          </div>

          <div
            {...landingAosAttrs("fade-up", { duration: 760, delay: 440 })}
            className={`${landingBodyFontClass} mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start`}
          >
            <LandingHeroCta
              label={c.primaryCta.label}
              href={c.primaryCta.href}
              external={c.primaryCta.external}
              variant="primary"
            />
            <LandingHeroCta
              label={c.secondaryCta.label}
              href={c.secondaryCta.href}
              external={c.secondaryCta.external}
              variant="secondary"
            />
          </div>
        </div>

        <div
          {...landingAosAttrs("zoom-in", { duration: 950, delay: 200 })}
          className="relative mx-auto mt-6 flex w-full justify-center md:max-w-none sm:mt-0 lg:mx-0 lg:justify-end"
        >
          <LandingHeroPhoneMockup previewSrc="/preview/save-the-date" />
        </div>
      </div>
    </section>
  );
}
