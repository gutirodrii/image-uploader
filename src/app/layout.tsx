import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat, Poppins, Noto_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: "500" })
const noto_sans = Noto_Sans({ subsets: ['latin'], weight: "500" })

export const fonts = {
    inter,
    montserrat,
    poppins,
    noto_sans,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
