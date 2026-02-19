import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const AppFont = DM_Sans({ subsets : ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={AppFont.className}
      >
        {children}
      </body>
    </html>
  );
}
