import useAuth from '@/hooks/useAuth'
import React, { useCallback } from 'react'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'

import {
 Box, Container, Img, SignOutTitle,
} from './styles'

function SignOut() {
  const history = useHistory()
  const auth = useAuth()
  const alert = useAlert()
  const signOut = useCallback(async () => {
    try {
      await auth.signOut()
      alert.success('Deslogado com sucesso.')
      history.replace({
        pathname: '/auth/sign-in',
      })
    } catch (e) {
      alert.error('Falha ao deslogar.')
    }
  }, [alert, auth, history])

  return (
    <Container>
      <Img />
        <Box>
          <SignOutTitle>Deslogue-se</SignOutTitle>
          <button type="button" onClick={signOut}>Deslogar</button>
        </Box>
    </Container>
  )
}

export default SignOut
