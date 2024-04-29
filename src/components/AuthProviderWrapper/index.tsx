'use client'
import { SessionProvider } from 'next-auth/react'

const AuthProviderWrapper = ({ children }: { children: React.ReactNode }) => {

    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthProviderWrapper