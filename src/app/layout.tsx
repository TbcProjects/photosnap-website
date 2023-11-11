import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../lib/theme/globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Starter Kit",
  description: "Next js starter kit for easy website setup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {/* SiteHeader */}
        {children}
        {/* SiteFooter */}
      </body>
    </html>
  );
}
