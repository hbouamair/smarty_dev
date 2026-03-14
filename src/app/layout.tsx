import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <div className="noise">{children}</div>
      </body>
    </html>
  );
}
