import './globals.css'
import { Inter } from 'next/font/google';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Desloc',
  description: 'Desloc Proj',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col gap-y-[8rem] w-full">
          {children}
        </main>
      </body>
    </html>
  )
}
