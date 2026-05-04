import Image from "next/image";

import { landingBodyFontClass } from "./landingHeroTokens";

export type LandingHeroPreviewCardProps = Readonly<{
  imageSrc: string;
  imageAlt: string;
  captionLabel?: string;
  captionLine?: string;
}>;

export function LandingHeroPreviewCard({
  imageSrc,
  imageAlt,
  captionLabel = "Preview",
  captionLine = "Your site, your ceremony",
}: LandingHeroPreviewCardProps) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-5 rounded-[2rem] bg-linear-to-br from-white/30 via-white/5 to-transparent opacity-60 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/18 bg-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="relative aspect-[4/5]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover"
            unoptimized
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/12 to-transparent"
          />
        </div>
        <div
          className={`${landingBodyFontClass} relative border-t border-white/10 px-7 py-5 text-center text-sm text-white/80`}
        >
          <div className="text-[10px] font-semibold tracking-[0.32em] text-rose-100/80 uppercase">{captionLabel}</div>
          <div className="mt-2 text-[15px] font-medium text-white/95">{captionLine}</div>
        </div>
      </div>
    </div>
  );
}
