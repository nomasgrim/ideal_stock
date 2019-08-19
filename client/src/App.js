import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Footer from './components/footer/Footer'
import GenericNotFound from './components/genericNotFound/GenericNotFound'
import Header from './components/header/Header'
import Snackbar from './components/snackbar/Snackbar'
import ExamplesList from './components/examples/ExamplesList';

/**
 * @function
 * @description Root component for application
 * @returns {ReactElement} JSX
 */
const App = () => (
  <Router>
    <div>
      <Snackbar />
      <Header />
      <Switch>
        <Route exact path='/' component={ExamplesList} />
        <Route exact path='*' component={GenericNotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App
