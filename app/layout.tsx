import Navbar from '@/components/nav-bar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Slab } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"

const inter = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AB Capital Company Formation',
  description: 'AB Capital Company Formation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
