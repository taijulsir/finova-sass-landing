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
  title: "Finova | Smarter Ways to Manage Your Finances",
  description: "Taking control of your finances in 3 simple steps with Finova.",
  metadataBase: new URL("https://finova.example.com"),
  icons: {
    icon: "/finova-without-text.svg",
    shortcut: "/finova-without-text.svg",
  },
  openGraph: {
    title: "Finova | Smarter Ways to Manage Your Finances",
    description: "Taking control of your finances in 3 simple steps with Finova.",
    url: "https://finova.example.com",
    siteName: "Finova",
    images: ["/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finova | Smarter Ways to Manage Your Finances",
    description: "Taking control of your finances in 3 simple steps with Finova.",
    images: ["/og.jpg"],
  },
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
        {children}
      </body>
    </html>
  );
}
