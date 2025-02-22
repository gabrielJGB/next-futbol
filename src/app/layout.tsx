import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono,Rubik } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const rubik = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Futbol 1",
  description: "Futbol 1, resultados de las ligas de futbol de todo el mundo.",
  
};

export const viewport: Viewport = {
  themeColor: 'black',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`bg-[--tw-color-950] ${geistMono.variable} antialiased pb-[200px]`}
      >
        <Nav />
        
          {children}
        
      </body>
    </html>
  );
}
