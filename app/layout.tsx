import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  title: "Trubaci Složna Braća - Profesionalni trubači za sve vrste slavlja | Smederevo, Požarevac, Mladenovac",
  description: "Trubaci Složna Braća - najbolji trubači u Smederevu, Požarevcu, Mladenovcu, Kovinu, Smederevskoj Palanci, Velikoj Plani, Lozoviku, Grockoj i Svilajncu. Sviraju na venčanjima, krštenjima, rođendanima, sahranama i svim važnim događajima. Kontakt: 062/11-20-641",
  keywords: [
    "trubaci smederevo",
    "trubaci požarevac", 
    "trubaci mladenovac",
    "trubaci kovin",
    "trubaci smederevska palanka",
    "trubaci velika plana",
    "trubaci lozovik",
    "trubaci grocka",
    "trubaci svilajnac",
    "trubači za venčanje",
    "trubači za krštenje",
    "trubači za sahranu",
    "trubači za rođendan",
    "trubači za slavu",
    "trubači za proslavu",
    "složna braća trubaci",
    "profesionalni trubači",
    "tradicionalni trubači",
    "trubači za sve vrste slavlja"
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://trubaci-sloznabraca.com/",
  },
  openGraph: {
    title: "Trubaci Složna Braća - Profesionalni trubači za sve vrste slavlja",
    description: "Najbolji trubači u Smederevu i okolini. Sviraju na venčanjima, krštenjima, sahranama i svim važnim događajima.",
    type: "website",
    locale: "sr_RS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trubaci Složna Braća - Profesionalni trubači",
    description: "Najbolji trubači u Smederevu i okolini za sve vrste slavlja.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-base md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
