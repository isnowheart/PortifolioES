import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/sessions'
import auth from '@/services/auth'
import { useCallback, useState } from 'react'

export default function useProvideAuth() {
  const [token, setToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN),
  )

  const signUp = useCallback(async (body) => {
    await auth.signUp(body)
  }, [])

  const signIn = useCallback(async (body) => {
    const data = await auth.signIn(body)
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, data?.token)
    setToken(data?.token)
  }, [])

  const signOut = useCallback(async () => {
    await auth.signOut()
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)
    setToken(null)
  }, [])

  return {
    token,
    signUp,
    signIn,
    signOut,
  }
}
