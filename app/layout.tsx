import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Morgan — Software Developer",
  description: "A premium portfolio for Alex Morgan, a software developer creating thoughtful digital products.",
  openGraph: { title: "Alex Morgan — Software Developer", description: "Thoughtful software, shaped with care.", type: "website" },
  twitter: { card: "summary_large_image", title: "Alex Morgan — Software Developer", description: "Thoughtful software, shaped with care." },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
