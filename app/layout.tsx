import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
 import { Inter, Orbitron } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
      subsets: ['latin'], // or your language-specific subset
    });
    const orbitron = Orbitron({
      weight: '400', // or your desired weight
      subsets: ['latin'],
    });

export const metadata: Metadata = {
  title: "BUTTONS_CLICK",
  description: "Next Generation Community App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={orbitron.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
