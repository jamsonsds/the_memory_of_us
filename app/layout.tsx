import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "the_memory_of_us",
  description: "A premium, minimal memory space for Zhouchi & Jiale.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/memories", label: "Memories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/future", label: "Future" },
  { href: "/messages", label: "Messages" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
          <header className="sticky top-0 z-20 border-b border-white/40 bg-white/70 backdrop-blur-xl">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-center gap-2 px-6 py-4 sm:gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-900 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
