"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

const bodyFont = "font-[family-name:var(--font-body)]";

const NAV_LINKS = [
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex w-full min-w-0 flex-col border-b border-[color:var(--theme-border)] bg-[var(--theme-bg-elevated)]/95 shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-md supports-[backdrop-filter]:bg-[var(--theme-bg-elevated)]/88">
      <div className="flex h-14 w-full min-w-0 items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <Link
          href="/"
          className={`${bodyFont} shrink-0 text-lg font-semibold tracking-tight text-[var(--theme-fg)]`}
        >
          <span className="font-[family-name:var(--font-heading)]">Wedora</span>
        </Link>

        <nav
          className={`${bodyFont} hidden items-center gap-7 text-sm font-medium text-[var(--theme-fg-muted)] md:flex lg:gap-10`}
          aria-label="Main"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-1 transition-colors hover:text-[var(--theme-fg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="wedora-burger-btn inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-[var(--theme-fg)] md:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          data-open={menuOpen ? "true" : "false"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <svg
            id="burger"
            width="30"
            height="30"
            className="wedora-burger-icon pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            aria-hidden
          >
            <path
              className="wedora-burger-top"
              fill="currentColor"
              d="M0 9h30v2H0z"
            />
            <line
              className="wedora-burger-mid"
              x1="0"
              y1="15"
              x2="30"
              y2="15"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="nonScalingStroke"
            />
            <path
              className="wedora-burger-bot"
              fill="currentColor"
              d="M0 19h30v2H0z"
            />
          </svg>
        </button>
      </div>

      <div
        id={menuId}
        className={`${bodyFont} w-full border-t border-[color:var(--theme-border)] bg-[var(--theme-bg-elevated)] md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex max-h-[min(70vh,calc(100dvh-3.5rem))] w-full flex-col gap-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 md:px-8"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-[var(--theme-fg)] transition-colors hover:bg-[var(--theme-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-accent)]"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
