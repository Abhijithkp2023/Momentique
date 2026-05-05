import {
  LandingHeroPhoneMockup,
  landingBodyFontClass,
  landingHeadingFontClass,
} from "./components";

export type HeroWithPhoneMockupProps = {
  className?: string;
  /** Live preview URL shown inside the phone frame */
  previewUrl?: string;
  eyebrow?: string;
  headline: string;
  supporting: string;
};

export function HeroWithPhoneMockup({
  className = "",
  previewUrl = "/preview/save-the-date",
  eyebrow = "Digital invitations",
  headline,
  supporting,
}: HeroWithPhoneMockupProps) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-[#fdf4ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 ${className}`}
      aria-labelledby="hero-phone-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,207,232,0.35),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_70%,rgba(254,243,199,0.45),transparent_42%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="order-2 flex flex-col text-center lg:order-1 lg:text-start">
          {eyebrow ? (
            <div
              className={`${landingBodyFontClass} text-xs font-semibold uppercase tracking-[0.22em] text-rose-900/55`}
            >
              {eyebrow}
            </div>
          ) : null}
          <h1
            id="hero-phone-heading"
            className={`${landingHeadingFontClass} mt-4 text-balance text-3xl leading-[1.12] tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem]`}
          >
            {headline}
          </h1>
          <div
            className={`${landingBodyFontClass} mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-600 lg:mx-0 lg:text-[1.0625rem]`}
          >
            {supporting}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <LandingHeroPhoneMockup previewSrc={previewUrl} />
        </div>
      </div>
    </section>
  );
}
