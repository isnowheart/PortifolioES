import SignIn from '@/views/auth/SignIn'
import SignUp from '@/views/auth/SignUp'
import React from 'react'
import { Route } from 'react-router-dom'

function Auth() {
  return (
    <>
      <Route exact path="/auth/sign-up">
        <SignUp />
      </Route>
      <Route exact path="/auth/sign-in">
        <SignIn />
      </Route>
    </>
  )
}

export default Auth
