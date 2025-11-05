import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://navmaragency.com"),
  title: {
    default: "Navmar Agency | Gemi Acenteliği ve Shipping Hizmetleri",
    template: "%s | Navmar Agency",
  },
  description:
    "Navmar Agency, liman operasyonları, gemi acenteliği ve gümrük süreçlerinde 7/24 profesyonel destek sunar.",
  keywords: ["gemi acenteliği", "shipping", "liman operasyonları", "gümrük", "denizcilik"],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Navmar Agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow pt-0">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}


