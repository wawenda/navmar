import "./globals.css";
import LangAttributeSetter from "@/components/LangAttributeSetter";
import type { Metadata } from "next";

// Get base URL from environment or use default
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://navmaragency.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    languages: {
      'tr': '/tr',
      'en': '/en',
      'ru': '/ru',
      'x-default': '/tr',
    },
  },
};

// Root layout - must contain html and body tags
// Locale-specific layout is in app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" dir="ltr" className="overflow-x-hidden" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <LangAttributeSetter />
        {children}
      </body>
    </html>
  );
}


