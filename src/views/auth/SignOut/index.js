import { Form } from '@/components'
import useAuth from '@/hooks/useAuth'
import React, { useCallback, useState } from 'react'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'

import {
 Box, Container, Img, SignOutTitle,
} from './styles'

function SignOut() {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const auth = useAuth()
  const alert = useAlert()
  const submit = useCallback(async () => {
    try {
      setLoading(true)
      await auth.signOut()
      history.replace({
        pathname: '/auth/sign-in',
      })
      alert.success('Deslogado com sucesso.')
    } catch (e) {
      setLoading(false)
      alert.error('Falha ao deslogar.')
    }
  }, [alert, auth, history])

  return (
    <Container>
      <Img />
        <Box>
          <fieldset disabled={loading}>
            <Form.Formik
              onSubmit={async () => {
                await submit()
              }}
            >
              <Form.ValidationForm>
              <SignOutTitle>Deslogue-se</SignOutTitle>
              <button type="submit">Deslogar</button>
              </Form.ValidationForm>
            </Form.Formik>
          </fieldset>
        </Box>
    </Container>
  )
}

export default SignOut
