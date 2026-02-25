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
  title: "Saasify | Smarter Ways to Manage Your Finances",
  description: "Taking control of your finances in 3 simple steps with Saasify.",
  metadataBase: new URL("https://saasify.example.com"),
  openGraph: {
    title: "Saasify | Smarter Ways to Manage Your Finances",
    description: "Taking control of your finances in 3 simple steps with Saasify.",
    url: "https://saasify.example.com",
    siteName: "Saasify",
    images: ["/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saasify | Smarter Ways to Manage Your Finances",
    description: "Taking control of your finances in 3 simple steps with Saasify.",
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
