import SignIn from '@/views/auth/SignIn'
import Sessions from '@/views/session'
import React from 'react'
import { Route } from 'react-router-dom'

function Session() {
  return (
    <>
      <Route exact path="/sessions/models">
        <Sessions />
      </Route>
    </>
  )
}

export default Session
