import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar'
import SideBar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "assessIt",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='row '>
          <div className='col-4 col-lg-3 col-xl-2 .d-none .d-lg-block p-0'>
            <SideBar />
          </div>
        <div className='col-12  col-lg-9 col-xl-10 p-0'>
        <NavBar />
        {children}
        </div>
        </div>
        </body>
    </html>
  )
}
