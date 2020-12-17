import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/sessions'
import auth from '@/services/auth'
import { useCallback, useEffect, useState } from 'react'

export default function useProvideAuth() {
  const [token, setToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN),
  )
  const [authenticated, setAuthenticated] = useState(true)

  const signUp = useCallback(async (body) => {
    await auth.signUp(body)
  }, [])

  const checkToken = useCallback(async () => {
    const data = await auth.checkToken()
    setAuthenticated(data?.authenticated)
  }, [])

  const signIn = useCallback(async (body) => {
    const data = await auth.signIn(body)
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, data?.token)
    await checkToken()
    setToken(data?.token)
  }, [checkToken])

  const signOut = useCallback(async () => {
    await auth.signOut()
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)
    setToken(null)
    setAuthenticated(false)
  }, [])

  useEffect(() => {
    if (token) {
      checkToken()
    }
  }, [authenticated, checkToken, token])

  return {
    authenticated,
    token,
    checkToken,
    signUp,
    signIn,
    signOut,
  }
}
