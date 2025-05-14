

import Providers from "@/components/Providers";
import { sstArabic } from "@/theme/fonts";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={sstArabic.variable}>
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
