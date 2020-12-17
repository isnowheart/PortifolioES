/* eslint-disable react/jsx-props-no-spreading */
import useAuth from '@/hooks/useAuth'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) => (
        auth.token && auth.authenticated ? (
          children
        ) : (
          <Redirect to={{
            pathname: '/',
              state: {
                from: location,
              },
            }}
          />
        )
      )}
    />
  )
}

export default PrivateRoute
