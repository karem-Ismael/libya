import * as React from "react";
import Providers from "@/components/Providers";
import { cairo } from "@/theme/fonts";
import "./globals.css";

export const metadata = {
  title: "QuranLibya",
  description: "A Next.js application with Material UI and Redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
