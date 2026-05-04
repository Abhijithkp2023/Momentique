export type LandingHeroHighlight = Readonly<{ text: string }>;

export type LandingHeroHighlightsProps = Readonly<{
  /** Short value-prop chips under the subtitle. */
  items: readonly LandingHeroHighlight[];
}>;

export function LandingHeroHighlights({ items }: LandingHeroHighlightsProps) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.text}
          className="rounded-full border border-white/16 bg-white/4 px-4 py-2 text-[13px] text-white/92 backdrop-blur-sm"
        >
          {item.text}
        </div>
      ))}
    </>
  );
}
