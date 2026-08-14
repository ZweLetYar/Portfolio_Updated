import type { Metadata } from "next";
import "./globals.css";
import "./portrait.css";
import "./motion.css";
import "./projects.css";
import "./spacing.css";
import "./chat.css";
import "./chat.css";

export const metadata: Metadata = {
  title: "Zwe Let Yar — Software Developer",
  description:
    "A premium portfolio for Zwe Let Yar, a software developer creating thoughtful digital products.",
  openGraph: {
    title: "Zwe Let Yar — Software Developer",
    description: "Thoughtful software, shaped with care.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zwe Let Yar — Software Developer",
    description: "Thoughtful software, shaped with care.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
