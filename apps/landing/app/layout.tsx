import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from '@/lib/posthog';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Furtribe - Transforming Animal Care",
  description: "Comprehensive solutions for shelters, pet parents, feeders, and boarding facilities to save time, improve outcomes, and make a bigger impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
