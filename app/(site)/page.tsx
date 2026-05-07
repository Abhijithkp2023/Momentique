import { LANDING_INFINITE_IMAGE_CANVAS_SOURCES } from "@/src/data/landing/infiniteImageCanvas";
import { InfiniteImageCanvas, LandingMainBanner } from "@/src/widgets";

export default function Page() {
  return (
    <main>
      <LandingMainBanner />
      <div className="bg-white px-5 py-[clamp(3.5rem,8vw,5.5rem)] sm:px-10 md:px-14 lg:px-16">
        <InfiniteImageCanvas
          images={[...LANDING_INFINITE_IMAGE_CANVAS_SOURCES]}
          showControls
          backgroundColor="#f4f4f5"
          fogColor="#FF0000"
          fogNear={115}
          fogFar={340}
          viewportHeightClass="min-h-[min(70vh,36rem)] h-[68vh]"
        />
      </div>
    </main>
  );
}
