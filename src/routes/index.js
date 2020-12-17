import Home from '@/views/home'
import Session from '@/views/session'
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Auth from './Auth'
import PrivateRoute from './components/PrivateRoute'
import ProvideAuth from './components/ProvideAuth'

function Routes() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <PrivateRoute path="/sessions">
            <Session />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

export default Routes
