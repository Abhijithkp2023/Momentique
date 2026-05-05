function FloatingHeart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 28s-9.2-5.6-12-10.4C2.4 14.4 3.6 9.6 7.6 8c2-.8 4.2-.2 5.6 1.4l.8.9.8-.9C16.2 7.8 18.4 7.2 20.4 8c4 1.6 5.2 6.4 3.6 9.6C21.2 22.4 16 28 16 28Z"
        className="fill-rose-300/55 stroke-rose-400/45"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FloatingStar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 4.5 18.9 12h8.4l-6.8 4.9 2.6 8-6.9-5-6.9 5 2.6-8L4.7 12h8.4L16 4.5Z"
        className="fill-amber-200/50 stroke-amber-300/40"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FloatingSparkle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14 2v6M14 20v6M2 14h6M20 14h6M5.5 5.5l4.2 4.2M18.3 18.3l4.2 4.2M5.5 22.5l4.2-4.2M18.3 9.7l4.2-4.2"
        className="stroke-rose-300/60"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="2.2" className="fill-rose-200/70" />
    </svg>
  );
}

export type LandingHeroPhoneMockupProps = Readonly<{
  /** Same-origin path or absolute URL for the iframe document */
  previewSrc: string;
  className?: string;
  showFloatingDecor?: boolean;
  iframeTitle?: string;
}>;

export function LandingHeroPhoneMockup({
  previewSrc,
  className = "",
  showFloatingDecor = true,
  iframeTitle = "Invitation preview",
}: LandingHeroPhoneMockupProps) {
  return (
    <div className={`relative w-full max-w-[min(100%,17.5rem)] scale-[0.92] sm:max-w-[min(100%,19.5rem)] sm:scale-100 lg:max-w-[min(100%,20.5rem)] ${className}`}>
      {showFloatingDecor ? (
        <>
          <FloatingHeart className="wedora-hero-float-1 pointer-events-none absolute -start-6 top-[38%] z-10 size-10 sm:-start-8 sm:size-11" />
          <FloatingStar className="wedora-hero-float-2 pointer-events-none absolute -end-5 top-[18%] z-10 size-9 sm:-end-7 sm:size-10" />
          <FloatingSparkle className="wedora-hero-float-3 pointer-events-none absolute -end-3 bottom-[22%] z-10 size-8 sm:size-9" />
        </>
      ) : null}

      <div className="relative rounded-[2.85rem] bg-zinc-950 p-[10px] shadow-[0_28px_70px_-24px_rgba(24,24,27,0.55)] ring-1 ring-black/20">
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.15rem] bg-white">
          <iframe
            title={iframeTitle}
            src={previewSrc}
            className="absolute inset-0 z-0 h-full w-full border-0"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-[2.15rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_18px_48px_rgba(255,255,255,0.18),inset_0_-40px_80px_rgba(12,10,9,0.08)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-[2.15rem] bg-linear-to-br from-white/25 via-transparent to-transparent opacity-70 mix-blend-screen"
            aria-hidden
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-6 top-[14px] z-30 flex justify-center"
          aria-hidden
        >
          <div className="h-7 w-[5.5rem] rounded-full bg-zinc-950 shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)] ring-1 ring-black/40 sm:w-28" />
        </div>
      </div>
    </div>
  );
}
