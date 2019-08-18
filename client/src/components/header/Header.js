import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import React, { Fragment } from 'react'
import Toolbar from '@material-ui/core/Toolbar'

import './header.css'
import logo from '../../logo.png'

/**
 * @function
 * @description component for header
 * @return {ReactElement} JSX
 */
const Header = () => (
  <Fragment>
    <div className='header'>
      <AppBar position='static'>
        <Toolbar>
          <img src={logo} height={40} alt='logo' />
          <Button color='inherit'>
            <Link to='/' style={{ color: 'white' }}>WebSocket Examples</Link>
          </Button>
          <Button color='inherit'>
            <Link to='/examples' style={{ color: 'white' }}>New Route</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  </Fragment>
)

export default Header
