import { connect } from 'react-redux'
import Fade from '@material-ui/core/Fade'
import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

import { dismissSnackbar } from '../../actions'

class FadeSnackbar extends React.Component {
  render () {
    const {
      dismissSnackbar,
      snackbarNotification
    } = this.props

    return (
      <div>
        <Snackbar
          autoHideDuration={3000}
          open={Boolean(snackbarNotification)}
          onClose={dismissSnackbar}
          TransitionComponent={Fade}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id='message-id'>{snackbarNotification}</span>}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  snackbarNotification: state.snackbarNotification
})

const mapDispatchToProps = {
  dismissSnackbar
}

export default connect(mapStateToProps, mapDispatchToProps)(FadeSnackbar)
