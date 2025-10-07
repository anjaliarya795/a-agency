import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollTop from "@/components/shared/ScrollTop";

import { Inter, Montserrat, Roboto_Mono, Lora, Mulish } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Vyavasaya",
  description: "Connecting Talent with Opportunity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Navbar />
        <div className="w-full" id='root-container'>
        <ScrollTop>
          {children}
        </ScrollTop>
        </div>
        <Footer/>

      </body>
    </html>
  );
}
