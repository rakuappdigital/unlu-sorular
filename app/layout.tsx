import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Röportaj — Sorular Seni Bekliyor",
  description: "Ünlüler için samimi, eğlenceli ve yaratıcı soru deneyimi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
