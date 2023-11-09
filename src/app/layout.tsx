import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../lib/theme/globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {/* SiteHeader */}
        {children}
        {/* SiteFooter */}
      </body>
    </html>
  );
}
