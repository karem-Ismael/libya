import { Inter } from 'next/font/google'
import './globals.css'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata = {
  title: 'Libya Quran Committee',
  description: 'Official website for Libya Quran Committee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={ibmPlexSansArabic.className}>{children}</body>
    </html>
  )
}