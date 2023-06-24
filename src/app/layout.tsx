"use client"


import './globals.css'
import { Inter } from 'next/font/google';
import Header from './components/header';
import { RecoilRoot } from 'recoil';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <Header />
          <main className="flex min-h-screen flex-col gap-y-[8rem] w-full">
            {children}
          </main>
        </RecoilRoot>
      </body>
    </html>
  )
}
