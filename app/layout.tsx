import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { AOSProvider } from "@/src/components/providers/AOSProvider";
import { SiteHeader } from "@/src/components/SiteHeader";
import "./globals.css";

const playfairHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSansBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairHeading.variable} ${dmSansBody.variable}`}>
      <body className="antialiased">
        <AOSProvider>
          <SiteHeader />
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
