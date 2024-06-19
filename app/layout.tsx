import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConstantBooking from "@/components/ConstantBooking";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eyesite Opticians",
  description: "We help you see",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4V8TJ5SWSS"></Script>
        <script
          dangerouslySetInnerHTML=
          {{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-4V8TJ5SWSS');`,
          }}
        />
      </head>
      <body>
        <Navbar></Navbar>
        <main className="relative overflow-hidden">{children}</main>
        <ConstantBooking />
        <Footer />
      </body>
    </html>
  );
}
