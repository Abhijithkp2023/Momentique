"use client";

/**
 * ---------------------------------------------------------------------------
 * DEVELOPER DOCS — not shown on the site; keep usage notes here only.
 * ---------------------------------------------------------------------------
 *
 * Import:
 *   import { InfiniteImageCanvas } from "@/src/widgets";
 *
 * Props:
 *   - images (required): string[] and/or { url, width?, height? }[]. Use same-origin
 *     paths under public/ or URLs that allow CORS for WebGL textures.
 *   - showControls: floating hints (keyboard / touch).
 *   - backgroundColor, fogColor, fogNear, fogFar: scene/fog tuning (see engine types).
 *   - viewportHeightClass, viewportClassName, className: layout wrappers.
 *
 * Example:
 *   <InfiniteImageCanvas
 *     images={["/wedding/a.jpg", { url: "/wedding/b.webp", width: 1920, height: 1280 }]}
 *     showControls
 *     backgroundColor="#fafafa"
 *     fogColor="#fafafa"
 *   />
 *
 * Notes:
 *   - The WebGL scene is loaded via next/dynamic({ ssr: false }); keep this widget in
 *     client-hydrated trees.
 *   - Cross-origin images need Access-Control-Allow-Origin; /public assets are easiest.
 *   - Shorter viewportHeightClass can reduce GPU work on low-end devices.
 * ---------------------------------------------------------------------------
 */

import dynamic from "next/dynamic";
import * as React from "react";

import { landingBodyFontClass } from "@/src/widgets/landing/components/landingHeroTokens";

import type { InfiniteCanvasProps } from "./engine/types";

const DEFAULT_MEDIA_SIZE = { width: 1600, height: 1000 };

/** Public URL string, or an object with intrinsic dimensions for correct plane aspect ratio. */
export type InfiniteImageCanvasImageInput =
  | string
  | {
      url: string;
      width?: number;
      height?: number;
    };

export type InfiniteImageCanvasProps = {
  images: InfiniteImageCanvasImageInput[];
  className?: string;
  viewportClassName?: string;
  viewportHeightClass?: string;
} & Omit<InfiniteCanvasProps, "media">;

export function normalizeInfiniteImageCanvasMedia(items: InfiniteImageCanvasImageInput[]) {
  return items.map((item) => {
    if (typeof item === "string") {
      return {
        url: item,
        width: DEFAULT_MEDIA_SIZE.width,
        height: DEFAULT_MEDIA_SIZE.height,
      };
    }
    return {
      url: item.url,
      width: item.width ?? DEFAULT_MEDIA_SIZE.width,
      height: item.height ?? DEFAULT_MEDIA_SIZE.height,
    };
  });
}

const InfiniteCanvasSceneDynamic = dynamic(
  () => import("./engine/InfiniteCanvasScene").then((mod) => ({ default: mod.InfiniteCanvasScene })),
  { ssr: false, loading: () => <div className="bg-zinc-100" aria-hidden /> }
);

export function InfiniteImageCanvas({
  images,
  className = "",
  viewportClassName = "",
  viewportHeightClass = "min-h-[min(72vh,40rem)] h-[72vh]",
  ...canvasProps
}: InfiniteImageCanvasProps) {
  const media = React.useMemo(() => normalizeInfiniteImageCanvasMedia(images), [images]);

  return (
    <section className={`w-full ${className}`} aria-label="Infinite image canvas">
      <div
        className={`relative isolate overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-50 shadow-sm ${viewportHeightClass} ${viewportClassName}`}
      >
        {media.length > 0 ? (
          <InfiniteCanvasSceneDynamic media={media} showControls {...canvasProps} />
        ) : (
          <div className={`${landingBodyFontClass} flex size-full items-center justify-center text-zinc-500`}>
            Pass at least one image URL in{" "}
            <span className="mx-1 rounded-md bg-zinc-200 px-1.5 py-0.5 font-mono text-sm text-zinc-800">images</span>.
          </div>
        )}
      </div>
    </section>
  );
}
