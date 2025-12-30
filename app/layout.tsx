import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kelime Curcunası - Sesli ve Çizimli Kelime Oyunu",
  description:
    "Arkadaşlarınla sesli iletişim kurarak veya çizerek kelime anlat! Takım bazlı, aşırı eğlenceli parti oyunu. iOS ve Android'de ücretsiz.",
  keywords: [
    "kelime oyunu",
    "taboo",
    "pictionary",
    "çizim oyunu",
    "parti oyunu",
    "türkçe oyun",
    "kelime curcunası",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Kelime Curcunası",
    description: "Sesli ve çizimli takım bazlı kelime oyunu",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
