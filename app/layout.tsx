import type { Metadata } from "next";
import "./globals.css";
 import { Montserrat } from 'next/font/google';



    const montserrat = Montserrat({
      weight: ['400', '700', '900'], // or your desired weight
      subsets: ['latin'],
      variable: '--font-montserrat',
      display: 'swap'
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
    <html lang="en" className={montserrat.className}>
      <body      
      >
        {children}
      </body>
    </html>
  );
}
