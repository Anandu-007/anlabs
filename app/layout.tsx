import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import BackgroundRain from "@/components/os/BackgroundRain";
import ApplicationShell from "@/components/os/ApplicationShell";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anandu | Backend Developer",
  description:
    "Building backend systems, AI applications, and production-ready software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} bg-black text-white w-screen h-screen overflow-hidden relative md:flex md:items-center md:justify-center md:p-8`}
      >
        <BackgroundRain />

        <ApplicationShell>{children}</ApplicationShell>
      </body>
    </html>
  );
}