import { Form } from '@/components'
import useAuth from '@/hooks/useAuth'
import { passwordValidator, usernameValidator } from '@/libs/validators'
import yup from '@/libs/yupPt'
import React, { useCallback, useState } from 'react'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'

import {
 Box, Container, Img, SignInTitle,
} from './styles'

const schema = yup.object().shape({
  username: yup.string().required().min(3).test('username', 'Usuário deve conter apenas letras e números.', usernameValidator),
  password: yup.string().required().min(8).test('password', 'A senha deve conter ao menos uma letra maiúscula, uma minúscula e um caractere especial.', passwordValidator),
})

function SignIn() {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const auth = useAuth()
  const alert = useAlert()
  const submit = useCallback(async (form) => {
    try {
      setLoading(true)
      await auth.signIn(form)
      alert.success('Autenticado com sucesso.')
      history.replace({
        pathname: '/sessions',
      })
    } catch (e) {
      setLoading(false)
      alert.error('Falha ao autenticar, tente novamente.')
    }
  }, [alert, auth, history])

  return (
    <Container>
      <Img />
        <Box>
          <fieldset disabled={loading}>
            <Form.Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={schema}
              onSubmit={async (values) => {
                await submit(values)
              }}
              validateOnMount
            >{({ errors, touched, isValid }) => (
                <Form.ValidationForm>
                <SignInTitle>Autentique-se</SignInTitle>
                <Form.ValidationField name="username" type="text" placeholder="Usuário." autoFocus id="username" autoComplete="off" />
                { touched?.username && errors?.username
                ? <Form.Hint>{ errors.username }</Form.Hint> : null}
                <Form.ValidationField name="password" type="password" placeholder="Senha." id="password" autoComplete="off" />
                { touched?.password && errors?.password
                ? <Form.Hint>{ errors.password}</Form.Hint> : null}
                <button type="submit" disabled={!isValid}>Logar</button>
                </Form.ValidationForm>
            )}
            </Form.Formik>
          </fieldset>
        </Box>
    </Container>
  )
}

export default SignIn
