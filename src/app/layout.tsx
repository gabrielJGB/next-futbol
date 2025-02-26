import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Fútbol 1",
  description: 'Fútbol 1 tiene los resultados en vivo de todas las ligas del mundo, formaciones, noticias, fixtures, estadísticas, videos y mucho más.',
  
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`bg-[--tw-color-950] ${inter.className} antialiased pb-[200px]`}
      >
        <Nav />
        
          {children}
        
      </body>
    </html>
  );
}
