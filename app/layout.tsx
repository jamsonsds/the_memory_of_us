import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Memory of Us",
  description: "A memory-sharing app scaffolded with Next.js App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
