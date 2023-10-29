import { Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoMono = Roboto_Mono({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Kisan Kumavat",
  description: "Hi, I am Kisan. I build things that lives on internet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="default">
      <body
        className={`max-w-3xl px-6 mx-auto bg-secondary text-white ${robotoMono.variable} font-mono`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
