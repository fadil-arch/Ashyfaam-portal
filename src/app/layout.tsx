import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { ModernLoader } from "@/components/ui/modern-loader";
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
  title: "ITF-NECA TSDP | Ashyfaam Agro-Vet Services",
  description: "Technical Skills Development Project Management Portal - Official registration and screening system for animal health and crop management training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-zinc-50 text-zinc-950`}
      >
        {/* Suspense catches lazy-loaded or server-async page modules and drops the premium spinner */}
        <Suspense 
          fallback={
            <div className="flex min-h-screen items-center justify-center bg-zinc-50">
              <ModernLoader text="Initializing Agro-Vet Portal..." />
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}