import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza Bouamair",
  description:
    "Hamza Bouamair — Software Engineer with 5+ years of experience in Java, Spring, TypeScript, Python, Angular, React, and Android. Currently at Orange Business Maroc.",
  keywords: [
    "Hamza Bouamair",
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "TypeScript",
    "React",
    "Angular",
    "Python",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="noise">{children}</div>
      </body>
    </html>
  );
}
