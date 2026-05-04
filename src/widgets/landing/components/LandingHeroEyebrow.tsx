import { landingBodyFontClass } from "./landingHeroTokens";

export type LandingHeroEyebrowProps = Readonly<{
  /** Eyebrow text (marketing label above the headline). */
  label: string;
}>;

export function LandingHeroEyebrow({ label }: LandingHeroEyebrowProps) {
  return (
    <div className="inline-flex items-center justify-center self-center rounded-full border border-white/28 bg-white/6 px-5 py-2 text-[11px] font-semibold tracking-[0.2em] text-rose-50/95 uppercase backdrop-blur-md lg:self-start lg:justify-start">
      <span className={landingBodyFontClass}>{label}</span>
    </div>
  );
}
