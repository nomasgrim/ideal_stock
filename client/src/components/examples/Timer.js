import Button from '@material-ui/core/Button'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  timer: PropTypes.string,
  startTimer: PropTypes.func.isRequired
}

/**
 * @function
 * @param {string} timer - Time received from server websocket
 * @param {function} startTimer - function to kick of the timer when clicked
 * @description component for the timer
 * @return {ReactElement} JSX
 */
const Timer = ({ timer, startTimer }) => {
  return (
    <Fragment>
      <p>
                This is the timer value: {timer}
      </p>
      <Button
        variant='contained'
        color='primary'
        onClick={startTimer}
      >
                Start timer via websockets
      </Button>
    </Fragment>
  )
}

Timer.propTypes = propTypes

export default Timer
