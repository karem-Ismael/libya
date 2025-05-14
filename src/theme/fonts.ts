import localFont from 'next/font/local';

export const sstArabic = localFont({
  src: [
    {
      path: './SST Arabic/SST-Arabic-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SST Arabic/SST Arabic Roman.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sst-arabic',
});

// Keep Cairo as fallback if needed
// import { Cairo } from "next/font/google";
// export const cairo = Cairo({
//   subsets: ["arabic", "latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
//   adjustFontFallback: false,
//   variable: "--font-cairo",
// });
