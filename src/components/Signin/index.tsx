'use client'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Loader from '../shared/loader'

export default function Signin() {
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') signIn('keycloak')
    else if (status === 'authenticated') router.push('/')
  }, [status, router])

  return (
    <Loader/>
  )
}
