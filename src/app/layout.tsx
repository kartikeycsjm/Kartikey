import type { Metadata } from "next";
import { Inter } from "next/font/google"
import Footer from "./component/Footer";
import "./globals.css";
import Navigation from "./component/Navigation";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kartikey Mishra",
  description: "My Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <div className="bg-[#1f262d] 
        text-white w-full">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
