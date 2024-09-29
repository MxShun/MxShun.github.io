import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "しゅん＠MxShun",
  description: "しゅん＠MxShunのプロフィール",
  other: {
    "google-site-verification": "yudmgra48wsLZh1gu_pz-IZrlk97CRHg3PattnExKl0", // NOTE: Google Search Console 所有権
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-70KP442ZN0" />
    </html>
  );
}
