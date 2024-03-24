import type { Metadata } from 'next'
import { Inter, Gowun_Batang } from 'next/font/google'
import './globals.tw.css'
import Providers from '@/providers'

const inter = Inter({ subsets: ['latin'] })
const gowun_batang = Gowun_Batang({ subsets: ['latin'],weight: ['700','400']})

export const metadata: Metadata = {
  title: 'Charlotteville VA Historical Sites',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + gowun_batang.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
