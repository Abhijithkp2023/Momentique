"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { LANDING_MAIN_BANNER } from "@/src/data/landing/mainBanner";

const WEDDING_ISO = "2026-09-20T15:00:00";

function IconDress({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M24 6v6l4 4 3-4 5 12-12 14-12-14 5-12 3 4 4-4V6"
        className="stroke-[#7c2d42]/85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19 28h10" className="stroke-[#7c2d42]/55" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconSuit({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M16 14h16l4 22H12l4-22Z"
        className="stroke-[#4a3728]/88"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M20 14v-4h8v4" className="stroke-[#4a3728]/88" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 18v6" className="stroke-[#4a3728]/55" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconMusic({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M9 18V5l12-2v13"
        className="stroke-[#57534e]"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="18" r="3" className="stroke-[#57534e]" strokeWidth="1.6" />
      <circle cx="19" cy="16" r="3" className="stroke-[#57534e]" strokeWidth="1.6" />
    </svg>
  );
}

function IconPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 21s7-5.18 7-11a7 7 0 1 0-14 0c0 5.82 7 11 7 11Z"
        className="stroke-[#57534e]"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2" className="fill-[#57534e]" />
    </svg>
  );
}

function daysBetween(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  return Math.max(0, Math.ceil(ms / (86_400_000)));
}

export default function SaveTheDatePreviewPage() {
  const weddingDate = useMemo(() => new Date(WEDDING_ISO), []);
  const heroPhoto = LANDING_MAIN_BANNER.media.imageSrc;

  const [daysLeft, setDaysLeft] = useState<number>(() => daysBetween(new Date(), weddingDate));
  const [musicOn, setMusicOn] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  useEffect(() => {
    const refresh = () => setDaysLeft(daysBetween(new Date(), weddingDate));
    refresh();
    const hourly = setInterval(refresh, 60 * 60 * 1000);
    return () => clearInterval(hourly);
  }, [weddingDate]);

  return (
    <div className="relative min-h-[115vh] bg-[#fdf4ed] px-4 pb-16 pt-10 font-[family-name:var(--font-body)] text-stone-800">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(251,207,232,0.35),transparent_45%)]"
        aria-hidden
      />

      <header className="relative text-center">
        <div className="font-[family-name:var(--font-heading)] text-[11px] font-semibold uppercase tracking-[0.42em] text-[#6b4f3a]">
          Save the date
        </div>
      </header>

      <section className="relative mt-8 flex flex-col items-center" aria-label="Days until the wedding">
        <div
          className="font-[family-name:var(--font-heading)] text-[clamp(3.6rem,17vw,5.1rem)] leading-[0.92] font-semibold tracking-tight text-transparent bg-clip-text bg-cover bg-center"
          style={{ backgroundImage: `url(${heroPhoto})` }}
          suppressHydrationWarning
          aria-live="polite"
        >
          {daysLeft}
        </div>

        <div className="font-[family-name:var(--font-heading)] mt-3 text-xs font-semibold uppercase tracking-[0.38em] text-[#57534e]/90">
          Days to go
        </div>

        <div className="mt-10 flex items-center gap-8 opacity-90">
          <IconDress className="size-11" />
          <IconSuit className="size-11" />
        </div>

        <div className="font-[family-name:var(--font-invite-script)] mt-10 text-[clamp(2rem,9vw,2.65rem)] leading-none text-[#861657]">
          Robert & Jennifer
        </div>
        <div className="font-[family-name:var(--font-heading)] mt-4 text-lg tracking-[0.14em] text-[#44403c]">
          20.09.2026
        </div>
      </section>

      <nav
        className="relative mt-14 flex items-center justify-between px-2"
        aria-label="Invitation quick actions"
      >
        <button
          type="button"
          className="flex size-14 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_-12px_rgba(41,37,36,0.55)] ring-1 ring-stone-900/8 transition hover:bg-white active:scale-95"
          aria-pressed={musicOn}
          onClick={() => setMusicOn((v) => !v)}
        >
          <IconMusic className="size-7" />
          <span className="sr-only">{musicOn ? "Pause playlist preview" : "Playlist preview"}</span>
        </button>
        <button
          type="button"
          className="flex size-14 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_-12px_rgba(41,37,36,0.55)] ring-1 ring-stone-900/8 transition hover:bg-white active:scale-95"
          aria-expanded={locationOpen}
          onClick={() => setLocationOpen((v) => !v)}
        >
          <IconPin className="size-7" />
          <span className="sr-only">Venue location</span>
        </button>
      </nav>

      {locationOpen ? (
        <div className="relative mx-auto mt-8 max-w-sm rounded-2xl bg-white/85 px-5 py-4 shadow-lg ring-1 ring-stone-900/10 backdrop-blur-sm">
          <div className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#44403c]">
            Riverside Gardens
          </div>
          <div className="mt-2 text-sm leading-relaxed text-stone-600">
            Demo venue · Tap outside or collapse from the landing hero when embedded.
          </div>
        </div>
      ) : null}

      <section className="relative mx-auto mt-14 max-w-sm rounded-2xl bg-white/70 px-5 py-6 shadow-md ring-1 ring-stone-900/8 backdrop-blur-[2px]">
        <div className="font-[family-name:var(--font-heading)] text-center text-[13px] font-semibold uppercase tracking-[0.26em] text-[#6b4f3a]">
          Ceremony
        </div>
        <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-stone-900/10">
          <div className="relative aspect-[16/10] bg-stone-100">
            <Image
              src={heroPhoto}
              alt="Wedding celebration photo"
              fill
              className="object-cover"
              sizes="320px"
              unoptimized
              priority={false}
            />
          </div>
        </div>
        <div className="mt-4 text-center text-sm leading-relaxed text-stone-600">
          Scroll inside this frame to try the full-length preview experience.
        </div>
      </section>

      <footer className="relative mt-16 text-center font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.35em] text-[#a8a29e]">
        Wedora preview · not an RSVP
      </footer>
    </div>
  );
}
