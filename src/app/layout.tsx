import './globals.css'
import type {Metadata} from 'next'
import {Inter, Press_Start_2P} from 'next/font/google'
import Fathom from "@/components/Fathom";

const inter = Inter({
  subsets: ['latin'],
  display: "swap",
})

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: "400",
  display: "swap",
  variable: '--font-press-start',
})

export const metadata: Metadata = {
  title: 'BlockGame Labs',
  description: 'We\'re a nimble, one-man studio with big impact, focusing on crafting sleek websites, engaging servers, and open-source game plugins.',
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
        <body className={`${inter.className} ${pressStart2P.variable}`}>
        <Fathom />
        {children}
        </body>
        </html>
    )
}