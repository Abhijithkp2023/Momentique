import type { ReactNode } from "react";

import { SiteHeader } from "@/src/components/SiteHeader";

export default function SiteChromeLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
