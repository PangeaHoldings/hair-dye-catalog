import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hair Dye Catalog - Professional Salon-Grade Hair Color",
  description: "Discover premium professional hair dyes from top brands. Salon-grade color with expert formulas for beautiful, long-lasting results.",
  keywords: ["hair dye", "professional hair color", "salon hair dye", "hair toner", "bleach", "permanent color"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-neutral-50 text-neutral-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
