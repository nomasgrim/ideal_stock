import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import React, { Fragment } from 'react'

const propTypes = {
  stock: PropTypes.object,
  getStock: PropTypes.func.isRequired
}

/**
 * @function
 * @param {array} stock - Array with stock data
 * @description component that displays stock
 * @return {ReactElement} JSX
 */
const Stock = ({ stock, getStock }) => {
  console.log('stock', stock);
  return (
    <Fragment>
      <Button
        variant='contained'
        color='primary'
        onClick={getStock}
      >
          get stock
      </Button>
      {
       stock && stock.companyName
      }
      <h2>stock</h2>
    </Fragment>
  )
}

Stock.propTypes = propTypes

export default Stock
