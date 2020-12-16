import useAuth from '@/hooks/useAuth'
import React, { useCallback } from 'react'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'

import { Box, Container, SessionTitle } from './styles'

function Session() {
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
      <Box>
        <SessionTitle>Deslogue-se</SessionTitle>
        <button type="button" onClick={signOut}>Deslogar</button>
        <button type="button" onClick={() => alert.info('teste')}>Info</button>
        <button type="button" onClick={() => alert.error('teste')}>Error</button>
        <button type="button" onClick={() => alert.success('teste')}>Success</button>
      </Box>
    </Container>
  )
}

export default Session
