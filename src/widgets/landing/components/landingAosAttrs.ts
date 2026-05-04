/**
 * Helpers for landing sections; AOS runs from `src/components/providers/AOSProvider.tsx`.
 */

export type LandingAosOptions = Readonly<{
  delay?: number;
  duration?: number;
}>;

export function landingAosAttrs(animation: string, options?: LandingAosOptions) {
  return {
    "data-aos": animation,
    ...(options?.delay != null ? { "data-aos-delay": String(options.delay) } : {}),
    ...(options?.duration != null ? { "data-aos-duration": String(options.duration) } : {}),
  } satisfies Record<string, string>;
}
