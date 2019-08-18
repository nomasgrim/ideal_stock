import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import { getUsers, startTimer } from '../../actions'
import ContactForm from './Form'
import Timer from './Timer'
import Users from './Users'

/**
 * @class
 * @param {function} getUsers - action to request users from server
 * @param {function} startTimer - action to startTimer
 * @param {string} timer - time from server
 * @param {array} users - array of users from server
 * @classdesc Page of examples
 */
class Examples extends Component {
    static propTypes = {
      getUsers: PropTypes.func.isRequired,
      startTimer: PropTypes.func.isRequired,
      time: PropTypes.string,
      users: PropTypes.array
    }

    /**
     * @function
     * @description submits form with values
     */
    submit = values => {
      console.log(values)
    }

    /**
     * @function
     * @return {ReactElement} JSX
     */
    render () {
      console.log('Examples page props', this.props)
      const {
        getUsers,
        startTimer,
        timer,
        users
      } = this.props

      return (
        <Fragment>
          <h2>Examples</h2>
          <Paper style={{margin: '10px', padding: '10px'}}>
            <Users users={users} getUsers={() => getUsers(4)} />
          </Paper>
          <Paper style={{margin: '10px', padding: '10px'}}>
            <Timer timer={timer} startTimer={() => startTimer(5000)} />
          </Paper>
          <Paper style={{margin: '10px', padding: '10px'}}>
            <ContactForm onSubmit={this.submit} />
          </Paper>
        </Fragment>
      )
    }
}

const mapStateToProps = state => ({
  ...state.exampleState
})

const mapDispatchToProps = {
  getUsers,
  startTimer
}

export default connect(mapStateToProps, mapDispatchToProps)(Examples)
