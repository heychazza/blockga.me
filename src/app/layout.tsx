import './globals.css'
import type {Metadata} from 'next'
import {Inter, Press_Start_2P} from 'next/font/google'
import Fathom from "@/components/Fathom";

const inter = Inter({
  subsets: ['latin'],
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Broke Boy Cookies',
  description: 'After 2 years of development we are proud to finally serve our new, original cookies.',
  icons: {
    icon: [{
        url: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
    }]
  }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <Fathom />
        {children}
        </body>
        </html>
    )
}