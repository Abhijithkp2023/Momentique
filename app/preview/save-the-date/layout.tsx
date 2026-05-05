import type { ReactNode } from "react";
import { Great_Vibes } from "next/font/google";

const inviteScript = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-invite-script",
  display: "swap",
});

export default function SaveTheDatePreviewLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className={`min-h-0 ${inviteScript.variable}`}>{children}</div>;
}
