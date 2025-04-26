import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./component/Footer";
import "./globals.css";
import Navigation from "./component/Navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Kartikey Mishra",
  description: "Portfolio of Kartikey Mishra – Web Developer, Problem Solver, and Tech Enthusiast. Showcasing projects, skills, and experience in Next.js, JavaScript, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#1f262d] 
        text-white w-full">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html >
  );
}
