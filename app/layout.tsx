import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Simply Stepup",
  description:
    "Simplyify your notes by either creading study flashcards or explaining the problem in a certain grade level to make understanding easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen font-sans antialiased ${fontSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
