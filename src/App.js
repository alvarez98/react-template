import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Home } from './pages/Home'
import { Template } from './pages/Template'
import { NotFound } from './pages/NotFound'
import GlobalStyles from './styles/Global'

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/template' component={Template} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </>
)

export default App
