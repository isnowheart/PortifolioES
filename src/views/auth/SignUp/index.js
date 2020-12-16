import { Form } from '@/components'
import useAuth from '@/hooks/useAuth'
import { passwordValidator, usernameValidator } from '@/libs/validators'
import yup from '@/libs/yupPt'
import React, { useCallback, useState } from 'react'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'

import {
 Box, Container, Img, SignUpTitle,
} from './styles'

const schema = yup.object().shape({
  username: yup.string().required().min(3).test('username', 'Usuário deve conter apenas letras e números.', usernameValidator),
  password: yup.string().required().min(8).test('password', 'A senha deve conter ao menos uma letra maiúscula, uma minúscula e um caractere especial.', passwordValidator),
  confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'As senhas não coincidem.'),
})

function SignUp() {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const auth = useAuth()
  const alert = useAlert()
  const submit = useCallback(async (form) => {
    try {
      setLoading(true)
      await auth.signUp(form)
      alert.success('Conta criada com sucesso.')
      history.replace({
        pathname: '/auth/sign-in',
      })
    } catch (e) {
      setLoading(false)
      alert.error('Falha ao criar conta.')
    }
  }, [alert, auth, history])

  return (
    <Container>
      <Img />
        <Box>
          <fieldset disabled={loading}>
            <Form.Formik
              initialValues={{ username: '', password: '', confirmPassword: '' }}
              validationSchema={schema}
              onSubmit={async (values) => {
                await submit(values)
              }}
              validateOnMount
            >{({ errors, touched, isValid }) => (
               <Form.ValidationForm>
                <SignUpTitle>Cadastre-se</SignUpTitle>
                <Form.ValidationField name="username" type="text" placeholder="Usuário." autoFocus id="username" autoComplete="off" />
                { touched?.username && errors?.username
                ? <Form.Hint>{ errors.username }</Form.Hint> : null}
                <Form.ValidationField name="password" type="password" placeholder="Senha." id="password" autoComplete="off" />
                { touched?.password && errors?.password
                ? <Form.Hint>{ errors.password}</Form.Hint> : null}
                <Form.ValidationField name="confirmPassword" type="password" placeholder="Confirmar senha." id="confirmPassword" autoComplete="off" />
                { touched?.confirmPassword && errors?.confirmPassword
                ? <Form.Hint>{ errors.confirmPassword}</Form.Hint> : null}
                <button type="submit" disabled={!isValid}>Enviar</button>
               </Form.ValidationForm>
            )}
            </Form.Formik>
          </fieldset>
        </Box>
    </Container>
  )
}

export default SignUp
