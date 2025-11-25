import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Marvel } from 'next/font/google';

const marvel = Marvel({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Components Storage Framework",
  description: "To store my components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marvel.className} antialiased box-border`}
      >
        {children}
      </body>
    </html>
  );
}
