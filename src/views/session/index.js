import React from 'react'
import { useAlert } from 'react-alert'

import { Container, SessionTitle } from './styles'

function Session() {
  const alert = useAlert()
  return (
    <Container>
      <SessionTitle>Session page</SessionTitle>
      <button type="button" onClick={() => alert.info('teste')}>Info</button>
      <button type="button" onClick={() => alert.error('teste')}>Error</button>
      <button type="button" onClick={() => alert.success('teste')}>Success</button>
    </Container>
  )
}

export default Session
