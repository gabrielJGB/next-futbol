import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Fútbol 1",
  applicationName:"Fútbol 1",
  authors:[{ name: "Gabriel JGB", url: "https://github.com/gabrielJGB" }],
  description: 'Fútbol 1 tiene los resultados en vivo de todas las ligas del mundo, formaciones, noticias, fixtures, estadísticas, videos y mucho más.',

};

export const viewport: Viewport = {
  themeColor: '#1e293b',
  colorScheme:"dark",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`bg-[--tw-color-950] ${inter.className} antialiased pb-[200px]`}
      >
        <Nav />
        
          {children}
        
      </body>
    </html>
  );
}
