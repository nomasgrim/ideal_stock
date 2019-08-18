import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func.isRequired
}

/**
 * @function
 * @param {array} users - Array with users data
 * @param {function} getUsers - Fires action to getUsers from server
 * @description component that displays users
 * @return {ReactElement} JSX
 */
const Users = ({ users, getUsers }) => {
  return (
    <Fragment>
      <Button
        variant='contained'
        color='primary'
        onClick={getUsers}
      >
                pull users via websockets
        <ArrowForwardIcon />
      </Button>
      {
        Boolean(users && users.length) &&
                users.map((user, i) => (
                  <p key={`${i}-${user}`}>
                    {user.name}
                  </p>
                ))
      }
    </Fragment>
  )
}

Users.propTypes = propTypes

export default Users
