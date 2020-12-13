import React from 'react'
import { useAlert } from 'react-alert'

import { Container, HomeTitle } from './styles'

function Home() {
  const alert = useAlert()
  return (
    <Container>
      <HomeTitle>Hello world</HomeTitle>
      <button type="button" onClick={() => alert.info('teste')}>Info</button>
      <button type="button" onClick={() => alert.error('teste')}>Error</button>
      <button type="button" onClick={() => alert.success('teste')}>Success</button>
    </Container>
  )
}

export default Home
