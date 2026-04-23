import type { Metadata } from 'next'
import { Inter,Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  style: ['normal', 'italic']
})


export const metadata: Metadata = {
  title: 'Nanda Emporium',
  description: 'Family owned clothing shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}