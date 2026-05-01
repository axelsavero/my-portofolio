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
  title: "Muhammad Axel Savero Fikri — Fullstack Developer Portfolio",
  description:
    "Passionate Fullstack Developer specializing in modern web technologies. Building high-performance applications with React, Next.js, TypeScript, and more.",
  keywords: [
    "Fullstack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Axel Savero Fikri" }],
  openGraph: {
    title: "Muhammad Axel Savero Fikri — Fullstack Developer Portfolio",
    description:
      "Passionate Fullstack Developer building high-performance web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Axel Savero Fikri — Fullstack Developer Portfolio",
    description:
      "Passionate Fullstack Developer building high-performance web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
    >
      <body className="min-h-screen bg-[#09090B] text-zinc-50 overflow-x-hidden">{children}</body>
    </html>
  );
}
