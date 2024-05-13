import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar'
import SideBar from '@/components/sidebar'
import SessionProviderWrapper from '@/components/auth_provider_wrapper'
import Signin from '@/components/Signin'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "assessIt",
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className='container-fluid'>
          <Signin/>
          <div className='row'>
            <div className='col-4 col-lg-3  col-xxl-2 .d-none .d-lg-block p-0'>
              <SideBar />
            </div>
            <div className='col-12  col-lg-9 p-0 col-xxl-10  vh-100 overflow-auto'>
              <NavBar />
              <div className="children">{children}</div>
            </div>
          </div>
          </div>
        </body>
      </html>
    </SessionProviderWrapper>
  )
}

