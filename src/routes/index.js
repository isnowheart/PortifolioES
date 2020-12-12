import Home from '@/views/home'
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ProvideAuth from './components/ProvideAuth'

function Routes() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

export default Routes
