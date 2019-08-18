import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import React from 'react'
import PropTypes from 'prop-types'

import TextField from '../wrappedFormFields/TextField'

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

/**
 * @function
 * @param {function} handleSubmit - function to submit form
 * @description Example of a basic contact form with redux-forms
 * @return {ReactElement} JSX wrapped in reduxForm (form name: 'contact')
 */
const ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={TextField}
          name='firstName'
          label='First Name'
          type='text'
        />
      </div>
      <div>
        <Field
          component={TextField}
          name='lastName'
          label='Last Name'
          type='text'
        />
      </div>
      <div>
        <Field
          component={TextField}
          name='email'
          label='Email'
          type='email'
        />
      </div>
      <Button
        type='submit'
        color='primary'
        variant='contained'
      >
                Submit
      </Button>
    </form>
  )
}

ContactForm.propTypes = propTypes

const ReduxContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ReduxContactForm
