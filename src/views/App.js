import Routes from '@/routes'
import React from 'react'
import GlobalStyles from '@/styles/globals'
import { Provider as AlertProvider } from 'react-alert'
import alertOptions from '@/constants/alertOptions'
import Toast from '@/components/Toast'

// import { Container } from './styles';

function App() {
  return (
    <>
    <AlertProvider
      template={Toast}
      position={alertOptions.position}
      timeout={alertOptions.timeout}
      offset={alertOptions.offset}
      transition={alertOptions.transition}
    >
      <Routes />
      <GlobalStyles />
    </AlertProvider>
    </>
  )
}

export default App
