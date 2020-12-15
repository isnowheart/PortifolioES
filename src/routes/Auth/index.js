import SignIn from '@/views/auth/SignIn'
import SignOut from '@/views/auth/SignOut'
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
      <Route exact path="/auth/sign-out">
        <SignOut />
      </Route>
    </>
  )
}

export default Auth
