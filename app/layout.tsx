import Navbar from '@/components/Navbar/index'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CategoriesBar from '@/components/CategoriesBar'
import Hero from '@/components/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deal Pakki',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <Navbar />
        <CategoriesBar />
        <Hero />
        {children}
        </body>
    </html>
  )
}
