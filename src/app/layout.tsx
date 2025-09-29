import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AOSProvider from "@/components/providers/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sohail Ahmed | Cybersecurity Portfolio",
  description:
    "Security Analyst with 3+ years in VAPT, SAST, DAST, and AppSec. Projects, skills, and experience.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sohail Ahmed | Cybersecurity Portfolio",
    description:
      "Security Analyst with 3+ years in VAPT, SAST, DAST, and AppSec.",
    type: "website",
    url: "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
